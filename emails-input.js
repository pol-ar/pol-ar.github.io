!function(n,e){for(var t in e)n[t]=e[t]}(window,function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var r=t(1),i=t(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);n.exports=i.locals||{}},function(n,e,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function u(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],i=0;i<n.length;i++){var a=n[i],l=e.base?a[0]+e.base:a[0],c=t[l]||0,s="".concat(l," ").concat(c);t[l]=c+1;var f=u(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(o[f].references++,o[f].updater(p)):o.push({identifier:s,updater:v(p,e),references:1}),r.push(s)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var s,f=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function p(n,e,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(e,i);else{var a=document.createTextNode(i),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(a,o[e]):n.appendChild(a)}}function d(n,e,t){var r=t.css,i=t.media,a=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(n,e){var t,r,i;if(e.singleton){var a=h++;t=m||(m=c(e)),r=p.bind(null,t,a,!1),i=p.bind(null,t,a,!0)}else t=c(e),r=d.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var i=u(t[r]);o[i].references--}for(var a=l(n,e),c=0;c<t.length;c++){var s=u(t[c]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}t=a}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,"._1CdZhB7d0f8JR13cZje9J1 {\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    background: #FFFFFF;\n    border: 1px solid #C3C2CF;\n    box-sizing: border-box;\n    border-radius: 4px;\n    padding: 5px;\n}\n\n._2oiwrvlBBAhsQfMaMdUrny {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.VlxkfkJokN0XFEdTZ7XMU {\n    height: 24px;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    margin-right: 5px;\n    flex: 0 0 auto;\n    margin-bottom: 3px;\n    overflow: hidden;\n    max-width: 100%;\n}\n\n._3I5H1ItioJAKlt8OWl8w63 {\n    background: rgba(102, 153, 255, 0.2);\n    border-radius: 100px;\n    padding: 2px 4px;\n}\n\n._1k49_bPn48rdglUHTc2zGx {\n    border-bottom: 1px dashed #D92929;\n}\n\n.NuH0I6wn5QbByhu2RV2jb {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0 3px 0 5px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n._2fmpTp9AKSO98w5TpB9jVn {\n    cursor: pointer;\n    margin: 3px;\n    display: inline-block;\n    width: 12px;\n    height: 12px;\n    line-height: 12px;\n    text-align: center;\n    font-size: 18px;\n}\n\n.ZdNLdOyZ2boI1gxKwB8-S {\n    font-family: inherit;\n    font-size: 14px;\n    line-height: 24px;\n    color: inherit;\n    border: none;\n    height: 24px;\n    padding: 0;\n    margin-left: 3px;\n    flex: 1 1 140px;\n}\n\n.ZdNLdOyZ2boI1gxKwB8-S:focus {\n    outline: none;\n}\n\n.ZdNLdOyZ2boI1gxKwB8-S::placeholder {\n    color: #C3C2CF;\n}\n.ZdNLdOyZ2boI1gxKwB8-S::-moz-placeholder {\n    color: #C3C2CF;\n    opacity: 1;\n}\n.ZdNLdOyZ2boI1gxKwB8-S:-ms-input-placeholder {\n    color: #C3C2CF;\n}\n.ZdNLdOyZ2boI1gxKwB8-S::-ms-input-placeholder {\n    color: #C3C2CF;\n}\n.ZdNLdOyZ2boI1gxKwB8-S::-webkit-input-placeholder {\n    color: #C3C2CF;\n}\n\n.ZdNLdOyZ2boI1gxKwB8-S::-ms-clear {\n    display: none;\n}",""]),e.locals={"emails-input":"_1CdZhB7d0f8JR13cZje9J1","emails-input__container":"_2oiwrvlBBAhsQfMaMdUrny","emails-input__email":"VlxkfkJokN0XFEdTZ7XMU","emails-input__email--valid":"_3I5H1ItioJAKlt8OWl8w63","emails-input__email--invalid":"_1k49_bPn48rdglUHTc2zGx","emails-input__email-value":"NuH0I6wn5QbByhu2RV2jb","emails-input__email-button":"_2fmpTp9AKSO98w5TpB9jVn","emails-input__input":"ZdNLdOyZ2boI1gxKwB8-S"},n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(o=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(l," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([i]).join("\n")}var o,u,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){"use strict";function r(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}t.r(e),t.d(e,"EmailsInput",(function(){return T}));var i=function(n,e){return n.slice(0,e).concat(n.slice(e+1))},a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,o=function(n){return a.test(String(n).toLowerCase())},u=function(n){var e=n.tag,t=n.parent,i=n.attributes,a=void 0===i?{}:i,o=r(n,["tag","parent","attributes"]),u=document.createElement(e);if(Object.keys(a).forEach((function(n){u.setAttribute(n,a[n])})),Object.keys(o).forEach((function(n){u[n]=o[n]})),t){if(!(t instanceof Node))throw new Error("Invalid parent!");t.appendChild(u)}return u},l=function(n){return n.trim()},c=function(n){return n.length>0},s=function(n){return n.split(",").map(l).filter(c)},f=function(n,e){for(var t=0,r=n.length;t<r;t++)if(e(n[t],t,n))return t;return-1},p=function(n,e){var t=f(n,e);return-1!==t?n[t]:void 0},d=function(n){return function(n){return null==n}(n)?[]:function(n){return Array.isArray(n)?n:[n]}(n)},m=function(n){return String(n)};function h(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var v=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._value=e,this._listeners=[]}var e,t,r;return e=n,(t=[{key:"subscribe",value:function(n){var e=this;if("function"!=typeof n)throw new Error("Type of subscription callback is not a function!");return this._listeners.push(n),function(){var t=f(e._listeners,(function(e){return e===n}));-1!==t&&e._listeners.splice(t,1)}}},{key:"value",set:function(n){this._value!==n&&(this._value=n,this._listeners.forEach((function(e){e(n)})))},get:function(){return this._value}}])&&h(e.prototype,t),r&&h(e,r),n}(),b=function(n){return n.map((function(n){return{value:n,valid:o(n)}}))},y=function(n){return{type:"SET_EMAILS",emails:b(n)}},_=function(n){return{type:"ADD_EMAILS",emails:b(n)}},g=function(n){return{type:"DELETE_EMAIL",email:n}},E=function(n,e){return!!p(n,(function(n){return n.value===e.value}))?n:n.concat(e)};var w=function(n){return n.map((function(n){return n.value}))},x=t(0),S=t.n(x);function C(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,i=!1,a=void 0;try{for(var o,u=n[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(n){i=!0,a=n}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return O(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function k(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function I(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var j=function(){function n(e){var t=this,r=e.id,i=void 0===r?"emails-input":r,a=e.parent,o=e.onDeleteEmail,u=e.onAddEmails;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),I(this,"_getEmailEls",(function(){return t._container.getElementsByClassName(S.a["emails-input__email"])})),I(this,"_getEmailElByValue",(function(n){return t._container.querySelector('[data-email="'.concat(n,'"]'))})),I(this,"_removeEmailEls",(function(n){n.forEach((function(n){return t._container.removeChild(n)}))})),I(this,"_addEmailEls",(function(n){var e=document.createDocumentFragment();n.forEach((function(n){e.appendChild(t._createEmailEl(n))})),t._container.insertBefore(e,t._input)})),I(this,"_sortEmailEls",(function(e){var r=t._getEmailEls();e.forEach((function(e,i){n.checkIfElHasEmailData(r[i],e)||t._container.insertBefore(t._getEmailElByValue(e.value),r[i])}))})),this._init(i,a),this._onDeleteEmail=o,this._onAddEmails=u}var e,t,r;return e=n,(t=[{key:"_init",value:function(n,e){var t=this;this._container=u({tag:"div",parent:u({tag:"div",parent:e,id:n,className:S.a["emails-input"]}),className:S.a["emails-input__container"]}),this._input=u({tag:"input",parent:this._container,className:S.a["emails-input__input"],type:"text",placeholder:"add more people...",autofocus:!0,onblur:function(n){return t._applyInputValue(n.target.value)},onpaste:function(n){var e=(n.clipboardData||window.clipboardData).getData("text");t._applyInputValue(e),n.preventDefault()},onkeypress:function(n){(function(n){return"Enter"===n.key}(n)||function(n){return","===n.key}(n))&&(t._applyInputValue(n.target.value),n.preventDefault())}})}},{key:"_clearInputValue",value:function(){this._input.value=""}},{key:"_applyInputValue",value:function(n){var e=s(n);e.length>0&&this._onAddEmails(e),this._clearInputValue()}},{key:"_createEmailEl",value:function(n){var e=this,t=n.value,r=n.valid,i=[S.a["emails-input__email"],r?S.a["emails-input__email--valid"]:S.a["emails-input__email--invalid"]],a=u({tag:"div",parent:this._container,className:i.join(" "),attributes:{"data-email":t}});return u({tag:"span",parent:a,className:S.a["emails-input__email-value"],textContent:t}),u({tag:"span",parent:a,className:S.a["emails-input__email-button"],textContent:"×",onclick:function(){return e._onDeleteEmail(t)}}),a}},{key:"update",value:function(e){var t,r,i,a,o=C((t=n.checkIfElHasEmailData,a=this._getEmailEls(),r=Array.prototype.slice.call(a),[(i=e).filter((function(n){return!p(r,(function(e){return t(e,n)}))})),r.filter((function(n){return!p(i,(function(e){return t(n,e)}))}))]),2),u=o[0],l=o[1];this._removeEmailEls(l),this._addEmailEls(u),this._sortEmailEls(e),u.length>0&&this._input.focus()}}])&&k(e.prototype,t),r&&k(e,r),n}();I(j,"checkIfElHasEmailData",(function(n,e){return n.getAttribute("data-email")===e.value}));var A=j;function N(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function B(n,e,t){return e&&N(n.prototype,e),t&&N(n,t),n}function M(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var T=function(){function n(e){var t=this,r=e.id,i=e.parent;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),M(this,"_addEmails",(function(n){t._changeState(_(n))})),M(this,"_deleteEmail",(function(n){t._changeState(g(n))})),this._inputNode=new A({id:r,parent:i,onDeleteEmail:this._deleteEmail,onAddEmails:this._addEmails}),this._state=new v([]),this._state.subscribe((function(n){t._inputNode.update(n)}))}return B(n,null,[{key:"sanitizeEmailsList",value:function(n){return"string"==typeof n?s(n):d(n).map(m)}}]),B(n,[{key:"_changeState",value:function(n){this._state.value=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_EMAILS":return e.emails.reduce((function(n,e){return E(n,e)}),[]);case"ADD_EMAILS":return e.emails.reduce((function(n,e){return E(n,e)}),n);case"DELETE_EMAIL":var t=f(n,(function(n){return n.value===e.email}));return-1!==t?i(n,t):n;default:return n}}(this._state.value,n)}},{key:"subscribe",value:function(n){return this._state.subscribe(n)}},{key:"emails",set:function(e){this._changeState(y(n.sanitizeEmailsList(e)))},get:function(){return w(this._state.value)}},{key:"validEmails",get:function(){return n=this._state.value,w(n.filter((function(n){return n.valid})));var n}}]),n}()}]));