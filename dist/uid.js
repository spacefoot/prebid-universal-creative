/* v1.6.0-pre
Updated : 2019-09-25 */
!function(o){var n={};function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=o,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getBuyerUids=u,e.loadData=i;var n=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}}(o(1));window.pbs=window.pbs||{},window.pbs.getBuyerUids=u;var r="https://prebid.adnxs.com/pbs/v1/getuids",a="ssp-buyeruids",s=14;function u(e){var t=n.getDataFromLocalStorage(a);if(c(t))i(e);else{try{t=JSON.parse(t)}catch(t){return void e(t,null)}delete t.lastUpdated,e(null,t)}}function i(e){c(n.getDataFromLocalStorage(a))&&n.ajax(r,function(t){try{(t=JSON.parse(t)).lastUpdated=n.timestamp(),n.setDataInLocalStorage(a,JSON.stringify(t)),delete t.lastUpdated,e(null,t)}catch(t){e(t,null)}},null,{withCredentials:!0})}function c(t){return!t||n.timestamp()>t.lastUpdated+24*s*60*60*1e3}i(function(){})},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function n(){try{return!!window.localStorage}catch(t){console.log("Local storage api disabled")}}e.setDataInLocalStorage=function(t,e){n()&&window.localStorage.setItem(t,e)},e.getDataFromLocalStorage=function(t){if(n())return window.localStorage.getItem(t)},e.hasLocalStorage=n,e.timestamp=function(){return(new Date).getTime()},e.ajax=function(t,e,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};try{var r=void 0,a=n.method||(o?"POST":"GET"),s="object"===(void 0===e?"undefined":c(e))?e:{success:function(){console.log("xhr success")},error:function(t){console.log("xhr error",null,t)}};if("function"==typeof e&&(s.success=e),(r=new window.XMLHttpRequest).onreadystatechange=function(){if(4===r.readyState){var t=r.status;200<=t&&t<300||304===t?s.success(r.responseText,r):s.error(r.statusText,r)}},r.ontimeout=function(){console.log("xhr timeout after ",r.timeout,"ms")},"GET"===a&&o){var u=parseURL(t,n);i(u.search,o),t=formatURL(u)}r.open(a,t),r.timeout=3e3,n.withCredentials&&(r.withCredentials=!0),n.preflight&&r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("Content-Type",n.contentType||"text/plain"),"POST"===a&&o?r.send(o):r.send()}catch(t){console.log("xhr construction",t)}}}]);