/**
 * Copyright: ThoughtSpot Inc. 2012-2016
 * Author: Shashank Singh (sunny@thoughtspot.com)
 *
 * @fileoverview ThoughtSpot Javascript API for use of ThoughtSpot in external webpages.
 */

import { AuthType } from '../types';

// eslint-disable-next-line no-shadow
export enum Events {
    THOUGHTSPOT_AUTH_EXPIRED = 'ThoughtspotAuthExpired',
    EXPORT_VIZ_DATA_TO_PARENT = 'exportVizDataToParent',
    ALERT = 'alert',
    EXPORT_VIZ_DATA_TO_CHILD = 'exportVizDataToChild',
    GET_DATA = 'getData',
}

type Callback = (...args: any[]) => void;

const SSO_REDIRECTION_MARKER_GUID = '5e16222e-ef02-43e9-9fbd-24226bf3ce5b';
const EndPoints = {
    AUTH_VERIFICATION: '/callosum/v1/session/info',
    SSO_LOGIN_TEMPLATE: '/callosum/v1/saml/login?targetURLPath={targetUrl}',
};

let autoDeterminedThoughtspotHost = '';
const authExpirationHandlers: Callback[] = [];
let initialized = false;
let thoughtspotHost: string;
let dataCallBack: Callback;

function parseUrl(url: string) {
    const parser = document.createElement('a');
    parser.href = url;

    return {
        protocol: parser.protocol,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        hash: parser.hash,
        host: parser.host,
    };
}

function getScriptHost() {
    const scripts = document.getElementsByTagName('script');
    const currentScriptNode = scripts[scripts.length - 1];

    const currentScriptSrc = currentScriptNode?.src;
    if (!currentScriptSrc) {
        // eslint-disable-next-line no-console
        console.error(
            "Could not determine Thoughtspot domain from script's url",
        );
        return '';
    }

    const currentScriptSrcParts = parseUrl(currentScriptSrc);
    return currentScriptSrcParts.host;
}

function formatString(
    template: string,
    keyValueMap: { [key: string]: string },
) {
    let str = '';
    Object.keys(keyValueMap).forEach((key) => {
        const pattern = `\\{${key}\\}`;
        const re = new RegExp(pattern, 'g');
        str = template.replace(re, keyValueMap[key]);
    });
    return template;
}

function appendToUrlHash(url: string, stringToAppend: string) {
    let outputUrl = url;
    const encStringToAppend = encodeURIComponent(stringToAppend);

    if (url.indexOf('#') >= 0) {
        outputUrl = `${outputUrl}${encStringToAppend}`;
    } else {
        outputUrl = `${outputUrl}#${encStringToAppend}`;
    }

    return outputUrl;
}

function getAbsoluteTSUrl(tsHost: string, relativeUrl: string) {
    // assume that the protocol for TS is the same as the protocol
    // of the parent page. Mixed content is getting deprecated anyway
    const protocol = document.location.protocol;
    let path = relativeUrl;
    if (relativeUrl[0] !== '/') {
        path = `/${relativeUrl}`;
    }

    return formatString('{protocol}//{domain}{path}', {
        protocol,
        domain: tsHost,
        path,
    });
}

function checkIfLoggedIn(tsHost: string, callback: Callback) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.onreadystatechange = () => {
        if (xhr.readyState < 4) {
            return;
        }

        const authenticated = xhr.status === 200;
        callback(authenticated);
    };

    const authVerificationUrl = getAbsoluteTSUrl(
        tsHost,
        EndPoints.AUTH_VERIFICATION,
    );
    xhr.open('GET', authVerificationUrl, true);
    xhr.send();
}

function doSSO(tsHost: string) {
    const ssoRedirectUrl = appendToUrlHash(
        window.location.href,
        SSO_REDIRECTION_MARKER_GUID,
    );

    // bring back the page to the same url
    const ssoEndPoint = formatString(EndPoints.SSO_LOGIN_TEMPLATE, {
        targetUrl: encodeURIComponent(ssoRedirectUrl),
    });

    const ssoURL = getAbsoluteTSUrl(tsHost, ssoEndPoint);
    window.location.href = ssoURL;
}

function isAtSSORedirectUrl() {
    return window.location.href.indexOf(SSO_REDIRECTION_MARKER_GUID) >= 0;
}

function removeSSORedirectUrlMarker() {
    // Note (sunny): this will leave a # around even if it was not in the URL to
    // being with, trying to remove the hash by changing window.location will reload
    // the page which we don't want. We'll live with adding an unnecessary hash to the
    // parent page's URL until we find any use case where that creates an issue
    window.location.hash = window.location.hash.replace(
        SSO_REDIRECTION_MARKER_GUID,
        '',
    );
}

function setUpAuthExpirationHandling(tsHost: string) {
    window.addEventListener('message', (event) => {
        const messageOrigin = event.origin.replace(/^https?:\/\//, '');
        if (messageOrigin !== tsHost) {
            return;
        }

        if (
            !event.data ||
            event.data.type !== Events.THOUGHTSPOT_AUTH_EXPIRED
        ) {
            return;
        }

        // a statically embedded TS iframe might fire this
        // on load even before initialization has happened
        // the external page could treat this as a auto log
        // out scenario and try to authenticate again, interfering
        // with any ongoing initialiation.
        // Hence we don't fire `notifyOnAuthExpiration` until the
        // system has initialized.
        if (!initialized) {
            return;
        }

        authExpirationHandlers.forEach((authExpirationHandler) => {
            authExpirationHandler();
        });
    });
}

function addAuthExpirationHandler(authExpirationHandler: Callback) {
    const handlerAlreadySetUp =
        authExpirationHandlers.indexOf(authExpirationHandler) >= 0;
    if (handlerAlreadySetUp) {
        return;
    }
    authExpirationHandlers.push(authExpirationHandler);
}

function initialize(
    onInitialized: Callback,
    onAuthExpiration: Callback,
    _thoughtspotHost: string,
    authType: AuthType,
): void {
    let tsHost = _thoughtspotHost;
    if (_thoughtspotHost === undefined) {
        autoDeterminedThoughtspotHost = getScriptHost();
        tsHost = autoDeterminedThoughtspotHost;
    }
    thoughtspotHost = tsHost;

    if (!thoughtspotHost) {
        throw new Error(
            'Invalid configuration, parameter `thoughtspotHost` ' +
                'was not provided and could not be automatically deduced',
        );
    }

    setUpAuthExpirationHandling(thoughtspotHost);
    addAuthExpirationHandler(onAuthExpiration);

    if (authType !== AuthType.None) {
        checkIfLoggedIn(thoughtspotHost, (isLoggedIn: boolean) => {
            if (isLoggedIn) {
                if (isAtSSORedirectUrl()) {
                    removeSSORedirectUrlMarker();
                }
                initialized = true;
                onInitialized(true);
                return;
            }

            // we have already tried authentication and it did not succeed, restore
            // the current url to the original one and call the callback
            if (isAtSSORedirectUrl()) {
                removeSSORedirectUrlMarker();
                initialized = true;
                onInitialized(false);
                return;
            }

            // redirect for SSO, when SSO is done this page will be loaded
            // again and the same JS will execute again
            doSSO(thoughtspotHost);
        });
    }
}

function notifyOnAuthExpiration(): void {
    window.parent.postMessage(
        {
            type: Events.THOUGHTSPOT_AUTH_EXPIRED,
        },
        '*',
    );
}

export { initialize, checkIfLoggedIn, notifyOnAuthExpiration };
