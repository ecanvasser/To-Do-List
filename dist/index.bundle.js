(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    background-color: #4ade80;\n    padding: 3rem 0;\n}\n\n#title {\n    margin-left: 3rem;\n    display: flex;\n    align-items: center;\n}\n\n#new-proj {\n    margin-right: 3rem;\n    background-color: white;\n    padding: 7px 18px;\n    text-decoration: none;\n    border-radius: 12px;\n}\n\n#menu-title {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n#np-menu {\n    display: none;\n    position: fixed;\n    left: 40%;\n    top: 25%;\n    background-color: #e5e5e5;\n    padding: 20px;\n    border: #4ade80 2px solid;\n    border-radius: 8px;\n}\n\n#form-btns {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n#submit-menu {\n    background-color: #4ade80;\n    border: none;\n}\n\n#close-menu {\n    background-color: #ef4444;\n}\n\n#close-menu, #submit-menu {\n    text-decoration: none;\n    color: white;\n    padding: 8px 12px;\n    border-radius: 8px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 0.5rem 0;\n    background-color: #4ade80;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},15:(e,n,t)=>{t.d(n,{H:()=>r});var o=[];const r=()=>({menuDisplay:()=>{document.getElementById("np-menu").style.display="block",document.getElementsByTagName("header")[0].style.opacity="0.5",document.getElementsByTagName("main")[0].style.opacity="0.5",document.getElementsByTagName("footer")[0].style.opacity="0.5"},menuClose:()=>{document.getElementById("np-menu").style.display="none",document.getElementsByTagName("header")[0].style.opacity="1",document.getElementsByTagName("main")[0].style.opacity="1",document.getElementsByTagName("footer")[0].style.opacity="1"},addProj:()=>{const e=document.getElementById("pTitle").value,n=document.getElementById("pDescrip").value,t=document.getElementById("pDate").value,r=document.getElementById("pNotes").value;var a=Object.create({},{title:{value:e},descrip:{value:n},duedate:{value:t},notes:{value:r}});o.push(a),console.log(o)}})}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const y=(0,t(15).H)();document.getElementById("new-proj").addEventListener("click",(function(e){y.menuDisplay(),e.preventDefault()})),document.getElementById("submit-menu").addEventListener("click",(function(e){y.addProj(),e.preventDefault()})),document.getElementById("close-menu").addEventListener("click",(function(e){y.menuClose(),e.preventDefault()}))})()})();