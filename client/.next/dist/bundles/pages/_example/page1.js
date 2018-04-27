module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'This is the default title' : _ref$title;
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        'title',
        null,
        title
      ),
      __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('meta', { charSet: 'utf-8' }),
      __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
      'header',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        'nav',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
          __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
          { prefetch: true, href: '/' },
          __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
            'a',
            null,
            'Home'
          )
        ),
        ' |\xA0',
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
          __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
          { prefetch: true, href: '/_example/page1', as: 'examplePage1' },
          __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
            'a',
            null,
            'ExamplePageOneHere'
          )
        ),
        ' |\xA0',
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
          __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
          { prefetch: true, href: '/_example/page2', as: 'examplePage2' },
          __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
            'a',
            null,
            'ExamplePageTwoHere'
          )
        )
      )
    ),
    children,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
      'footer',
      null,
      'This is a layout footer'
    )
  );
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_example_layout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__components_example_layout__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'center',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'EXAMPLE_PAGE_ONE'
        )
      )
    )
  );
});

/***/ })
/******/ ]);