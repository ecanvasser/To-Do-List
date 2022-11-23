(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    background-color: #4ade80;\n    padding: 3rem 0;\n    box-shadow: 0 4px 4px -1px gray;\n}\n\n#title {\n    margin-left: 3rem;\n    display: flex;\n    align-items: center;\n}\n\n#new-proj {\n    margin-right: 3rem;\n    background-color: white;\n    padding: 7px 18px;\n    text-decoration: none;\n    border-radius: 12px;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 610px;\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: #f3f4f6;\n    z-index: -1;\n}\n\n#sb-title {\n    margin: 20px auto;\n}\n\n#sb-projcol {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sb-row {\n    margin: 0 60px;\n    font-weight: 700;\n    font-size: 20px;\n    padding-bottom: 2px;\n    border-bottom: 1px #94a3b8 solid;\n}\n\n#menu-title {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n}\n\n#np-menu {\n    display: none;\n    position: fixed;\n    left: 40%;\n    top: 25%;\n    background-color: rgba(229, 229, 229, 1);\n    padding: 20px;\n    border: #4ade80 2px solid;\n    border-radius: 8px;\n}\n\n#form-btns {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n#submit-menu {\n    background-color: #4ade80;\n    border: none;\n}\n\n#close-menu {\n    background-color: #ef4444;\n}\n\n#close-menu, #submit-menu {\n    text-decoration: none;\n    color: white;\n    padding: 8px 12px;\n    border-radius: 8px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n}\n\n#proj-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 0.33fr));\n    grid-template-rows: repeat(auto-fit, minmax(30px, 100px));\n    gap: 1.5rem 2.5rem;\n    margin: 1rem;\n}\n\n.proj-tile {\n    position: relative;\n    border: #4ade80 2px solid;\n    border-radius: 10px;\n    box-shadow: 2px 2px 5px black;\n    padding: 15px;\n}\n\n.tile-date {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n.arrow-btn {\n    position: absolute;\n    bottom: 5px;\n    right: 10px;\n}\n\n.arrow-img {\n    width: 20px;\n    height: 20px;\n}\n\n#td-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 50%;\n    margin: 10% auto;\n    padding: 2rem;\n    border: #4ade80 2px solid;\n    border-radius: 15px;\n    box-shadow: 2px 2px 5px black;\n}\n\n#td-title {\n    display: flex;\n    justify-content: center;\n    font-size: 30px;\n    font-weight: 900;\n}\n\n#summary, #td-date, #td-notes {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n#summ-title, #date-title, #notes-title {\n    font-weight: 700;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 0.5rem 0;\n    background-color: #4ade80;\n}",""]);const d=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],d=0;d<e.length;d++){var l=e[d],c=r.base?l[0]+r.base:l[0],s=i[c]||0,u="".concat(c," ").concat(s);i[c]=s+1;var m=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=o(p,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=n(i[a]);t[d].references--}for(var l=r(e,o),c=0;c<i.length;c++){var s=n(i[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},683:(e,t,n)=>{n.d(t,{lK:()=>l,HS:()=>d,q:()=>a});const r=n.p+"8272589614ba1980d393.svg";var o=n(96),i=n(872),a=[];const d=()=>{const e=()=>{document.getElementById("np-menu").style.display="none",document.getElementsByTagName("header")[0].style.opacity="1",document.getElementsByTagName("main")[0].style.opacity="1",document.getElementsByTagName("main")[0].style.zIndex="auto",document.getElementsByTagName("footer")[0].style.opacity="1"};return{menuDisplay:()=>{document.getElementById("np-menu").style.display="block",document.getElementsByTagName("header")[0].style.opacity="0.5",document.getElementsByTagName("main")[0].style.opacity="0.5",document.getElementsByTagName("main")[0].style.zIndex="-1",document.getElementById("sidebar").style.zIndex="-1",document.getElementsByTagName("footer")[0].style.opacity="0.5"},menuClose:e,addProj:()=>{const t=document.getElementById("pTitle").value,n=document.getElementById("pDescrip").value,r=document.getElementById("pDate").value,o=document.getElementById("pNotes").value;var d=Object.create({},{title:{value:t},descrip:{value:n},duedate:{value:r},notes:{value:o}});a.push(d),e(),(0,i.Y)().addProj(a)}}},l=()=>{const e=document.getElementById("proj-grid"),t=(t,n)=>{let r=e.insertAdjacentElement("beforeend",document.createElement("div"));r.setAttribute("class","proj-tile"),r.setAttribute("id",n[t].title)},n=(t,n)=>{let r=e.children[t].insertAdjacentElement("beforeend",document.createElement("div"));r.setAttribute("class","tile-title"),r.innerHTML=n[t].title},i=(t,n)=>{let r=e.children[t].insertAdjacentElement("beforeend",document.createElement("div"));r.setAttribute("class","tile-descrip"),r.innerHTML=n[t].descrip},d=(t,n)=>{let r=e.children[t].insertAdjacentElement("beforeend",document.createElement("div"));r.setAttribute("class","tile-date"),r.innerHTML=n[t].duedate},l=t=>{let n=new Image;n.src=r,n.setAttribute("class","arrow-img");let i=e.children[t].insertAdjacentElement("beforeend",document.createElement("a"));i.setAttribute("href",""),i.setAttribute("class","arrow-btn"),i.insertAdjacentElement("beforeend",n);const a=(0,o.e)();i.addEventListener("click",(function(e){let t=e.target.closest(".proj-tile").id;a.build(t),e.preventDefault()}))};return{build:()=>{e.innerHTML="";for(let e=0;e<a.length;e++)t(e,a),n(e,a),i(e,a),d(e,a),l(e)}}}},872:(e,t,n)=>{n.d(t,{Y:()=>r});const r=()=>({addProj:e=>{const t=document.getElementById("sb-projcol");t.innerHTML="";for(let r=0;r<e.length;r++){var n=e[r].title;let o=t.insertAdjacentElement("beforeend",document.createElement("div"));o.setAttribute("class","sb-row"),o.innerHTML=n}}})},96:(e,t,n)=>{n.d(t,{e:()=>o});var r=n(683);const o=()=>{var e=[];return{build:t=>{document.querySelector("#proj-grid").innerHTML="",document.querySelector("#proj-grid").id="td-grid",(t=>{e.push(r.q.find((e=>e.title==t)))})(t),(()=>{let t=document.getElementById("td-grid").insertAdjacentElement("beforeend",document.createElement("div"));t.setAttribute("id","td-title"),t.innerHTML=`${e[0].title}`})(),(()=>{let t=document.getElementById("td-grid").insertAdjacentElement("beforeend",document.createElement("div"));t.setAttribute("id","summary");let n=t.insertAdjacentElement("beforeend",document.createElement("div"));n.setAttribute("id","summ-title"),n.innerHTML="Summary";let r=t.insertAdjacentElement("beforeend",document.createElement("div"));r.setAttribute("id","summ-text"),r.innerHTML=`${e[0].descrip}`})(),(()=>{let t=document.getElementById("td-grid").insertAdjacentElement("beforeend",document.createElement("div"));t.setAttribute("id","td-date");let n=t.insertAdjacentElement("beforeend",document.createElement("div"));n.setAttribute("id","date-title"),n.innerHTML="Estimated Completion";let r=t.insertAdjacentElement("beforeend",document.createElement("div"));r.setAttribute("id","date-text"),r.innerHTML=`${e[0].duedate}`})(),(()=>{let t=document.getElementById("td-grid").insertAdjacentElement("beforeend",document.createElement("div"));t.setAttribute("id","td-notes");let n=t.insertAdjacentElement("beforeend",document.createElement("div"));n.setAttribute("id","notes-title"),n.innerHTML="Notes";let r=t.insertAdjacentElement("beforeend",document.createElement("div"));r.setAttribute("id","notes-text"),r.innerHTML=`${e[0].notes}`})()}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),d=n(565),l=n.n(d),c=n(216),s=n.n(c),u=n(589),m=n.n(u),p=n(426),f={};f.styleTagTransform=m(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var g=n(683);const b=(0,g.HS)(),y=(0,g.lK)();document.getElementById("new-proj").addEventListener("click",(function(e){b.menuDisplay(),e.preventDefault()})),document.getElementById("submit-menu").addEventListener("click",(function(e){b.addProj(),y.build(),e.preventDefault()})),document.getElementById("close-menu").addEventListener("click",(function(e){b.menuClose(),e.preventDefault()}))})()})();