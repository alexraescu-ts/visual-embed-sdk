(self.webpackChunk_thoughtspot_visual_embed_sdk=self.webpackChunk_thoughtspot_visual_embed_sdk||[]).push([[628],{628:function(e,t,n){"use strict";n.r(t);var a=n(7294),c=n(2915);t.default=function(e){var t=(0,a.useState)(""),n=t[0],o=t[1];(0,a.useEffect)((function(){var t=document.createElement("div");t.innerHTML=e.docContent;var n=t.querySelector("#toc");if(n){var a=e.location.hash;a&&(n=s(n,a),document.documentElement.scrollTop=document.querySelector(""+a).offsetTop-c.TU),o(n.innerHTML)}else o("")}),[e.docContent,e.location.hash]);var s=function(e,t){return e.querySelectorAll("a").forEach((function(n,a){var c=n;n.getAttribute("href")===t?c.classList.add("activeTag"):n.classList.contains("activeTag")&&c.classList.remove("activeTag"),e.querySelectorAll("a")[a].innerHTML=c.innerHTML})),e};return""!==n&&a.createElement("div",{className:"docmapLinks",style:{zIndex:e.options.length>0?-1:0}},a.createElement("p",{className:"tocTitle"},"On this page"),a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))}}}]);
//# sourceMappingURL=628-25046bda1b4c54e6d20b.js.map