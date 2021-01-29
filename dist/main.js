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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./compontens.js":
/*!***********************!*\
  !*** ./compontens.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Test; });\n/* harmony import */ var _zero_case_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zero-case.js */ \"./zero-case.js\");\n\nfunction Test(props) {\n  var data = 'message';\n\n  function change(e) {\n    data = e.target.value;\n    console.log(e.target.value);\n  }\n\n  return _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].createElement(\"div\", {\n    id: \"test\"\n  }, _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].createElement(\"input\", {\n    abc: \"123\",\n    value: data,\n    onChange: function onChange(e) {\n      change(e);\n    }\n  }));\n}\n\n//# sourceURL=webpack:///./compontens.js?");

/***/ }),

/***/ "./core/index.js":
/*!***********************!*\
  !*** ./core/index.js ***!
  \***********************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\nfunction isObject(obj) {\n  if (Object.prototype.toString.call(obj) === '[object Object]') return true;\n  return false;\n}\n\n\n\n//# sourceURL=webpack:///./core/index.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _zero_case_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zero-case.js */ \"./zero-case.js\");\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ \"./template.js\");\n\n\n_zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].renderDom(_template_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], document.getElementById('app'));\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _zero_case_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zero-case.js */ \"./zero-case.js\");\n/* harmony import */ var _compontens_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compontens.js */ \"./compontens.js\");\n\n\nfunction App(props) {\n  var data = _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].reactive({\n    message: 'message'\n  });\n  console.log(data.message);\n\n  function hello(e) {\n    // console.log('eventment...', e);\n    data.message = Math.random() * 10;\n    console.log(data.message);\n  } // Zero.effect(hello)\n\n\n  var EVENTELEMENT = _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].createElement(\"div\", null, _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].createElement(\"button\", {\n    onClick: function onClick(e) {\n      hello(e);\n    }\n  }, data.message));\n  return _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].createElement(\"div\", {\n    id: \"App\"\n  }, EVENTELEMENT, _compontens_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./zero-case.js":
/*!**********************!*\
  !*** ./zero-case.js ***!
  \**********************/
/*! exports provided: Zero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Zero\", function() { return Zero; });\n/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index.js */ \"./core/index.js\");\n\nvar Zero = {\n  effectStack: [],\n  targetMap: new WeakMap(),\n  createElement: function createElement(type, attrs) {\n    var el = document.createElement(type);\n\n    for (var key in attrs) {\n      if (attrs.hasOwnProperty.call(attrs, key)) {\n        switch (key) {\n          case 'value':\n            if (el.tagName.toUpperCase() === 'INPUT' || el.tagName.toUpperCase() === 'TEXTAREA') {\n              el[key] = attrs[key];\n            } else {\n              el.setAttribute(key, attrs[key]);\n            }\n\n            break;\n\n          case 'style':\n            el.style.cssText = attrs[key];\n            break;\n\n          default:\n            el.setAttribute(key, attrs[key]);\n            break;\n        }\n\n        if (/on\\w+/.test(key)) {\n          var event = key.toLowerCase();\n          el[event] = attrs[key];\n        }\n      }\n    }\n\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    for (var _i = 0, _children = children; _i < _children.length; _i++) {\n      var child = _children[_i];\n\n      if (typeof child === 'string') {\n        child = document.createTextNode(child);\n      }\n\n      if (typeof child === 'function') {\n        child = child();\n      }\n\n      el.appendChild(child);\n    }\n\n    return el;\n  },\n  reactive: function reactive(params) {\n    var that = this;\n\n    if (!Object(_core_index_js__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"])(params)) {\n      return params;\n    }\n\n    var observed = new Proxy(params, {\n      get: function get(target, key, receiver) {\n        var result = Reflect.get(target, key, receiver);\n        console.log('getter...', key);\n        that.track(target, key);\n        return that.reactive(result);\n      },\n      set: function set(target, key, value, receiver) {\n        var result = Reflect.set(target, key, value, receiver);\n        console.log('Setter...', key);\n        that.trigger(target, key);\n        return result;\n      },\n      deleteProperty: function deleteProperty(target, key) {\n        var result = Reflect.deleteProperty(target, key);\n        return result;\n      }\n    });\n    return observed;\n  },\n  effect: function effect(cb) {\n    var that = this;\n\n    var rxEffect = function rxEffect() {\n      try {\n        that.effectStack.push(rxEffect);\n        return cb();\n      } catch (error) {\n        that.effectStack.pop();\n      }\n    };\n\n    rxEffect();\n    return rxEffect;\n  },\n  track: function track(target, key) {\n    var effecFn = this.effectStack[this.effectStack.length - 1];\n\n    if (effecFn) {\n      var depsMap = this.targetMap.get(target);\n\n      if (!depsMap) {\n        depsMap = new Map();\n        this.targetMap.set(target, depsMap);\n      }\n\n      var deps = depsMap.get(key);\n\n      if (!deps) {\n        deps = new Set();\n        depsMap.set(key, deps);\n      }\n\n      deps.add(effecFn);\n    }\n  },\n  trigger: function trigger(target, key) {\n    var depsMap = this.targetMap.get(target);\n\n    if (depsMap) {\n      var deps = depsMap.get(key);\n\n      if (deps) {\n        deps.forEach(function (effecFn) {\n          return effecFn();\n        });\n      }\n    }\n  },\n  render: function render(vNode) {\n    var dd = vNode();\n    return dd;\n  },\n  renderDom: function renderDom(el, target) {\n    var app = el();\n    target.appendChild(app);\n  }\n};\n\n//# sourceURL=webpack:///./zero-case.js?");

/***/ })

/******/ });