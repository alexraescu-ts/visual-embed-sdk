/*! For license information please see component---docs-src-pages-index-tsx-3ea5e9b8afa7ff312ed9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3cks":function(e,t){e.exports={DOC_REPO_NAME:"/embed-sdk",DOC_NAV_PAGE_ID:"nav",TS_HOST_PARAM:"tshost",TS_ORIGIN_PARAM:"origin",TS_PAGE_ID_PARAM:"pageid",NAV_PREFIX:"navprefix",NOT_FOUND_PAGE_ID:"404-error",TYPE_DOC_PREFIX:"typedoc"}},"N/aF":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=(n("dasq"),n("3cks"));function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e){for(var t,n={},r="?",a=c(new URLSearchParams(e).entries());!(t=a()).done;){var i=t.value,s=i[0],u=i[1];n[s]=u,s===o.TS_HOST_PARAM&&(r+=o.TS_HOST_PARAM+"="+u+"&"),s===o.TS_ORIGIN_PARAM&&(r+=o.TS_ORIGIN_PARAM+"="+encodeURIComponent(u)+"&")}return r+=o.TS_PAGE_ID_PARAM,n[o.NAV_PREFIX]=r,n},l=function(e,t){var n=e,r=Object.keys(t);if(!e&&0===r.length)return n;return r.map((function(e){n=n.replace(new RegExp("{{"+e+"}}","g"),t[e]||"")})),n},f=(n("YyRi"),function(e){var t=Object(r.useState)(""),n=t[0],i=t[1];Object(r.useEffect)((function(){var t=document.createElement("div");t.innerHTML=e.docContent;var n=t.querySelector("#toc");if(n){var r=e.location.hash;r&&(n=o(n,r)),i(n.innerHTML)}else i("")}),[e.docContent,e.location.hash]);var o=function(e,t){return e.querySelectorAll("a").forEach((function(n,r){var a=n;n.getAttribute("href")===t?a.classList.add("activeTag"):n.classList.contains("activeTag")&&a.classList.remove("activeTag"),e.querySelectorAll("a")[r].innerHTML=a.innerHTML})),e};return""!==n&&a.a.createElement("div",{className:"docmapLinks"},a.a.createElement("p",{className:"tocTitle"},"On this page"),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))}),d=(n("vAwT"),function(e){return a.a.createElement("div",{className:"documentWrapper"},a.a.createElement("div",{id:e.docTitle,dangerouslySetInnerHTML:{__html:e.docContent}}))}),_=(n("esLb"),n("jQ4f")),m=n.n(_),h=(n("l8sT"),function(e){return a.a.createElement("div",{className:"backButtonWrapper"},a.a.createElement("button",null,a.a.createElement("a",{href:e.backLink,target:"_parent"},a.a.createElement("img",{src:m.a,alt:"BackButton"}))),a.a.createElement("p",null,e.title))}),p=function(e){var t=Object(r.useState)(e.location.search.slice(1).split("&")[0])[0],n=Object(r.useState)(""),i=n[0],o=n[1];return Object(r.useEffect)((function(){var n=document.createElement("div");n.innerHTML=e.navContent;var r=n.querySelector("a[href='?"+t+"']");r&&(r.classList.add("active"),r.parentElement.classList.add("activelink")),o(n.innerHTML)}),[t,e.navContent]),a.a.createElement("aside",null,e.backLink&&a.a.createElement(h,{title:"SpotDev Home",backLink:e.backLink}),a.a.createElement("nav",null,a.a.createElement("h2",{className:"heading"},e.navTitle),a.a.createElement("div",{className:"navWrapper",dangerouslySetInnerHTML:{__html:i}})))};n("tJqE"),t.default=function(e){var t,n=e.location,c=Object(r.useState)(((t={})[o.TS_HOST_PARAM]="",t[o.TS_ORIGIN_PARAM]="",t[o.TS_PAGE_ID_PARAM]="",t[o.NAV_PREFIX]="",t)),s=c[0],_=c[1],m=Object(r.useState)(""),h=m[0],v=m[1],S=Object(r.useState)(""),g=S[0],A=S[1],E=Object(r.useState)(""),T=E[0],b=E[1],y=Object(r.useState)(""),M=y[0],I=y[1],O=Object(r.useState)(""),P=O[0],j=O[1];console.log("Testing file changes"),Object(r.useEffect)((function(){var e=u(n.search);L.map((function(t){e[t.node.parent.name]=t.node.pageAttributes.pageid||o.NOT_FOUND_PAGE_ID})),_(Object.assign({},e))}),[]);Object(r.useEffect)((function(){var e=L.findIndex((function(e){return e.node.pageAttributes[o.TS_PAGE_ID_PARAM]===o.DOC_NAV_PAGE_ID}));b(L[e].node.pageAttributes.title),I(l(L[e].node.html,s)),j(s[o.TS_ORIGIN_PARAM]),function e(t){if(void 0===t&&(t=o.NOT_FOUND_PAGE_ID),t){var n=L.findIndex((function(e){return e.node.pageAttributes[o.TS_PAGE_ID_PARAM]===t}));n>-1?(v(L[n].node.document.title||L[n].node.pageAttributes.title),A(l(L[n].node.html,s))):e(o.NOT_FOUND_PAGE_ID)}}(s[o.TS_PAGE_ID_PARAM])}),[s]);var L=Object(i.useStaticQuery)("3137874155").allAsciidoc.edges;return a.a.createElement(a.a.Fragment,null,a.a.createElement("main",null,a.a.createElement(p,{navTitle:T,navContent:M,backLink:P,location:n}),a.a.createElement("div",{className:"documentBody"},a.a.createElement("div",{className:"introWrapper"},a.a.createElement(d,{docTitle:h,docContent:g}),a.a.createElement(f,{docContent:g,location:n})))))}},YyRi:function(e,t,n){},dasq:function(e,t,n){(function(e){!function(e){"use strict";var t,n=function(){try{if(e.URLSearchParams&&"bar"===new e.URLSearchParams("foo=bar").get("foo"))return e.URLSearchParams}catch(t){}return null}(),r=n&&"a=1"===new n({a:1}).toString(),a=n&&"+"===new n("s=%2B").get("s"),i=!n||((t=new n).append("s"," &"),"s=+%26"===t.toString()),o=l.prototype,c=!(!e.Symbol||!e.Symbol.iterator);if(!(n&&r&&a&&i)){o.append=function(e,t){h(this.__URLSearchParams__,e,t)},o.delete=function(e){delete this.__URLSearchParams__[e]},o.get=function(e){var t=this.__URLSearchParams__;return this.has(e)?t[e][0]:null},o.getAll=function(e){var t=this.__URLSearchParams__;return this.has(e)?t[e].slice(0):[]},o.has=function(e){return v(this.__URLSearchParams__,e)},o.set=function(e,t){this.__URLSearchParams__[e]=[""+t]},o.toString=function(){var e,t,n,r,a=this.__URLSearchParams__,i=[];for(t in a)for(n=f(t),e=0,r=a[t];e<r.length;e++)i.push(n+"="+f(r[e]));return i.join("&")};var s=!!a&&n&&!r&&e.Proxy;Object.defineProperty(e,"URLSearchParams",{value:s?new Proxy(n,{construct:function(e,t){return new e(new l(t[0]).toString())}}):l});var u=e.URLSearchParams.prototype;u.polyfill=!0,u.forEach=u.forEach||function(e,t){var n=m(this.toString());Object.getOwnPropertyNames(n).forEach((function(r){n[r].forEach((function(n){e.call(t,n,r,this)}),this)}),this)},u.sort=u.sort||function(){var e,t,n,r=m(this.toString()),a=[];for(e in r)a.push(e);for(a.sort(),t=0;t<a.length;t++)this.delete(a[t]);for(t=0;t<a.length;t++){var i=a[t],o=r[i];for(n=0;n<o.length;n++)this.append(i,o[n])}},u.keys=u.keys||function(){var e=[];return this.forEach((function(t,n){e.push(n)})),_(e)},u.values=u.values||function(){var e=[];return this.forEach((function(t){e.push(t)})),_(e)},u.entries=u.entries||function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),_(e)},c&&(u[e.Symbol.iterator]=u[e.Symbol.iterator]||u.entries)}function l(e){((e=e||"")instanceof URLSearchParams||e instanceof l)&&(e=e.toString()),this.__URLSearchParams__=m(e)}function f(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g,(function(e){return t[e]}))}function d(e){return e.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,(function(e){return decodeURIComponent(e)}))}function _(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return c&&(n[e.Symbol.iterator]=function(){return n}),n}function m(e){var t={};if("object"==typeof e)if(p(e))for(var n=0;n<e.length;n++){var r=e[n];if(!p(r)||2!==r.length)throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");h(t,r[0],r[1])}else for(var a in e)e.hasOwnProperty(a)&&h(t,a,e[a]);else{0===e.indexOf("?")&&(e=e.slice(1));for(var i=e.split("&"),o=0;o<i.length;o++){var c=i[o],s=c.indexOf("=");-1<s?h(t,d(c.slice(0,s)),d(c.slice(s+1))):c&&h(t,d(c),"")}}return t}function h(e,t,n){var r="string"==typeof n?n:null!=n&&"function"==typeof n.toString?n.toString():JSON.stringify(n);v(e,t)?e[t].push(r):e[t]=[r]}function p(e){return!!e&&"[object Array]"===Object.prototype.toString.call(e)}function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(void 0!==e?e:"undefined"!=typeof window?window:this)}).call(this,n("yLpj"))},esLb:function(e,t,n){},jQ4f:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNFQUVERjIiLz4KPHBhdGggZD0iTTIzLjk5MjIgMTYuOTkyOVYxNC45OTI5SDExLjgyNzdMMTUuMTEzNSAxMS43MDcxTDEzLjY5OTMgMTAuMjkyOUw4Ljk5OTI4IDE0Ljk5MjlIOC45OTIyVjE1TDcuOTkyMTkgMTZMMTMuNjk5MyAyMS43MDcxTDE1LjExMzUgMjAuMjkyOUwxMS44MTM1IDE2Ljk5MjlIMjMuOTkyMloiIGZpbGw9IiMxRDIzMkYiLz4KPC9zdmc+Cg=="},l8sT:function(e,t,n){},tJqE:function(e,t,n){},vAwT:function(e,t,n){}}]);
//# sourceMappingURL=component---docs-src-pages-index-tsx-3ea5e9b8afa7ff312ed9.js.map