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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Title';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: 'Body';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nbody {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    background-color: #4ade80;\n    padding: 3rem 0;\n    box-shadow: 0 4px 4px -1px gray;\n}\n\n#title {\n    margin-left: 3rem;\n    display: flex;\n    align-items: center;\n    font-family: 'Title';\n    font-size: 35px;\n}\n\n#new-proj {\n    display: flex;\n    align-items: center;\n    margin-right: 3rem;\n    background-color: white;\n    padding: 7px 18px;\n    text-decoration: none;\n    border-radius: 12px;\n    font-family: 'Body';\n    font-size: 15px;\n    color: black;\n}\n\nmain {\n    display: grid;\n    position: relative;\n    grid-template-columns: 1fr 3fr;\n    height: 610px;\n    overflow: scroll;\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: #f3f4f6;\n    box-shadow: inset 0px 4px 4px -1px gray;\n}\n\n#sb-title {\n    margin: 20px auto;\n    font-family: 'Title';\n    font-size: 20px;\n}\n\n#sb-projcol {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sb-row {\n    display: flex;\n    justify-content: space-between;\n    margin: 0 60px;\n    font-family: 'Title';\n    font-size: 20px;\n    padding-bottom: 2px;\n    border-bottom: 1px #94a3b8 solid;\n}\n\n.sb-img {\n    height: 25px;\n    width: 25px;\n}\n\n.sb-row a {\n    visibility: hidden;\n}\n\n.sb-row:hover a {\n    visibility: visible;\n}\n\n#menu-title {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n    font-family: 'Title';\n    font-size: 25px;\n}\n\n#project > label {\n    font-family: 'Title';\n    font-size: 15px;\n}\n\n#project > input, textarea {\n    margin-bottom: 5px;\n    font-family: 'Body';\n}\n\n#np-menu {\n    display: none;\n    position: fixed;\n    left: 40%;\n    top: 25%;\n    background-color: rgba(229, 229, 229, 1);\n    padding: 30px;\n    width: 350px;\n    border: #4ade80 2px solid;\n    border-radius: 8px;\n}\n\n#form-btns {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n#submit-menu {\n    background-color: #4ade80;\n    border: none;\n}\n\n#close-menu {\n    background-color: #ef4444;\n}\n\n#close-menu, #submit-menu {\n    text-decoration: none;\n    color: white;\n    padding: 8px 12px;\n    border-radius: 8px;\n    font-family: 'Body';\n    font-size: 15px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n}\n\n#proj-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 0.33fr));\n    grid-template-rows: repeat(auto-fit, minmax(30px, 100px));\n    gap: 1.5rem 2.5rem;\n    margin: 1rem;\n}\n\n.proj-tile {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    position: relative;\n    border: #4ade80 2px solid;\n    border-radius: 10px;\n    box-shadow: 2px 2px 5px black;\n    padding: 15px 30px 17px 15px;\n}\n\n.tile-title {\n    font-family: 'Title';\n}\n\n.tile-descrip {\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    overflow-y: scroll;\n    font-family: 'Body';\n    font-size: 15px;\n}\n\n.tile-date {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-family: 'Body';\n    font-size: 15px;\n}\n\n.arrow-btn {\n    position: absolute;\n    bottom: 5px;\n    right: 10px;\n}\n\n#back-btn {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    position: absolute;\n    top: 15px;\n    left: 26%;\n    text-decoration: none;\n    color: black;\n    font-family: 'Body';\n    font-size: 15px;\n    font-weight: 700;\n}\n\n#back-btn:hover {\n    color: #4ade80;\n}\n\n.arrow-img, #td-img, #back-img {\n    width: 20px;\n    height: 20px;\n}\n\n#td-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 50%;\n    margin: 10% auto 10% auto;\n    padding: 2rem;\n    border: #4ade80 2px solid;\n    border-radius: 15px;\n    box-shadow: 2px 2px 5px black;\n}\n\n#td-title {\n    display: flex;\n    justify-content: center;\n    font-size: 30px;\n    font-family: 'Title';\n}\n\n#summary, #td-date, #td-notes, #td-div {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n#td-div {\n    flex: 1;\n}\n\n#summ-title, #date-title, #notes-title,\n#todo-title {\n    font-family: 'Title';\n}\n\n#summ-text, #date-text, #notes-text {\n    font-family: 'Body';\n    font-size: 15px;\n    border-bottom: 1px solid lightgray;\n    padding-bottom: 8px;\n}\n\n#todo-title {\n    display: flex;\n    gap: 5px;\n}\n\n#td-form {\n    display: flex;\n    gap: 5px;\n    font-family: 'Title';\n}\n\n#td-input {\n    width: 60%;\n}\n\n#td-submit {\n    width: max-content;\n    padding: 2px 4px;\n}\n\n#todo-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n    gap: 3px;\n}\n\n.task-row {\n    padding: 0.5rem 0 0.5rem 1.5rem;\n    font-family: 'Title';\n    border-radius: 10px;\n    border: 1px #cbd5e1 solid;\n    box-shadow: 1px 1px 4px black;\n    width: 70%;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 0.5rem 0;\n    background-color: #4ade80;\n    font-family: 'Body';\n    font-size: 15px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Title';\n    src: url('./titles.ttf');\n}\n\n@font-face {\n    font-family: 'Body';\n    src: url('./RobotoReg.ttf');\n}\n\nbody {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    background-color: #4ade80;\n    padding: 3rem 0;\n    box-shadow: 0 4px 4px -1px gray;\n}\n\n#title {\n    margin-left: 3rem;\n    display: flex;\n    align-items: center;\n    font-family: 'Title';\n    font-size: 35px;\n}\n\n#new-proj {\n    display: flex;\n    align-items: center;\n    margin-right: 3rem;\n    background-color: white;\n    padding: 7px 18px;\n    text-decoration: none;\n    border-radius: 12px;\n    font-family: 'Body';\n    font-size: 15px;\n    color: black;\n}\n\nmain {\n    display: grid;\n    position: relative;\n    grid-template-columns: 1fr 3fr;\n    height: 610px;\n    overflow: scroll;\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    background-color: #f3f4f6;\n    box-shadow: inset 0px 4px 4px -1px gray;\n}\n\n#sb-title {\n    margin: 20px auto;\n    font-family: 'Title';\n    font-size: 20px;\n}\n\n#sb-projcol {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sb-row {\n    display: flex;\n    justify-content: space-between;\n    margin: 0 60px;\n    font-family: 'Title';\n    font-size: 20px;\n    padding-bottom: 2px;\n    border-bottom: 1px #94a3b8 solid;\n}\n\n.sb-img {\n    height: 25px;\n    width: 25px;\n}\n\n.sb-row a {\n    visibility: hidden;\n}\n\n.sb-row:hover a {\n    visibility: visible;\n}\n\n#menu-title {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 10px;\n    font-family: 'Title';\n    font-size: 25px;\n}\n\n#project > label {\n    font-family: 'Title';\n    font-size: 15px;\n}\n\n#project > input, textarea {\n    margin-bottom: 5px;\n    font-family: 'Body';\n}\n\n#np-menu {\n    display: none;\n    position: fixed;\n    left: 40%;\n    top: 25%;\n    background-color: rgba(229, 229, 229, 1);\n    padding: 30px;\n    width: 350px;\n    border: #4ade80 2px solid;\n    border-radius: 8px;\n}\n\n#form-btns {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n#submit-menu {\n    background-color: #4ade80;\n    border: none;\n}\n\n#close-menu {\n    background-color: #ef4444;\n}\n\n#close-menu, #submit-menu {\n    text-decoration: none;\n    color: white;\n    padding: 8px 12px;\n    border-radius: 8px;\n    font-family: 'Body';\n    font-size: 15px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n}\n\n#proj-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 0.33fr));\n    grid-template-rows: repeat(auto-fit, minmax(30px, 100px));\n    gap: 1.5rem 2.5rem;\n    margin: 1rem;\n}\n\n.proj-tile {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    position: relative;\n    border: #4ade80 2px solid;\n    border-radius: 10px;\n    box-shadow: 2px 2px 5px black;\n    padding: 15px 30px 17px 15px;\n}\n\n.tile-title {\n    font-family: 'Title';\n}\n\n.tile-descrip {\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    overflow-y: scroll;\n    font-family: 'Body';\n    font-size: 15px;\n}\n\n.tile-date {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-family: 'Body';\n    font-size: 15px;\n}\n\n.arrow-btn {\n    position: absolute;\n    bottom: 5px;\n    right: 10px;\n}\n\n#back-btn {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    position: absolute;\n    top: 15px;\n    left: 26%;\n    text-decoration: none;\n    color: black;\n    font-family: 'Body';\n    font-size: 15px;\n    font-weight: 700;\n}\n\n#back-btn:hover {\n    color: #4ade80;\n}\n\n.arrow-img, #td-img, #back-img {\n    width: 20px;\n    height: 20px;\n}\n\n#td-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    width: 50%;\n    margin: 10% auto 10% auto;\n    padding: 2rem;\n    border: #4ade80 2px solid;\n    border-radius: 15px;\n    box-shadow: 2px 2px 5px black;\n}\n\n#td-title {\n    display: flex;\n    justify-content: center;\n    font-size: 30px;\n    font-family: 'Title';\n}\n\n#summary, #td-date, #td-notes, #td-div {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n#td-div {\n    flex: 1;\n}\n\n#summ-title, #date-title, #notes-title,\n#todo-title {\n    font-family: 'Title';\n}\n\n#summ-text, #date-text, #notes-text {\n    font-family: 'Body';\n    font-size: 15px;\n    border-bottom: 1px solid lightgray;\n    padding-bottom: 8px;\n}\n\n#todo-title {\n    display: flex;\n    gap: 5px;\n}\n\n#td-form {\n    display: flex;\n    gap: 5px;\n    font-family: 'Title';\n}\n\n#td-input {\n    width: 60%;\n}\n\n#td-submit {\n    width: max-content;\n    padding: 2px 4px;\n}\n\n#todo-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n    gap: 3px;\n}\n\n.task-row {\n    padding: 0.5rem 0 0.5rem 1.5rem;\n    font-family: 'Title';\n    border-radius: 10px;\n    border: 1px #cbd5e1 solid;\n    box-shadow: 1px 1px 4px black;\n    width: 70%;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    padding: 0.5rem 0;\n    background-color: #4ade80;\n    font-family: 'Body';\n    font-size: 15px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do.js */ "./src/to-do.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");


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
        
        // var obj = localStorage.getItem(`${newProj.title}`);
        // console.log(JSON.parse(obj));

        var sb = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_2__.Sidebar)();
        sb.addProj(projects);
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

        let aTag = pGrid.children[i].insertAdjacentElement('beforeend', document.createElement('a'));
        aTag.setAttribute('href', "");
        aTag.setAttribute('class', 'arrow-btn');
        aTag.insertAdjacentElement('beforeend', arrow);

        const toDo = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.toDoView)();
        aTag.addEventListener('click', function(e) {
            let targetId = e.target.closest('.proj-tile').id;
            toDo.build(targetId)
            e.preventDefault();
        })
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
            setDescrip(i, localProjects);
            setDate(i, localProjects);
            setArrow(i)
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNrQzs7QUFFdkQsYUFBYSx3REFBVztBQUN4QixjQUFjLHlEQUFZOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3RpdGxlcy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL1JvYm90b1JlZy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhZGU4MDtcXG4gICAgcGFkZGluZzogM3JlbSAwO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggLTFweCBncmF5O1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuXFxuI25ldy1wcm9qIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogN3B4IDE4cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgaGVpZ2h0OiA2MTBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCAtMXB4IGdyYXk7XFxufVxcblxcbiNzYi10aXRsZSB7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jc2ItcHJvamNvbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNiLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwIDYwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCAjOTRhM2I4IHNvbGlkO1xcbn1cXG5cXG4uc2ItaW1nIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuLnNiLXJvdyBhIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2Itcm93OmhvdmVyIGEge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4jbWVudS10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4jcHJvamVjdCA+IGxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuI3Byb2plY3QgPiBpbnB1dCwgdGV4dGFyZWEge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keSc7XFxufVxcblxcbiNucC1tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgMjI5LCAyMjksIDEpO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGJvcmRlcjogIzRhZGU4MCAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI2Zvcm0tYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNzdWJtaXQtbWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YWRlODA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2Nsb3NlLW1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4jY2xvc2UtbWVudSwgI3N1Ym1pdC1tZW51IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keSc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNwcm9qLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAwLjMzZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHB4LCAxMDBweCkpO1xcbiAgICBnYXA6IDEuNXJlbSAyLjVyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnByb2otdGlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogIzRhZGU4MCAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTdweCAxNXB4O1xcbn1cXG5cXG4udGlsZS10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbn1cXG5cXG4udGlsZS1kZXNjcmlwIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4udGlsZS1kYXRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5hcnJvdy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICByaWdodDogMTBweDtcXG59XFxuXFxuI2JhY2stYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICBsZWZ0OiAyNiU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNiYWNrLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjNGFkZTgwO1xcbn1cXG5cXG4uYXJyb3ctaW1nLCAjdGQtaW1nLCAjYmFjay1pbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jdGQtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAxMCUgYXV0byAxMCUgYXV0bztcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyOiAjNGFkZTgwIDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcblxcbiN0ZC10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbn1cXG5cXG4jc3VtbWFyeSwgI3RkLWRhdGUsICN0ZC1ub3RlcywgI3RkLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4jdGQtZGl2IHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI3N1bW0tdGl0bGUsICNkYXRlLXRpdGxlLCAjbm90ZXMtdGl0bGUsXFxuI3RvZG8tdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG59XFxuXFxuI3N1bW0tdGV4dCwgI2RhdGUtdGV4dCwgI25vdGVzLXRleHQge1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcblxcbiN0b2RvLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiN0ZC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbn1cXG5cXG4jdGQtaW5wdXQge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4jdGQtc3VibWl0IHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbn1cXG5cXG4jdG9kby1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLnRhc2stcm93IHtcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4ICNjYmQ1ZTEgc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IGJsYWNrO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhZGU4MDtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBMkI7QUFDL0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIs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QkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBOztJQUVJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtBQUNaOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbiAgICBzcmM6IHVybCgnLi90aXRsZXMudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBzcmM6IHVybCgnLi9Sb2JvdG9SZWcudHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhZGU4MDtcXG4gICAgcGFkZGluZzogM3JlbSAwO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggLTFweCBncmF5O1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuXFxuI25ldy1wcm9qIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogN3B4IDE4cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgaGVpZ2h0OiA2MTBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCAtMXB4IGdyYXk7XFxufVxcblxcbiNzYi10aXRsZSB7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jc2ItcHJvamNvbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNiLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwIDYwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCAjOTRhM2I4IHNvbGlkO1xcbn1cXG5cXG4uc2ItaW1nIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuLnNiLXJvdyBhIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2Itcm93OmhvdmVyIGEge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4jbWVudS10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4jcHJvamVjdCA+IGxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuI3Byb2plY3QgPiBpbnB1dCwgdGV4dGFyZWEge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keSc7XFxufVxcblxcbiNucC1tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgMjI5LCAyMjksIDEpO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGJvcmRlcjogIzRhZGU4MCAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI2Zvcm0tYnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNzdWJtaXQtbWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YWRlODA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2Nsb3NlLW1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0O1xcbn1cXG5cXG4jY2xvc2UtbWVudSwgI3N1Ym1pdC1tZW51IHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQm9keSc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNwcm9qLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAwLjMzZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHB4LCAxMDBweCkpO1xcbiAgICBnYXA6IDEuNXJlbSAyLjVyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLnByb2otdGlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogIzRhZGU4MCAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTdweCAxNXB4O1xcbn1cXG5cXG4udGlsZS10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbn1cXG5cXG4udGlsZS1kZXNjcmlwIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4udGlsZS1kYXRlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5hcnJvdy1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICByaWdodDogMTBweDtcXG59XFxuXFxuI2JhY2stYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICBsZWZ0OiAyNiU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNiYWNrLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjNGFkZTgwO1xcbn1cXG5cXG4uYXJyb3ctaW1nLCAjdGQtaW1nLCAjYmFjay1pbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jdGQtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAxMCUgYXV0byAxMCUgYXV0bztcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgYm9yZGVyOiAjNGFkZTgwIDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcblxcbiN0ZC10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbn1cXG5cXG4jc3VtbWFyeSwgI3RkLWRhdGUsICN0ZC1ub3RlcywgI3RkLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4jdGQtZGl2IHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI3N1bW0tdGl0bGUsICNkYXRlLXRpdGxlLCAjbm90ZXMtdGl0bGUsXFxuI3RvZG8tdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1RpdGxlJztcXG59XFxuXFxuI3N1bW0tdGV4dCwgI2RhdGUtdGV4dCwgI25vdGVzLXRleHQge1xcbiAgICBmb250LWZhbWlseTogJ0JvZHknO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcblxcbiN0b2RvLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiN0ZC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0bGUnO1xcbn1cXG5cXG4jdGQtaW5wdXQge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4jdGQtc3VibWl0IHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbn1cXG5cXG4jdG9kby1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLnRhc2stcm93IHtcXG4gICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRsZSc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4ICNjYmQ1ZTEgc29saWQ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IGJsYWNrO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhZGU4MDtcXG4gICAgZm9udC1mYW1pbHk6ICdCb2R5JztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEFycm93IGZyb20gJy4vYXJyb3cuc3ZnJ1xuZXhwb3J0IHtwcm9qZWN0bWVudSwgcHJvamVjdFRpbGVzLCBsb2NhbFByb2plY3RzfVxuaW1wb3J0IHt0b0RvVmlld30gZnJvbSAnLi90by1kby5qcyc7XG5pbXBvcnQge1NpZGViYXJ9IGZyb20gJy4vc2lkZWJhci5qcyc7XG5cbnZhciBsb2NhbFByb2plY3RzID0gW107XG5cbmNvbnN0IHByb2plY3RtZW51ID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1lbnVEaXNwbGF5ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnAtbWVudScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF0uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS56SW5kZXggPSAnLTEnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcblxuICAgIH1cblxuICAgIGNvbnN0IG1lbnVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25wLW1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvb3RlcicpWzBdLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJykuc3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDBweCA0cHggNHB4IDAgZ3JheSc7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvaiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BUaXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwRGVzY3JpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwRGVzY3JpcCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBwRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwRGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwTm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncE5vdGVzJykudmFsdWU7XG5cbiAgICAgICAgdmFyIG5ld1Byb2ogPSBPYmplY3QuY3JlYXRlKHt9LCB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwVGl0bGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBEZXNjcmlwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVlZGF0ZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwRGF0ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vdGVzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBOb3Rlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZW51Q2xvc2UoKTtcblxuICAgICAgICB2YXIgcHJvamVjdEJ1aWxkZXIgPSB7XG4gICAgICAgICAgICAndGl0bGUnOiBuZXdQcm9qLnRpdGxlLFxuICAgICAgICAgICAgJ2Rlc2NyaXAnOiBuZXdQcm9qLmRlc2NyaXAsXG4gICAgICAgICAgICAnZHVlZGF0ZSc6IG5ld1Byb2ouZHVlZGF0ZSxcbiAgICAgICAgICAgICdub3Rlcyc6IG5ld1Byb2oubm90ZXNcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke25ld1Byb2oudGl0bGV9YCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEJ1aWxkZXIpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHZhciBvYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtuZXdQcm9qLnRpdGxlfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKG9iaikpO1xuXG4gICAgICAgIHZhciBzYiA9IFNpZGViYXIoKTtcbiAgICAgICAgc2IuYWRkUHJvaihwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWVudURpc3BsYXksXG4gICAgICAgIG1lbnVDbG9zZSxcbiAgICAgICAgYWRkUHJvalxuICAgIH1cbn1cblxuY29uc3QgcHJvamVjdFRpbGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2otZ3JpZCcpO1xuICAgIC8vQ3JlYXRlcyBtYWluIHByb2plY3QgdGlsZVxuICAgIGNvbnN0IG1haW5EaXYgPSAoaSwgYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IG5ld0RpdiA9IHBHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBuZXdEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qLXRpbGUnKTtcbiAgICAgICAgbmV3RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBhcnJheVtpXS50aXRsZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAoaSwgYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlRGl2ID0gcEdyaWQuY2hpbGRyZW5baV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRpdGxlRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZS10aXRsZScpO1xuICAgICAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBhcnJheVtpXS50aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREZXNjcmlwID0gKGksIGFycmF5KSA9PiB7XG4gICAgICAgIGxldCBkZXNjcmlwRGl2ID0gcEdyaWQuY2hpbGRyZW5baV0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGRlc2NyaXBEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aWxlLWRlc2NyaXAnKTtcbiAgICAgICAgZGVzY3JpcERpdi5pbm5lckhUTUwgPSBhcnJheVtpXS5kZXNjcmlwO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERhdGUgPSAoaSwgYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IGRhdGVEaXYgPSBwR3JpZC5jaGlsZHJlbltpXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgZGF0ZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpbGUtZGF0ZScpO1xuICAgICAgICBkYXRlRGl2LmlubmVySFRNTCA9IGFycmF5W2ldLmR1ZWRhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QXJyb3cgPSAoaSkgPT4ge1xuICAgICAgICBsZXQgYXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYXJyb3cuc3JjID0gQXJyb3c7XG4gICAgICAgIGFycm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXJyb3ctaW1nJyk7XG5cbiAgICAgICAgbGV0IGFUYWcgPSBwR3JpZC5jaGlsZHJlbltpXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XG4gICAgICAgIGFUYWcuc2V0QXR0cmlidXRlKCdocmVmJywgXCJcIik7XG4gICAgICAgIGFUYWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcnJvdy1idG4nKTtcbiAgICAgICAgYVRhZy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGFycm93KTtcblxuICAgICAgICBjb25zdCB0b0RvID0gdG9Eb1ZpZXcoKTtcbiAgICAgICAgYVRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qLXRpbGUnKS5pZDtcbiAgICAgICAgICAgIHRvRG8uYnVpbGQodGFyZ2V0SWQpXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGQgPSAoKSA9PiB7XG5cbiAgICAgICAgcEdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGxvY2FsUHJvamVjdHMuc3BsaWNlKDAsIGxvY2FsUHJvamVjdHMubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWxvY2FsUHJvamVjdHMuaW5jbHVkZXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Vba2V5XSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsUHJvamVjdHMucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtrZXldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYWluRGl2KGksIGxvY2FsUHJvamVjdHMpO1xuICAgICAgICAgICAgc2V0VGl0bGUoaSwgbG9jYWxQcm9qZWN0cyk7XG4gICAgICAgICAgICBzZXREZXNjcmlwKGksIGxvY2FsUHJvamVjdHMpO1xuICAgICAgICAgICAgc2V0RGF0ZShpLCBsb2NhbFByb2plY3RzKTtcbiAgICAgICAgICAgIHNldEFycm93KGkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZFxuICAgIH1cbn0iLCJleHBvcnQge1NpZGViYXJ9XG5pbXBvcnQgQXJyb3cgZnJvbSAnLi9hcnJvdy5zdmcnXG5pbXBvcnQgeyB0b0RvVmlldyB9IGZyb20gJy4vdG8tZG8uanMnXG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBhZGRQcm9qID0gKGFycmF5KSA9PiB7XG4gICAgICAgIGNvbnN0IHNiY29sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NiLXByb2pjb2wnKVxuICAgICAgICBzYmNvbC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2JUaXRsZSA9IGFycmF5W2ldLnRpdGxlO1xuICAgICAgICAgICAgbGV0IHNiRGl2ID0gc2Jjb2wuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICBzYkRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NiLXJvdycpO1xuICAgICAgICAgICAgc2JEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke3NiVGl0bGV9YCk7XG4gICAgICAgICAgICBzYkRpdi5pbm5lckhUTUwgPSBzYlRpdGxlO1xuICAgICAgICAgICAgc2V0TGluayhzYkRpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRMaW5rID0gKGRpdikgPT4ge1xuICAgICAgICBjb25zdCBwcm9qQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcHJvakFycm93LnNyYyA9IEFycm93O1xuXG4gICAgICAgIGxldCBzYmFUYWcgPSBkaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xuICAgICAgICBzYmFUYWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzYi1saW5rJyk7XG4gICAgICAgIHNiYVRhZy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIlwiKTtcbiAgICAgICAgc2JhVGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0ZFRleHQgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2Itcm93JykuaWQ7XG4gICAgICAgICAgICBsZXQgdGRMaW5rID0gdG9Eb1ZpZXcoKTtcbiAgICAgICAgICAgIHRkTGluay5idWlsZCh0ZFRleHQpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBzYkltZyA9IHNiYVRhZy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIHByb2pBcnJvdyk7XG4gICAgICAgIHNiSW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2ItaW1nJyk7XG4gICAgfVxuXG4gICAgLy8gY29uc3QgbGlua0V2ZW50ID0gKGxpbmssIGUpID0+IHtcbiAgICAvLyAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgLy8gICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvalxuICAgIH1cbn0iLCJleHBvcnQge3RvRG9WaWV3fVxuaW1wb3J0IHsgcHJvamVjdFRpbGVzLCBsb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiXG5pbXBvcnQgQWRkIGZyb20gJy4vYWRkLnN2ZydcbmltcG9ydCBCYWNrIGZyb20gJy4vYXJyb3dfYmFjay5zdmcnXG5cbmNvbnN0IHRvRG9WaWV3ID0gKCkgPT4ge1xuXG4gICAgdmFyIHRhcmdldE9iaiA9IFtdO1xuXG4gICAgY29uc3Qgc2V0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1ncmlkJykuaWQgPSAndGQtZ3JpZCc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGQtZ3JpZCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmFja0Fycm93ID0gKCkgPT4ge1xuICAgICAgICB2YXIgYkFycm93ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJBcnJvdy5zcmMgPSBCYWNrO1xuXG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG4gICAgICAgIGxldCBiQXJyb3dMaW5rID0gdGRHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XG4gICAgICAgIGJBcnJvd0xpbmsuc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrLWJ0bicpO1xuICAgICAgICBiQXJyb3dMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFwiXCIpO1xuXG4gICAgICAgIGxldCBiQXJyb3dJbWcgPSBiQXJyb3dMaW5rLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgYkFycm93KTtcbiAgICAgICAgYkFycm93SW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmFjay1pbWcnKTtcblxuICAgICAgICBsZXQgYkFycm93VGV4dCA9IGJBcnJvd0xpbmsuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGJBcnJvd1RleHQuaW5uZXJIVE1MID0gJ01haW4gRGFzaGJvYXJkJztcblxuICAgICAgICBiQXJyb3dMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpLmlkID0gJ3Byb2otZ3JpZCc7XG5cbiAgICAgICAgICAgIGxldCByZXR1cm5EYXNoID0gcHJvamVjdFRpbGVzKCk7XG4gICAgICAgICAgICByZXR1cm5EYXNoLmJ1aWxkKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmluZFByb2plY3QgPSAoaWQpID0+IHtcbiAgICAgICAgdGFyZ2V0T2JqLnB1c2gobG9jYWxQcm9qZWN0cy5maW5kKHggPT4geC50aXRsZSA9PSBpZCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpO1xuXG4gICAgICAgIGxldCB0aXRsZURpdiA9IHRkR3JpZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC10aXRsZScpO1xuICAgICAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBgJHt0YXJnZXRPYmpbMF0udGl0bGV9YDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTdW1tYXJ5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpO1xuXG4gICAgICAgIGxldCBzdW1tUGFyZW50ID0gdGRHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBzdW1tUGFyZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VtbWFyeScpO1xuXG4gICAgICAgIGxldCBzVGl0bGUgPSBzdW1tUGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBzVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdzdW1tLXRpdGxlJyk7XG4gICAgICAgIHNUaXRsZS5pbm5lckhUTUwgPSAnU3VtbWFyeSc7XG5cbiAgICAgICAgbGV0IHNUZXh0ID0gc3VtbVBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgc1RleHQuc2V0QXR0cmlidXRlKCdpZCcsICdzdW1tLXRleHQnKTtcbiAgICAgICAgc1RleHQuaW5uZXJIVE1MID0gYCR7dGFyZ2V0T2JqWzBdLmRlc2NyaXB9YDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpO1xuXG4gICAgICAgIGxldCBkYXRlRGl2ID0gdGRHcmlkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBkYXRlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtZGF0ZScpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGxldCBkVGl0bGUgPSBkYXRlRGl2Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBkVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLXRpdGxlJyk7XG4gICAgICAgIGRUaXRsZS5pbm5lckhUTUwgPSAnRXN0aW1hdGVkIENvbXBsZXRpb24nO1xuXG4gICAgICAgIGxldCBkVGV4dCA9IGRhdGVEaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGRUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZS10ZXh0Jyk7XG4gICAgICAgIGRUZXh0LmlubmVySFRNTCA9IGAke3RhcmdldE9ialswXS5kdWVkYXRlfWA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Tm90ZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRkR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC1ncmlkJyk7XG5cbiAgICAgICAgbGV0IG5vdGVEaXYgPSB0ZEdyaWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIG5vdGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1ub3RlcycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IG5UaXRsZSA9IG5vdGVEaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIG5UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGVzLXRpdGxlJyk7XG4gICAgICAgIG5UaXRsZS5pbm5lckhUTUwgPSAnTm90ZXMnO1xuXG4gICAgICAgIGxldCBuVGV4dCA9IG5vdGVEaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIG5UZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbm90ZXMtdGV4dCcpO1xuICAgICAgICBuVGV4dC5pbm5lckhUTUwgPSBgJHt0YXJnZXRPYmpbMF0ubm90ZXN9YDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUb0RvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZ3JpZCcpO1xuXG4gICAgICAgIGxldCB0ZERpdiA9IHRkR3JpZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGREaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1kaXYnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0ZFRpdGxlID0gdGREaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRkVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLXRpdGxlJyk7XG4gICAgICAgIHRkVGl0bGUuaW5uZXJIVE1MID0gJ1RvLURvJztcblxuICAgICAgICBidWlsZEZvcm0odGREaXYpO1xuXG4gICAgICAgIGxldCB0ZFRleHQgPSB0ZERpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGRUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1ib3gnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRJY29uID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWRkSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBhZGRJY29uLnNyYyA9IEFkZDtcbiAgICAgICAgYWRkSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLWltZycpO1xuXG4gICAgICAgIGNvbnN0IHRkX3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgbGV0IHRkQSA9IHRkX3RpdGxlLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcbiAgICAgICAgdGRBLnNldEF0dHJpYnV0ZSgnaWQnLCAndGQtYnRuJyk7XG4gICAgICAgIHRkQS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcIlwiKTtcblxuICAgICAgICB0ZEEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGRBLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgYWRkSWNvbik7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRGb3JtID0gKHBhcikgPT4ge1xuICAgICAgICB2YXIgZm9ybSA9IHBhci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1mb3JtJyk7XG5cbiAgICAgICAgbGV0IGxhYmVsID0gZm9ybS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0ZC1pbnB1dCcpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSAnRW50ZXIgdGFzazonO1xuXG4gICAgICAgIGxldCBpbnB1dCA9IGZvcm0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0ZC1pbnB1dCcpO1xuXG4gICAgICAgIGxldCBzdWJCdG4gPSBmb3JtLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG4gICAgICAgIHN1YkJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RkLXN1Ym1pdCcpO1xuICAgICAgICBzdWJCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICBzdWJCdG4uc2V0QXR0cmlidXRlKCd2YWxlJywgJ0FkZCcpO1xuXG4gICAgICAgIHN1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlucFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGQtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCB0YXNrRnVuYyA9IFRhc2soKTtcbiAgICAgICAgICAgIHRhc2tGdW5jLm1ha2VUYXNrKGlucFRleHQpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0VGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHZhciB0YXJnVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZC10aXRsZScpLmlubmVySFRNTDtcbiAgICAgICAgdmFyIHRhcmdQcm9qID0gbG9jYWxQcm9qZWN0cy5maW5kKHggPT4geC50aXRsZSA9PSB0YXJnVGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdQcm9qWyd0YXNrcyddKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdQcm9qWyd0YXNrcyddLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1ib3gnKTtcbiAgICAgICAgICAgICAgICBsZXQgdGR0YXNrID0gdGRib3guaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICAgICAgdGR0YXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1yb3cnKVxuICAgICAgICAgICAgICAgIHRkdGFzay5pbm5lckhUTUwgPSBgJHt0YXJnUHJvalsndGFza3MnXVtpXX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkID0gKGlkKSA9PiB7XG4gICAgICAgIHNldFBhZ2UoKTtcbiAgICAgICAgYmFja0Fycm93KCk7XG4gICAgICAgIGZpbmRQcm9qZWN0KGlkKTtcbiAgICAgICAgc2V0VGl0bGUoKTtcbiAgICAgICAgc2V0U3VtbWFyeSgpO1xuICAgICAgICBzZXREYXRlKCk7XG4gICAgICAgIHNldE5vdGVzKCk7XG4gICAgICAgIHNldFRvRG8oKTtcbiAgICAgICAgc2V0SWNvbigpO1xuICAgICAgICBsaXN0VGFza3MoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZFxuICAgIH1cbn1cblxuY29uc3QgVGFzayA9ICgpID0+IHtcblxuICAgIGNvbnN0IG1ha2VUYXNrID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWJveCcpO1xuICAgICAgICBsZXQgdGFzayA9IGJveC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2stcm93JylcbiAgICAgICAgdGFzay5pbm5lckhUTUwgPSBgJHt2YWx1ZX1gO1xuICAgICAgICBsb2dUYXNrKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2dUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkLXRpdGxlJykuaW5uZXJIVE1MO1xuICAgICAgICB2YXIgdGFyZ2V0UHJvaiA9IGxvY2FsUHJvamVjdHMuZmluZCh4ID0+IHgudGl0bGUgPT0gdGl0bGVUZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0YXJnZXRQcm9qWyd0YXNrcyddKSB7XG4gICAgICAgICAgICB0YXJnZXRQcm9qWyd0YXNrcyddLnB1c2godGFzayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRQcm9qWyd0YXNrcyddID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICB0YXJnZXRQcm9qWyd0YXNrcyddLnB1c2godGFzayk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aXRsZVRleHR9YCwgSlNPTi5zdHJpbmdpZnkodGFyZ2V0UHJvaikpO1xuICAgIH0gXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZVRhc2tcbiAgICB9XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtwcm9qZWN0bWVudSwgcHJvamVjdFRpbGVzfSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5jb25zdCBwcm9qID0gcHJvamVjdG1lbnUoKTtcbmNvbnN0IHRpbGVzID0gcHJvamVjdFRpbGVzKCk7XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvai1ncmlkJykgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2otZ3JpZCcpLmlubmVySFRNTCA9PSAnJykge1xuICAgIHRpbGVzLmJ1aWxkKCk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvaicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHByb2oubWVudURpc3BsYXkoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LW1lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBwcm9qLmFkZFByb2ooKTtcbiAgICB0aWxlcy5idWlsZCgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1tZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgcHJvai5tZW51Q2xvc2UoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==