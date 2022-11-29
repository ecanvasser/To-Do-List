/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./titles.ttf */ "./src/titles.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./RobotoReg.ttf */ "./src/RobotoReg.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Title';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'Body';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    background-color: #4ade80;\n    padding: 3rem 0;\n    box-shadow: 0 4px 4px -1px gray;\n}\n\n#title {\n    margin-left: 3rem;\n    display: flex;\n    align-items: center;\n    font-family: 'Title';\n    font-size: 35px;\n}\n\n#new-proj {\n    display: flex;\n    align-items: center;\n    margin-right: 3rem;\n    background-color: white;\n    padding: 7px 18px;\n    text-decoration: none;\n    border-radius: 12px;\n    font-family: 'Body';\n    font-size: 15px;\n    color: black;\n}\n\nmain {\n    display: grid;\n    position: relative;\n    grid-template-columns: 1fr 3fr;\n    height: 610px;\n    overflow: scroll;\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: #f3f4f6;\n    box-shadow: inset 0px 4px 4px -1px gray;\n}\n\n#sb-title {\n    margin: 20px auto;\n    font-family: 'Title';\n    font-size: 20px;\n}\n\n#sb-projcol {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sb-row {\n    display: flex;\n    justify-content: space-between;\n    margin: 0 60px;\n    font-family: 'Title';\n    font-size: 20px;\n    padding-bottom: 2px;\n    border-bottom: 1px #94a3b8 solid;\n}\n\n.sb-img {\n    height: 25px;\n    width: 25px;\n}\n\n.sb-row a {\n    visibility: hidden;\n}\n\n.sb-row:hover a {\n    visibility: visible;\n}\n\n#menu-title {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n    font-family: 'Title';\n    font-size: 25px;\n}\n\n#project > label {\n    font-family: 'Title';\n    font-size: 15px;\n}\n\n#project > input, textarea {\n    margin-bottom: 5px;\n    font-family: 'Body';\n}\n\n#np-menu {\n    display: none;\n    position: fixed;\n    left: 40%;\n    top: 25%;\n    background-color: rgba(229, 229, 229, 1);\n    padding: 30px;\n    width: 350px;\n    border: #4ade80 2px solid;\n    border-radius: 8px;\n}\n\n#form-btns {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n#submit-menu {\n    background-color: #4ade80;\n    border: none;\n}\n\n#close-menu {\n    background-color: #ef4444;\n}\n\n#close-menu, #submit-menu {\n    text-decoration: none;\n    color: white;\n    padding: 8px 12px;\n    border-radius: 8px;\n    font-family: 'Body';\n    font-size: 15px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n}\n\n#proj-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 0.33fr));\n    grid-template-rows: repeat(auto-fit, minmax(30px, 100px));\n    gap: 1.5rem 2.5rem;\n    margin: 1rem;\n}\n\n.proj-tile {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    position: relative;\n    width: 235px;\n    border: #4ade80 2px solid;\n    border-radius: 10px;\n    box-shadow: 2px 2px 5px black;\n    padding: 15px 30px 17px 15px;\n}\n\n.tile-title {\n    font-family: 'Title';\n}\n\n.tile-descrip {\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    overflow-y: scroll;\n    font-family: 'Body';\n    font-size: 15px;\n}\n\n.tile-date {\n    font-family: 'Body';\n    font-size: 15px;\n}\n\n.delete-btn {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n.arrow-btn {\n    position: absolute;\n    bottom: 5px;\n    right: 10px;\n}\n\n#back-btn {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    position: absolute;\n    top: 15px;\n    left: 26%;\n    text-decoration: none;\n    color: black;\n    font-family: 'Body';\n    font-size: 15px;\n    font-weight: 700;\n}\n\n#back-btn:hover {\n    color: #4ade80;\n}\n\n.arrow-img, #td-img, #back-img, .delete-img {\n    width: 20px;\n    height: 20px;\n}\n\n#td-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 50%;\n    margin: 10% auto 10% auto;\n    padding: 2rem;\n    border: #4ade80 2px solid;\n    border-radius: 15px;\n    box-shadow: 2px 2px 5px black;\n}\n\n#td-title {\n    display: flex;\n    justify-content: center;\n    font-size: 30px;\n    font-family: 'Title';\n}\n\n#summary, #td-date, #td-notes, #td-div {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n#td-div {\n    flex: 1;\n}\n\n#summ-title, #date-title, #notes-title,\n#todo-title {\n    font-family: 'Title';\n}\n\n#summ-text, #date-text, #notes-text {\n    font-family: 'Body';\n    font-size: 15px;\n    border-bottom: 1px solid lightgray;\n    padding-bottom: 8px;\n}\n\n#todo-title {\n    display: flex;\n    gap: 5px;\n}\n\n#td-form {\n    display: flex;\n    gap: 5px;\n    font-family: 'Title';\n}\n\n#td-input {\n    width: 60%;\n}\n\n#td-submit {\n    width: max-content;\n    padding: 2px 4px;\n}\n\n#todo-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n    gap: 3px;\n}\n\n.task-row {\n    padding: 0.5rem 0 0.5rem 1.5rem;\n    font-family: 'Title';\n    border-radius: 10px;\n    border: 1px #cbd5e1 solid;\n    box-shadow: 1px 1px 4px black;\n    width: 70%;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 0.5rem 0;\n    background-color: #4ade80;\n    font-family: 'Body';\n    font-size: 15px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAAwB;AAC5B;;AAEA;IACI,mBAAmB;IACnB,4CAA2B;AAC/B;;AAEA;IACI,SAAS;IACT,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,yBAAyB;IACzB,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;IAC9B,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,uCAAuC;AAC3C;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,QAAQ;IACR,wCAAwC;IACxC,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8DAA8D;IAC9D,yDAAyD;IACzD,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,6BAA6B;IAC7B,4BAA4B;AAChC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,OAAO;AACX;;AAEA;;IAEI,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,oBAAoB;AACxB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,OAAO;IACP,QAAQ;AACZ;;AAEA;IACI,+BAA+B;IAC/B,oBAAoB;IACpB,mBAAmB;IACnB,yBAAyB;IACzB,6BAA6B;IAC7B,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,SAAS;IACT,WAAW;IACX,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;AACnB","sourcesContent":["@font-face {\n    font-family: 'Title';\n    src: url('./titles.ttf');\n}\n\n@font-face {\n    font-family: 'Body';\n    src: url('./RobotoReg.ttf');\n}\n\nbody {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    background-color: #4ade80;\n    padding: 3rem 0;\n    box-shadow: 0 4px 4px -1px gray;\n}\n\n#title {\n    margin-left: 3rem;\n    display: flex;\n    align-items: center;\n    font-family: 'Title';\n    font-size: 35px;\n}\n\n#new-proj {\n    display: flex;\n    align-items: center;\n    margin-right: 3rem;\n    background-color: white;\n    padding: 7px 18px;\n    text-decoration: none;\n    border-radius: 12px;\n    font-family: 'Body';\n    font-size: 15px;\n    color: black;\n}\n\nmain {\n    display: grid;\n    position: relative;\n    grid-template-columns: 1fr 3fr;\n    height: 610px;\n    overflow: scroll;\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: #f3f4f6;\n    box-shadow: inset 0px 4px 4px -1px gray;\n}\n\n#sb-title {\n    margin: 20px auto;\n    font-family: 'Title';\n    font-size: 20px;\n}\n\n#sb-projcol {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sb-row {\n    display: flex;\n    justify-content: space-between;\n    margin: 0 60px;\n    font-family: 'Title';\n    font-size: 20px;\n    padding-bottom: 2px;\n    border-bottom: 1px #94a3b8 solid;\n}\n\n.sb-img {\n    height: 25px;\n    width: 25px;\n}\n\n.sb-row a {\n    visibility: hidden;\n}\n\n.sb-row:hover a {\n    visibility: visible;\n}\n\n#menu-title {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n    font-family: 'Title';\n    font-size: 25px;\n}\n\n#project > label {\n    font-family: 'Title';\n    font-size: 15px;\n}\n\n#project > input, textarea {\n    margin-bottom: 5px;\n    font-family: 'Body';\n}\n\n#np-menu {\n    display: none;\n    position: fixed;\n    left: 40%;\n    top: 25%;\n    background-color: rgba(229, 229, 229, 1);\n    padding: 30px;\n    width: 350px;\n    border: #4ade80 2px solid;\n    border-radius: 8px;\n}\n\n#form-btns {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n#submit-menu {\n    background-color: #4ade80;\n    border: none;\n}\n\n#close-menu {\n    background-color: #ef4444;\n}\n\n#close-menu, #submit-menu {\n    text-decoration: none;\n    color: white;\n    padding: 8px 12px;\n    border-radius: 8px;\n    font-family: 'Body';\n    font-size: 15px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n}\n\n#proj-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 0.33fr));\n    grid-template-rows: repeat(auto-fit, minmax(30px, 100px));\n    gap: 1.5rem 2.5rem;\n    margin: 1rem;\n}\n\n.proj-tile {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    position: relative;\n    width: 235px;\n    border: #4ade80 2px solid;\n    border-radius: 10px;\n    box-shadow: 2px 2px 5px black;\n    padding: 15px 30px 17px 15px;\n}\n\n.tile-title {\n    font-family: 'Title';\n}\n\n.tile-descrip {\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    overflow-y: scroll;\n    font-family: 'Body';\n    font-size: 15px;\n}\n\n.tile-date {\n    font-family: 'Body';\n    font-size: 15px;\n}\n\n.delete-btn {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n.arrow-btn {\n    position: absolute;\n    bottom: 5px;\n    right: 10px;\n}\n\n#back-btn {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    position: absolute;\n    top: 15px;\n    left: 26%;\n    text-decoration: none;\n    color: black;\n    font-family: 'Body';\n    font-size: 15px;\n    font-weight: 700;\n}\n\n#back-btn:hover {\n    color: #4ade80;\n}\n\n.arrow-img, #td-img, #back-img, .delete-img {\n    width: 20px;\n    height: 20px;\n}\n\n#td-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 50%;\n    margin: 10% auto 10% auto;\n    padding: 2rem;\n    border: #4ade80 2px solid;\n    border-radius: 15px;\n    box-shadow: 2px 2px 5px black;\n}\n\n#td-title {\n    display: flex;\n    justify-content: center;\n    font-size: 30px;\n    font-family: 'Title';\n}\n\n#summary, #td-date, #td-notes, #td-div {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n#td-div {\n    flex: 1;\n}\n\n#summ-title, #date-title, #notes-title,\n#todo-title {\n    font-family: 'Title';\n}\n\n#summ-text, #date-text, #notes-text {\n    font-family: 'Body';\n    font-size: 15px;\n    border-bottom: 1px solid lightgray;\n    padding-bottom: 8px;\n}\n\n#todo-title {\n    display: flex;\n    gap: 5px;\n}\n\n#td-form {\n    display: flex;\n    gap: 5px;\n    font-family: 'Title';\n}\n\n#td-input {\n    width: 60%;\n}\n\n#td-submit {\n    width: max-content;\n    padding: 2px 4px;\n}\n\n#todo-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n    gap: 3px;\n}\n\n.task-row {\n    padding: 0.5rem 0 0.5rem 1.5rem;\n    font-family: 'Title';\n    border-radius: 10px;\n    border: 1px #cbd5e1 solid;\n    box-shadow: 1px 1px 4px black;\n    width: 70%;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 0.5rem 0;\n    background-color: #4ade80;\n    font-family: 'Body';\n    font-size: 15px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localProjects": () => (/* binding */ localProjects),
/* harmony export */   "projectTiles": () => (/* binding */ projectTiles),
/* harmony export */   "projectmenu": () => (/* binding */ projectmenu)
/* harmony export */ });
/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow.svg */ "./src/arrow.svg");
/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.svg */ "./src/delete.svg");
/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do.js */ "./src/to-do.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");



;


var localProjects = [];

const projectmenu = () => {
    
    const menuDisplay = () => {
        document.getElementById('np-menu').style.display = 'block';
        document.getElementsByTagName('header')[0].style.opacity = '0.5';
        document.getElementsByTagName('main')[0].style.opacity = '0.5';
        document.getElementsByTagName('main')[0].style.zIndex = '-1';
        document.getElementById('sidebar').style.boxShadow = 'none';
        document.getElementsByTagName('footer')[0].style.opacity = '0.5';

    }

    const menuClose = () => {
        document.getElementById('np-menu').style.display = 'none';
        document.getElementsByTagName('header')[0].style.opacity = '1';
        document.getElementsByTagName('main')[0].style.opacity = '1';
        document.getElementsByTagName('main')[0].style.zIndex = '0';
        document.getElementsByTagName('footer')[0].style.opacity = '1';
        document.getElementById('sidebar').style.boxShadow = 'inset 0px 4px 4px 0 gray';
    }

    const addProj = () => {
        const pTitle = document.getElementById('pTitle').value;
        const pDescrip = document.getElementById('pDescrip').value;
        const pDate = document.getElementById('pDate').value;
        const pNotes = document.getElementById('pNotes').value;

        var newProj = Object.create({}, {
            title: {
                value: pTitle
            },
            descrip: {
                value: pDescrip
            },
            duedate: {
                value: pDate
            },
            notes: {
                value: pNotes
            }
        });

        menuClose();

        var projectBuilder = {
            'title': newProj.title,
            'descrip': newProj.descrip,
            'duedate': newProj.duedate,
            'notes': newProj.notes
        }

        localStorage.setItem(`${newProj.title}`, JSON.stringify(projectBuilder));
    }

    return {
        menuDisplay,
        menuClose,
        addProj
    }
}

const projectTiles = () => {
    const pGrid = document.getElementById('proj-grid');
    //Creates main project tile
    const mainDiv = (i, array) => {
        let newDiv = pGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        newDiv.setAttribute('class', 'proj-tile');
        newDiv.setAttribute('id', array[i].title);
    }

    const setTitle = (i, array) => {
        let titleDiv = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('div'));
        titleDiv.setAttribute('class', 'tile-title');
        titleDiv.innerHTML = array[i].title;
    }

    const setDescrip = (i, array) => {
        let descripDiv = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('div'));
        descripDiv.setAttribute('class', 'tile-descrip');
        descripDiv.innerHTML = array[i].descrip;
    }

    const setDate = (i, array) => {
        let dateDiv = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('div'));
        dateDiv.setAttribute('class', 'tile-date');
        dateDiv.innerHTML = array[i].duedate;
    }

    const setArrow = (i) => {
        let arrow = new Image();
        arrow.src = _arrow_svg__WEBPACK_IMPORTED_MODULE_0__;
        arrow.setAttribute('class', 'arrow-img');

        var aTag = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('a'));
        aTag.setAttribute('href', "");
        aTag.setAttribute('class', 'arrow-btn');
        aTag.insertAdjacentElement('beforeend', arrow);

        const toDo = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_2__.toDoView)();
        aTag.addEventListener('click', function(e) {
            let targetId = e.target.closest('.proj-tile').id;
            toDo.build(targetId)
            e.preventDefault();
        })
    }

    const setDelete = (i) => {
        let trash = new Image();
        trash.src = _delete_svg__WEBPACK_IMPORTED_MODULE_1__;
        trash.setAttribute('class', 'delete-img');

        var aTag = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('a'));
        aTag.setAttribute('href', "");
        aTag.setAttribute('class', 'delete-btn');
        aTag.insertAdjacentElement('beforeend', trash);
    }

    const build = () => {

        pGrid.innerHTML = '';
        localProjects.splice(0, localProjects.length);

        for (var key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                if (!localProjects.includes(JSON.parse(localStorage[key]))) {
                    localProjects.push(JSON.parse(localStorage[key]));
                }
            }
        }

        for (let i = 0; i < localProjects.length; i++) {
            mainDiv(i, localProjects);
            setTitle(i, localProjects);
            setDate(i, localProjects);
            setDescrip(i, localProjects);
            setArrow(i)
            setDelete(i);
        }

        var sb = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.Sidebar)();
        sb.addProj(localProjects);
    }

    return {
        build
    }
}

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow.svg */ "./src/arrow.svg");
/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do.js */ "./src/to-do.js");

;


const Sidebar = () => {

    const addProj = (array) => {
        const sbcol = document.getElementById('sb-projcol')
        sbcol.innerHTML = '';

        for (let i = 0; i < array.length; i++) {
            var sbTitle = array[i].title;
            let sbDiv = sbcol.insertAdjacentElement('beforeend', document.createElement('div'));
            sbDiv.setAttribute('class', 'sb-row');
            sbDiv.setAttribute('id', `${sbTitle}`);
            sbDiv.innerHTML = sbTitle;
            setLink(sbDiv);
        }
    }

    const setLink = (div) => {
        const projArrow = new Image();
        projArrow.src = _arrow_svg__WEBPACK_IMPORTED_MODULE_0__;

        let sbaTag = div.insertAdjacentElement('beforeend', document.createElement('a'));
        sbaTag.setAttribute('class', 'sb-link');
        sbaTag.setAttribute('href', "");
        sbaTag.addEventListener('click', (e) => {
            let tdText = e.target.closest('.sb-row').id;
            let tdLink = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.toDoView)();
            tdLink.build(tdText);
            e.preventDefault();
        })

        let sbImg = sbaTag.insertAdjacentElement('beforeend', projArrow);
        sbImg.setAttribute('class', 'sb-img');
    }

    // const linkEvent = (link, e) => {
    //     link.addEventListener('click', () => {
    //         console.log('test');
    //         // e.preventDefault();
    //     });
    //     e.preventDefault();
    // }

    return {
        addProj
    }
}

/***/ }),

/***/ "./src/to-do.js":
/*!**********************!*\
  !*** ./src/to-do.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoView": () => (/* binding */ toDoView)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.svg */ "./src/add.svg");
/* harmony import */ var _arrow_back_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow_back.svg */ "./src/arrow_back.svg");

;



const toDoView = () => {

    var targetObj = [];

    const setPage = () => {
        if (document.getElementById('td-grid')) {
            document.getElementById('td-grid').innerHTML = '';
        } else {
            document.querySelector('#proj-grid').id = 'td-grid';
            document.querySelector('#td-grid').innerHTML = '';
        }
    }

    const backArrow = () => {
        var bArrow = new Image();
        bArrow.src = _arrow_back_svg__WEBPACK_IMPORTED_MODULE_2__;

        const tdGrid = document.getElementById('td-grid');
        let bArrowLink = tdGrid.insertAdjacentElement('afterbegin', document.createElement('a'));
        bArrowLink.setAttribute('id', 'back-btn');
        bArrowLink.setAttribute('href', "");

        let bArrowImg = bArrowLink.insertAdjacentElement('beforeend', bArrow);
        bArrowImg.setAttribute('id', 'back-img');

        let bArrowText = bArrowLink.insertAdjacentElement('beforeend', document.createElement('div'));
        bArrowText.innerHTML = 'Main Dashboard';

        bArrowLink.addEventListener('click', (e) => {
            document.getElementById('td-grid').innerHTML = '';
            document.getElementById('td-grid').id = 'proj-grid';

            let returnDash = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.projectTiles)();
            returnDash.build();
            e.preventDefault();
        })
    }

    const findProject = (id) => {
        targetObj.push(_project_js__WEBPACK_IMPORTED_MODULE_0__.localProjects.find(x => x.title == id));
    }

    const setTitle = () => {
        const tdGrid = document.getElementById('td-grid');

        let titleDiv = tdGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        titleDiv.setAttribute('id', 'td-title');
        titleDiv.innerHTML = `${targetObj[0].title}`;
    }

    const setSummary = () => {
        const tdGrid = document.getElementById('td-grid');

        let summParent = tdGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        summParent.setAttribute('id', 'summary');

        let sTitle = summParent.insertAdjacentElement('beforeend', document.createElement('div'));
        sTitle.setAttribute('id', 'summ-title');
        sTitle.innerHTML = 'Summary';

        let sText = summParent.insertAdjacentElement('beforeend', document.createElement('div'));
        sText.setAttribute('id', 'summ-text');
        sText.innerHTML = `${targetObj[0].descrip}`;
    }

    const setDate = () => {
        const tdGrid = document.getElementById('td-grid');

        let dateDiv = tdGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        dateDiv.setAttribute('id', 'td-date');
        
        
        let dTitle = dateDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        dTitle.setAttribute('id', 'date-title');
        dTitle.innerHTML = 'Estimated Completion';

        let dText = dateDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        dText.setAttribute('id', 'date-text');
        dText.innerHTML = `${targetObj[0].duedate}`;
    }

    const setNotes = () => {
        const tdGrid = document.getElementById('td-grid');

        let noteDiv = tdGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        noteDiv.setAttribute('id', 'td-notes');
        
        let nTitle = noteDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        nTitle.setAttribute('id', 'notes-title');
        nTitle.innerHTML = 'Notes';

        let nText = noteDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        nText.setAttribute('id', 'notes-text');
        nText.innerHTML = `${targetObj[0].notes}`;
    }

    const setToDo = () => {
        const tdGrid = document.getElementById('td-grid');

        let tdDiv = tdGrid.insertAdjacentElement('beforeend', document.createElement('div'));
        tdDiv.setAttribute('id', 'td-div');
        
        let tdTitle = tdDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        tdTitle.setAttribute('id', 'todo-title');
        tdTitle.innerHTML = 'To-Do';

        buildForm(tdDiv);

        let tdText = tdDiv.insertAdjacentElement('beforeend', document.createElement('div'));
        tdText.setAttribute('id', 'todo-box');
    }

    const setIcon = () => {
        let addIcon = new Image();
        addIcon.src = _add_svg__WEBPACK_IMPORTED_MODULE_1__;
        addIcon.setAttribute('id', 'td-img');

        const td_title = document.getElementById('todo-title');
        let tdA = td_title.insertAdjacentElement('beforeend', document.createElement('a'));
        tdA.setAttribute('id', 'td-btn');
        tdA.setAttribute('href', "");

        tdA.addEventListener('click', function(e) {
            document.getElementById('td-form').style.display = 'flex';
            e.preventDefault();
        })

        tdA.insertAdjacentElement('beforeend', addIcon);
    }

    const buildForm = (par) => {
        var form = par.insertAdjacentElement('beforeend', document.createElement('form'));
        form.setAttribute('id', 'td-form');

        let label = form.insertAdjacentElement('beforeend', document.createElement('label'));
        label.setAttribute('for', 'td-input');
        label.innerHTML = 'Enter task:';

        let input = form.insertAdjacentElement('beforeend', document.createElement('input'));
        input.setAttribute('id', 'td-input');

        let subBtn = form.insertAdjacentElement('beforeend', document.createElement('input'));
        subBtn.setAttribute('id', 'td-submit');
        subBtn.setAttribute('type', 'submit');
        subBtn.setAttribute('vale', 'Add');

        subBtn.addEventListener('click', function(e) {
            const inpText = document.getElementById('td-input').value;
            let taskFunc = Task();
            taskFunc.makeTask(inpText);
            e.preventDefault();
        })

        form.style.display = 'none';
    }

    const listTasks = () => {
        var targText = document.getElementById('td-title').innerHTML;
        var targProj = _project_js__WEBPACK_IMPORTED_MODULE_0__.localProjects.find(x => x.title == targText);

        if (targProj['tasks']) {
            for (let i = 0; i < targProj['tasks'].length; i++) {
                const tdbox = document.getElementById('todo-box');
                let tdtask = tdbox.insertAdjacentElement('beforeend', document.createElement('div'));
                tdtask.setAttribute('class', 'task-row')
                tdtask.innerHTML = `${targProj['tasks'][i]}`;
            }
        };
    }

    const build = (id) => {
        setPage();
        backArrow();
        findProject(id);
        setTitle();
        setSummary();
        setDate();
        setNotes();
        setToDo();
        setIcon();
        listTasks();
    }

    return {
        build
    }
}

const Task = () => {

    const makeTask = (value) => {
        const box = document.getElementById('todo-box');
        let task = box.insertAdjacentElement('beforeend', document.createElement('div'));
        task.setAttribute('class', 'task-row')
        task.innerHTML = `${value}`;
        logTask(value);
    }

    const logTask = (task) => {
        const titleText = document.getElementById('td-title').innerHTML;
        var targetProj = _project_js__WEBPACK_IMPORTED_MODULE_0__.localProjects.find(x => x.title == titleText);
        
        if (targetProj['tasks']) {
            targetProj['tasks'].push(task);
        } else {
            targetProj['tasks'] = new Array();
            targetProj['tasks'].push(task);
        }

        localStorage.setItem(`${titleText}`, JSON.stringify(targetProj));
    } 
    
    return {
        makeTask
    }

}

/***/ }),

/***/ "./src/RobotoReg.ttf":
/*!***************************!*\
  !*** ./src/RobotoReg.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/add.svg":
/*!*********************!*\
  !*** ./src/add.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46ae0e09d1132337aa92.svg";

/***/ }),

/***/ "./src/arrow.svg":
/*!***********************!*\
  !*** ./src/arrow.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8272589614ba1980d393.svg";

/***/ }),

/***/ "./src/arrow_back.svg":
/*!****************************!*\
  !*** ./src/arrow_back.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9933390d8fe945a2bdb2.svg";

/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3270f2c93c8c138fa6cc.svg";

/***/ }),

/***/ "./src/titles.ttf":
/*!************************!*\
  !*** ./src/titles.ttf ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b34debd26d5857b69192.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



const proj = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.projectmenu)();
const tiles = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.projectTiles)();

if (document.getElementById('proj-grid') && document.getElementById('proj-grid').innerHTML == '') {
    tiles.build();
}

document.getElementById('new-proj').addEventListener('click', function(e) {
    proj.menuDisplay();
    e.preventDefault();
})

document.getElementById('submit-menu').addEventListener('click', function(e) {
    proj.addProj();
    tiles.build();
    e.preventDefault();
})

document.getElementById('close-menu').addEventListener('click', function(e) {
    proj.menuClose();
    e.preventDefault();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUdBQStCO0FBQzNFLDRDQUE0QywyR0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsMkJBQTJCLDJEQUEyRCxHQUFHLGdCQUFnQiwwQkFBMEIsMkRBQTJELEdBQUcsVUFBVSxnQkFBZ0Isb0JBQW9CLDZCQUE2QixHQUFHLFlBQVksb0JBQW9CLHFDQUFxQyxnQ0FBZ0Msc0JBQXNCLHNDQUFzQyxHQUFHLFlBQVksd0JBQXdCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLHNCQUFzQixHQUFHLGVBQWUsb0JBQW9CLDBCQUEwQix5QkFBeUIsOEJBQThCLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLDBCQUEwQixzQkFBc0IsbUJBQW1CLEdBQUcsVUFBVSxvQkFBb0IseUJBQXlCLHFDQUFxQyxvQkFBb0IsdUJBQXVCLEdBQUcsY0FBYyxvQkFBb0IsNkJBQTZCLGdDQUFnQyw4Q0FBOEMsR0FBRyxlQUFlLHdCQUF3QiwyQkFBMkIsc0JBQXNCLEdBQUcsaUJBQWlCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsYUFBYSxvQkFBb0IscUNBQXFDLHFCQUFxQiwyQkFBMkIsc0JBQXNCLDBCQUEwQix1Q0FBdUMsR0FBRyxhQUFhLG1CQUFtQixrQkFBa0IsR0FBRyxlQUFlLHlCQUF5QixHQUFHLHFCQUFxQiwwQkFBMEIsR0FBRyxpQkFBaUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsMkJBQTJCLHNCQUFzQixHQUFHLHNCQUFzQiwyQkFBMkIsc0JBQXNCLEdBQUcsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQixzQkFBc0IsZ0JBQWdCLGVBQWUsK0NBQStDLG9CQUFvQixtQkFBbUIsZ0NBQWdDLHlCQUF5QixHQUFHLGdCQUFnQixvQkFBb0IsOEJBQThCLGdCQUFnQixHQUFHLGtCQUFrQixnQ0FBZ0MsbUJBQW1CLEdBQUcsaUJBQWlCLGdDQUFnQyxHQUFHLCtCQUErQiw0QkFBNEIsbUJBQW1CLHdCQUF3Qix5QkFBeUIsMEJBQTBCLHNCQUFzQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRyxnQkFBZ0Isb0JBQW9CLHFFQUFxRSxnRUFBZ0UseUJBQXlCLG1CQUFtQixHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLGVBQWUseUJBQXlCLG1CQUFtQixnQ0FBZ0MsMEJBQTBCLG9DQUFvQyxtQ0FBbUMsR0FBRyxpQkFBaUIsMkJBQTJCLEdBQUcsbUJBQW1CLDRCQUE0Qiw0QkFBNEIseUJBQXlCLDBCQUEwQixzQkFBc0IsR0FBRyxnQkFBZ0IsMEJBQTBCLHNCQUFzQixHQUFHLGlCQUFpQix5QkFBeUIsZ0JBQWdCLGtCQUFrQixHQUFHLGdCQUFnQix5QkFBeUIsa0JBQWtCLGtCQUFrQixHQUFHLGVBQWUsb0JBQW9CLDBCQUEwQixlQUFlLHlCQUF5QixnQkFBZ0IsZ0JBQWdCLDRCQUE0QixtQkFBbUIsMEJBQTBCLHNCQUFzQix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcsaURBQWlELGtCQUFrQixtQkFBbUIsR0FBRyxjQUFjLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLGlCQUFpQixnQ0FBZ0Msb0JBQW9CLGdDQUFnQywwQkFBMEIsb0NBQW9DLEdBQUcsZUFBZSxvQkFBb0IsOEJBQThCLHNCQUFzQiwyQkFBMkIsR0FBRyw0Q0FBNEMsb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsYUFBYSxjQUFjLEdBQUcsMERBQTBELDJCQUEyQixHQUFHLHlDQUF5QywwQkFBMEIsc0JBQXNCLHlDQUF5QywwQkFBMEIsR0FBRyxpQkFBaUIsb0JBQW9CLGVBQWUsR0FBRyxjQUFjLG9CQUFvQixlQUFlLDJCQUEyQixHQUFHLGVBQWUsaUJBQWlCLEdBQUcsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsR0FBRyxlQUFlLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGNBQWMsZUFBZSxHQUFHLGVBQWUsc0NBQXNDLDJCQUEyQiwwQkFBMEIsZ0NBQWdDLG9DQUFvQyxpQkFBaUIsR0FBRyxZQUFZLG9CQUFvQiw4QkFBOEIsc0JBQXNCLGdCQUFnQixrQkFBa0Isd0JBQXdCLGdDQUFnQywwQkFBMEIsc0JBQXNCLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxzQ0FBc0MsMkJBQTJCLCtCQUErQixHQUFHLGdCQUFnQiwwQkFBMEIsa0NBQWtDLEdBQUcsVUFBVSxnQkFBZ0Isb0JBQW9CLDZCQUE2QixHQUFHLFlBQVksb0JBQW9CLHFDQUFxQyxnQ0FBZ0Msc0JBQXNCLHNDQUFzQyxHQUFHLFlBQVksd0JBQXdCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLHNCQUFzQixHQUFHLGVBQWUsb0JBQW9CLDBCQUEwQix5QkFBeUIsOEJBQThCLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLDBCQUEwQixzQkFBc0IsbUJBQW1CLEdBQUcsVUFBVSxvQkFBb0IseUJBQXlCLHFDQUFxQyxvQkFBb0IsdUJBQXVCLEdBQUcsY0FBYyxvQkFBb0IsNkJBQTZCLGdDQUFnQyw4Q0FBOEMsR0FBRyxlQUFlLHdCQUF3QiwyQkFBMkIsc0JBQXNCLEdBQUcsaUJBQWlCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsYUFBYSxvQkFBb0IscUNBQXFDLHFCQUFxQiwyQkFBMkIsc0JBQXNCLDBCQUEwQix1Q0FBdUMsR0FBRyxhQUFhLG1CQUFtQixrQkFBa0IsR0FBRyxlQUFlLHlCQUF5QixHQUFHLHFCQUFxQiwwQkFBMEIsR0FBRyxpQkFBaUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsMkJBQTJCLHNCQUFzQixHQUFHLHNCQUFzQiwyQkFBMkIsc0JBQXNCLEdBQUcsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQixzQkFBc0IsZ0JBQWdCLGVBQWUsK0NBQStDLG9CQUFvQixtQkFBbUIsZ0NBQWdDLHlCQUF5QixHQUFHLGdCQUFnQixvQkFBb0IsOEJBQThCLGdCQUFnQixHQUFHLGtCQUFrQixnQ0FBZ0MsbUJBQW1CLEdBQUcsaUJBQWlCLGdDQUFnQyxHQUFHLCtCQUErQiw0QkFBNEIsbUJBQW1CLHdCQUF3Qix5QkFBeUIsMEJBQTBCLHNCQUFzQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRyxnQkFBZ0Isb0JBQW9CLHFFQUFxRSxnRUFBZ0UseUJBQXlCLG1CQUFtQixHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLGVBQWUseUJBQXlCLG1CQUFtQixnQ0FBZ0MsMEJBQTBCLG9DQUFvQyxtQ0FBbUMsR0FBRyxpQkFBaUIsMkJBQTJCLEdBQUcsbUJBQW1CLDRCQUE0Qiw0QkFBNEIseUJBQXlCLDBCQUEwQixzQkFBc0IsR0FBRyxnQkFBZ0IsMEJBQTBCLHNCQUFzQixHQUFHLGlCQUFpQix5QkFBeUIsZ0JBQWdCLGtCQUFrQixHQUFHLGdCQUFnQix5QkFBeUIsa0JBQWtCLGtCQUFrQixHQUFHLGVBQWUsb0JBQW9CLDBCQUEwQixlQUFlLHlCQUF5QixnQkFBZ0IsZ0JBQWdCLDRCQUE0QixtQkFBbUIsMEJBQTBCLHNCQUFzQix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcsaURBQWlELGtCQUFrQixtQkFBbUIsR0FBRyxjQUFjLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLGlCQUFpQixnQ0FBZ0Msb0JBQW9CLGdDQUFnQywwQkFBMEIsb0NBQW9DLEdBQUcsZUFBZSxvQkFBb0IsOEJBQThCLHNCQUFzQiwyQkFBMkIsR0FBRyw0Q0FBNEMsb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsYUFBYSxjQUFjLEdBQUcsMERBQTBELDJCQUEyQixHQUFHLHlDQUF5QywwQkFBMEIsc0JBQXNCLHlDQUF5QywwQkFBMEIsR0FBRyxpQkFBaUIsb0JBQW9CLGVBQWUsR0FBRyxjQUFjLG9CQUFvQixlQUFlLDJCQUEyQixHQUFHLGVBQWUsaUJBQWlCLEdBQUcsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsR0FBRyxlQUFlLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGNBQWMsZUFBZSxHQUFHLGVBQWUsc0NBQXNDLDJCQUEyQiwwQkFBMEIsZ0NBQWdDLG9DQUFvQyxpQkFBaUIsR0FBRyxZQUFZLG9CQUFvQiw4QkFBOEIsc0JBQXNCLGdCQUFnQixrQkFBa0Isd0JBQXdCLGdDQUFnQywwQkFBMEIsc0JBQXNCLEdBQUcsbUJBQW1CO0FBQ3AyYTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmK0I7QUFDRTtBQUNnQjtBQUNqRCxDQUFtQztBQUNDOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsY0FBYztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHVDQUFLO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixtREFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHdDQUFNO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixvREFBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUprQjtBQUNsQixDQUErQjtBQUNNOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHVDQUFLOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1EQUFRO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEaUI7QUFDakIsQ0FBMEQ7QUFDL0I7QUFDUTs7QUFFbkM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQUk7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLHlEQUFZO0FBQ3pDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSx1QkFBdUIsMkRBQWtCO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxtQkFBbUI7QUFDbkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsbUJBQW1CO0FBQ2hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHFDQUFHO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDJEQUFrQjs7QUFFekM7QUFDQSw0QkFBNEIsOEJBQThCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxQkFBcUI7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QiwyREFBa0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsVUFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3TkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tDOztBQUV2RCxhQUFhLHdEQUFXO0FBQ3hCLGNBQWMseURBQVk7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90by1kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vdGl0bGVzLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vUm9ib3RvUmVnLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFkZTgwO1xcbiAgICBwYWRkaW5nOiAzcmVtIDA7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAtMXB4IGdyYXk7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4jbmV3LXByb2oge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA3cHggMThweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBoZWlnaHQ6IDYxMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCA0cHggNHB4IC0xcHggZ3JheTtcXG59XFxuXFxuI3NiLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNzYi1wcm9qY29sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2Itcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDAgNjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICM5NGEzYjggc29saWQ7XFxufVxcblxcbi5zYi1pbWcge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uc2Itcm93IGEge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zYi1yb3c6aG92ZXIgYSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbiNtZW51LXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbiNwcm9qZWN0ID4gbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4jcHJvamVjdCA+IGlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG59XFxuXFxuI25wLW1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMjksIDIyOSwgMSk7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgYm9yZGVyOiAjNGFkZTgwIDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jZm9ybS1idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3N1Ym1pdC1tZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhZGU4MDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jY2xvc2UtbWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XFxufVxcblxcbiNjbG9zZS1tZW51LCAjc3VibWl0LW1lbnUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI3Byb2otZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDAuMzNmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwcHgsIDEwMHB4KSk7XFxuICAgIGdhcDogMS41cmVtIDIuNXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4ucHJvai10aWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDIzNXB4O1xcbiAgICBib3JkZXI6ICM0YWRlODAgMnB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcXG4gICAgcGFkZGluZzogMTVweCAzMHB4IDE3cHggMTVweDtcXG59XFxuXFxuLnRpbGUtdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG59XFxuXFxuLnRpbGUtZGVzY3JpcCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keSc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLnRpbGUtZGF0ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keSc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5hcnJvdy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICByaWdodDogMTBweDtcXG59XFxuXFxuI2JhY2stYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICBsZWZ0OiAyNiU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNiYWNrLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjNGFkZTgwO1xcbn1cXG5cXG4uYXJyb3ctaW1nLCAjdGQtaW1nLCAjYmFjay1pbWcsIC5kZWxldGUtaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuI3RkLWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMTAlIGF1dG8gMTAlIGF1dG87XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGJvcmRlcjogIzRhZGU4MCAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG5cXG4jdGQtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG59XFxuXFxuI3N1bW1hcnksICN0ZC1kYXRlLCAjdGQtbm90ZXMsICN0ZC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuI3RkLWRpdiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbiNzdW1tLXRpdGxlLCAjZGF0ZS10aXRsZSwgI25vdGVzLXRpdGxlLFxcbiN0b2RvLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxufVxcblxcbiNzdW1tLXRleHQsICNkYXRlLXRleHQsICNub3Rlcy10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4jdG9kby10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jdGQtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG59XFxuXFxuI3RkLWlucHV0IHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuI3RkLXN1Ym1pdCB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgcGFkZGluZzogMnB4IDRweDtcXG59XFxuXFxuI3RvZG8tYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi50YXNrLXJvdyB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCAjY2JkNWUxIHNvbGlkO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCBibGFjaztcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YWRlODA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keSc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTJCO0FBQy9COztBQUVBO0lBQ0ks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YUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG4gICAgc3JjOiB1cmwoJy4vdGl0bGVzLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgc3JjOiB1cmwoJy4vUm9ib3RvUmVnLnR0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YWRlODA7XFxuICAgIHBhZGRpbmc6IDNyZW0gMDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IC0xcHggZ3JheTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbiNuZXctcHJvaiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDdweCAxOHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keSc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGhlaWdodDogNjEwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDRweCA0cHggLTFweCBncmF5O1xcbn1cXG5cXG4jc2ItdGl0bGUge1xcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3NiLXByb2pjb2wge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zYi1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMCA2MHB4O1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggIzk0YTNiOCBzb2xpZDtcXG59XFxuXFxuLnNiLWltZyB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5zYi1yb3cgYSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnNiLXJvdzpob3ZlciBhIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuI21lbnUtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuI3Byb2plY3QgPiBsYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbiNwcm9qZWN0ID4gaW5wdXQsIHRleHRhcmVhIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbn1cXG5cXG4jbnAtbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIyOSwgMjI5LCAxKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXI6ICM0YWRlODAgMnB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNmb3JtLWJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jc3VibWl0LW1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFkZTgwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNjbG9zZS1tZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuI2Nsb3NlLW1lbnUsICNzdWJtaXQtbWVudSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jcHJvai1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMC4zM2ZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzBweCwgMTAwcHgpKTtcXG4gICAgZ2FwOiAxLjVyZW0gMi41cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5wcm9qLXRpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjM1cHg7XFxuICAgIGJvcmRlcjogIzRhZGU4MCAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTdweCAxNXB4O1xcbn1cXG5cXG4udGlsZS10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbn1cXG5cXG4udGlsZS1kZXNjcmlwIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4udGlsZS1kYXRlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTBweDtcXG59XFxuXFxuLmFycm93LWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA1cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jYmFjay1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIGxlZnQ6IDI2JTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keSc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2JhY2stYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ICM0YWRlODA7XFxufVxcblxcbi5hcnJvdy1pbWcsICN0ZC1pbWcsICNiYWNrLWltZywgLmRlbGV0ZS1pbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jdGQtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAxMCUgYXV0byAxMCUgYXV0bztcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyOiAjNGFkZTgwIDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcblxcbiN0ZC10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbn1cXG5cXG4jc3VtbWFyeSwgI3RkLWRhdGUsICN0ZC1ub3RlcywgI3RkLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4jdGQtZGl2IHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI3N1bW0tdGl0bGUsICNkYXRlLXRpdGxlLCAjbm90ZXMtdGl0bGUsXFxuI3RvZG8tdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG59XFxuXFxuI3N1bW0tdGV4dCwgI2RhdGUtdGV4dCwgI25vdGVzLXRleHQge1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcblxcbiN0b2RvLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiN0ZC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbn1cXG5cXG4jdGQtaW5wdXQge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4jdGQtc3VibWl0IHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbn1cXG5cXG4jdG9kby1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLnRhc2stcm93IHtcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4ICNjYmQ1ZTEgc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IGJsYWNrO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhZGU4MDtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEFycm93IGZyb20gJy4vYXJyb3cuc3ZnJ1xuaW1wb3J0IERlbGV0ZSBmcm9tICcuL2RlbGV0ZS5zdmcnXG5leHBvcnQge3Byb2plY3RtZW51LCBwcm9qZWN0VGlsZXMsIGxvY2FsUHJvamVjdHN9XG5pbXBvcnQge3RvRG9WaWV3fSBmcm9tICcuL3RvLWRvLmpzJ1xuaW1wb3J0IHtTaWRlYmFyfSBmcm9tICcuL3NpZGViYXIuanMnXG5cbnZhciBsb2NhbFByb2plY3RzID0gW107XG5cbmNvbnN0IHByb2plY3RtZW51ID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1lbnVEaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnAtbWVudScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF0uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS56SW5kZXggPSAnLTEnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcblxuICAgIH1cblxuICAgIGNvbnN0IG1lbnVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25wLW1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJykuc3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDBweCA0cHggNHB4IDAgZ3JheSc7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvaiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BUaXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwRGVzY3JpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwRGVzY3JpcCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBwRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwRGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwTm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncE5vdGVzJykudmFsdWU7XG5cbiAgICAgICAgdmFyIG5ld1Byb2ogPSBPYmplY3QuY3JlYXRlKHt9LCB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwVGl0bGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBEZXNjcmlwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVlZGF0ZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwRGF0ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vdGVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBOb3Rlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZW51Q2xvc2UoKTtcblxuICAgICAgICB2YXIgcHJvamVjdEJ1aWxkZXIgPSB7XG4gICAgICAgICAgICAndGl0bGUnOiBuZXdQcm9qLnRpdGxlLFxuICAgICAgICAgICAgJ2Rlc2NyaXAnOiBuZXdQcm9qLmRlc2NyaXAsXG4gICAgICAgICAgICAnZHVlZGF0ZSc6IG5ld1Byb2ouZHVlZGF0ZSxcbiAgICAgICAgICAgICdub3Rlcyc6IG5ld1Byb2oubm90ZXNcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke25ld1Byb2oudGl0bGV9YCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEJ1aWxkZXIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtZW51RGlzcGxheSxcbiAgICAgICAgbWVudUNsb3NlLFxuICAgICAgICBhZGRQcm9qXG4gICAgfVxufVxuXG5jb25zdCBwcm9qZWN0VGlsZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgcEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvai1ncmlkJyk7XG4gICAgLy9DcmVhdGVzIG1haW4gcHJvamVjdCB0aWxlXG4gICAgY29uc3QgbWFpbkRpdiA9IChpLCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgbmV3RGl2ID0gcEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2otdGlsZScpO1xuICAgICAgICBuZXdEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGFycmF5W2ldLnRpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChpLCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgdGl0bGVEaXYgPSBwR3JpZC5jaGlsZHJlbltpXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aWxlLXRpdGxlJyk7XG4gICAgICAgIHRpdGxlRGl2LmlubmVySFRNTCA9IGFycmF5W2ldLnRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERlc2NyaXAgPSAoaSwgYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IGRlc2NyaXBEaXYgPSBwR3JpZC5jaGlsZHJlbltpXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgZGVzY3JpcERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpbGUtZGVzY3JpcCcpO1xuICAgICAgICBkZXNjcmlwRGl2LmlubmVySFRNTCA9IGFycmF5W2ldLmRlc2NyaXA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGF0ZSA9IChpLCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgZGF0ZURpdiA9IHBHcmlkLmNoaWxkcmVuW2ldLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBkYXRlRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZS1kYXRlJyk7XG4gICAgICAgIGRhdGVEaXYuaW5uZXJIVE1MID0gYXJyYXlbaV0uZHVlZGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRBcnJvdyA9IChpKSA9PiB7XG4gICAgICAgIGxldCBhcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBhcnJvdy5zcmMgPSBBcnJvdztcbiAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcnJvdy1pbWcnKTtcblxuICAgICAgICB2YXIgYVRhZyA9IHBHcmlkLmNoaWxkcmVuW2ldLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbiAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIlwiKTtcbiAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Fycm93LWJ0bicpO1xuICAgICAgICBhVGFnLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgYXJyb3cpO1xuXG4gICAgICAgIGNvbnN0IHRvRG8gPSB0b0RvVmlldygpO1xuICAgICAgICBhVGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldElkID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2otdGlsZScpLmlkO1xuICAgICAgICAgICAgdG9Eby5idWlsZCh0YXJnZXRJZClcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzZXREZWxldGUgPSAoaSkgPT4ge1xuICAgICAgICBsZXQgdHJhc2ggPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdHJhc2guc3JjID0gRGVsZXRlO1xuICAgICAgICB0cmFzaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbGV0ZS1pbWcnKTtcblxuICAgICAgICB2YXIgYVRhZyA9IHBHcmlkLmNoaWxkcmVuW2ldLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbiAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIlwiKTtcbiAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbGV0ZS1idG4nKTtcbiAgICAgICAgYVRhZy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHRyYXNoKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZCA9ICgpID0+IHtcblxuICAgICAgICBwR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbG9jYWxQcm9qZWN0cy5zcGxpY2UoMCwgbG9jYWxQcm9qZWN0cy5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBsb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICghbG9jYWxQcm9qZWN0cy5pbmNsdWRlcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtrZXldKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxQcm9qZWN0cy5wdXNoKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2tleV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1haW5EaXYoaSwgbG9jYWxQcm9qZWN0cyk7XG4gICAgICAgICAgICBzZXRUaXRsZShpLCBsb2NhbFByb2plY3RzKTtcbiAgICAgICAgICAgIHNldERhdGUoaSwgbG9jYWxQcm9qZWN0cyk7XG4gICAgICAgICAgICBzZXREZXNjcmlwKGksIGxvY2FsUHJvamVjdHMpO1xuICAgICAgICAgICAgc2V0QXJyb3coaSlcbiAgICAgICAgICAgIHNldERlbGV0ZShpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzYiA9IFNpZGViYXIoKTtcbiAgICAgICAgc2IuYWRkUHJvaihsb2NhbFByb2plY3RzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZFxuICAgIH1cbn0iLCJleHBvcnQgeyBTaWRlYmFyIH1cbmltcG9ydCBBcnJvdyBmcm9tICcuL2Fycm93LnN2ZydcbmltcG9ydCB7IHRvRG9WaWV3IH0gZnJvbSAnLi90by1kby5qcydcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcblxuICAgIGNvbnN0IGFkZFByb2ogPSAoYXJyYXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2Jjb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2ItcHJvamNvbCcpXG4gICAgICAgIHNiY29sLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzYlRpdGxlID0gYXJyYXlbaV0udGl0bGU7XG4gICAgICAgICAgICBsZXQgc2JEaXYgPSBzYmNvbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICAgIHNiRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2Itcm93Jyk7XG4gICAgICAgICAgICBzYkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7c2JUaXRsZX1gKTtcbiAgICAgICAgICAgIHNiRGl2LmlubmVySFRNTCA9IHNiVGl0bGU7XG4gICAgICAgICAgICBzZXRMaW5rKHNiRGl2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldExpbmsgPSAoZGl2KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwcm9qQXJyb3cuc3JjID0gQXJyb3c7XG5cbiAgICAgICAgbGV0IHNiYVRhZyA9IGRpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XG4gICAgICAgIHNiYVRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NiLWxpbmsnKTtcbiAgICAgICAgc2JhVGFnLnNldEF0dHJpYnV0ZSgnaHJlZicsIFwiXCIpO1xuICAgICAgICBzYmFUYWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRkVGV4dCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zYi1yb3cnKS5pZDtcbiAgICAgICAgICAgIGxldCB0ZExpbmsgPSB0b0RvVmlldygpO1xuICAgICAgICAgICAgdGRMaW5rLmJ1aWxkKHRkVGV4dCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHNiSW1nID0gc2JhVGFnLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgcHJvakFycm93KTtcbiAgICAgICAgc2JJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzYi1pbWcnKTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBsaW5rRXZlbnQgPSAobGluaywgZSkgPT4ge1xuICAgIC8vICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAvLyAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qXG4gICAgfVxufSIsImV4cG9ydCB7dG9Eb1ZpZXd9XG5pbXBvcnQgeyBwcm9qZWN0VGlsZXMsIGxvY2FsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCJcbmltcG9ydCBBZGQgZnJvbSAnLi9hZGQuc3ZnJ1xuaW1wb3J0IEJhY2sgZnJvbSAnLi9hcnJvd19iYWNrLnN2ZydcblxuY29uc3QgdG9Eb1ZpZXcgPSAoKSA9PiB7XG5cbiAgICB2YXIgdGFyZ2V0T2JqID0gW107XG5cbiAgICBjb25zdCBzZXRQYWdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qLWdyaWQnKS5pZCA9ICd0ZC1ncmlkJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZC1ncmlkJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBiYWNrQXJyb3cgPSAoKSA9PiB7XG4gICAgICAgIHZhciBiQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYkFycm93LnNyYyA9IEJhY2s7XG5cbiAgICAgICAgY29uc3QgdGRHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKTtcbiAgICAgICAgbGV0IGJBcnJvd0xpbmsgPSB0ZEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbiAgICAgICAgYkFycm93TGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhY2stYnRuJyk7XG4gICAgICAgIGJBcnJvd0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgXCJcIik7XG5cbiAgICAgICAgbGV0IGJBcnJvd0ltZyA9IGJBcnJvd0xpbmsuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBiQXJyb3cpO1xuICAgICAgICBiQXJyb3dJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrLWltZycpO1xuXG4gICAgICAgIGxldCBiQXJyb3dUZXh0ID0gYkFycm93TGluay5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgYkFycm93VGV4dC5pbm5lckhUTUwgPSAnTWFpbiBEYXNoYm9hcmQnO1xuXG4gICAgICAgIGJBcnJvd0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJykuaWQgPSAncHJvai1ncmlkJztcblxuICAgICAgICAgICAgbGV0IHJldHVybkRhc2ggPSBwcm9qZWN0VGlsZXMoKTtcbiAgICAgICAgICAgIHJldHVybkRhc2guYnVpbGQoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kUHJvamVjdCA9IChpZCkgPT4ge1xuICAgICAgICB0YXJnZXRPYmoucHVzaChsb2NhbFByb2plY3RzLmZpbmQoeCA9PiB4LnRpdGxlID09IGlkKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG5cbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gdGRHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLXRpdGxlJyk7XG4gICAgICAgIHRpdGxlRGl2LmlubmVySFRNTCA9IGAke3RhcmdldE9ialswXS50aXRsZX1gO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFN1bW1hcnkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG5cbiAgICAgICAgbGV0IHN1bW1QYXJlbnQgPSB0ZEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHN1bW1QYXJlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdzdW1tYXJ5Jyk7XG5cbiAgICAgICAgbGV0IHNUaXRsZSA9IHN1bW1QYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHNUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1bW0tdGl0bGUnKTtcbiAgICAgICAgc1RpdGxlLmlubmVySFRNTCA9ICdTdW1tYXJ5JztcblxuICAgICAgICBsZXQgc1RleHQgPSBzdW1tUGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBzVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1bW0tdGV4dCcpO1xuICAgICAgICBzVGV4dC5pbm5lckhUTUwgPSBgJHt0YXJnZXRPYmpbMF0uZGVzY3JpcH1gO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG5cbiAgICAgICAgbGV0IGRhdGVEaXYgPSB0ZEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGRhdGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1kYXRlJyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgbGV0IGRUaXRsZSA9IGRhdGVEaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUtdGl0bGUnKTtcbiAgICAgICAgZFRpdGxlLmlubmVySFRNTCA9ICdFc3RpbWF0ZWQgQ29tcGxldGlvbic7XG5cbiAgICAgICAgbGV0IGRUZXh0ID0gZGF0ZURpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgZFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLXRleHQnKTtcbiAgICAgICAgZFRleHQuaW5uZXJIVE1MID0gYCR7dGFyZ2V0T2JqWzBdLmR1ZWRhdGV9YDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROb3RlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGRHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLWdyaWQnKTtcblxuICAgICAgICBsZXQgbm90ZURpdiA9IHRkR3JpZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgbm90ZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLW5vdGVzJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgblRpdGxlID0gbm90ZURpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgblRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbm90ZXMtdGl0bGUnKTtcbiAgICAgICAgblRpdGxlLmlubmVySFRNTCA9ICdOb3Rlcyc7XG5cbiAgICAgICAgbGV0IG5UZXh0ID0gbm90ZURpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgblRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdub3Rlcy10ZXh0Jyk7XG4gICAgICAgIG5UZXh0LmlubmVySFRNTCA9IGAke3RhcmdldE9ialswXS5ub3Rlc31gO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRvRG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG5cbiAgICAgICAgbGV0IHRkRGl2ID0gdGRHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0ZERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLWRpdicpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRkVGl0bGUgPSB0ZERpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgdGRUaXRsZS5pbm5lckhUTUwgPSAnVG8tRG8nO1xuXG4gICAgICAgIGJ1aWxkRm9ybSh0ZERpdik7XG5cbiAgICAgICAgbGV0IHRkVGV4dCA9IHRkRGl2Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0ZFRleHQuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWJveCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEljb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBhZGRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGFkZEljb24uc3JjID0gQWRkO1xuICAgICAgICBhZGRJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtaW1nJyk7XG5cbiAgICAgICAgY29uc3QgdGRfdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpO1xuICAgICAgICBsZXQgdGRBID0gdGRfdGl0bGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xuICAgICAgICB0ZEEuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1idG4nKTtcbiAgICAgICAgdGRBLnNldEF0dHJpYnV0ZSgnaHJlZicsIFwiXCIpO1xuXG4gICAgICAgIHRkQS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1mb3JtJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0ZEEuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBhZGRJY29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZEZvcm0gPSAocGFyKSA9PiB7XG4gICAgICAgIHZhciBmb3JtID0gcGFyLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLWZvcm0nKTtcblxuICAgICAgICBsZXQgbGFiZWwgPSBmb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RkLWlucHV0Jyk7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdFbnRlciB0YXNrOic7XG5cbiAgICAgICAgbGV0IGlucHV0ID0gZm9ybS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLWlucHV0Jyk7XG5cbiAgICAgICAgbGV0IHN1YkJ0biA9IGZvcm0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcbiAgICAgICAgc3ViQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtc3VibWl0Jyk7XG4gICAgICAgIHN1YkJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgIHN1YkJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbGUnLCAnQWRkJyk7XG5cbiAgICAgICAgc3ViQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY29uc3QgaW5wVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHRhc2tGdW5jID0gVGFzaygpO1xuICAgICAgICAgICAgdGFza0Z1bmMubWFrZVRhc2soaW5wVGV4dCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgdmFyIHRhcmdUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLXRpdGxlJykuaW5uZXJIVE1MO1xuICAgICAgICB2YXIgdGFyZ1Byb2ogPSBsb2NhbFByb2plY3RzLmZpbmQoeCA9PiB4LnRpdGxlID09IHRhcmdUZXh0KTtcblxuICAgICAgICBpZiAodGFyZ1Byb2pbJ3Rhc2tzJ10pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ1Byb2pbJ3Rhc2tzJ10ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWJveCcpO1xuICAgICAgICAgICAgICAgIGxldCB0ZHRhc2sgPSB0ZGJveC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICAgICAgICB0ZHRhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLXJvdycpXG4gICAgICAgICAgICAgICAgdGR0YXNrLmlubmVySFRNTCA9IGAke3RhcmdQcm9qWyd0YXNrcyddW2ldfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGQgPSAoaWQpID0+IHtcbiAgICAgICAgc2V0UGFnZSgpO1xuICAgICAgICBiYWNrQXJyb3coKTtcbiAgICAgICAgZmluZFByb2plY3QoaWQpO1xuICAgICAgICBzZXRUaXRsZSgpO1xuICAgICAgICBzZXRTdW1tYXJ5KCk7XG4gICAgICAgIHNldERhdGUoKTtcbiAgICAgICAgc2V0Tm90ZXMoKTtcbiAgICAgICAgc2V0VG9EbygpO1xuICAgICAgICBzZXRJY29uKCk7XG4gICAgICAgIGxpc3RUYXNrcygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJ1aWxkXG4gICAgfVxufVxuXG5jb25zdCBUYXNrID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbWFrZVRhc2sgPSAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tYm94Jyk7XG4gICAgICAgIGxldCB0YXNrID0gYm94Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1yb3cnKVxuICAgICAgICB0YXNrLmlubmVySFRNTCA9IGAke3ZhbHVlfWA7XG4gICAgICAgIGxvZ1Rhc2sodmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ1Rhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtdGl0bGUnKS5pbm5lckhUTUw7XG4gICAgICAgIHZhciB0YXJnZXRQcm9qID0gbG9jYWxQcm9qZWN0cy5maW5kKHggPT4geC50aXRsZSA9PSB0aXRsZVRleHQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRhcmdldFByb2pbJ3Rhc2tzJ10pIHtcbiAgICAgICAgICAgIHRhcmdldFByb2pbJ3Rhc2tzJ10ucHVzaCh0YXNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFByb2pbJ3Rhc2tzJ10gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIHRhcmdldFByb2pbJ3Rhc2tzJ10ucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RpdGxlVGV4dH1gLCBKU09OLnN0cmluZ2lmeSh0YXJnZXRQcm9qKSk7XG4gICAgfSBcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWtlVGFza1xuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge3Byb2plY3RtZW51LCBwcm9qZWN0VGlsZXN9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbmNvbnN0IHByb2ogPSBwcm9qZWN0bWVudSgpO1xuY29uc3QgdGlsZXMgPSBwcm9qZWN0VGlsZXMoKTtcblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qLWdyaWQnKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvai1ncmlkJykuaW5uZXJIVE1MID09ICcnKSB7XG4gICAgdGlsZXMuYnVpbGQoKTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgcHJvai5tZW51RGlzcGxheSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHByb2ouYWRkUHJvaigpO1xuICAgIHRpbGVzLmJ1aWxkKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSlcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLW1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBwcm9qLm1lbnVDbG9zZSgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9