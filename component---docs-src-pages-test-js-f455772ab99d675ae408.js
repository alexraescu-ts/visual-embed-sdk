/*! For license information please see component---docs-src-pages-test-js-f455772ab99d675ae408.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/gG4":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("3FYs"),c=n("X03y"),s=n("owmD");n("WVLT");e.default=function(t){var e=Object(r.useState)({}),n=e[0],u=e[1],l=Object(r.useState)(""),f=l[0],h=l[1];Object(r.useEffect)((function(){u(Object(c.a)(t.location.search))}),[]),Object(r.useEffect)((function(){h(Object(s.a)(m[1].node.html,n))}),[n]);var m=Object(o.c)("830650768").allAsciidoc.edges,p=m[1].node.document.title||m[1].node.document.main;return a.a.createElement("div",null,a.a.createElement("header",{className:"header"},a.a.createElement("img",{src:"",alt:"logo",className:"logo"}),a.a.createElement("input",{type:"text",title:"search",className:"searchBox"})),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"leftSidebar"},Object(i.a)("HOME_LEFT_NAVIGATION")),a.a.createElement("div",{className:"contentArea"},a.a.createElement("span",{dangerouslySetInnerHTML:{__html:"<b>Title:</b> "+p}}),a.a.createElement("b",null,"Document Content:"),a.a.createElement("div",{className:"docContentArea",dangerouslySetInnerHTML:{__html:f}})),a.a.createElement("div",{className:"rightSidebar"},Object(i.a)("HOME_RIGHT_NAVIGATION"))))}},"3FYs":function(t,e,n){"use strict";e.a=function(t){return t}},WVLT:function(t,e,n){},X03y:function(t,e,n){"use strict";n("dasq");function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.a=function(t){var e={};if(!t)return e;for(var n,a=r(new URLSearchParams(t).entries());!(n=a()).done;){var o=n.value,i=o[0],c=o[1];e[i]=c}return e}},dasq:function(t,e,n){(function(t){!function(t){"use strict";var e,n=function(){try{if(t.URLSearchParams&&"bar"===new t.URLSearchParams("foo=bar").get("foo"))return t.URLSearchParams}catch(e){}return null}(),r=n&&"a=1"===new n({a:1}).toString(),a=n&&"+"===new n("s=%2B").get("s"),o=!n||((e=new n).append("s"," &"),"s=+%26"===e.toString()),i=l.prototype,c=!(!t.Symbol||!t.Symbol.iterator);if(!(n&&r&&a&&o)){i.append=function(t,e){d(this.__URLSearchParams__,t,e)},i.delete=function(t){delete this.__URLSearchParams__[t]},i.get=function(t){var e=this.__URLSearchParams__;return this.has(t)?e[t][0]:null},i.getAll=function(t){var e=this.__URLSearchParams__;return this.has(t)?e[t].slice(0):[]},i.has=function(t){return y(this.__URLSearchParams__,t)},i.set=function(t,e){this.__URLSearchParams__[t]=[""+e]},i.toString=function(){var t,e,n,r,a=this.__URLSearchParams__,o=[];for(e in a)for(n=f(e),t=0,r=a[e];t<r.length;t++)o.push(n+"="+f(r[t]));return o.join("&")};var s=!!a&&n&&!r&&t.Proxy;Object.defineProperty(t,"URLSearchParams",{value:s?new Proxy(n,{construct:function(t,e){return new t(new l(e[0]).toString())}}):l});var u=t.URLSearchParams.prototype;u.polyfill=!0,u.forEach=u.forEach||function(t,e){var n=p(this.toString());Object.getOwnPropertyNames(n).forEach((function(r){n[r].forEach((function(n){t.call(e,n,r,this)}),this)}),this)},u.sort=u.sort||function(){var t,e,n,r=p(this.toString()),a=[];for(t in r)a.push(t);for(a.sort(),e=0;e<a.length;e++)this.delete(a[e]);for(e=0;e<a.length;e++){var o=a[e],i=r[o];for(n=0;n<i.length;n++)this.append(o,i[n])}},u.keys=u.keys||function(){var t=[];return this.forEach((function(e,n){t.push(n)})),m(t)},u.values=u.values||function(){var t=[];return this.forEach((function(e){t.push(e)})),m(t)},u.entries=u.entries||function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),m(t)},c&&(u[t.Symbol.iterator]=u[t.Symbol.iterator]||u.entries)}function l(t){((t=t||"")instanceof URLSearchParams||t instanceof l)&&(t=t.toString()),this.__URLSearchParams__=p(t)}function f(t){var e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'\(\)~]|%20|%00/g,(function(t){return e[t]}))}function h(t){return t.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,(function(t){return decodeURIComponent(t)}))}function m(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return c&&(n[t.Symbol.iterator]=function(){return n}),n}function p(t){var e={};if("object"==typeof t)if(v(t))for(var n=0;n<t.length;n++){var r=t[n];if(!v(r)||2!==r.length)throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");d(e,r[0],r[1])}else for(var a in t)t.hasOwnProperty(a)&&d(e,a,t[a]);else{0===t.indexOf("?")&&(t=t.slice(1));for(var o=t.split("&"),i=0;i<o.length;i++){var c=o[i],s=c.indexOf("=");-1<s?d(e,h(c.slice(0,s)),h(c.slice(s+1))):c&&d(e,h(c),"")}}return e}function d(t,e,n){var r="string"==typeof n?n:null!=n&&"function"==typeof n.toString?n.toString():JSON.stringify(n);y(t,e)?t[e].push(r):t[e]=[r]}function v(t){return!!t&&"[object Array]"===Object.prototype.toString.call(t)}function y(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(void 0!==t?t:"undefined"!=typeof window?window:this)}).call(this,n("yLpj"))},owmD:function(t,e,n){"use strict";e.a=function(t,e){var n=t,r=Object.keys(e);if(!t&&0===r.length)return n;return r.map((function(t){n=n.replace(new RegExp("{{"+t+"}}","g"),e[t]||"")})),n}}}]);
//# sourceMappingURL=component---docs-src-pages-test-js-f455772ab99d675ae408.js.map