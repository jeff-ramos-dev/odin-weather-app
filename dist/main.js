/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/weather-background.jpg */ \"./images/weather-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n  color: black;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif; \r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  place-items: center;\r\n  padding: 40px;\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\np {\r\n  margin-top: 20px;\r\n}\r\n\r\nspan {\r\n  color: rgb(70, 70, 70);\r\n}\r\n\r\n.title {\r\n  font-family: 'Oleo SCript Swash Caps', cursive; \r\n  font-size: 4rem;\r\n  text-align: center;\r\n}\r\n\r\n.place {\r\n  font-weight: bold;\r\n  font-family: ''\r\n}\r\n\r\n.category {\r\n  font-size: large;\r\n  font-weight: 700;\r\n  color: rgb(50, 50, 171);\r\n}\r\n\r\ninput {\r\n  height: 2rem;\r\n  width: 300px;\r\n  margin-top: 40px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.condition {\r\n  display: grid;\r\n  width: 300px;\r\n  margin-top: 20px;\r\n  place-items: center;\r\n  grid-template-columns: 1fr 2fr;\r\n}\r\n\r\n.condition-img {\r\n  height: 70px;\r\n  width: fit-content;\r\n}\r\n\r\n.condition-text {\r\n  margin: 0;\r\n  font-size: 1.5rem\r\n}\r\n\r\n.time {\r\n  margin-top: 40px;\r\n  font-size: 2rem;\r\n}\r\n\r\n.temp {\r\n  margin-top: 40px;\r\n  font-size: 4rem;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_Cloudy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Cloudy.png */ \"./images/Cloudy.png\");\n/* harmony import */ var _images_Fog_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Fog.png */ \"./images/Fog.png\");\n/* harmony import */ var _images_Heavy_Rain_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Heavy Rain.png */ \"./images/Heavy Rain.png\");\n/* harmony import */ var _images_Lightning_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Lightning.png */ \"./images/Lightning.png\");\n/* harmony import */ var _images_Partly_Cloudy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Partly Cloudy.png */ \"./images/Partly Cloudy.png\");\n/* harmony import */ var _images_Rain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Rain.png */ \"./images/Rain.png\");\n/* harmony import */ var _images_Snow_and_Rain_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Snow and Rain.png */ \"./images/Snow and Rain.png\");\n/* harmony import */ var _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/Snow.png */ \"./images/Snow.png\");\n/* harmony import */ var _images_Sprinkle_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/Sprinkle.png */ \"./images/Sprinkle.png\");\n/* harmony import */ var _images_Sunny_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/Sunny.png */ \"./images/Sunny.png\");\n/* harmony import */ var _images_weather_background_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/weather-background.jpg */ \"./images/weather-background.jpg\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst place = document.querySelector('.location');\r\nconst time = document.querySelector('.time');\r\nconst temp = document.querySelector('.temp');\r\nconst condition = document.querySelector('.condition-text');\r\nconst conditionImg = document.querySelector('.condition-img');\r\nconst humid = document.querySelector('.humid-data');\r\nconst wind = document.querySelector('.wind-data');\r\nconst precip = document.querySelector('.precip-data');\r\nconst uv = document.querySelector('.uv-data');\r\nconst vis = document.querySelector('.vis-data');\r\n\r\nconst search = document.getElementById('search');\r\n\r\nconst conditionDict = {\r\n\t\"Sunny\": _images_Sunny_png__WEBPACK_IMPORTED_MODULE_9__, \r\n  \"Clear\": _images_Sunny_png__WEBPACK_IMPORTED_MODULE_9__,\r\n\t\"Partly cloudy\": _images_Partly_Cloudy_png__WEBPACK_IMPORTED_MODULE_4__,\r\n  \"Cloudy\": _images_Cloudy_png__WEBPACK_IMPORTED_MODULE_0__,\r\n  \"Overcast\": _images_Cloudy_png__WEBPACK_IMPORTED_MODULE_0__,\r\n  \"Mist\": _images_Fog_png__WEBPACK_IMPORTED_MODULE_1__,\r\n  \"Patchy rain possible\": _images_Rain_png__WEBPACK_IMPORTED_MODULE_5__,\r\n  \"Patchy snow possible\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Patchy sleet possible\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Patchy freezing drizzle possible\": _images_Sprinkle_png__WEBPACK_IMPORTED_MODULE_8__,\r\n  \"Thundery outbreaks possible\": lighning,\r\n  \"Blowing snow\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Blizzard\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Fog\": _images_Fog_png__WEBPACK_IMPORTED_MODULE_1__,\r\n  \"Freezing fog\": _images_Fog_png__WEBPACK_IMPORTED_MODULE_1__,\r\n  \"Patchy light drizzle\": _images_Sprinkle_png__WEBPACK_IMPORTED_MODULE_8__,\r\n  \"Light drizzle\": _images_Sprinkle_png__WEBPACK_IMPORTED_MODULE_8__,\r\n  \"Freezing drizzle\": _images_Rain_png__WEBPACK_IMPORTED_MODULE_5__,\r\n  \"Heavy freezing drizzle\": _images_Heavy_Rain_png__WEBPACK_IMPORTED_MODULE_2__,\r\n  \"Patchy light rain\": _images_Rain_png__WEBPACK_IMPORTED_MODULE_5__,\r\n  \"Light rain\": _images_Rain_png__WEBPACK_IMPORTED_MODULE_5__,\r\n  \"Moderate rain at times\": _images_Rain_png__WEBPACK_IMPORTED_MODULE_5__,\r\n  \"Moderate rain\": _images_Rain_png__WEBPACK_IMPORTED_MODULE_5__,\r\n  \"Heavy rain at times\": _images_Heavy_Rain_png__WEBPACK_IMPORTED_MODULE_2__,\r\n  \"Heavy rain\": _images_Heavy_Rain_png__WEBPACK_IMPORTED_MODULE_2__,\r\n  \"Light freezing rain\": _images_Rain_png__WEBPACK_IMPORTED_MODULE_5__,\r\n  \"Moderate or heavy freezing rain\": _images_Heavy_Rain_png__WEBPACK_IMPORTED_MODULE_2__,\r\n  \"Light sleet\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Moderate or heavy sleet\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Patchy light snow\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Light snow\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Patchy moderate snow\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Moderate snow\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Patchy heavy snow\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Heavy snow\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Ice pellets\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Light rain shower\": _images_Rain_png__WEBPACK_IMPORTED_MODULE_5__,\r\n  \"Moderate or heavy rain shower\": _images_Heavy_Rain_png__WEBPACK_IMPORTED_MODULE_2__,\r\n  \"Torrential rain shower\": _images_Rain_png__WEBPACK_IMPORTED_MODULE_5__,\r\n  \"Light sleet showers\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Moderate or heavy sleet showers\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Light snow showers\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Moderate or heavy snow showers\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Light showers of ice pellets\": _images_Snow_png__WEBPACK_IMPORTED_MODULE_7__,\r\n  \"Moderate or heavy showers of ice pellets\": _images_Snow_and_Rain_png__WEBPACK_IMPORTED_MODULE_6__,\r\n  \"Patchy light rain with thunder\": _images_Lightning_png__WEBPACK_IMPORTED_MODULE_3__,\r\n  \"Moderate or heavy rain with thunder\": _images_Lightning_png__WEBPACK_IMPORTED_MODULE_3__,\r\n  \"Patchy light snow with thunder\": _images_Lightning_png__WEBPACK_IMPORTED_MODULE_3__,\r\n\t\"Moderate or heavy snow with thunder\": _images_Lightning_png__WEBPACK_IMPORTED_MODULE_3__\r\n};\r\n\r\nasync function getData(location) {\r\n  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=85cbece73a8846868d5174556230607&q=${location}`, { mode: \"cors\" });\r\n  const weatherData = await response.json();\r\n  const hour = parseInt(weatherData.location.localtime.split(' ')[1].split(':')[0])\r\n  const minute = weatherData.location.localtime.split(' ')[1].split(':')[1]\r\n  console.log(weatherData)\r\n\r\n  const currTime = `\r\n    ${hour <= 12 ? hour : hour - 12}:${minute} ${hour < 12 ? \"am\" : \"pm\"}\r\n  `\r\n  place.textContent = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`\r\n  time.textContent = currTime\r\n  temp.textContent = `${weatherData.current.temp_f}\\u{00B0}F`\r\n  condition.textContent = `${weatherData.current.condition.text}`\r\n  conditionImg.src = conditionDict[weatherData.current.condition.text];\r\n  humid.textContent = `${weatherData.current.humidity} %`\r\n  wind.textContent = `${weatherData.current.wind_mph} mph`\r\n  precip.textContent = `${weatherData.current.precip_in} in`\r\n  uv.textContent = `${weatherData.current.uv} (${weatherData.current.uv < 3 ? \"Low\" :\r\n    weatherData.current.uv < 6 ? \"Moderate\" :\r\n      weatherData.current.uv < 8 ? \"High\" :\r\n        weatherData.current.uv < 9 ? \"Very High\" :\r\n          \"Extreme\"})`\r\n  vis.textContent = `${weatherData.current.vis_miles} mi`\r\n\r\n weatherData\r\n}\r\n\r\nsearch.value = \"los angeles\"\r\n\r\ngetData(\"los angeles\")\r\n\r\nsearch.addEventListener('input', e => {\r\n  getData(search.value);\r\n})\r\n\r\n// FULL WEATHER JSON OBJECT----\r\n// {location: {…}, current: {…}}\r\n// current: \r\n    // cloud: 100\r\n    // condition:\r\n        // code: 1009\r\n        // icon: \"//cdn.weatherapi.com/weather/64x64/day/122.png\"\r\n        // text: \"Overcast\"\r\n    // feelslike_c: 18.3\r\n    // feelslike_f: 64.9\r\n    // gust_kph: 8.3\r\n    // gust_mph: 5.1\r\n    // humidity: 76\r\n    // is_day: 1\r\n    // last_updated: \"2023-07-07 08:30\"\r\n    // last_updated_epoch: 1688743800\r\n    // precip_in: 0\r\n    // precip_mm: 0\r\n    // pressure_in: 29.89\r\n    // pressure_mb: 1012\r\n    // temp_c: 18.3\r\n    // temp_f: 64.9\r\n    // uv: 4\r\n    // vis_km: 11\r\n    // vis_miles: 6\r\n    // wind_degree: 10\r\n    // wind_dir: \"N\"\r\n    // wind_kph: 3.6\r\n    // wind_mph: 2.2\r\n// location\r\n    // country: \"United States of America\"\r\n    // lat: 34.05\r\n    // localtime: \"2023-07-07 8:42\"\r\n    // localtime_epoch: 1688744562\r\n    // lon: -118.24\r\n    // name: \"Los Angeles\"\r\n    // region: \"California\"\r\n    // tz_id: \"America/Los_Angeles\"\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./images/Cloudy.png":
/*!***************************!*\
  !*** ./images/Cloudy.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45ee5cf9be8d9afc0db3.png\";\n\n//# sourceURL=webpack:///./images/Cloudy.png?");

/***/ }),

/***/ "./images/Fog.png":
/*!************************!*\
  !*** ./images/Fog.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e535ee7077b6d553204.png\";\n\n//# sourceURL=webpack:///./images/Fog.png?");

/***/ }),

/***/ "./images/Heavy Rain.png":
/*!*******************************!*\
  !*** ./images/Heavy Rain.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fbc5cc6950d2bb550103.png\";\n\n//# sourceURL=webpack:///./images/Heavy_Rain.png?");

/***/ }),

/***/ "./images/Lightning.png":
/*!******************************!*\
  !*** ./images/Lightning.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89e76f097992ce2fa52d.png\";\n\n//# sourceURL=webpack:///./images/Lightning.png?");

/***/ }),

/***/ "./images/Partly Cloudy.png":
/*!**********************************!*\
  !*** ./images/Partly Cloudy.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"318ea6a32fb28d31cd04.png\";\n\n//# sourceURL=webpack:///./images/Partly_Cloudy.png?");

/***/ }),

/***/ "./images/Rain.png":
/*!*************************!*\
  !*** ./images/Rain.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0c5aabbaa222e18dc97.png\";\n\n//# sourceURL=webpack:///./images/Rain.png?");

/***/ }),

/***/ "./images/Snow and Rain.png":
/*!**********************************!*\
  !*** ./images/Snow and Rain.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e2d639a45ebc99b3efe.png\";\n\n//# sourceURL=webpack:///./images/Snow_and_Rain.png?");

/***/ }),

/***/ "./images/Snow.png":
/*!*************************!*\
  !*** ./images/Snow.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4aafd369cbf2191aa643.png\";\n\n//# sourceURL=webpack:///./images/Snow.png?");

/***/ }),

/***/ "./images/Sprinkle.png":
/*!*****************************!*\
  !*** ./images/Sprinkle.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"97428143c7ac86d2e433.png\";\n\n//# sourceURL=webpack:///./images/Sprinkle.png?");

/***/ }),

/***/ "./images/Sunny.png":
/*!**************************!*\
  !*** ./images/Sunny.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"804381dccb9505de2d63.png\";\n\n//# sourceURL=webpack:///./images/Sunny.png?");

/***/ }),

/***/ "./images/weather-background.jpg":
/*!***************************************!*\
  !*** ./images/weather-background.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bed8aa950addacaf69a4.jpg\";\n\n//# sourceURL=webpack:///./images/weather-background.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;