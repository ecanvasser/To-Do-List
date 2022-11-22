(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    background-color: #4ade80;\n    padding: 3rem 0;\n    margin-bottom: 1rem;\n    box-shadow: 0 4px 4px -1px gray;\n\n}\n\n#title {\n    margin-left: 3rem;\n    display: flex;\n    align-items: center;\n}\n\n#new-proj {\n    margin-right: 3rem;\n    background-color: white;\n    padding: 7px 18px;\n    text-decoration: none;\n    border-radius: 12px;\n}\n\n#menu-title {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n#np-menu {\n    display: none;\n    position: fixed;\n    left: 40%;\n    top: 25%;\n    background-color: rgba(229, 229, 229, 1);\n    padding: 20px;\n    border: #4ade80 2px solid;\n    border-radius: 8px;\n}\n\n#form-btns {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n#submit-menu {\n    background-color: #4ade80;\n    border: none;\n}\n\n#close-menu {\n    background-color: #ef4444;\n}\n\n#close-menu, #submit-menu {\n    text-decoration: none;\n    color: white;\n    padding: 8px 12px;\n    border-radius: 8px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n}\n\n#proj-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 0.33fr));\n    gap: 1.5rem 2.5rem;\n    margin: 0 1rem;\n}\n\n.proj-tile {\n    position: relative;\n    border: #4ade80 2px solid;\n    border-radius: 10px;\n    box-shadow: 2px 2px 5px black;\n    padding: 15px;\n}\n\n.tile-date {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n.arrow-btn {\n    position: absolute;\n    bottom: 5px;\n    right: 10px;\n}\n\n.arrow-img {\n    width: 20px;\n    height: 20px;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 0.5rem 0;\n    background-color: #4ade80;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},683:(e,n,t)=>{t.d(n,{l:()=>i,H:()=>a});const r=t.p+"8272589614ba1980d393.svg";var o=[];const a=()=>{const e=()=>{document.getElementById("np-menu").style.display="none",document.getElementsByTagName("header")[0].style.opacity="1",document.getElementsByTagName("main")[0].style.opacity="1",document.getElementsByTagName("footer")[0].style.opacity="1"};return{menuDisplay:()=>{document.getElementById("np-menu").style.display="block",document.getElementsByTagName("header")[0].style.opacity="0.5",document.getElementsByTagName("main")[0].style.opacity="0.5",document.getElementsByTagName("footer")[0].style.opacity="0.5"},menuClose:e,addProj:()=>{const n=document.getElementById("pTitle").value,t=document.getElementById("pDescrip").value,r=document.getElementById("pDate").value,a=document.getElementById("pNotes").value;var i=Object.create({},{title:{value:n},descrip:{value:t},duedate:{value:r},notes:{value:a}});o.push(i),e()}}},i=()=>{const e=document.getElementById("proj-grid"),n=(n,t)=>{let r=e.insertAdjacentElement("beforeend",document.createElement("div"));r.setAttribute("class","proj-tile"),r.setAttribute("id",t[n].title)},t=(n,t)=>{let r=e.children[n].insertAdjacentElement("beforeend",document.createElement("div"));r.setAttribute("class","tile-title"),r.innerHTML=t[n].title},a=(n,t)=>{let r=e.children[n].insertAdjacentElement("beforeend",document.createElement("div"));r.setAttribute("class","tile-descrip"),r.innerHTML=t[n].descrip},i=(n,t)=>{let r=e.children[n].insertAdjacentElement("beforeend",document.createElement("div"));r.setAttribute("class","tile-date"),r.innerHTML=t[n].duedate},c=n=>{let t=new Image;t.src=r,t.setAttribute("class","arrow-img");let o=e.children[n].insertAdjacentElement("beforeend",document.createElement("a"));o.setAttribute("href",""),o.setAttribute("class","arrow-btn"),o.insertAdjacentElement("beforeend",t)};return{build:()=>{e.innerHTML="";for(let e=0;e<o.length;e++)n(e,o),t(e,o),a(e,o),i(e,o),c(e)}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var g=t(683);const y=(0,g.H)(),v=(0,g.l)();document.getElementById("new-proj").addEventListener("click",(function(e){y.menuDisplay(),e.preventDefault()})),document.getElementById("submit-menu").addEventListener("click",(function(e){y.addProj(),v.build(),e.preventDefault()})),document.getElementById("close-menu").addEventListener("click",(function(e){y.menuClose(),e.preventDefault()}))})()})();