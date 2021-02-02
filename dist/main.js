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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _zero_case_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zero-case.js */ \"./zero-case.js\");\n/* harmony import */ var _compontens_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compontens.js */ \"./compontens.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction App(props) {\n  var _Zero$useState = _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].useState('message'),\n      _Zero$useState2 = _slicedToArray(_Zero$useState, 2),\n      message = _Zero$useState2[0],\n      changeMsg = _Zero$useState2[1];\n\n  var _Zero$useState3 = _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].useState(1),\n      _Zero$useState4 = _slicedToArray(_Zero$useState3, 2),\n      count = _Zero$useState4[0],\n      changeCount = _Zero$useState4[1];\n\n  function hello(e) {\n    var result = Math.random() * 10;\n    changeCount(23);\n    changeMsg(result);\n  }\n\n  var EVENTELEMENT = _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].createElement(\"div\", {\n    style: {\n      marginTop: '20px'\n    }\n  }, _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].createElement(\"button\", {\n    onClick: function onClick(e) {\n      hello(e);\n    }\n  }, message), _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].createElement(\"div\", null, count));\n  return _zero_case_js__WEBPACK_IMPORTED_MODULE_0__[\"Zero\"].createElement(\"div\", {\n    id: \"App\"\n  }, EVENTELEMENT, _compontens_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./zero-case.js":
/*!**********************!*\
  !*** ./zero-case.js ***!
  \**********************/
/*! exports provided: Zero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Zero\", function() { return Zero; });\n/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index.js */ \"./core/index.js\");\n\nvar Zero = {\n  effectStack: [],\n  _evnetStack: [],\n  _State: [],\n  _stateIndex: 0,\n  init: {\n    'status': 'init',\n    'initfn': null,\n    'root': null,\n    'updatefn': null\n  },\n  targetMap: new WeakMap(),\n  ReactElement: function ReactElement(type, key, ref, props) {\n    var element = {\n      $$typeof: Symbol('key'),\n      type: type,\n      key: key,\n      ref: ref,\n      props: props\n    };\n    return element;\n  },\n  createElement: function createElement(type, attrs) {\n    var props = {\n      children: []\n    };\n    var key,\n        ref = null;\n\n    if (attrs) {\n      ref = attrs.ref || null;\n      key = attrs.key || null;\n    }\n\n    for (var _key2 in attrs) {\n      if (Object.hasOwnProperty.call(attrs, _key2)) {\n        if (typeof attrs[_key2] === 'function') {\n          var fn = attrs[_key2]; // console.log(fn);\n        }\n\n        props[_key2] = attrs[_key2] || null;\n      }\n    }\n\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    for (var _i = 0, _children = children; _i < _children.length; _i++) {\n      var child = _children[_i];\n\n      if (typeof child === 'function') {\n        child = child();\n      }\n\n      props.children.push(child);\n    }\n\n    return this.ReactElement(type, key, ref, props);\n  },\n  reactive: function reactive(params) {\n    var that = this;\n\n    if (!Object(_core_index_js__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"])(params)) {\n      return params;\n    }\n\n    var observed = new Proxy(params, {\n      get: function get(target, key, receiver) {\n        var result = Reflect.get(target, key, receiver);\n        console.log('getter...', key);\n        that.track(target, key);\n        return that.reactive(result);\n      },\n      set: function set(target, key, value, receiver) {\n        var result = Reflect.set(target, key, value, receiver);\n        console.log('Setter...', key, value);\n        that.trigger(target, key);\n        return result;\n      },\n      deleteProperty: function deleteProperty(target, key) {\n        var result = Reflect.deleteProperty(target, key);\n        return result;\n      }\n    });\n    return observed;\n  },\n  effect: function effect(cb) {\n    var that = this;\n\n    var rxEffect = function rxEffect() {\n      try {\n        that.effectStack.push(rxEffect);\n        return cb();\n      } finally {\n        that.effectStack.pop();\n      }\n    };\n\n    rxEffect();\n    return rxEffect;\n  },\n  track: function track(target, key) {\n    var effecFn = this.effectStack[this.effectStack.length - 1];\n\n    if (effecFn) {\n      var depsMap = this.targetMap.get(target);\n\n      if (!depsMap) {\n        depsMap = new Map();\n        this.targetMap.set(target, depsMap);\n      }\n\n      var deps = depsMap.get(key);\n\n      if (!deps) {\n        deps = new Set();\n        depsMap.set(key, deps);\n      }\n\n      deps.add(effecFn);\n    }\n  },\n  trigger: function trigger(target, key) {\n    var depsMap = this.targetMap.get(target);\n\n    if (depsMap) {\n      var deps = depsMap.get(key);\n\n      if (deps) {\n        deps.forEach(function (effecFn) {\n          return effecFn();\n        });\n      }\n    } // this.render()\n\n  },\n  useState: function useState(initVal) {\n    var that = this;\n    var currentIndex = that._stateIndex;\n    that._State[currentIndex] = that._State[currentIndex] || initVal;\n    that._stateIndex++;\n\n    var setState = function setState(newState) {\n      that.init.status = 'update';\n      that._State[currentIndex] = newState;\n      var vNode = that.init.initfn();\n      that.updateDom(vNode);\n      that._stateIndex = 0;\n    }; // console.log(that._State[currentIndex], setState);\n\n\n    return [that._State[currentIndex], setState];\n  },\n  render: function render(vNode) {\n    var _this = this;\n\n    var el = document.createElement(vNode.type);\n    var props = vNode.props;\n    var specialKeyMap = {\n      className: 'class',\n      fontSize: 'font-size',\n      marginTop: 'margin-top',\n      onClick: 'click',\n      onChange: 'change'\n    };\n    props && Object.keys(props).forEach(function (key) {\n      if (key === 'children') {\n        props.children.forEach(function (child) {\n          if (typeof child === 'string' || typeof child === 'number') {\n            child = document.createTextNode(child);\n            el.appendChild(child);\n          } else {\n            el.appendChild(_this.render(child));\n          }\n        });\n      } else if (key === 'style') {\n        var styleObj = props.style;\n        var styleItems = [];\n        Object.keys(styleObj).forEach(function (styleKey) {\n          styleItems.push(\"\".concat(specialKeyMap[styleKey] || styleKey, \": \").concat(styleObj[styleKey]));\n        });\n        el.setAttribute('style', styleItems.join(';'));\n      } else {\n        if (typeof props[key] === 'function') {\n          // 添加事件\n          el.addEventListener(specialKeyMap[key], props[key], false);\n          var event = new Set();\n          event.add(specialKeyMap[key], props[key]);\n\n          _this._evnetStack.push(event);\n        } else {\n          el.setAttribute(specialKeyMap[key] || key, props[key]);\n        }\n      }\n    });\n    return el;\n  },\n  updateDom: function updateDom(app) {\n    this.init.root.innerHTML = '';\n    var target = this.init.root;\n    var result = this.render(app);\n    target.appendChild(result);\n  },\n  renderDom: function renderDom(el, target) {\n    this.init.initfn = el;\n    this.init.root = target;\n    var app = el();\n    var result = this.render(app);\n    target.appendChild(result);\n  }\n};\n\nfunction getAttrs(obj, value) {\n  var o = {};\n\n  for (var key in obj) {\n    if (Object.hasOwnProperty.call(obj, key)) {\n      var element = obj[key];\n\n      if (key !== value) {\n        o[key] = element;\n      }\n    }\n  }\n\n  return o;\n}\n\n//# sourceURL=webpack:///./zero-case.js?");

/***/ })

/******/ });