/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../impulse-math-ts/dist/impulse-math-ts.dev.js":
/*!******************************************************!*\
  !*** ../impulse-math-ts/dist/impulse-math-ts.dev.js ***!
  \******************************************************/
/***/ ((module) => {

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typescript/Computation/AbstractComputation.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Computation/AbstractComputation.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_411__) => {

__nested_webpack_require_411__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_411__.d(__nested_webpack_exports__, {
/* harmony export */   AbstractComputation: () => (/* binding */ AbstractComputation)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AbstractComputation = /*#__PURE__*/function () {
  function AbstractComputation() {
    _classCallCheck(this, AbstractComputation);
    _defineProperty(this, "kernels", {});
  }
  return _createClass(AbstractComputation, [{
    key: "addKernel",
    value: function addKernel(name, func) {
      this.kernels[name] = func;
      return this;
    }
  }, {
    key: "execute",
    value: function execute(name) {
      if (!this.kernels[name]) {
        throw new Error("Kernel '".concat(name, "' not exists."));
      }
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return this.kernels[name].apply(null, args);
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/Computation/CPU/abs.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/abs.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_3447__) => {

__nested_webpack_require_3447__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_3447__.d(__nested_webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3447__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var abs = function abs(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.abs(value);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/add.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/add.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_5523__) => {

__nested_webpack_require_5523__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_5523__.d(__nested_webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_5523__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var add = function add(m1, m) {
  if (typeof m === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value + m;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else if (m instanceof _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix) {
    if (m.rows !== m1.rows || m.cols !== m1.cols) {
      throw new Error("Dimention error: rows (x: ".concat(m1.rows, ", y: ").concat(m1.cols, ") !== (x: ").concat(m.rows, ", y: ").concat(m.cols, ")"));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value + m.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/col.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/col.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_8160__) => {

__nested_webpack_require_8160__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_8160__.d(__nested_webpack_exports__, {
/* harmony export */   col: () => (/* binding */ col)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_8160__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var col = function col(m1, _col) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = m1.data[m1.cols * row + _col];
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, 1, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/colMaxCoeffIndex.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Computation/CPU/colMaxCoeffIndex.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_9086__) => {

__nested_webpack_require_9086__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_9086__.d(__nested_webpack_exports__, {
/* harmony export */   colMaxCoeffIndex: () => (/* binding */ colMaxCoeffIndex)
/* harmony export */ });
var colMaxCoeffIndex = function colMaxCoeffIndex(m1, col) {
  var maxIndex = -1;
  var max = -Infinity;
  for (var row = 0; row < m1.rows; row += 1) {
    if (m1.data[row * m1.cols + col] > max) {
      max = m1.data[row * m1.cols + col];
      maxIndex = row;
    }
  }
  return maxIndex;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/colwiseSum.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/CPU/colwiseSum.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_9922__) => {

__nested_webpack_require_9922__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_9922__.d(__nested_webpack_exports__, {
/* harmony export */   colwiseSum: () => (/* binding */ colwiseSum)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_9922__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var colwiseSum = function colwiseSum(m1) {
  var data = [];
  var t = m1.transpose();
  for (var row = 0; row < t.rows; row += 1) {
    data[row] = 0;
    for (var col = 0; col < t.cols; col += 1) {
      data[row] += t.data[row * t.cols + col];
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.cols, 1, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/divide.ts":
/*!**************************************************!*\
  !*** ./src/typescript/Computation/CPU/divide.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_10928__) => {

__nested_webpack_require_10928__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_10928__.d(__nested_webpack_exports__, {
/* harmony export */   divide: () => (/* binding */ divide)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_10928__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var divide = function divide(m1, num) {
  if (typeof num === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value / num;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else {
    if (num.rows !== m1.rows || num.cols !== m1.cols) {
      throw new Error("Dimensions error (".concat(m1.rows, ", ").concat(m1.cols, ") !== (").concat(num.rows, ", ").concat(num.cols, ")"));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value / num.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/dot.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/dot.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_13509__) => {

__nested_webpack_require_13509__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_13509__.d(__nested_webpack_exports__, {
/* harmony export */   dot: () => (/* binding */ dot)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_13509__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var dot = function dot(m1, m2) {
  if (m1.cols !== m2.rows) {
    throw new Error("DIMENSIONS error. m1.cols ".concat(m1.rows, " ").concat(m1.cols, " !== m2.rows ").concat(m2.rows, " ").concat(m2.cols, "."));
  }
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    data[row] = new Array(m2.cols);
    for (var col = 0; col < m2.cols; col += 1) {
      data[row][col] = 0;
      for (var i = 0; i < m1.cols; i += 1) {
        for (var j = 0; j < m2.rows; j += 1) {
          data[row][col] += m1.data[row * m1.cols + i] * m2.data[j * m2.cols + col];
        }
      }
    }
  }
  var newData = [];
  data.forEach(function (row) {
    newData = [].concat(_toConsumableArray(newData), _toConsumableArray(row));
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m2.cols, newData);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/exp.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/exp.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_16165__) => {

__nested_webpack_require_16165__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_16165__.d(__nested_webpack_exports__, {
/* harmony export */   exp: () => (/* binding */ exp)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_16165__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var exp = function exp(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.exp(value + 1e-16);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/fraction.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/fraction.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_18269__) => {

__nested_webpack_require_18269__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_18269__.d(__nested_webpack_exports__, {
/* harmony export */   fraction: () => (/* binding */ fraction)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_18269__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var fraction = function fraction(m1, num) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = num / value;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/log.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/log.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_20366__) => {

__nested_webpack_require_20366__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_20366__.d(__nested_webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_20366__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var log = function log(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.log(value + 1e-8);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/max.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/max.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_22449__) => {

__nested_webpack_require_22449__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_22449__.d(__nested_webpack_exports__, {
/* harmony export */   max: () => (/* binding */ max)
/* harmony export */ });
var max = function max(m1) {
  var max = -Infinity;
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    max = Math.max(m1.data[index], max);
  }
  return max;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/mean.ts":
/*!************************************************!*\
  !*** ./src/typescript/Computation/CPU/mean.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_23119__) => {

__nested_webpack_require_23119__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_23119__.d(__nested_webpack_exports__, {
/* harmony export */   mean: () => (/* binding */ mean)
/* harmony export */ });
var mean = function mean(m1) {
  var sum = 0;
  var numberOfElements = m1.rows * m1.cols;
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    sum += m1.data[index];
  }
  return sum / numberOfElements;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/minusOne.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/minusOne.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_23850__) => {

__nested_webpack_require_23850__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_23850__.d(__nested_webpack_exports__, {
/* harmony export */   minusOne: () => (/* binding */ minusOne)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_23850__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var minusOne = function minusOne(m1) {
  var data = _toConsumableArray(m1.data);
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    data[index] = 1 - data[index];
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/multiply.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/multiply.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_25986__) => {

__nested_webpack_require_25986__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_25986__.d(__nested_webpack_exports__, {
/* harmony export */   multiply: () => (/* binding */ multiply)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_25986__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var multiply = function multiply(m1, num) {
  if (typeof num === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value * num;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else {
    if (num.rows !== m1.rows || m1.cols !== num.cols) {
      throw new Error("Dimension error: ".concat(m1.shape(), " !== ").concat(num.shape()));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value * num.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/pow.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/pow.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_28528__) => {

__nested_webpack_require_28528__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_28528__.d(__nested_webpack_exports__, {
/* harmony export */   pow: () => (/* binding */ pow)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_28528__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var pow = function pow(m1, num) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.pow(value, num);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/reluBackpropagation.ts":
/*!***************************************************************!*\
  !*** ./src/typescript/Computation/CPU/reluBackpropagation.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_30678__) => {

__nested_webpack_require_30678__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_30678__.d(__nested_webpack_exports__, {
/* harmony export */   reluBackpropagation: () => (/* binding */ reluBackpropagation)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30678__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var reluBackpropagation = function reluBackpropagation(delta, A) {
  var data = _toConsumableArray(A.data);
  data.forEach(function (value, index) {
    data[index] = value > 0 ? 1 : 0;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(A.rows, A.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/replicate.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/CPU/replicate.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_32847__) => {

__nested_webpack_require_32847__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_32847__.d(__nested_webpack_exports__, {
/* harmony export */   replicate: () => (/* binding */ replicate)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_32847__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var replicate = function replicate(m1, rows, cols) {
  if (rows === 1 && m1.cols === 1 && cols > 1) {
    var newData = [];
    for (var col = 0; col < cols; col += 1) {
      for (var row = 0; row < m1.rows; row += 1) {
        newData[row * cols + col] = m1.data[row * m1.cols];
      }
    }
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, cols, newData);
  } else if (cols === 1 && m1.rows === 1 && rows > 1) {
    var _newData = [];
    for (var _row = 0; _row < rows; _row += 1) {
      for (var _col = 0; _col < m1.cols; _col += 1) {
        _newData[_row * m1.cols + _col] = m1.data[_col];
      }
    }
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(rows, m1.cols, _newData);
  }
  return m1;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/rollToColMatrix.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Computation/CPU/rollToColMatrix.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_34294__) => {

__nested_webpack_require_34294__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_34294__.d(__nested_webpack_exports__, {
/* harmony export */   rollToColMatrix: () => (/* binding */ rollToColMatrix)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_34294__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var rollToColMatrix = function rollToColMatrix(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    for (var col = 0; col < m1.cols; col += 1) {
      data.push(m1.data[row * m1.cols + col]);
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows * m1.cols, 1, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/row.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/row.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_35275__) => {

__nested_webpack_require_35275__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_35275__.d(__nested_webpack_exports__, {
/* harmony export */   row: () => (/* binding */ row)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_35275__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var row = function row(m1, _row) {
  var startIndex = _row * m1.cols;
  var data = [];
  for (var i = startIndex; i < startIndex + m1.cols; i += 1) {
    data.push(m1.data[i]);
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(1, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/rowMaxCoeffIndex.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Computation/CPU/rowMaxCoeffIndex.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_36232__) => {

__nested_webpack_require_36232__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_36232__.d(__nested_webpack_exports__, {
/* harmony export */   rowMaxCoeffIndex: () => (/* binding */ rowMaxCoeffIndex)
/* harmony export */ });
var rowMaxCoeffIndex = function rowMaxCoeffIndex(m1, row) {
  var maxIndex = -1;
  var max = -Infinity;
  for (var col = 0; col < m1.cols; col += 1) {
    if (m1.data[row * m1.cols + col] > max) {
      max = m1[row * m1.cols + col];
      maxIndex = col;
    }
  }
  return maxIndex;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/rowwiseSum.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/CPU/rowwiseSum.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_37063__) => {

__nested_webpack_require_37063__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_37063__.d(__nested_webpack_exports__, {
/* harmony export */   rowwiseSum: () => (/* binding */ rowwiseSum)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_37063__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var rowwiseSum = function rowwiseSum(m1) {
  var data = [];
  for (var row = 0; row < m1.rows; row += 1) {
    var sum = 0.0;
    for (var col = 0; col < m1.cols; col += 1) {
      sum += m1.data[row * m1.cols + col];
    }
    data.push(sum);
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(1, m1.rows, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setMax.ts":
/*!**************************************************!*\
  !*** ./src/typescript/Computation/CPU/setMax.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_38061__) => {

__nested_webpack_require_38061__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_38061__.d(__nested_webpack_exports__, {
/* harmony export */   setMax: () => (/* binding */ setMax)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_38061__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setMax = function setMax(m1, max) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.min(value, max);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setMin.ts":
/*!**************************************************!*\
  !*** ./src/typescript/Computation/CPU/setMin.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_40171__) => {

__nested_webpack_require_40171__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_40171__.d(__nested_webpack_exports__, {
/* harmony export */   setMin: () => (/* binding */ setMin)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_40171__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setMin = function setMin(m1, min) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.max(value, min);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setOnes.ts":
/*!***************************************************!*\
  !*** ./src/typescript/Computation/CPU/setOnes.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_42285__) => {

__nested_webpack_require_42285__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_42285__.d(__nested_webpack_exports__, {
/* harmony export */   setOnes: () => (/* binding */ setOnes)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42285__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setOnes = function setOnes(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = 1;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setRandom.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/CPU/setRandom.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_44387__) => {

__nested_webpack_require_44387__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_44387__.d(__nested_webpack_exports__, {
/* harmony export */   setRandom: () => (/* binding */ setRandom)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_44387__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setRandom = function setRandom(m1, parameter) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/setZeros.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/setZeros.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_46585__) => {

__nested_webpack_require_46585__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_46585__.d(__nested_webpack_exports__, {
/* harmony export */   setZeros: () => (/* binding */ setZeros)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_46585__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var setZeros = function setZeros(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = 0;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/sqrt.ts":
/*!************************************************!*\
  !*** ./src/typescript/Computation/CPU/sqrt.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_48671__) => {

__nested_webpack_require_48671__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_48671__.d(__nested_webpack_exports__, {
/* harmony export */   sqrt: () => (/* binding */ sqrt)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48671__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var sqrt = function sqrt(m1) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = Math.sqrt(value + 1e-8);
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/subtract.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Computation/CPU/subtract.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_50779__) => {

__nested_webpack_require_50779__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_50779__.d(__nested_webpack_exports__, {
/* harmony export */   subtract: () => (/* binding */ subtract)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_50779__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var subtract = function subtract(m1, m) {
  if (typeof m === "number") {
    var data = _toConsumableArray(m1.data);
    data.forEach(function (value, index) {
      data[index] = value - m;
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
  } else {
    if (m1.rows !== m.rows || m1.cols !== m.cols) {
      throw new Error("Dimensions error: ".concat(m1.rows, ", ").concat(m1.cols, " !== ").concat(m.rows, ", ").concat(m.cols));
    }
    var _data = _toConsumableArray(m1.data);
    _data.forEach(function (value, index) {
      _data[index] = value - m.data[index];
    });
    return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, _data);
  }
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/subtractNumberFrom.ts":
/*!**************************************************************!*\
  !*** ./src/typescript/Computation/CPU/subtractNumberFrom.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_53405__) => {

__nested_webpack_require_53405__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_53405__.d(__nested_webpack_exports__, {
/* harmony export */   subtractNumberFrom: () => (/* binding */ subtractNumberFrom)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_53405__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var subtractNumberFrom = function subtractNumberFrom(m1, num) {
  var data = _toConsumableArray(m1.data);
  data.forEach(function (value, index) {
    data[index] = num - value;
  });
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.rows, m1.cols, data);
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/sum.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Computation/CPU/sum.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_55542__) => {

__nested_webpack_require_55542__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_55542__.d(__nested_webpack_exports__, {
/* harmony export */   sum: () => (/* binding */ sum)
/* harmony export */ });
var sum = function sum(m1) {
  var sum = 0.0;
  for (var index = 0; index < m1.rows * m1.cols; index += 1) {
    sum += m1.data[index];
  }
  return sum;
};

/***/ }),

/***/ "./src/typescript/Computation/CPU/transpose.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/CPU/transpose.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_56212__) => {

__nested_webpack_require_56212__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_56212__.d(__nested_webpack_exports__, {
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_56212__(/*! ../../Math/Matrix */ "./src/typescript/Math/Matrix.ts");

var transpose = function transpose(m1) {
  var data = [];
  for (var col = 0; col < m1.cols; ++col) {
    for (var row = 0; row < m1.rows; ++row) {
      data.push(m1.data[row * m1.cols + col]);
    }
  }
  return new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(m1.cols, m1.rows, data);
};

/***/ }),

/***/ "./src/typescript/Computation/ComputationCPU.ts":
/*!******************************************************!*\
  !*** ./src/typescript/Computation/ComputationCPU.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_57187__) => {

__nested_webpack_require_57187__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_57187__.d(__nested_webpack_exports__, {
/* harmony export */   ComputationCPU: () => (/* binding */ ComputationCPU)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_57187__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _CPU_dot__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_57187__(/*! ./CPU/dot */ "./src/typescript/Computation/CPU/dot.ts");
/* harmony import */ var _CPU_transpose__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_57187__(/*! ./CPU/transpose */ "./src/typescript/Computation/CPU/transpose.ts");
/* harmony import */ var _CPU_reluBackpropagation__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_57187__(/*! ./CPU/reluBackpropagation */ "./src/typescript/Computation/CPU/reluBackpropagation.ts");
/* harmony import */ var _CPU_add__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_57187__(/*! ./CPU/add */ "./src/typescript/Computation/CPU/add.ts");
/* harmony import */ var _CPU_subtract__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_57187__(/*! ./CPU/subtract */ "./src/typescript/Computation/CPU/subtract.ts");
/* harmony import */ var _CPU_multiply__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_57187__(/*! ./CPU/multiply */ "./src/typescript/Computation/CPU/multiply.ts");
/* harmony import */ var _CPU_divide__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_57187__(/*! ./CPU/divide */ "./src/typescript/Computation/CPU/divide.ts");
/* harmony import */ var _CPU_minusOne__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_57187__(/*! ./CPU/minusOne */ "./src/typescript/Computation/CPU/minusOne.ts");
/* harmony import */ var _CPU_log__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_57187__(/*! ./CPU/log */ "./src/typescript/Computation/CPU/log.ts");
/* harmony import */ var _CPU_pow__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_57187__(/*! ./CPU/pow */ "./src/typescript/Computation/CPU/pow.ts");
/* harmony import */ var _CPU_exp__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_57187__(/*! ./CPU/exp */ "./src/typescript/Computation/CPU/exp.ts");
/* harmony import */ var _CPU_sqrt__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_57187__(/*! ./CPU/sqrt */ "./src/typescript/Computation/CPU/sqrt.ts");
/* harmony import */ var _CPU_subtractNumberFrom__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_57187__(/*! ./CPU/subtractNumberFrom */ "./src/typescript/Computation/CPU/subtractNumberFrom.ts");
/* harmony import */ var _CPU_setMin__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_57187__(/*! ./CPU/setMin */ "./src/typescript/Computation/CPU/setMin.ts");
/* harmony import */ var _CPU_setMax__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_57187__(/*! ./CPU/setMax */ "./src/typescript/Computation/CPU/setMax.ts");
/* harmony import */ var _CPU_setOnes__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_57187__(/*! ./CPU/setOnes */ "./src/typescript/Computation/CPU/setOnes.ts");
/* harmony import */ var _CPU_setZeros__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_57187__(/*! ./CPU/setZeros */ "./src/typescript/Computation/CPU/setZeros.ts");
/* harmony import */ var _CPU_setRandom__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_57187__(/*! ./CPU/setRandom */ "./src/typescript/Computation/CPU/setRandom.ts");
/* harmony import */ var _CPU_fraction__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_57187__(/*! ./CPU/fraction */ "./src/typescript/Computation/CPU/fraction.ts");
/* harmony import */ var _CPU_max__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_57187__(/*! ./CPU/max */ "./src/typescript/Computation/CPU/max.ts");
/* harmony import */ var _CPU_abs__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_57187__(/*! ./CPU/abs */ "./src/typescript/Computation/CPU/abs.ts");
/* harmony import */ var _CPU_mean__WEBPACK_IMPORTED_MODULE_22__ = __nested_webpack_require_57187__(/*! ./CPU/mean */ "./src/typescript/Computation/CPU/mean.ts");
/* harmony import */ var _CPU_sum__WEBPACK_IMPORTED_MODULE_23__ = __nested_webpack_require_57187__(/*! ./CPU/sum */ "./src/typescript/Computation/CPU/sum.ts");
/* harmony import */ var _CPU_rowwiseSum__WEBPACK_IMPORTED_MODULE_24__ = __nested_webpack_require_57187__(/*! ./CPU/rowwiseSum */ "./src/typescript/Computation/CPU/rowwiseSum.ts");
/* harmony import */ var _CPU_colwiseSum__WEBPACK_IMPORTED_MODULE_25__ = __nested_webpack_require_57187__(/*! ./CPU/colwiseSum */ "./src/typescript/Computation/CPU/colwiseSum.ts");
/* harmony import */ var _CPU_replicate__WEBPACK_IMPORTED_MODULE_26__ = __nested_webpack_require_57187__(/*! ./CPU/replicate */ "./src/typescript/Computation/CPU/replicate.ts");
/* harmony import */ var _CPU_colMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_27__ = __nested_webpack_require_57187__(/*! ./CPU/colMaxCoeffIndex */ "./src/typescript/Computation/CPU/colMaxCoeffIndex.ts");
/* harmony import */ var _CPU_rowMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_28__ = __nested_webpack_require_57187__(/*! ./CPU/rowMaxCoeffIndex */ "./src/typescript/Computation/CPU/rowMaxCoeffIndex.ts");
/* harmony import */ var _CPU_row__WEBPACK_IMPORTED_MODULE_29__ = __nested_webpack_require_57187__(/*! ./CPU/row */ "./src/typescript/Computation/CPU/row.ts");
/* harmony import */ var _CPU_col__WEBPACK_IMPORTED_MODULE_30__ = __nested_webpack_require_57187__(/*! ./CPU/col */ "./src/typescript/Computation/CPU/col.ts");
/* harmony import */ var _CPU_rollToColMatrix__WEBPACK_IMPORTED_MODULE_31__ = __nested_webpack_require_57187__(/*! ./CPU/rollToColMatrix */ "./src/typescript/Computation/CPU/rollToColMatrix.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
































var ComputationCPU = /*#__PURE__*/function (_AbstractComputation) {
  function ComputationCPU() {
    var _this;
    _classCallCheck(this, ComputationCPU);
    _this = _callSuper(this, ComputationCPU);
    _this.addKernel("dot", _CPU_dot__WEBPACK_IMPORTED_MODULE_1__.dot);
    _this.addKernel("transpose", _CPU_transpose__WEBPACK_IMPORTED_MODULE_2__.transpose);
    _this.addKernel("reluBackpropagation", _CPU_reluBackpropagation__WEBPACK_IMPORTED_MODULE_3__.reluBackpropagation);
    _this.addKernel("add", _CPU_add__WEBPACK_IMPORTED_MODULE_4__.add);
    _this.addKernel("subtract", _CPU_subtract__WEBPACK_IMPORTED_MODULE_5__.subtract);
    _this.addKernel("multiply", _CPU_multiply__WEBPACK_IMPORTED_MODULE_6__.multiply);
    _this.addKernel("divide", _CPU_divide__WEBPACK_IMPORTED_MODULE_7__.divide);
    _this.addKernel("minusOne", _CPU_minusOne__WEBPACK_IMPORTED_MODULE_8__.minusOne);
    _this.addKernel("subtractNumberFrom", _CPU_subtractNumberFrom__WEBPACK_IMPORTED_MODULE_13__.subtractNumberFrom);
    _this.addKernel("log", _CPU_log__WEBPACK_IMPORTED_MODULE_9__.log);
    _this.addKernel("exp", _CPU_exp__WEBPACK_IMPORTED_MODULE_11__.exp);
    _this.addKernel("pow", _CPU_pow__WEBPACK_IMPORTED_MODULE_10__.pow);
    _this.addKernel("sqrt", _CPU_sqrt__WEBPACK_IMPORTED_MODULE_12__.sqrt);
    _this.addKernel("setMin", _CPU_setMin__WEBPACK_IMPORTED_MODULE_14__.setMin);
    _this.addKernel("setMax", _CPU_setMax__WEBPACK_IMPORTED_MODULE_15__.setMax);
    _this.addKernel("setOnes", _CPU_setOnes__WEBPACK_IMPORTED_MODULE_16__.setOnes);
    _this.addKernel("setZeros", _CPU_setZeros__WEBPACK_IMPORTED_MODULE_17__.setZeros);
    _this.addKernel("setRandom", _CPU_setRandom__WEBPACK_IMPORTED_MODULE_18__.setRandom);
    _this.addKernel("fraction", _CPU_fraction__WEBPACK_IMPORTED_MODULE_19__.fraction);
    _this.addKernel("max", _CPU_max__WEBPACK_IMPORTED_MODULE_20__.max);
    _this.addKernel("abs", _CPU_abs__WEBPACK_IMPORTED_MODULE_21__.abs);
    _this.addKernel("mean", _CPU_mean__WEBPACK_IMPORTED_MODULE_22__.mean);
    _this.addKernel("sum", _CPU_sum__WEBPACK_IMPORTED_MODULE_23__.sum);
    _this.addKernel("rowwiseSum", _CPU_rowwiseSum__WEBPACK_IMPORTED_MODULE_24__.rowwiseSum);
    _this.addKernel("colwiseSum", _CPU_colwiseSum__WEBPACK_IMPORTED_MODULE_25__.colwiseSum);
    _this.addKernel("replicate", _CPU_replicate__WEBPACK_IMPORTED_MODULE_26__.replicate);
    _this.addKernel("colMaxCoeffIndex", _CPU_colMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_27__.colMaxCoeffIndex);
    _this.addKernel("rowMaxCoeffIndex", _CPU_rowMaxCoeffIndex__WEBPACK_IMPORTED_MODULE_28__.rowMaxCoeffIndex);
    _this.addKernel("row", _CPU_row__WEBPACK_IMPORTED_MODULE_29__.row);
    _this.addKernel("col", _CPU_col__WEBPACK_IMPORTED_MODULE_30__.col);
    _this.addKernel("rollToColMatrix", _CPU_rollToColMatrix__WEBPACK_IMPORTED_MODULE_31__.rollToColMatrix);
    /*
    this.addKernel("subtractFromNumber", subtractFromNumber);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("fillZeros", fillZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
    this.addKernel("elementWiseDivide", elementWiseDivide);
    this.addKernel("divideNumber", divideNumber);
    this.addKernel("logisticActivation", logisticActivation);
    this.addKernel("logisticLoss", logisticLoss);
    this.addKernel("logisticBackpropagation", logisticBackpropagation);
    this.addKernel("tanhActivation", tanhActivation);
    this.addKernel("reluActivation", reluActivation);
    this.addKernel("softplusActivation", softplusActivation);
    this.addKernel("penalty", penalty);
    this.addKernel("sqrt", sqrt);
    this.addKernel("transpose", transpose);
    this.addKernel("pow", pow);
    this.addKernel("log", log);
    this.addKernel("logMinusOne", logMinusOne);
    this.addKernel("addNumber", addNumber);*/
    return _this;
  }
  _inherits(ComputationCPU, _AbstractComputation);
  return _createClass(ComputationCPU);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/ComputationMultiCore.ts":
/*!************************************************************!*\
  !*** ./src/typescript/Computation/ComputationMultiCore.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_70223__) => {

__nested_webpack_require_70223__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_70223__.d(__nested_webpack_exports__, {
/* harmony export */   ComputationMultiCore: () => (/* binding */ ComputationMultiCore)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_70223__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _MultiCore_dot__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_70223__(/*! ./MultiCore/dot */ "./src/typescript/Computation/MultiCore/dot.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ComputationMultiCore = /*#__PURE__*/function (_AbstractComputation) {
  function ComputationMultiCore() {
    var _this;
    _classCallCheck(this, ComputationMultiCore);
    _this = _callSuper(this, ComputationMultiCore);
    _this.addKernel("dot", _MultiCore_dot__WEBPACK_IMPORTED_MODULE_1__.dot);

    /*this.addKernel("multiply", dot);
    this.addKernel("add", add);
    this.addKernel("subtract", subtract);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("fillZeros", fillZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
    this.addKernel("multiplyNumber", multiplyNumber);
    this.addKernel("elementWiseDivide", elementWiseDivide);
    this.addKernel("divideNumber", divideNumber);
    this.addKernel("softmaxActivation", softmaxActivation);
    this.addKernel("softmaxLoss", softmaxLoss);
    this.addKernel("logisticActivation", logisticActivation);
    this.addKernel("logisticLoss", logisticLoss);
    this.addKernel("tanhActivation", tanhActivation);
    this.addKernel("reluActivation", reluActivation);
    this.addKernel("softplusActivation", softplusActivation);
    this.addKernel("penalty", penalty);
    this.addKernel("sqrt", sqrt);
    this.addKernel("purelinLoss", purelinLoss);
    this.addKernel("transpose", transpose);*/
    return _this;
  }
  _inherits(ComputationMultiCore, _AbstractComputation);
  return _createClass(ComputationMultiCore);
}(_AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation);

/***/ }),

/***/ "./src/typescript/Computation/MultiCore/dot.ts":
/*!*****************************************************!*\
  !*** ./src/typescript/Computation/MultiCore/dot.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_75900__) => {

__nested_webpack_require_75900__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_75900__.d(__nested_webpack_exports__, {
/* harmony export */   dot: () => (/* binding */ dot)
/* harmony export */ });
//import { MatrixMultiply } from "../../../../build/Debug/computation.node";

var dot = function dot(m1, m2) {
  //console.log(MatrixMultiply([1, 2, 3, 4], [4, 3, 2, 1]));
};

/***/ }),

/***/ "./src/typescript/Computation/index.ts":
/*!*********************************************!*\
  !*** ./src/typescript/Computation/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_76556__) => {

__nested_webpack_require_76556__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_76556__.d(__nested_webpack_exports__, {
/* harmony export */   AbstractComputation: () => (/* reexport safe */ _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__.AbstractComputation),
/* harmony export */   ComputationCPU: () => (/* reexport safe */ _ComputationCPU__WEBPACK_IMPORTED_MODULE_2__.ComputationCPU),
/* harmony export */   ComputationMultiCore: () => (/* reexport safe */ _ComputationMultiCore__WEBPACK_IMPORTED_MODULE_1__.ComputationMultiCore),
/* harmony export */   getComputation: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.getComputation),
/* harmony export */   setComputation: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.setComputation)
/* harmony export */ });
/* harmony import */ var _AbstractComputation__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_76556__(/*! ./AbstractComputation */ "./src/typescript/Computation/AbstractComputation.ts");
/* harmony import */ var _ComputationMultiCore__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_76556__(/*! ./ComputationMultiCore */ "./src/typescript/Computation/ComputationMultiCore.ts");
/* harmony import */ var _ComputationCPU__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_76556__(/*! ./ComputationCPU */ "./src/typescript/Computation/ComputationCPU.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_76556__(/*! ./utils */ "./src/typescript/Computation/utils.ts");






/***/ }),

/***/ "./src/typescript/Computation/utils.ts":
/*!*********************************************!*\
  !*** ./src/typescript/Computation/utils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_78316__) => {

__nested_webpack_require_78316__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_78316__.d(__nested_webpack_exports__, {
/* harmony export */   getComputation: () => (/* binding */ getComputation),
/* harmony export */   setComputation: () => (/* binding */ setComputation)
/* harmony export */ });
/* harmony import */ var _ComputationCPU__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78316__(/*! ./ComputationCPU */ "./src/typescript/Computation/ComputationCPU.ts");

var currentComputation = new _ComputationCPU__WEBPACK_IMPORTED_MODULE_0__.ComputationCPU();
var setComputation = function setComputation(type) {
  currentComputation = type;
};
var getComputation = function getComputation() {
  return currentComputation;
};

/***/ }),

/***/ "./src/typescript/Math/Matrix.ts":
/*!***************************************!*\
  !*** ./src/typescript/Math/Matrix.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_79298__) => {

__nested_webpack_require_79298__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_79298__.d(__nested_webpack_exports__, {
/* harmony export */   Matrix: () => (/* binding */ Matrix)
/* harmony export */ });
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_79298__(/*! ../Computation */ "./src/typescript/Computation/index.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Matrix = /*#__PURE__*/function () {
  function Matrix() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, Matrix);
    _defineProperty(this, "rows", 0);
    _defineProperty(this, "cols", 0);
    _defineProperty(this, "data", null);
    this.rows = rows;
    this.cols = cols;
    this.data = data;
    if (!data) {
      this.data = new Array(rows * cols);
    }
  }
  return _createClass(Matrix, [{
    key: "resize",
    value: function resize(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.data = new Array(rows * cols);
    }
  }, {
    key: "sum",
    value: function sum() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("sum", this);
    }
  }, {
    key: "colwiseSum",
    value: function colwiseSum() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("colwiseSum", this);
    }
  }, {
    key: "rowwiseSum",
    value: function rowwiseSum() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("rowwiseSum", this);
    }
  }, {
    key: "flatten",
    value: function flatten() {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        for (var col = 0; col < this.cols; col += 1) {
          data.push(this.data[row][col]);
        }
      }
      return data;
    }
  }, {
    key: "replicate",
    value: function replicate(rows, cols) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("replicate", this, rows, cols);
    }
  }, {
    key: "transpose",
    value: function transpose() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("transpose", this);
    }
  }, {
    key: "colMaxCoeffIndex",
    value: function colMaxCoeffIndex(col) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("colMaxCoeffIndex", this, col);
    }
  }, {
    key: "rowMaxCoeffIndex",
    value: function rowMaxCoeffIndex(row) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("rowMaxCoeffIndex", this, row);
    } /*
      block(startRow: number, startCol: number, blockRows: number, blockCols: number): Matrix {
       const data = [];
        for (let row = startRow, newRow = 0; row < this.rows && row < startRow + blockRows; row += 1, newRow += 1) {
         data[newRow] = new Array(blockCols);
         for (let col = startCol, newCol = 0; col < this.cols && col < startCol + blockCols; col += 1, newCol += 1) {
           data[newRow][newCol] = this.data[row][col];
         }
       }
        return new Matrix(blockRows, blockCols, data);
      }*/
  }, {
    key: "col",
    value: function col(_col) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("col", this, _col);
    }
  }, {
    key: "row",
    value: function row(_row) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("row", this, _row);
    }
  }, {
    key: "sigmoid",
    value: function sigmoid() {
      return this.multiply(-1).exp().add(1).fraction(1);
    }
  }, {
    key: "rollToColMatrix",
    value: function rollToColMatrix() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("rollToColMatrix", this);
    }
  }, {
    key: "abs",
    value: function abs() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("abs", this);
    }
  }, {
    key: "mean",
    value: function mean() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("mean", this);
    }
  }, {
    key: "max",
    value: function max() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("max", this);
    }
  }, {
    key: "setMax",
    value: function setMax(max) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setMax", this, max);
    }
  }, {
    key: "setMin",
    value: function setMin(min) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setMin", this, min);
    }
  }, {
    key: "setZeros",
    value: function setZeros() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setZeros", this);
    }
  }, {
    key: "setOnes",
    value: function setOnes() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setOnes", this);
    }
  }, {
    key: "setRandom",
    value: function setRandom() {
      var parameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      // todo: gaussian distribution
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("setRandom", this, parameter);
    }
  }, {
    key: "fraction",
    value: function fraction() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("fraction", this, num);
    }
  }, {
    key: "sqrt",
    value: function sqrt() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("sqrt", this);
    }
  }, {
    key: "dot",
    value: function dot(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("dot", this, m);
    }
  }, {
    key: "multiply",
    value: function multiply(num) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("multiply", this, num);
    }
  }, {
    key: "subtract",
    value: function subtract(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("subtract", this, m);
    }
  }, {
    key: "forEach",
    value: function forEach(cb) {
      var data = [];
      for (var row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (var col = 0; col < this.cols; col += 1) {
          data[row][col] = cb(this.data[row][col]);
        }
      }
      return Matrix.from(data);
    }
  }, {
    key: "shape",
    value: function shape() {
      return [this.rows, this.cols];
    }
  }, {
    key: "divide",
    value: function divide(num) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("divide", this, num);
    }
  }, {
    key: "minusOne",
    value: function minusOne() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("subtractNumberFrom", this, -1);
    }
  }, {
    key: "subtractNumberFrom",
    value: function subtractNumberFrom(num) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("subtractNumberFrom", this, num);
    }
  }, {
    key: "add",
    value: function add(m) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("add", this, m);
    }
  }, {
    key: "log",
    value: function log() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("log", this);
    }
  }, {
    key: "tanh",
    value: function tanh() {
      return this.exp().subtract(this.multiply(-1).exp()).divide(this.exp().add(this.multiply(-1).exp()));
    }
  }, {
    key: "softmax",
    value: function softmax() {
      var max = this.max() - 1e-8;
      return this.subtract(max).exp().divide(this.rowwiseSum().replicate(this.cols, 1).transpose());
    }
  }, {
    key: "exp",
    value: function exp() {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("exp", this);
    }
  }, {
    key: "pow",
    value: function pow(num) {
      return (0,_Computation__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("pow", this, num);
    }
  }, {
    key: "value",
    value: function value(row, col) {
      var _value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      if (_value === undefined) {
        return this.data[row][col];
      }
      this.data[row][col] = _value;
      return this;
    }
  }, {
    key: "copy",
    value: function copy() {
      return Matrix.from(this.data);
    }
  }, {
    key: "concat",
    value: function concat(m) {
      for (var row = 0; row < m.rows; row += 1) {
        this.data.push(m.data[row]);
      }
      return this;
    }
  }], [{
    key: "from",
    value: function from(arr) {
      var _arr$;
      return new Matrix(arr.length, ((_arr$ = arr[0]) === null || _arr$ === void 0 ? void 0 : _arr$.length) || 0, arr);
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/Math/math.ts":
/*!*************************************!*\
  !*** ./src/typescript/Math/math.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_90366__) => {

__nested_webpack_require_90366__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_90366__.d(__nested_webpack_exports__, {
/* harmony export */   im2col: () => (/* binding */ im2col),
/* harmony export */   maxpool: () => (/* binding */ maxpool),
/* harmony export */   round: () => (/* binding */ round)
/* harmony export */ });
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_90366__(/*! ./Matrix */ "./src/typescript/Math/Matrix.ts");

var im2col = function im2col(input, channels, height, width, kernel_h, kernel_w, pad_h, pad_w, stride_h, stride_w) {
  var cols = kernel_w * kernel_h * channels;
  var rows = ((width - kernel_w + 2 * pad_w) / stride_w + 1) * ((height - kernel_h + 2 * pad_h) / stride_h + 1);
  var currentResultRow = 0;
  var result = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(rows, cols).setZeros();
  for (var boundingY = -pad_h; boundingY + kernel_h <= height + pad_h; boundingY += stride_h) {
    for (var boundingX = -pad_w; boundingX + kernel_w <= width + pad_w; boundingX += stride_w) {
      var currentResultCol = 0;
      for (var channel = 0; channel < channels; channel++) {
        var inputOffset = height * width * channel;
        for (var y = 0; y < kernel_h; y++) {
          for (var x = 0; x < kernel_w; x++) {
            if (boundingY + y >= 0 && boundingX + x >= 0 && boundingX + x < width && boundingY + y < height) {
              result.data[currentResultRow][currentResultCol] = input.data[(y + boundingY) * width + boundingX + x + inputOffset][0];
            }
            currentResultCol++;
          }
        }
      }
      currentResultRow++;
    }
  }
  return result;
};
var maxpool = function maxpool(input, channels, height, width, kernel_h, kernel_w, stride_h, stride_w) {
  var resultWidth = (width - kernel_w) / stride_w + 1;
  var resultHeight = (height - kernel_h) / stride_h + 1;
  var resultDepth = channels;
  var currentResultCol = 0;
  var result = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(resultWidth * resultHeight * resultDepth, 1).setZeros();
  for (var boundingY = 0; boundingY + kernel_h <= height; boundingY += stride_h) {
    for (var boundingX = 0; boundingX + kernel_w <= width; boundingX += stride_w) {
      for (var channel = 0; channel < channels; channel++) {
        var _max = -Infinity;
        var inputOffset = height * width * channel;
        var outputOffset = resultWidth * resultHeight * channel;
        for (var y = 0; y < kernel_h; y++) {
          for (var x = 0; x < kernel_w; x++) {
            _max = Math.max(_max, input.data[inputOffset + (y + boundingY) * width + boundingX + x][0]);
          }
        }
        result.data[outputOffset + currentResultCol][0] = _max;
      }
      currentResultCol++;
    }
  }
  return result;
};
var round = function round(num, decimalPlaces) {
  return Math.round((num + 2.23e-16) * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_93542__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_93542__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_93542__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_93542__.o(definition, key) && !__nested_webpack_require_93542__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_93542__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_93542__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/typescript/main.ts ***!
  \********************************/
__nested_webpack_require_93542__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_93542__.d(__nested_webpack_exports__, {
/* harmony export */   ComputationCPU: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.ComputationCPU),
/* harmony export */   ComputationMultiCore: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.ComputationMultiCore),
/* harmony export */   Matrix: () => (/* reexport safe */ _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix),
/* harmony export */   getComputation: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.getComputation),
/* harmony export */   im2col: () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.im2col),
/* harmony export */   maxpool: () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.maxpool),
/* harmony export */   round: () => (/* reexport safe */ _Math_math__WEBPACK_IMPORTED_MODULE_1__.round),
/* harmony export */   setComputation: () => (/* reexport safe */ _Computation__WEBPACK_IMPORTED_MODULE_2__.setComputation)
/* harmony export */ });
/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_93542__(/*! ./Math/Matrix */ "./src/typescript/Math/Matrix.ts");
/* harmony import */ var _Math_math__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_93542__(/*! ./Math/math */ "./src/typescript/Math/math.ts");
/* harmony import */ var _Computation__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_93542__(/*! ./Computation */ "./src/typescript/Computation/index.ts");




})();

module.exports = __nested_webpack_exports__;
/******/ })()
;
//# sourceMappingURL=impulse-math-ts.dev.js.map

/***/ }),

/***/ "./src/typescript/Layer/AbstractLayer.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Layer/AbstractLayer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractLayer: () => (/* binding */ AbstractLayer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AbstractLayer = /*#__PURE__*/function () {
  function AbstractLayer() {
    _classCallCheck(this, AbstractLayer);
    _defineProperty(this, "width", 0);
    _defineProperty(this, "height", 0);
    _defineProperty(this, "depth", 0);
    _defineProperty(this, "previousLayer", null);
    _defineProperty(this, "backPropagation", null);
  }
  return _createClass(AbstractLayer, [{
    key: "setBackPropagation",
    value: function setBackPropagation(backPropagation) {
      this.backPropagation = backPropagation;
      return this;
    }
  }, {
    key: "getBackPropagation",
    value: function getBackPropagation() {
      return this.backPropagation;
    }
  }, {
    key: "setWidth",
    value: function setWidth(value) {
      this.width = value;
      return this;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "setHeight",
    value: function setHeight(value) {
      this.height = value;
      return this;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "setDepth",
    value: function setDepth(value) {
      this.depth = value;
      return this;
    }
  }, {
    key: "getDepth",
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: "transition",
    value: function transition(previousLayer) {
      this.previousLayer = previousLayer;
      return this;
    }
  }]);
}();


/***/ }),

/***/ "./src/typescript/Layer/AbstractLayer1D.ts":
/*!*************************************************!*\
  !*** ./src/typescript/Layer/AbstractLayer1D.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractLayer1D: () => (/* binding */ AbstractLayer1D)
/* harmony export */ });
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var AbstractLayer1D = /*#__PURE__*/function (_AbstractLayer) {
  function AbstractLayer1D() {
    var _this;
    _classCallCheck(this, AbstractLayer1D);
    _this = _callSuper(this, AbstractLayer1D);
    _defineProperty(_this, "depth", 1);
    _this.W = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.b = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.A = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.Z = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.dW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.db = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    return _this;
  }
  _inherits(AbstractLayer1D, _AbstractLayer);
  return _createClass(AbstractLayer1D, [{
    key: "configure",
    value: function configure() {
      this.W.resize(this.getHeight(), this.getWidth());
      this.W = this.W.setRandom(this.previousLayer ? this.previousLayer.getHeight() : this.getHeight());
      this.b.resize(this.getHeight(), 1);
      this.b = this.b.setRandom(this.previousLayer ? this.previousLayer.getHeight() : this.getHeight());
      this.gW.resize(this.getHeight(), this.getWidth());
      this.gW = this.gW.setZeros();
      this.gb.resize(this.getHeight(), 1);
      this.gb = this.gb.setZeros();
      this.sW.resize(this.getHeight(), this.getWidth());
      this.sW = this.sW.setZeros();
      this.sb.resize(this.getHeight(), 1);
      this.sb = this.sb.setZeros();
      this.vW.resize(this.getHeight(), this.getWidth());
      this.vW = this.vW.setZeros();
      this.vb.resize(this.getHeight(), 1);
      this.vb = this.vb.setZeros();
      this.dW.resize(this.getHeight(), this.getWidth());
      this.dW = this.dW.setZeros();
      this.db.resize(this.getHeight(), 1);
      this.db = this.db.setZeros();
    }
  }, {
    key: "forward",
    value: function forward(input) {
      this.Z = this.W.dot(input).add(this.b.replicate(1, input.cols));
      this.A = this.activation(this.Z);
      return this.A;
    }
  }, {
    key: "is1D",
    value: function is1D() {
      return true;
    }
  }, {
    key: "is3D",
    value: function is3D() {
      return false;
    }
  }, {
    key: "transition",
    value: function transition(previousLayer) {
      if (previousLayer.is1D()) {
        this.setWidth(previousLayer.getSize());
      } else if (previousLayer.is3D()) {
        this.setWidth(previousLayer.getOutputWidth() * previousLayer.getOutputHeight() * previousLayer.getOutputDepth());
      }
      _get(_getPrototypeOf(AbstractLayer1D.prototype), "transition", this).call(this, previousLayer);
      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(value) {
      this.setHeight(value);
      return this;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.height;
    }
  }, {
    key: "getOutputWidth",
    value: function getOutputWidth() {
      return this.width;
    }
  }, {
    key: "getOutputHeight",
    value: function getOutputHeight() {
      return this.height;
    }
  }, {
    key: "getOutputDepth",
    value: function getOutputDepth() {
      return 1;
    }
  }, {
    key: "penalty",
    value: function penalty() {
      return this.W.pow(2).sum();
    }
  }]);
}(_AbstractLayer__WEBPACK_IMPORTED_MODULE_0__.AbstractLayer);


/***/ }),

/***/ "./src/typescript/Layer/AbstractLayer3D.ts":
/*!*************************************************!*\
  !*** ./src/typescript/Layer/AbstractLayer3D.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractLayer3D: () => (/* binding */ AbstractLayer3D)
/* harmony export */ });
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var AbstractLayer3D = /*#__PURE__*/function (_AbstractLayer) {
  function AbstractLayer3D() {
    var _this;
    _classCallCheck(this, AbstractLayer3D);
    _this = _callSuper(this, AbstractLayer3D);
    _this.W = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.b = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.A = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.Z = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.gb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.vb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.sb = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.dW = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    _this.db = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    return _this;
  }
  _inherits(AbstractLayer3D, _AbstractLayer);
  return _createClass(AbstractLayer3D, [{
    key: "configure",
    value: function configure() {
      // do nothing
    }
  }, {
    key: "is1D",
    value: function is1D() {
      return false;
    }
  }, {
    key: "is3D",
    value: function is3D() {
      return true;
    }
  }, {
    key: "transition",
    value: function transition(previousLayer) {
      if (previousLayer.is3D()) {
        this.setSize([previousLayer.getOutputWidth(), previousLayer.getOutputHeight(), previousLayer.getOutputDepth()]);
      }
      _get(_getPrototypeOf(AbstractLayer3D.prototype), "transition", this).call(this, previousLayer);
      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(dimension) {
      this.setWidth(dimension[0]);
      this.setHeight(dimension[1]);
      this.setDepth(dimension[2]);
      return this;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return [this.getWidth(), this.getHeight(), this.getDepth()];
    }
  }, {
    key: "penalty",
    value: function penalty() {
      return this.W.pow(2).sum();
    }
  }]);
}(_AbstractLayer__WEBPACK_IMPORTED_MODULE_0__.AbstractLayer);


/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts":
/*!*************************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractBackPropagation: () => (/* binding */ AbstractBackPropagation)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AbstractBackPropagation = /*#__PURE__*/_createClass(function AbstractBackPropagation(layer, previousLayer) {
  _classCallCheck(this, AbstractBackPropagation);
  _defineProperty(this, "layer", null);
  _defineProperty(this, "previousLayer", null);
  this.layer = layer;
  this.previousLayer = previousLayer;
});

/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/Backpropagation1Dto1D.ts":
/*!***********************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/Backpropagation1Dto1D.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Backpropagation1Dto1D: () => (/* binding */ Backpropagation1Dto1D)
/* harmony export */ });
/* harmony import */ var _AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractBackpropagation */ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Backpropagation1Dto1D = /*#__PURE__*/function (_AbstractBackPropagat) {
  function Backpropagation1Dto1D() {
    _classCallCheck(this, Backpropagation1Dto1D);
    return _callSuper(this, Backpropagation1Dto1D, arguments);
  }
  _inherits(Backpropagation1Dto1D, _AbstractBackPropagat);
  return _createClass(Backpropagation1Dto1D, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, layer, sigma) {
      var previousActivations = this.previousLayer !== null ? this.previousLayer.A : input;
      var delta = sigma.dot(previousActivations.transpose());
      this.layer.gW = delta.divide(numberOfExamples).add(layer.W.multiply(regularization / numberOfExamples));
      this.layer.gb = sigma.rowwiseSum().transpose().divide(numberOfExamples);
      if (this.previousLayer !== null) {
        // @ts-ignore
        var result = this.layer.W.transpose().dot(sigma);
        if (result.rows !== previousActivations.rows || result.cols !== previousActivations.cols) {
          throw new Error("Dimension error 1. (".concat(result.rows, ", ").concat(result.cols, ") | (").concat(previousActivations.rows, ", ").concat(previousActivations.cols, ")"));
        }
        if (this.layer.gW.rows !== this.layer.W.rows || this.layer.gW.cols !== this.layer.W.cols) {
          throw new Error("Dimension error 2. (".concat(this.layer.gW.rows, ", ").concat(this.layer.gW.cols, ") | (").concat(this.layer.W.rows, ", ").concat(this.layer.W.cols, ")"));
        }
        if (this.layer.gb.rows !== this.layer.b.rows || this.layer.gb.cols !== this.layer.b.cols) {
          throw new Error("Dimension error 3. (".concat(this.layer.gb.rows, ", ").concat(this.layer.gb.cols, ") | (").concat(this.layer.b.rows, ", ").concat(this.layer.b.cols, ")"));
        }
        return result;
      }
      return new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    }
  }]);
}(_AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/Backpropagation3Dto1D.ts":
/*!***********************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/Backpropagation3Dto1D.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Backpropagation3Dto1D: () => (/* binding */ Backpropagation3Dto1D)
/* harmony export */ });
/* harmony import */ var _AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractBackpropagation */ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Backpropagation3Dto1D = /*#__PURE__*/function (_AbstractBackPropagat) {
  function Backpropagation3Dto1D() {
    _classCallCheck(this, Backpropagation3Dto1D);
    return _callSuper(this, Backpropagation3Dto1D, arguments);
  }
  _inherits(Backpropagation3Dto1D, _AbstractBackPropagat);
  return _createClass(Backpropagation3Dto1D, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, layer, sigma) {
      return sigma;
    }
  }]);
}(_AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/BackpropagationFactory.ts":
/*!************************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/BackpropagationFactory.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackpropagationFactory: () => (/* binding */ BackpropagationFactory)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./src/typescript/types.ts");
/* harmony import */ var _Backpropagation1Dto1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Backpropagation1Dto1D */ "./src/typescript/Layer/Backpropagation/Backpropagation1Dto1D.ts");
/* harmony import */ var _Backpropagation3Dto1D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Backpropagation3Dto1D */ "./src/typescript/Layer/Backpropagation/Backpropagation3Dto1D.ts");
/* harmony import */ var _BackpropagationToMaxPool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackpropagationToMaxPool */ "./src/typescript/Layer/Backpropagation/BackpropagationToMaxPool.ts");
/* harmony import */ var _BackpropagationToConv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BackpropagationToConv */ "./src/typescript/Layer/Backpropagation/BackpropagationToConv.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var BackpropagationFactory = /*#__PURE__*/function () {
  function BackpropagationFactory() {
    _classCallCheck(this, BackpropagationFactory);
  }
  return _createClass(BackpropagationFactory, null, [{
    key: "create",
    value: function create(previousLayer, layer) {
      if (previousLayer == null) {
        if (layer.is1D()) {
          return new _Backpropagation1Dto1D__WEBPACK_IMPORTED_MODULE_1__.Backpropagation1Dto1D(layer, previousLayer);
        } else if (layer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.conv) {
          return new _Backpropagation3Dto1D__WEBPACK_IMPORTED_MODULE_2__.Backpropagation3Dto1D(layer, previousLayer);
        }
      } else {
        if (previousLayer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.maxpool) {
          return new _BackpropagationToMaxPool__WEBPACK_IMPORTED_MODULE_3__.BackpropagationToMaxPool(layer, previousLayer);
        } else if (previousLayer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.conv) {
          return new _BackpropagationToConv__WEBPACK_IMPORTED_MODULE_4__.BackpropagationToConv(layer, previousLayer);
        } else if (previousLayer.is1D() || previousLayer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.fullyconnected) {
          return new _Backpropagation1Dto1D__WEBPACK_IMPORTED_MODULE_1__.Backpropagation1Dto1D(layer, previousLayer);
        }
      }
      return null;
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/BackpropagationToConv.ts":
/*!***********************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/BackpropagationToConv.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackpropagationToConv: () => (/* binding */ BackpropagationToConv)
/* harmony export */ });
/* harmony import */ var _AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractBackpropagation */ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var BackpropagationToConv = /*#__PURE__*/function (_AbstractBackPropagat) {
  function BackpropagationToConv() {
    var _this;
    _classCallCheck(this, BackpropagationToConv);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, BackpropagationToConv, [].concat(args));
    _defineProperty(_this, "previousLayer", null);
    return _this;
  }
  _inherits(BackpropagationToConv, _AbstractBackPropagat);
  return _createClass(BackpropagationToConv, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, layer, sigma) {
      var previousLayer = this.previousLayer;
      if (previousLayer) {
        var padding = previousLayer.getPadding();
        var stride = previousLayer.getStride();
        var filterSize = previousLayer.getFilterSize();
        var outputWidth = previousLayer.getOutputWidth();
        var outputHeight = previousLayer.getOutputHeight();
        var outputDepth = previousLayer.getOutputDepth();
        var inputWidth = previousLayer.getWidth();
        var inputHeight = previousLayer.getHeight();
        var inputDepth = previousLayer.getDepth();
        var tmpResult = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.getComputation)().execute("fillZeros", new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix((inputWidth + 2 * padding) * (inputHeight + 2 * padding) * inputDepth, numberOfExamples));
        var result = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(inputWidth * inputHeight * inputDepth, numberOfExamples);
        previousLayer.gW = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.getComputation)().execute("fillZeros", previousLayer.gW);
        previousLayer.gb = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.getComputation)().execute("fillZeros", previousLayer.gb);
        for (var m = 0; m < numberOfExamples; m++) {
          for (var c = 0; c < outputDepth; c++) {
            for (var h = 0; h < outputHeight; h++) {
              for (var w = 0; w < outputWidth; w++) {
                var vertStart = stride * h;
                var vertEnd = vertStart + filterSize;
                var horizStart = stride * w;
                var horizEnd = horizStart + filterSize;

                // filter loop
                for (var d = 0; d < inputDepth; d++) {
                  for (var y = 0, vertical = vertStart, verticalPad = -padding; y < filterSize; y++, vertical++, verticalPad++) {
                    for (var x = 0, horizontal = horizStart, horizontalPad = -padding; x < filterSize; x++, horizontal++, horizontalPad++) {
                      if (previousLayer.W.data && tmpResult.data && sigma.data) {
                        tmpResult.data[d * (inputWidth + 2 * padding) * (inputHeight + 2 * padding) + vertical * (inputWidth + 2 * padding) + horizontal][m] += previousLayer.W.data[c][d * filterSize * filterSize + y * filterSize + x] * sigma.data[c * outputWidth * outputHeight + h * outputWidth + w][m];
                      }
                      var z = 0;
                      if (padding == 0) {
                        if (previousLayer.Z.data) {
                          z = previousLayer.Z.data[d * inputWidth * inputHeight + vertical * inputWidth + horizontal][m];
                        }
                      } else {
                        if (verticalPad >= 0 && horizontalPad >= 0 && verticalPad < inputHeight && horizontalPad < inputWidth) {
                          if (previousLayer.Z.data) {
                            z = previousLayer.Z.data[d * inputWidth * inputHeight + verticalPad * inputWidth + horizontalPad][m];
                          }
                        }
                      }
                      if (previousLayer.gW.data && sigma.data) {
                        previousLayer.gW.data[c][d * filterSize * filterSize + y * filterSize + x] += z * sigma.data[c * (outputWidth * outputHeight) + h * outputWidth + w][m] / numberOfExamples;
                      }
                    }
                  }
                }
                if (previousLayer.gb.data && sigma.data) {
                  previousLayer.gb.data[c][0] += sigma.data[c * (outputWidth * outputHeight) + h * outputWidth + w][m] / numberOfExamples;
                }
              }
            }
          }
          if (padding > 0) {
            // unpad
            for (var _c = 0; _c < inputDepth; _c++) {
              for (var _h = -padding, _y = 0; _h < inputHeight + padding; _h++, _y++) {
                for (var _w = -padding, _x = 0; _w < inputWidth + padding; _w++, _x++) {
                  if (_w >= 0 && _h >= 0 && _w < inputWidth && _h < inputHeight && result.data && tmpResult.data) {
                    result.data[_c * inputWidth * inputHeight + _h * inputWidth + _w][m] = tmpResult.data[_c * (inputWidth + 2 * padding) * (inputHeight + 2 * padding) + _y * (inputWidth + 2 * padding) + _x][m];
                  }
                }
              }
            }
          }
        }
        if (padding > 0) {
          return result;
        }
        return tmpResult;
      }
    }
  }]);
}(_AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/Layer/Backpropagation/BackpropagationToMaxPool.ts":
/*!**************************************************************************!*\
  !*** ./src/typescript/Layer/Backpropagation/BackpropagationToMaxPool.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackpropagationToMaxPool: () => (/* binding */ BackpropagationToMaxPool)
/* harmony export */ });
/* harmony import */ var _AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractBackpropagation */ "./src/typescript/Layer/Backpropagation/AbstractBackpropagation.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var BackpropagationToMaxPool = /*#__PURE__*/function (_AbstractBackPropagat) {
  function BackpropagationToMaxPool() {
    var _this;
    _classCallCheck(this, BackpropagationToMaxPool);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, BackpropagationToMaxPool, [].concat(args));
    _defineProperty(_this, "previousLayer", null);
    return _this;
  }
  _inherits(BackpropagationToMaxPool, _AbstractBackPropagat);
  return _createClass(BackpropagationToMaxPool, [{
    key: "propagate",
    value: function propagate(input, numberOfExamples, regularization, layer, sigma) {
      var prevLayer = this.previousLayer;
      if (prevLayer) {
        var result = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.getComputation)().execute("fillZeros", new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(prevLayer.Z.rows, prevLayer.Z.cols));
        var filterSize = prevLayer.getFilterSize();
        var stride = prevLayer.getStride();
        var inputWidth = prevLayer.getWidth();
        var inputHeight = prevLayer.getHeight();
        var inputDepth = prevLayer.getDepth();
        var outputWidth = prevLayer.getOutputWidth();
        var outputHeight = prevLayer.getOutputHeight();
        var outputDepth = prevLayer.getOutputDepth();
        for (var m = 0; m < numberOfExamples; m++) {
          for (var c = 0; c < outputDepth; c++) {
            for (var h = 0; h < outputHeight; h++) {
              for (var w = 0; w < outputWidth; w++) {
                var vertStart = stride * h;
                var vertEnd = vertStart + filterSize;
                var horizStart = stride * w;
                var horizEnd = horizStart + filterSize;
                var _max = -Infinity;
                var inputOffset = inputHeight * inputWidth * c;
                var outputOffset = outputHeight * outputWidth * c;
                var maxX = 0;
                var maxY = 0;
                for (var y = 0, vStart = vertStart; y < filterSize; y++, vStart++) {
                  for (var x = 0, hStart = horizStart; x < filterSize; x++, hStart++) {
                    if (prevLayer.Z.data && _max < prevLayer.Z.data[inputOffset + vStart * inputWidth + hStart][m]) {
                      _max = prevLayer.Z.data[inputOffset + vStart * inputWidth + hStart][m];
                      maxX = hStart;
                      maxY = vStart;
                    }
                  }
                }
                if (result.data && sigma.data) {
                  result.data[inputOffset + maxY * inputWidth + maxX][m] = sigma.data[outputOffset + h * outputWidth + w][m];
                }
              }
            }
          }
        }
        return result;
      }
      return new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix();
    }
  }]);
}(_AbstractBackpropagation__WEBPACK_IMPORTED_MODULE_0__.AbstractBackPropagation);

/***/ }),

/***/ "./src/typescript/Layer/Conv.ts":
/*!**************************************!*\
  !*** ./src/typescript/Layer/Conv.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConvLayer: () => (/* binding */ ConvLayer)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractLayer3D */ "./src/typescript/Layer/AbstractLayer3D.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var ConvLayer = /*#__PURE__*/function (_AbstractLayer3D) {
  function ConvLayer() {
    var _this;
    _classCallCheck(this, ConvLayer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ConvLayer, [].concat(args));
    _defineProperty(_this, "numFilters", 32);
    _defineProperty(_this, "filterSize", 4);
    _defineProperty(_this, "padding", 1);
    _defineProperty(_this, "stride", 1);
    return _this;
  }
  _inherits(ConvLayer, _AbstractLayer3D);
  return _createClass(ConvLayer, [{
    key: "configure",
    value: function configure() {
      this.W.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
      this.W = this.W.setRandom(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth());
      this.b.resize(this.numFilters, 1);
      this.b = this.b.setRandom(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth());
      this.gW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
      this.gW = this.gW.setZeros();
      this.gb.resize(this.numFilters, 1);
      this.gb = this.gb.setZeros();
      this.sW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
      this.sW = this.sW.setZeros();
      this.sb.resize(this.numFilters, 1);
      this.sb = this.sb.setZeros();
      this.vW.resize(this.numFilters, this.filterSize * this.filterSize * this.depth);
      this.vW = this.vW.setZeros();
      this.vb.resize(this.numFilters, 1);
      this.vb = this.vb.setZeros();
    }
  }, {
    key: "getOutputHeight",
    value: function getOutputHeight() {
      return (this.width - this.filterSize + 2 * this.padding) / this.stride + 1;
    }
  }, {
    key: "getOutputWidth",
    value: function getOutputWidth() {
      return (this.height - this.filterSize + 2 * this.padding) / this.stride + 1;
    }
  }, {
    key: "getOutputDepth",
    value: function getOutputDepth() {
      return this.numFilters;
    }
  }, {
    key: "setFilterSize",
    value: function setFilterSize(size) {
      this.filterSize = size;
      return this;
    }
  }, {
    key: "getFilterSize",
    value: function getFilterSize() {
      return this.filterSize;
    }
  }, {
    key: "setNumFilters",
    value: function setNumFilters(numFilters) {
      this.numFilters = numFilters;
      return this;
    }
  }, {
    key: "getNumFilters",
    value: function getNumFilters() {
      return this.numFilters;
    }
  }, {
    key: "setPadding",
    value: function setPadding(padding) {
      this.padding = padding;
      return this;
    }
  }, {
    key: "getPadding",
    value: function getPadding() {
      return this.padding;
    }
  }, {
    key: "setStride",
    value: function setStride(stride) {
      this.stride = stride;
      return this;
    }
  }, {
    key: "getStride",
    value: function getStride() {
      return this.stride;
    }
  }, {
    key: "forward",
    value: function forward(input) {
      var result = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth(), input.cols).setZeros();
      for (var i = 0; i < input.cols; i += 1) {
        var conv = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.im2col)(input.col(i), this.depth, this.height, this.width, this.filterSize, this.filterSize, this.padding, this.padding, this.stride, this.stride);
        var tmp = this.W.dot(conv.transpose()).add(this.b.replicate(1, conv.rows));
        result.setCol(i, tmp.rollToColMatrix());
      }
      this.Z = result;
      this.A = this.activation(this.Z);
      return this.A;
    }
  }, {
    key: "activation",
    value: function activation(m) {
      return m.setMin(0);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.conv;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.getComputation)().execute("reluBackpropagation", delta, this.A);
    }
  }]);
}(_AbstractLayer3D__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer3D);

/***/ }),

/***/ "./src/typescript/Layer/FullyConnected.ts":
/*!************************************************!*\
  !*** ./src/typescript/Layer/FullyConnected.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullyConnectedLayer: () => (/* binding */ FullyConnectedLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _Conv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conv */ "./src/typescript/Layer/Conv.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var FullyConnectedLayer = /*#__PURE__*/function (_ConvLayer) {
  function FullyConnectedLayer() {
    _classCallCheck(this, FullyConnectedLayer);
    return _callSuper(this, FullyConnectedLayer, arguments);
  }
  _inherits(FullyConnectedLayer, _ConvLayer);
  return _createClass(FullyConnectedLayer, [{
    key: "transition",
    value: function transition(previousLayer) {
      if (previousLayer.is3D()) {
        if (previousLayer.getType() == _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.maxpool) {
          this.filterSize = previousLayer.getOutputWidth();
          this.padding = 0;
          this.stride = 1;
          this.width = previousLayer.getOutputWidth();
          this.height = previousLayer.getOutputHeight();
          this.depth = previousLayer.getOutputDepth();
          this.numFilters = previousLayer.getOutputWidth() * previousLayer.getOutputHeight() * previousLayer.getOutputDepth();
        } else {
          throw new Error("Invalid usage. Cannot fully connect with previous non maxpool Layer.");
        }
      } else {
        throw new Error("Invalid usage. Cannot fully connect with previous 1D Layer.");
      }
      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(dimension) {
      return this;
    }
  }, {
    key: "setFilterSize",
    value: function setFilterSize(filterSize) {
      return this;
    }
  }, {
    key: "setStride",
    value: function setStride(stride) {
      return this;
    }
  }, {
    key: "setPadding",
    value: function setPadding(padding) {
      return this;
    }
  }, {
    key: "setWidth",
    value: function setWidth(value) {
      return this;
    }
  }, {
    key: "setHeight",
    value: function setHeight(value) {
      return this;
    }
  }, {
    key: "setDepth",
    value: function setDepth(value) {
      return this;
    }
  }, {
    key: "setNumFilters",
    value: function setNumFilters(value) {
      return this;
    }
  }]);
}(_Conv__WEBPACK_IMPORTED_MODULE_1__.ConvLayer);


/***/ }),

/***/ "./src/typescript/Layer/LSTM.ts":
/*!**************************************!*\
  !*** ./src/typescript/Layer/LSTM.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LSTMLayer: () => (/* binding */ LSTMLayer)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var LSTMLayer = /*#__PURE__*/function (_AbstractLayer) {
  function LSTMLayer() {
    var _this;
    _classCallCheck(this, LSTMLayer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, LSTMLayer, [].concat(args));
    _defineProperty(_this, "Wf", null);
    _defineProperty(_this, "bf", null);
    _defineProperty(_this, "Wi", null);
    _defineProperty(_this, "bi", null);
    _defineProperty(_this, "Wc", null);
    _defineProperty(_this, "bc", null);
    _defineProperty(_this, "Wo", null);
    _defineProperty(_this, "bo", null);
    _defineProperty(_this, "Wy", null);
    _defineProperty(_this, "by", null);
    _defineProperty(_this, "dxt", null);
    _defineProperty(_this, "dWf", null);
    _defineProperty(_this, "dWi", null);
    _defineProperty(_this, "dWc", null);
    _defineProperty(_this, "dWo", null);
    _defineProperty(_this, "dbf", null);
    _defineProperty(_this, "dbi", null);
    _defineProperty(_this, "dbc", null);
    _defineProperty(_this, "dbo", null);
    return _this;
  }
  _inherits(LSTMLayer, _AbstractLayer);
  return _createClass(LSTMLayer, [{
    key: "configure",
    value: function configure() {}
  }, {
    key: "forward",
    value: function forward(input, aPrev, cPrev) {
      var nx = input.rows;
      var m = input.cols;
      var ny = this.Wy.rows;
      var na = this.Wy.cols;
      var concat = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(nx + na, m).concat(input).concat(this.Wy);
      var ft = this.Wf.dot(concat).add(this.bf).sigmoid();
      var it = this.Wi.dot(concat).add(this.bi).sigmoid();
      var cct = this.Wc.dot(concat).add(this.bc).tanh();
      var cNext = ft.multiply(cPrev).add(it.multiply(cct));
      var ot = this.Wo.dot(concat).add(this.bo).sigmoid();
      var aNext = ot.multiply(cNext.tanh());
      var ytPred = this.Wy.dot(aNext).add(this.by).softmax();
      return [aNext, cPrev];
    }
  }, {
    key: "backward",
    value: function backward(daNext, dcNext) {}
  }, {
    key: "activation",
    value: function activation(m) {
      return m;
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.rnnlayer;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta;
    }
  }, {
    key: "is1D",
    value: function is1D() {
      return true;
    }
  }, {
    key: "is3D",
    value: function is3D() {
      return false;
    }
  }, {
    key: "setSize",
    value: function setSize(value) {
      this.setWidth(value[0]);
      this.setHeight(value[1]);
      this.setDepth(value[2]);
      return this;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.height;
    }
  }, {
    key: "getOutputWidth",
    value: function getOutputWidth() {
      return this.width;
    }
  }, {
    key: "getOutputHeight",
    value: function getOutputHeight() {
      return this.height;
    }
  }, {
    key: "getOutputDepth",
    value: function getOutputDepth() {
      return this.depth;
    }
  }, {
    key: "penalty",
    value: function penalty() {
      return 0;
    }
  }]);
}(_AbstractLayer__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer);

/***/ }),

/***/ "./src/typescript/Layer/Logistic.ts":
/*!******************************************!*\
  !*** ./src/typescript/Layer/Logistic.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogisticLayer: () => (/* binding */ LogisticLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var LogisticLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  function LogisticLayer() {
    _classCallCheck(this, LogisticLayer);
    return _callSuper(this, LogisticLayer, arguments);
  }
  _inherits(LogisticLayer, _AbstractLayer1D);
  return _createClass(LogisticLayer, [{
    key: "activation",
    value: function activation(m) {
      return m.multiply(-1).exp().add(1).fraction(1);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.logistic;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta.multiply(this.activation(delta).multiply(this.activation(delta.minusOne())));
    }
  }]);
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/MaxPool.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Layer/MaxPool.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaxPoolLayer: () => (/* binding */ MaxPoolLayer)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractLayer3D */ "./src/typescript/Layer/AbstractLayer3D.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var MaxPoolLayer = /*#__PURE__*/function (_AbstractLayer3D) {
  function MaxPoolLayer() {
    var _this;
    _classCallCheck(this, MaxPoolLayer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MaxPoolLayer, [].concat(args));
    _defineProperty(_this, "filterSize", 0);
    _defineProperty(_this, "stride", 0);
    return _this;
  }
  _inherits(MaxPoolLayer, _AbstractLayer3D);
  return _createClass(MaxPoolLayer, [{
    key: "configure",
    value: function configure() {
      // do nothing
    }
  }, {
    key: "getOutputHeight",
    value: function getOutputHeight() {
      return (this.height - this.filterSize) / this.stride + 1;
    }
  }, {
    key: "getOutputWidth",
    value: function getOutputWidth() {
      return (this.width - this.filterSize) / this.stride + 1;
    }
  }, {
    key: "getOutputDepth",
    value: function getOutputDepth() {
      return this.depth;
    }
  }, {
    key: "setFilterSize",
    value: function setFilterSize(size) {
      this.filterSize = size;
      return this;
    }
  }, {
    key: "getFilterSize",
    value: function getFilterSize() {
      return this.filterSize;
    }
  }, {
    key: "setStride",
    value: function setStride(stride) {
      this.stride = stride;
      return this;
    }
  }, {
    key: "getStride",
    value: function getStride() {
      return this.stride;
    }
  }, {
    key: "getPadding",
    value: function getPadding() {
      return 0;
    }
  }, {
    key: "forward",
    value: function forward(input) {
      var result = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getOutputWidth() * this.getOutputHeight() * this.getOutputDepth(), input.cols);
      for (var i = 0; i < input.cols; i += 1) {
        var pool = (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.maxpool)(input.col(i), this.depth, this.height, this.width, this.filterSize, this.filterSize, this.stride, this.stride);
        result.setCol(i, pool.rollToColMatrix());
      }
      this.Z = result;
      this.A = this.activation(this.Z);
      return this.A;
    }
  }, {
    key: "activation",
    value: function activation(m) {
      return m;
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.maxpool;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta;
    }
  }]);
}(_AbstractLayer3D__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer3D);


/***/ }),

/***/ "./src/typescript/Layer/Purelin.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Layer/Purelin.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurelinLayer: () => (/* binding */ PurelinLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var PurelinLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  function PurelinLayer() {
    _classCallCheck(this, PurelinLayer);
    return _callSuper(this, PurelinLayer, arguments);
  }
  _inherits(PurelinLayer, _AbstractLayer1D);
  return _createClass(PurelinLayer, [{
    key: "activation",
    value: function activation(m) {
      return m;
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.purelin;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta.setOnes();
    }
  }]);
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/Recurrent.ts":
/*!*******************************************!*\
  !*** ./src/typescript/Layer/Recurrent.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecurrentLayer: () => (/* binding */ RecurrentLayer)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var RecurrentLayer = /*#__PURE__*/function (_AbstractLayer) {
  function RecurrentLayer() {
    var _this;
    _classCallCheck(this, RecurrentLayer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, RecurrentLayer, [].concat(args));
    _defineProperty(_this, "wX", null);
    _defineProperty(_this, "wA", null);
    _defineProperty(_this, "wY", null);
    _defineProperty(_this, "wB", null);
    _defineProperty(_this, "wBY", null);
    _defineProperty(_this, "dwX", null);
    _defineProperty(_this, "dwA", null);
    _defineProperty(_this, "dwY", null);
    _defineProperty(_this, "dwB", null);
    _defineProperty(_this, "dwBY", null);
    _defineProperty(_this, "Y", []);
    _defineProperty(_this, "A", []);
    _defineProperty(_this, "X", []);
    _defineProperty(_this, "aNext", null);
    _defineProperty(_this, "aPrev", null);
    _defineProperty(_this, "daNext", null);
    return _this;
  }
  _inherits(RecurrentLayer, _AbstractLayer);
  return _createClass(RecurrentLayer, [{
    key: "configure",
    value: function configure() {
      this.wX = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getHeight());
      this.wX = this.wX.setRandom(this.getWidth());
      this.wA = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getWidth());
      this.wA = this.wA.setRandom(this.getWidth());
      this.wY = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), this.getWidth());
      this.wY = this.wY.setRandom(this.getDepth());
      this.wB = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), 1);
      this.wB = this.wB.setRandom(this.getWidth());
      this.wBY = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), 1);
      this.wBY = this.wBY.setRandom(this.getDepth());
      this.dwX = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getHeight());
      this.dwX = this.dwX.setZeros();
      this.dwA = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getWidth());
      this.dwA = this.dwA.setZeros();
      this.dwY = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), this.getWidth());
      this.dwY = this.dwY.setZeros();
      this.dwB = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), 1);
      this.dwB = this.dwB.setZeros();
      this.dwBY = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getDepth(), 1);
      this.dwBY = this.dwBY.setZeros();
      this.daNext = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.getWidth(), this.getWidth());
      this.daNext = this.daNext.setZeros();
    }
  }, {
    key: "forward",
    value: function forward(x, Y, aPrev) {
      var aNext = this.wX.dot(x).add(this.wA.dot(aPrev)).add(this.wB.replicate(1, x.cols)).tanh();
      var y = this.wY.dot(aNext).add(this.wBY.replicate(1, x.cols));
      var p = impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(y.data).setMin(1e-8);
      var loss = 0;
      for (var row = 0; row < y.rows; row += 1) {
        for (var col = 0; col < y.cols; col += 1) {
          p.data[row][col] = Math.exp(p.data[row][col]);
        }
      }
      p = p.divide(y.sum());
      for (var _row = 0; _row < p.rows; _row += 1) {
        loss += -Math.log(Math.max(p.data[_row][Y.colMaxCoeffIndex(_row)], 1e-9));
      }
      return {
        aNext: aNext,
        y: y,
        p: p,
        loss: loss
      };
    }
  }, {
    key: "backward",
    value: function backward(X, Y, A, aNext) {
      this.dwY = this.dwY.add(Y.dot(aNext.transpose()));
      this.dwBY = this.dwBY.add(Y.rowwiseSum().transpose());
      var dhraw = aNext.pow(2).minusOne().multiply(this.wY.transpose().dot(Y).add(this.daNext)).setMin(-10e18).setMax(10e18);
      this.dwB = this.dwB.add(dhraw.colwiseSum());
      this.dwX = this.dwX.add(dhraw.dot(X));
      this.dwA = this.dwA.add(dhraw.dot(A.transpose()));
      this.daNext = this.wA.transpose().dot(dhraw);
    }
  }, {
    key: "activation",
    value: function activation(m) {
      return m;
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_1__.LayerType.rnnlayer;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta;
    }
  }, {
    key: "is1D",
    value: function is1D() {
      return true;
    }
  }, {
    key: "is3D",
    value: function is3D() {
      return false;
    }
  }, {
    key: "setSize",
    value: function setSize(value) {
      this.setWidth(value[0]);
      this.setHeight(value[1]);
      this.setDepth(value[2]);
      return this;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.height;
    }
  }, {
    key: "getOutputWidth",
    value: function getOutputWidth() {
      return this.width;
    }
  }, {
    key: "getOutputHeight",
    value: function getOutputHeight() {
      return this.height;
    }
  }, {
    key: "getOutputDepth",
    value: function getOutputDepth() {
      return this.depth;
    }
  }, {
    key: "penalty",
    value: function penalty() {
      return 0;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }]);
}(_AbstractLayer__WEBPACK_IMPORTED_MODULE_2__.AbstractLayer);

/***/ }),

/***/ "./src/typescript/Layer/Relu.ts":
/*!**************************************!*\
  !*** ./src/typescript/Layer/Relu.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReluLayer: () => (/* binding */ ReluLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ReluLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  function ReluLayer() {
    _classCallCheck(this, ReluLayer);
    return _callSuper(this, ReluLayer, arguments);
  }
  _inherits(ReluLayer, _AbstractLayer1D);
  return _createClass(ReluLayer, [{
    key: "activation",
    value: function activation(m) {
      return m.setMin(0.0);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.relu;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return (0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__.getComputation)().execute("reluBackpropagation", delta, this.A);
    }
  }]);
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/Softmax.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Layer/Softmax.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoftmaxLayer: () => (/* binding */ SoftmaxLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var SoftmaxLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  function SoftmaxLayer() {
    _classCallCheck(this, SoftmaxLayer);
    return _callSuper(this, SoftmaxLayer, arguments);
  }
  _inherits(SoftmaxLayer, _AbstractLayer1D);
  return _createClass(SoftmaxLayer, [{
    key: "activation",
    value: function activation(m) {
      return m.softmax();
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.softmax;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta.multiply(-1).add(1).fraction(1);
    }
  }]);
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/Softplus.ts":
/*!******************************************!*\
  !*** ./src/typescript/Layer/Softplus.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoftplusLayer: () => (/* binding */ SoftplusLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var SoftplusLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  function SoftplusLayer() {
    _classCallCheck(this, SoftplusLayer);
    return _callSuper(this, SoftplusLayer, arguments);
  }
  _inherits(SoftplusLayer, _AbstractLayer1D);
  return _createClass(SoftplusLayer, [{
    key: "activation",
    value: function activation(m) {
      return m.exp().add(1).log();
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.softplus;
    }
  }, {
    key: "derivative",
    value: function derivative(delta) {
      return delta.multiply(-1).exp().add(1).fraction(1);
    }
  }]);
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/Tanh.ts":
/*!**************************************!*\
  !*** ./src/typescript/Layer/Tanh.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TanhLayer: () => (/* binding */ TanhLayer)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/typescript/types.ts");
/* harmony import */ var _AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractLayer1D */ "./src/typescript/Layer/AbstractLayer1D.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TanhLayer = /*#__PURE__*/function (_AbstractLayer1D) {
  function TanhLayer() {
    _classCallCheck(this, TanhLayer);
    return _callSuper(this, TanhLayer, arguments);
  }
  _inherits(TanhLayer, _AbstractLayer1D);
  return _createClass(TanhLayer, [{
    key: "activation",
    value: function activation(m) {
      return m.tanh();
    }
  }, {
    key: "getType",
    value: function getType() {
      return _types__WEBPACK_IMPORTED_MODULE_0__.LayerType.tanh;
    }
  }, {
    key: "derivative",
    value: function derivative(sigma) {
      return this.activation(sigma).pow(2).minusOne();
    }
  }]);
}(_AbstractLayer1D__WEBPACK_IMPORTED_MODULE_1__.AbstractLayer1D);


/***/ }),

/***/ "./src/typescript/Layer/index.ts":
/*!***************************************!*\
  !*** ./src/typescript/Layer/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractLayer: () => (/* reexport safe */ _AbstractLayer__WEBPACK_IMPORTED_MODULE_0__.AbstractLayer),
/* harmony export */   ConvLayer: () => (/* reexport safe */ _Conv__WEBPACK_IMPORTED_MODULE_6__.ConvLayer),
/* harmony export */   FullyConnectedLayer: () => (/* reexport safe */ _FullyConnected__WEBPACK_IMPORTED_MODULE_7__.FullyConnectedLayer),
/* harmony export */   LSTMLayer: () => (/* reexport safe */ _LSTM__WEBPACK_IMPORTED_MODULE_11__.LSTMLayer),
/* harmony export */   LogisticLayer: () => (/* reexport safe */ _Logistic__WEBPACK_IMPORTED_MODULE_2__.LogisticLayer),
/* harmony export */   MaxPoolLayer: () => (/* reexport safe */ _MaxPool__WEBPACK_IMPORTED_MODULE_8__.MaxPoolLayer),
/* harmony export */   PurelinLayer: () => (/* reexport safe */ _Purelin__WEBPACK_IMPORTED_MODULE_10__.PurelinLayer),
/* harmony export */   RecurrentLayer: () => (/* reexport safe */ _Recurrent__WEBPACK_IMPORTED_MODULE_9__.RecurrentLayer),
/* harmony export */   ReluLayer: () => (/* reexport safe */ _Relu__WEBPACK_IMPORTED_MODULE_4__.ReluLayer),
/* harmony export */   SoftmaxLayer: () => (/* reexport safe */ _Softmax__WEBPACK_IMPORTED_MODULE_1__.SoftmaxLayer),
/* harmony export */   SoftplusLayer: () => (/* reexport safe */ _Softplus__WEBPACK_IMPORTED_MODULE_5__.SoftplusLayer),
/* harmony export */   TanhLayer: () => (/* reexport safe */ _Tanh__WEBPACK_IMPORTED_MODULE_3__.TanhLayer)
/* harmony export */ });
/* harmony import */ var _AbstractLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractLayer */ "./src/typescript/Layer/AbstractLayer.ts");
/* harmony import */ var _Softmax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Softmax */ "./src/typescript/Layer/Softmax.ts");
/* harmony import */ var _Logistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logistic */ "./src/typescript/Layer/Logistic.ts");
/* harmony import */ var _Tanh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tanh */ "./src/typescript/Layer/Tanh.ts");
/* harmony import */ var _Relu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Relu */ "./src/typescript/Layer/Relu.ts");
/* harmony import */ var _Softplus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Softplus */ "./src/typescript/Layer/Softplus.ts");
/* harmony import */ var _Conv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Conv */ "./src/typescript/Layer/Conv.ts");
/* harmony import */ var _FullyConnected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FullyConnected */ "./src/typescript/Layer/FullyConnected.ts");
/* harmony import */ var _MaxPool__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MaxPool */ "./src/typescript/Layer/MaxPool.ts");
/* harmony import */ var _Recurrent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Recurrent */ "./src/typescript/Layer/Recurrent.ts");
/* harmony import */ var _Purelin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Purelin */ "./src/typescript/Layer/Purelin.ts");
/* harmony import */ var _LSTM__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LSTM */ "./src/typescript/Layer/LSTM.ts");














/***/ }),

/***/ "./src/typescript/Network/Network.ts":
/*!*******************************************!*\
  !*** ./src/typescript/Network/Network.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Network: () => (/* binding */ Network),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Network = /*#__PURE__*/function () {
  function Network(dimensions) {
    _classCallCheck(this, Network);
    _defineProperty(this, "dimensions", null);
    _defineProperty(this, "size", 0);
    _defineProperty(this, "layers", []);
    this.dimensions = dimensions;
  }
  return _createClass(Network, [{
    key: "addLayer",
    value: function addLayer(layer) {
      this.size++;
      this.layers.push(layer);
      return this;
    }
  }, {
    key: "getLayers",
    value: function getLayers() {
      return this.layers;
    }
  }, {
    key: "forward",
    value: function forward(input) {
      var output = input;
      this.layers.forEach(function (layer) {
        output = layer.forward(output);
      });
      return output;
    }
  }, {
    key: "backward",
    value: function backward(X, Y, regularization) {
      var m = X.cols;
      var predictions = this.forward(X);
      //let sigma = Y.divide(predictions).multiply(-1).subtract(Y.minusOne().divide(predictions.minusOne()));
      var sigma = predictions.subtract(Y);
      for (var layer = this.layers.length - 1; layer >= 0; layer -= 1) {
        sigma = this.layers[layer].getBackPropagation().propagate(X, m, regularization, this.layers[layer], this.layers[layer].derivative(sigma));
      }
    }
  }, {
    key: "save",
    value: function save(path) {
      var resultJSON = {
        dimensions: this.dimensions,
        layers: []
      };
      this.layers.forEach(function (layer) {
        resultJSON.layers.push({
          type: layer.getType(),
          size: layer.getSize(),
          weights: {
            W: layer.W.data,
            b: layer.b.data
          }
        });
      });
      var result = JSON.stringify(resultJSON);
      return new Promise(function (resolve, reject) {
        fs__WEBPACK_IMPORTED_MODULE_0__.writeFile(path, result, function (err) {
          if (err) {
            console.error(err);
            reject();
          }
          resolve(result);
        });
      });
    }
  }]);
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Network);

/***/ }),

/***/ "./src/typescript/Network/NetworkLSTM.ts":
/*!***********************************************!*\
  !*** ./src/typescript/Network/NetworkLSTM.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkLSTM: () => (/* binding */ NetworkLSTM)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var NetworkLSTM = /*#__PURE__*/function () {
  function NetworkLSTM(dimensions) {
    _classCallCheck(this, NetworkLSTM);
    _defineProperty(this, "dimensions", null);
    _defineProperty(this, "size", 0);
    _defineProperty(this, "layers", []);
    this.dimensions = dimensions;
  }
  return _createClass(NetworkLSTM, [{
    key: "addLayer",
    value: function addLayer(layer) {
      this.size++;
      this.layers.push(layer);
      return this;
    }
  }, {
    key: "getLayers",
    value: function getLayers() {
      return this.layers;
    }
  }, {
    key: "loss",
    value: function loss(vocabularySize, sequenceLength) {
      return -Math.log(1 / vocabularySize) * sequenceLength;
    }
  }, {
    key: "sample",
    value: function sample(charIndices) {}
  }, {
    key: "forward",
    value: function forward(X, a0) {
      var _this = this;
      var nX = X.length;
      var m = X[0].rows;
      var tX = X[0].cols;
      var nY = this.layers[0].Wy.rows;
      var nA = this.layers[0].Wy.cols;
      var a = new Array(nA).map(function () {
        return new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(m, tX).setZeros();
      });
      var c = new Array(nA).map(function () {
        return new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(m, tX).setZeros();
      });
      var y = new Array(nY).map(function () {
        return new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(m, tX).setZeros();
      });
      var aNext = a0;
      var cNext = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(nA, m).setZeros();
      var _loop = function _loop(t) {
        var dataInput = [];
        X.forEach(function (m, i) {
          dataInput[i] = [];
          for (var row = 0; row < m.rows; row += 1) {
            dataInput[i].push(m.data[row][t]);
          }
        });
        var input = impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(dataInput);
        var _this$layers$0$forwar = _this.layers[0].forward(input, aNext, cNext),
          _this$layers$0$forwar2 = _slicedToArray(_this$layers$0$forwar, 3),
          _aNext = _this$layers$0$forwar2[0],
          _cNext = _this$layers$0$forwar2[1],
          _yt = _this$layers$0$forwar2[2];
      };
      for (var t = 0; t < tX; t += 1) {
        _loop(t);
      }
    }
  }, {
    key: "backward",
    value: function backward(da) {
      var na = da.length;
      var m = da[0].rows;
      var tx = da[0].cols;
      var nx = this.layers[0].x1.rows;
      for (var t = tx - 1; t >= 0; t -= 1) {
        //this.layers[0].backward(_da, dcPrevT);
      }
    }

    /*save(path: string): Promise<string> {
      const resultJSON = {
        dimensions: this.dimensions,
        layers: [],
      };
       this.layers.forEach((layer: Layers) => {
        resultJSON.layers.push({
          type: layer.getType(),
          size: layer.getSize(),
          weights: {
            W: layer.W.data,
            b: layer.b.data,
          },
        });
      });
       const result = JSON.stringify(resultJSON);
       return new Promise((resolve, reject) => {
        fs.writeFile(path, result, (err) => {
          if (err) {
            console.error(err);
            reject();
          }
          resolve(result);
        });
      });
    }*/
  }]);
}();

/***/ }),

/***/ "./src/typescript/Network/NetworkRNN.ts":
/*!**********************************************!*\
  !*** ./src/typescript/Network/NetworkRNN.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkRNN: () => (/* binding */ NetworkRNN)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var NetworkRNN = /*#__PURE__*/function () {
  function NetworkRNN(dimensions) {
    _classCallCheck(this, NetworkRNN);
    _defineProperty(this, "dimensions", null);
    _defineProperty(this, "size", 0);
    _defineProperty(this, "layers", []);
    this.dimensions = dimensions;
  }
  return _createClass(NetworkRNN, [{
    key: "addLayer",
    value: function addLayer(layer) {
      this.size++;
      this.layers.push(layer);
      return this;
    }
  }, {
    key: "getLayers",
    value: function getLayers() {
      return this.layers;
    }
  }, {
    key: "sample",
    value: function sample(dataset) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      var Waa = this.layers[0].wA;
      var Wax = this.layers[0].wX;
      var Wya = this.layers[0].wY;
      var by = this.layers[0].wBY;
      var b = this.layers[0].wB;
      var indices = [];
      var charIndices = dataset.getCharIndices();
      var newLineCharacter = charIndices["\n"];
      var chars = dataset.getChars();
      var x = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.dimensions[1], 1).setZeros();
      var aPrev = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.dimensions[0], 1).setRandom(this.dimensions[1]);
      var idx = -1;
      var counter = 0;
      while (idx != newLineCharacter && counter != length) {
        var a = Wax.dot(x).add(Waa.dot(aPrev)).add(b).tanh();
        var z = Wya.dot(a).add(by);
        var y = z.softmax();
        idx = charIndices[chars[y.colMaxCoeffIndex(0)]];
        x = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.dimensions[1], 1).setZeros();
        var maxIndex = y.colMaxCoeffIndex(0);
        x.data[maxIndex][0] = 1;
        indices.push(idx);
        aPrev = a;
        counter += 1;
      }
      if (counter === 50) {
        indices.push(newLineCharacter);
      }
      return indices.map(function (i) {
        return chars[i];
      }).join("");
    }
  }, {
    key: "forward",
    value: function forward(X, Y, aPrev) {
      var _this$layers$0$forwar = this.layers[0].forward(X.transpose(), Y, aPrev),
        aNext = _this$layers$0$forwar.aNext,
        y = _this$layers$0$forwar.y,
        p = _this$layers$0$forwar.p,
        loss = _this$layers$0$forwar.loss;
      return {
        aNext: aNext,
        y: y,
        p: p,
        loss: loss
      };
    }
  }, {
    key: "backward",
    value: function backward(X, Y, A, aNext) {
      this.layers[0].backward(X, Y, A, aNext);
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return this.dimensions;
    }
  }, {
    key: "save",
    value: function save(path) {
      var resultJSON = {
        dimensions: this.dimensions,
        layers: []
      };
      this.layers.forEach(function (layer) {
        resultJSON.layers.push({
          type: layer.getType(),
          size: layer.getSize(),
          weights: {
            wX: layer.wX.data,
            wA: layer.wA.data,
            wY: layer.wY.data,
            wB: layer.wB.data,
            wBY: layer.wBY.data
          }
        });
      });
      var result = JSON.stringify(resultJSON);
      return new Promise(function (resolve, reject) {
        fs__WEBPACK_IMPORTED_MODULE_1__.writeFile(path, result, function (err) {
          if (err) {
            console.error(err);
            reject();
          }
          resolve(result);
        });
      });
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/Network/index.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Network/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Network: () => (/* reexport safe */ _Network__WEBPACK_IMPORTED_MODULE_0__.Network),
/* harmony export */   NetworkLSTM: () => (/* reexport safe */ _NetworkLSTM__WEBPACK_IMPORTED_MODULE_2__.NetworkLSTM),
/* harmony export */   NetworkRNN: () => (/* reexport safe */ _NetworkRNN__WEBPACK_IMPORTED_MODULE_1__.NetworkRNN)
/* harmony export */ });
/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Network */ "./src/typescript/Network/Network.ts");
/* harmony import */ var _NetworkRNN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NetworkRNN */ "./src/typescript/Network/NetworkRNN.ts");
/* harmony import */ var _NetworkLSTM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NetworkLSTM */ "./src/typescript/Network/NetworkLSTM.ts");





/***/ }),

/***/ "./src/typescript/NetworkBuilder/AbstractNetworkBuilder.ts":
/*!*****************************************************************!*\
  !*** ./src/typescript/NetworkBuilder/AbstractNetworkBuilder.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractNetworkBuilder: () => (/* binding */ AbstractNetworkBuilder)
/* harmony export */ });
/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Network */ "./src/typescript/Network/index.ts");
/* harmony import */ var _Layer_Backpropagation_BackpropagationFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer/Backpropagation/BackpropagationFactory */ "./src/typescript/Layer/Backpropagation/BackpropagationFactory.ts");
/* harmony import */ var _Network_NetworkLSTM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Network/NetworkLSTM */ "./src/typescript/Network/NetworkLSTM.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var AbstractNetworkBuilder = /*#__PURE__*/function () {
  function AbstractNetworkBuilder(dimension) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "DNN";
    _classCallCheck(this, AbstractNetworkBuilder);
    _defineProperty(this, "dimensions", null);
    _defineProperty(this, "lastLayer", null);
    _defineProperty(this, "network", null);
    this.dimensions = dimension;
    if (type === "DNN") {
      this.network = new _Network__WEBPACK_IMPORTED_MODULE_0__.Network(this.dimensions);
    } else if (type === "RNN") {
      this.network = new _Network__WEBPACK_IMPORTED_MODULE_0__.NetworkRNN(this.dimensions);
    } else if (type === "LSTM") {
      this.network = new _Network_NetworkLSTM__WEBPACK_IMPORTED_MODULE_2__.NetworkLSTM(this.dimensions);
    }
  }
  return _createClass(AbstractNetworkBuilder, [{
    key: "createLayer",
    value: function createLayer(layerClass) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // @ts-ignore
      var layer = new layerClass();
      if (typeof callback === "function") {
        callback(layer);
      }
      if (this.lastLayer === null) {
        this.firstLayerTransition(layer);
      } else {
        // @ts-ignore
        layer.transition(this.lastLayer);
      }
      layer.configure();
      layer.setBackPropagation(_Layer_Backpropagation_BackpropagationFactory__WEBPACK_IMPORTED_MODULE_1__.BackpropagationFactory.create(this.lastLayer, layer));
      this.network.addLayer(layer);
      this.lastLayer = layer;
      return this;
    }
  }, {
    key: "getNetwork",
    value: function getNetwork() {
      return this.network;
    }
  }]);
}();


/***/ }),

/***/ "./src/typescript/NetworkBuilder/NetworkBuilder1D.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/NetworkBuilder/NetworkBuilder1D.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkBuilder1D: () => (/* binding */ NetworkBuilder1D)
/* harmony export */ });
/* harmony import */ var _AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractNetworkBuilder */ "./src/typescript/NetworkBuilder/AbstractNetworkBuilder.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layer___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layer/ */ "./src/typescript/Layer/index.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var NetworkBuilder1D = /*#__PURE__*/function (_AbstractNetworkBuild) {
  function NetworkBuilder1D() {
    _classCallCheck(this, NetworkBuilder1D);
    return _callSuper(this, NetworkBuilder1D, arguments);
  }
  _inherits(NetworkBuilder1D, _AbstractNetworkBuild);
  return _createClass(NetworkBuilder1D, [{
    key: "firstLayerTransition",
    value: function firstLayerTransition(layer) {
      layer.setWidth(this.dimensions[0]);
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(jsonPath) {
      return new Promise(function (resolve, reject) {
        fs__WEBPACK_IMPORTED_MODULE_1__.readFile(jsonPath, function (err, data) {
          if (err) {
            reject(err);
            return;
          }
          var json = JSON.parse(data.toString());
          var builder = new NetworkBuilder1D(json["dimensions"]);
          json["layers"].forEach(function (layerData) {
            var layerClass = null;
            if (layerData["type"] === "logistic") {
              layerClass = _Layer___WEBPACK_IMPORTED_MODULE_2__.LogisticLayer;
            } else if (layerData["type"] === "softmax") {
              layerClass = _Layer___WEBPACK_IMPORTED_MODULE_2__.SoftmaxLayer;
            } else if (layerData["type"] === "relu") {
              layerClass = _Layer___WEBPACK_IMPORTED_MODULE_2__.ReluLayer;
            } else if (layerData["type"] === "softplus") {
              layerClass = _Layer___WEBPACK_IMPORTED_MODULE_2__.SoftplusLayer;
            } else if (layerData["type"] === "tanh") {
              layerClass = _Layer___WEBPACK_IMPORTED_MODULE_2__.TanhLayer;
            }
            builder.createLayer(layerClass, function (layer) {
              // @ts-ignore
              layer.setSize(layerData["size"]);
            });
          });
          var network = builder.getNetwork();
          network.getLayers().forEach(function (layer, i) {
            layer.W = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_3__.Matrix(json["layers"][i]["weights"]["W"].length, json["layers"][i]["weights"]["W"][0].length, json["layers"][i]["weights"]["W"]);
            layer.b = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_3__.Matrix(json["layers"][i]["weights"]["b"].length, json["layers"][i]["weights"]["b"][0].length, json["layers"][i]["weights"]["b"]);
          });
          resolve(network);
        });
      });
    }
  }]);
}(_AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.AbstractNetworkBuilder);


/***/ }),

/***/ "./src/typescript/NetworkBuilder/NetworkBuilder3D.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/NetworkBuilder/NetworkBuilder3D.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkBuilder3D: () => (/* binding */ NetworkBuilder3D)
/* harmony export */ });
/* harmony import */ var _AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractNetworkBuilder */ "./src/typescript/NetworkBuilder/AbstractNetworkBuilder.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layer___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layer/ */ "./src/typescript/Layer/index.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var NetworkBuilder3D = /*#__PURE__*/function (_AbstractNetworkBuild) {
  function NetworkBuilder3D() {
    _classCallCheck(this, NetworkBuilder3D);
    return _callSuper(this, NetworkBuilder3D, arguments);
  }
  _inherits(NetworkBuilder3D, _AbstractNetworkBuild);
  return _createClass(NetworkBuilder3D, [{
    key: "firstLayerTransition",
    value: function firstLayerTransition(layer) {
      if (this.dimensions) {
        // @ts-ignore
        layer.setSize(this.dimensions);
      }
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(jsonPath) {
      return new Promise(function (resolve, reject) {
        fs__WEBPACK_IMPORTED_MODULE_1__.readFile(jsonPath, function (err, data) {
          if (err) {
            reject(err);
            return;
          }
          var json = JSON.parse(data.toString());
          var builder = new NetworkBuilder3D(json["size"]);
          json["layers"].forEach(function (layerData) {
            if (layerData["type"] === "logistic") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.LogisticLayer, function (layer) {
                // @ts-ignore
                layer.setSize(layerData["size"]);
              });
            } else if (layerData["type"] === "softmax") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.SoftmaxLayer, function (layer) {
                // @ts-ignore
                layer.setSize(layerData["size"]);
              });
            } else if (layerData["type"] === "relu") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.ReluLayer, function (layer) {
                // @ts-ignore
                layer.setSize(layerData["size"]);
              });
            } else if (layerData["type"] === "softplus") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.SoftplusLayer, function (layer) {
                // @ts-ignore
                layer.setSize(layerData["size"]);
              });
            } else if (layerData["type"] === "tanh") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.TanhLayer, function (layer) {
                // @ts-ignore
                layer.setSize(layerData["size"]);
              });
            } else if (layerData["type"] === "conv") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.ConvLayer, function (layer) {
                layer.setSize(layerData["size"]);
                layer.setFilterSize(layerData["filterSize"]);
                layer.setStride(layerData["stride"]);
                layer.setNumFilters(layerData["numFilters"]);
                layer.setPadding(layerData["padding"]);
              });
            } else if (layerData["type"] === "maxpool") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.MaxPoolLayer, function (layer) {
                layer.setSize(layerData["size"]);
                layer.setFilterSize(layerData["filterSize"]);
                layer.setStride(layerData["stride"]);
              });
            } else if (layerData["type"] === "fullyconnected") {
              // @ts-ignore
              builder.createLayer(_Layer___WEBPACK_IMPORTED_MODULE_2__.MaxPoolLayer);
            }
          });
          var network = builder.getNetwork();
          if (network) {
            network.getLayers().forEach(function (layer, i) {
              layer.W = json["layers"]["W"];
              layer.b = json["layers"]["b"];
            });
            resolve(network);
          }
        });
      });
    }
  }]);
}(_AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.AbstractNetworkBuilder);


/***/ }),

/***/ "./src/typescript/NetworkBuilder/index.ts":
/*!************************************************!*\
  !*** ./src/typescript/NetworkBuilder/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractNetworkBuilder: () => (/* reexport safe */ _AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.AbstractNetworkBuilder),
/* harmony export */   NetworkBuilder1D: () => (/* reexport safe */ _NetworkBuilder1D__WEBPACK_IMPORTED_MODULE_1__.NetworkBuilder1D),
/* harmony export */   NetworkBuilder3D: () => (/* reexport safe */ _NetworkBuilder3D__WEBPACK_IMPORTED_MODULE_2__.NetworkBuilder3D)
/* harmony export */ });
/* harmony import */ var _AbstractNetworkBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractNetworkBuilder */ "./src/typescript/NetworkBuilder/AbstractNetworkBuilder.ts");
/* harmony import */ var _NetworkBuilder1D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NetworkBuilder1D */ "./src/typescript/NetworkBuilder/NetworkBuilder1D.ts");
/* harmony import */ var _NetworkBuilder3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NetworkBuilder3D */ "./src/typescript/NetworkBuilder/NetworkBuilder3D.ts");





/***/ }),

/***/ "./src/typescript/Trainer/AbstractTrainer.ts":
/*!***************************************************!*\
  !*** ./src/typescript/Trainer/AbstractTrainer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractTrainer: () => (/* binding */ AbstractTrainer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AbstractTrainer = /*#__PURE__*/function () {
  function AbstractTrainer(network, optimizer) {
    _classCallCheck(this, AbstractTrainer);
    _defineProperty(this, "network", null);
    _defineProperty(this, "optimizer", null);
    _defineProperty(this, "regularization", 1e-4);
    _defineProperty(this, "iterations", 1000);
    _defineProperty(this, "learningRate", 0.001);
    _defineProperty(this, "verbose", true);
    _defineProperty(this, "verboseStep", 1);
    _defineProperty(this, "stepCallback", function (data) {
      return undefined;
    });
    this.network = network;
    this.optimizer = optimizer;
  }
  return _createClass(AbstractTrainer, [{
    key: "setRegularization",
    value: function setRegularization(regularization) {
      this.regularization = regularization;
      return this;
    }
  }, {
    key: "setIterations",
    value: function setIterations(iterations) {
      this.iterations = iterations;
      return this;
    }
  }, {
    key: "setLearningRate",
    value: function setLearningRate(learningRate) {
      this.learningRate = learningRate;
      return this;
    }
  }, {
    key: "setVerbose",
    value: function setVerbose(verbose) {
      this.verbose = verbose;
      return this;
    }
  }, {
    key: "setVerboseStep",
    value: function setVerboseStep(verboseStep) {
      this.verboseStep = verboseStep;
      return this;
    }
  }, {
    key: "setStepCallback",
    value: function setStepCallback(stepCallback) {
      this.stepCallback = stepCallback;
      return this;
    }
  }, {
    key: "cost",
    value: function cost(inputDataset, outputDataset) {
      var numberOfExamples = inputDataset.getNumberOfExamples();
      var accuracy = 0;
      var penalty = 0;
      this.network.getLayers().forEach(function (layer) {
        penalty += layer.penalty();
      });
      var predictions = this.network.forward(inputDataset.data.transpose());
      var correctOutput = outputDataset.data.transpose();

      /*const error = Y.multiply(predictions.log())
        .add(Y.minusOne().multiply(predictions.minusOne().log()))
        .multiply(-1)
        .sum();*/
      var error = correctOutput.multiply(predictions.log()).sum();
      var cost = -1 / numberOfExamples * error + this.regularization / (penalty * (2 * inputDataset.data.cols));
      for (var col = 0; col < predictions.cols; col += 1) {
        var index1 = predictions.colMaxCoeffIndex(col);
        var index2 = correctOutput.colMaxCoeffIndex(col);
        if (index1 === index2) {
          accuracy++;
        }
      }
      return {
        cost: cost,
        accuracy: accuracy / numberOfExamples * 100
      };
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/Trainer/MiniBatchTrainer.ts":
/*!****************************************************!*\
  !*** ./src/typescript/Trainer/MiniBatchTrainer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MiniBatchTrainer: () => (/* binding */ MiniBatchTrainer)
/* harmony export */ });
/* harmony import */ var _AbstractTrainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTrainer */ "./src/typescript/Trainer/AbstractTrainer.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var MiniBatchTrainer = /*#__PURE__*/function (_AbstractTrainer) {
  function MiniBatchTrainer() {
    var _this;
    _classCallCheck(this, MiniBatchTrainer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MiniBatchTrainer, [].concat(args));
    _defineProperty(_this, "batchSize", 100);
    return _this;
  }
  _inherits(MiniBatchTrainer, _AbstractTrainer);
  return _createClass(MiniBatchTrainer, [{
    key: "setBatchSize",
    value: function setBatchSize(batchSize) {
      this.batchSize = batchSize;
      return this;
    }
  }, {
    key: "cost",
    value: function cost(inputDataset, outputDataset) {
      var batchSize = this.batchSize;
      var numberOfExamples = inputDataset.getNumberOfExamples();
      var numBatches = Math.ceil(numberOfExamples / batchSize);
      var cost = 0.0;
      var accuracy = 0.0;

      // calculate penalty
      var penalty = 0.0;
      this.network.getLayers().forEach(function (layer) {
        penalty = layer.penalty();
      });
      var startTime = new Date().getTime();
      var startIterationTime = new Date().getTime();
      for (var batch = 0, offset = 0; batch < numberOfExamples; batch += this.batchSize, offset += this.batchSize) {
        var startIterationTime2 = new Date().getTime();
        var input = inputDataset.getBatch(offset, this.batchSize);
        var correctOutput = outputDataset.getBatch(offset, this.batchSize);
        var predictions = this.network.forward(input.data);
        var error = correctOutput.data.multiply(predictions.log()).sum();
        cost += -1 / numberOfExamples * error + this.regularization / (penalty * (2 * inputDataset.data.cols));
        for (var col = 0; col < predictions.cols; col += 1) {
          var index1 = predictions.colMaxCoeffIndex(col);
          var index2 = correctOutput.data.colMaxCoeffIndex(col);
          if (index1 === index2) {
            accuracy++;
          }
        }
      }
      return {
        cost: cost,
        accuracy: accuracy / numberOfExamples * 100
      };
    }
  }, {
    key: "train",
    value: function train(inputDataset, outputDataset) {
      var _this2 = this;
      var numberOfExamples = inputDataset.getNumberOfExamples();
      var t = 0;
      this.optimizer.setBatchSize(this.batchSize);
      this.optimizer.setLearningRate(this.learningRate);
      for (var i = 0; i < this.iterations; i += 1) {
        var startTime = new Date().getTime();
        var startIterationTime = new Date().getTime();
        for (var batch = 0, offset = 0; batch < numberOfExamples; batch += this.batchSize, offset += this.batchSize) {
          var startIterationTime2 = new Date().getTime();
          var input = inputDataset.getBatch(offset, this.batchSize);
          var output = outputDataset.getBatch(offset, this.batchSize);
          var predictions = this.network.forward(input.data);
          this.network.backward(input.data, output.data, this.regularization);
          this.optimizer.setT(++t);
          this.network.getLayers().forEach(function (layer) {
            _this2.optimizer.optimize(layer);
          });
          if (this.verbose) {
            var cost = this.cost(input, output);
            var endIterationTime = new Date().getTime();
            console.log("Batch: ".concat(offset, " / ").concat(numberOfExamples, " | Batch time: ").concat(endIterationTime - startIterationTime2, "ms | Time from start: ").concat((0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.round)((endIterationTime - startIterationTime) / 1000, 1), "s. | Cost: ").concat((0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.round)(cost.cost, 2), " | Acc: ").concat(cost.accuracy));
          }
        }
        if (this.verbose) {
          if ((i + 1) % this.verboseStep === 0) {
            var endTime = new Date().getTime();
            var currentResult = this.cost(inputDataset, outputDataset);
            console.log("Iteration: ".concat(i + 1, " | Cost: ").concat((0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.round)(currentResult.cost, 5), " | Accuracy: ").concat(currentResult.accuracy, "% | Time: ").concat((endTime - startTime) / 1000, " s."));
          }
        }
        this.stepCallback({
          iteration: i
        });
      }
      return this;
    }
  }]);
}(_AbstractTrainer__WEBPACK_IMPORTED_MODULE_0__.AbstractTrainer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts":
/*!***************************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractOptimizer: () => (/* binding */ AbstractOptimizer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AbstractOptimizer = /*#__PURE__*/function () {
  function AbstractOptimizer() {
    _classCallCheck(this, AbstractOptimizer);
    _defineProperty(this, "batchSize", 0);
    _defineProperty(this, "t", 0);
    _defineProperty(this, "learningRate", 0);
  }
  return _createClass(AbstractOptimizer, [{
    key: "setBatchSize",
    value: function setBatchSize(batchSize) {
      this.batchSize = batchSize;
      return this;
    }
  }, {
    key: "setT",
    value: function setT(t) {
      this.t = t;
      return this;
    }
  }, {
    key: "setLearningRate",
    value: function setLearningRate(learningRate) {
      this.learningRate = learningRate;
      return this;
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/OptimizerAdagrad.ts":
/*!**************************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/OptimizerAdagrad.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizerAdagrad: () => (/* binding */ OptimizerAdagrad)
/* harmony export */ });
/* harmony import */ var _AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractOptimizer */ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OptimizerAdagrad = /*#__PURE__*/function (_AbstractOptimizer) {
  function OptimizerAdagrad() {
    _classCallCheck(this, OptimizerAdagrad);
    return _callSuper(this, OptimizerAdagrad, arguments);
  }
  _inherits(OptimizerAdagrad, _AbstractOptimizer);
  return _createClass(OptimizerAdagrad, [{
    key: "optimize",
    value: function optimize(layer) {
      this.adagrad(layer, this.learningRate);
    }
  }, {
    key: "adagrad",
    value: function adagrad(layer, learningRate) {
      layer.dW = layer.dW.add(layer.gW.pow(2));
      layer.W = layer.W.subtract(layer.gW.multiply(learningRate).divide(layer.dW.sqrt().add(1e-8)).multiply(layer.gW));
      layer.db = layer.db.add(layer.gb.pow(2));
      layer.b = layer.b.subtract(layer.db.multiply(learningRate).divide(layer.db.sqrt().add(1e-8)).multiply(layer.gb));
    }
  }]);
}(_AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/OptimizerAdam.ts":
/*!***********************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/OptimizerAdam.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizerAdam: () => (/* binding */ OptimizerAdam)
/* harmony export */ });
/* harmony import */ var _AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractOptimizer */ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var OptimizerAdam = /*#__PURE__*/function (_AbstractOptimizer) {
  function OptimizerAdam() {
    var _this;
    _classCallCheck(this, OptimizerAdam);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, OptimizerAdam, [].concat(args));
    _defineProperty(_this, "beta1", 0.9);
    _defineProperty(_this, "beta2", 0.999);
    return _this;
  }
  _inherits(OptimizerAdam, _AbstractOptimizer);
  return _createClass(OptimizerAdam, [{
    key: "setBeta1",
    value: function setBeta1(beta1) {
      this.beta1 = beta1;
      return this;
    }
  }, {
    key: "setBeta2",
    value: function setBeta2(beta2) {
      this.beta2 = beta2;
      return this;
    }
  }, {
    key: "optimize",
    value: function optimize(layer) {
      this.adam(layer, this.learningRate, this.t);
    }
  }, {
    key: "adam",
    value: function adam(layer, learningRate, t) {
      layer.vW = layer.vW.multiply(this.beta1).add(layer.gW.multiply(1 - this.beta1));
      layer.vb = layer.vb.multiply(this.beta1).add(layer.gb.multiply(1 - this.beta1));
      layer.sW = layer.sW.multiply(this.beta2).add(layer.sW.pow(2).multiply(1 - this.beta2));
      layer.sb = layer.sb.multiply(this.beta2).add(layer.sb.pow(2).multiply(1 - this.beta2));
      var vWCorrected = layer.vW.divide(1 - Math.pow(this.beta1, 2));
      var vbCorrected = layer.vb.divide(1 - Math.pow(this.beta1, 2));
      var sWCorrected = layer.sW.add(1e-8).sqrt();
      var sbCorrected = layer.sb.add(1e-8).sqrt();
      layer.W = layer.W.subtract(vWCorrected.divide(sWCorrected).multiply(learningRate));
      layer.b = layer.b.subtract(vbCorrected.divide(sbCorrected).multiply(learningRate));
    }
  }]);
}(_AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/OptimizerGradientDescent.ts":
/*!**********************************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/OptimizerGradientDescent.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizerGradientDescent: () => (/* binding */ OptimizerGradientDescent)
/* harmony export */ });
/* harmony import */ var _AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractOptimizer */ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OptimizerGradientDescent = /*#__PURE__*/function (_AbstractOptimizer) {
  function OptimizerGradientDescent() {
    _classCallCheck(this, OptimizerGradientDescent);
    return _callSuper(this, OptimizerGradientDescent, arguments);
  }
  _inherits(OptimizerGradientDescent, _AbstractOptimizer);
  return _createClass(OptimizerGradientDescent, [{
    key: "optimize",
    value: function optimize(layer) {
      this.gradientDescent(layer, this.learningRate);
    }
  }, {
    key: "gradientDescent",
    value: function gradientDescent(layer, learningRate) {
      layer.W = layer.W.subtract(layer.gW.multiply(learningRate));
      layer.b = layer.b.subtract(layer.b.multiply(learningRate));
    }
  }]);
}(_AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/OptimizerMomentum.ts":
/*!***************************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/OptimizerMomentum.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizerMomentum: () => (/* binding */ OptimizerMomentum)
/* harmony export */ });
/* harmony import */ var _AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractOptimizer */ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var OptimizerMomentum = /*#__PURE__*/function (_AbstractOptimizer) {
  function OptimizerMomentum() {
    var _this;
    _classCallCheck(this, OptimizerMomentum);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, OptimizerMomentum, [].concat(args));
    _defineProperty(_this, "beta", 0.9);
    return _this;
  }
  _inherits(OptimizerMomentum, _AbstractOptimizer);
  return _createClass(OptimizerMomentum, [{
    key: "optimize",
    value: function optimize(layer) {
      this.momentum(layer, this.learningRate);
    }
  }, {
    key: "setBeta",
    value: function setBeta(beta) {
      this.beta = beta;
      return this;
    }
  }, {
    key: "momentum",
    value: function momentum(layer, learningRate) {
      layer.vW = layer.gW.multiply(this.beta).add(layer.gW.multiply(1 - this.beta));
      layer.vb = layer.gb.multiply(this.beta).add(layer.gb.multiply(1 - this.beta));
      layer.W = layer.W.subtract(layer.vW.multiply(learningRate));
      layer.b = layer.b.subtract(layer.vb.multiply(learningRate));
    }
  }]);
}(_AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/OptimizerRMSProp.ts":
/*!**************************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/OptimizerRMSProp.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizerRMSProp: () => (/* binding */ OptimizerRMSProp)
/* harmony export */ });
/* harmony import */ var _AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractOptimizer */ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var OptimizerRMSProp = /*#__PURE__*/function (_AbstractOptimizer) {
  function OptimizerRMSProp() {
    var _this;
    _classCallCheck(this, OptimizerRMSProp);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, OptimizerRMSProp, [].concat(args));
    _defineProperty(_this, "alpha", 1e-3);
    _defineProperty(_this, "beta", 0.9);
    return _this;
  }
  _inherits(OptimizerRMSProp, _AbstractOptimizer);
  return _createClass(OptimizerRMSProp, [{
    key: "setBeta",
    value: function setBeta(beta) {
      this.beta = beta;
      return this;
    }
  }, {
    key: "setAlpha",
    value: function setAlpha(alpha) {
      this.alpha = alpha;
      return this;
    }
  }, {
    key: "optimize",
    value: function optimize(layer) {
      this.rmsprop(layer, this.learningRate, this.alpha, this.beta);
    }
  }, {
    key: "rmsprop",
    value: function rmsprop(layer, learningRate, alpha, beta) {
      layer.sW = layer.sW.multiply(beta).add(layer.gW.pow(2).multiply(1 - beta));
      layer.sb = layer.sb.multiply(beta).add(layer.gb.pow(2).multiply(1 - beta));
      layer.W = layer.W.subtract(layer.gW.multiply(alpha).divide(layer.sW.sqrt().add(1e-8)));
      layer.b = layer.b.subtract(layer.gb.multiply(alpha).divide(layer.sb.sqrt().add(1e-8)));
    }
  }]);
}(_AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/OptimizerRNN.ts":
/*!**********************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/OptimizerRNN.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizerRNN: () => (/* binding */ OptimizerRNN)
/* harmony export */ });
/* harmony import */ var _AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractOptimizer */ "./src/typescript/Trainer/Optimizer/AbstractOptimizer.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var OptimizerRNN = /*#__PURE__*/function (_AbstractOptimizer) {
  function OptimizerRNN(network) {
    var _this;
    _classCallCheck(this, OptimizerRNN);
    _this = _callSuper(this, OptimizerRNN);
    _defineProperty(_this, "hs", {});
    _defineProperty(_this, "ys", {});
    _defineProperty(_this, "mWxh", null);
    _defineProperty(_this, "mWhh", null);
    _defineProperty(_this, "mWhy", null);
    _defineProperty(_this, "mbh", null);
    _defineProperty(_this, "mby", null);
    _this.mWxh = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(network.getDimensions()[0], network.getDimensions()[1]).setZeros();
    _this.mWhh = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(network.getDimensions()[0], network.getDimensions()[0]).setZeros();
    _this.mWhy = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(network.getDimensions()[1], network.getDimensions()[0]).setZeros();
    _this.mbh = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(network.getDimensions()[0], 1).setZeros();
    _this.mby = new impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.Matrix(network.getDimensions()[1], 1).setZeros();
    return _this;
  }
  _inherits(OptimizerRNN, _AbstractOptimizer);
  return _createClass(OptimizerRNN, [{
    key: "optimize",
    value: function optimize(layer) {
      layer.dwX = layer.dwX.setMin(-5).setMax(5);
      layer.dwY = layer.dwY.setMin(-5).setMax(5);
      layer.dwA = layer.dwA.setMin(-5).setMax(5);
      layer.dwB = layer.dwB.setMin(-5).setMax(5);
      layer.dwBY = layer.dwBY.setMin(-5).setMax(5);
      this.mWxh = this.mWxh.add(layer.dwX.pow(2));
      layer.wX = layer.wX.add(layer.dwX.divide(this.mWxh.add(1e-8).sqrt()).multiply(-this.learningRate));
      this.mWhh = this.mWhh.add(layer.dwA.pow(2));
      layer.wA = layer.wA.add(layer.dwA.divide(this.mWhh.add(1e-8).sqrt()).multiply(-this.learningRate));
      this.mWhy = this.mWhy.add(layer.dwY.pow(2));
      layer.wY = layer.wY.add(layer.dwY.divide(this.mWhy.add(1e-8).sqrt()).multiply(-this.learningRate));
      this.mbh = this.mbh.add(layer.dwB.pow(2));
      layer.wB = layer.wB.add(layer.dwB.divide(this.mbh.add(1e-8).sqrt()).multiply(-this.learningRate));
      this.mby = this.mby.add(layer.dwBY.pow(2));
      layer.wBY = layer.wBY.add(layer.dwBY.divide(this.mby.add(1e-8).sqrt()).multiply(-this.learningRate));
    }
  }, {
    key: "setHS",
    value: function setHS(hs) {
      this.hs[this.t] = hs;
      return this;
    }
  }, {
    key: "setYS",
    value: function setYS(ys) {
      this.ys[this.t] = ys;
      return this;
    }
  }]);
}(_AbstractOptimizer__WEBPACK_IMPORTED_MODULE_0__.AbstractOptimizer);

/***/ }),

/***/ "./src/typescript/Trainer/Optimizer/index.ts":
/*!***************************************************!*\
  !*** ./src/typescript/Trainer/Optimizer/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizerAdagrad: () => (/* reexport safe */ _OptimizerAdagrad__WEBPACK_IMPORTED_MODULE_2__.OptimizerAdagrad),
/* harmony export */   OptimizerAdam: () => (/* reexport safe */ _OptimizerAdam__WEBPACK_IMPORTED_MODULE_0__.OptimizerAdam),
/* harmony export */   OptimizerGradientDescent: () => (/* reexport safe */ _OptimizerGradientDescent__WEBPACK_IMPORTED_MODULE_1__.OptimizerGradientDescent),
/* harmony export */   OptimizerMomentum: () => (/* reexport safe */ _OptimizerMomentum__WEBPACK_IMPORTED_MODULE_3__.OptimizerMomentum),
/* harmony export */   OptimizerRMSProp: () => (/* reexport safe */ _OptimizerRMSProp__WEBPACK_IMPORTED_MODULE_4__.OptimizerRMSProp)
/* harmony export */ });
/* harmony import */ var _OptimizerAdam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptimizerAdam */ "./src/typescript/Trainer/Optimizer/OptimizerAdam.ts");
/* harmony import */ var _OptimizerGradientDescent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptimizerGradientDescent */ "./src/typescript/Trainer/Optimizer/OptimizerGradientDescent.ts");
/* harmony import */ var _OptimizerAdagrad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptimizerAdagrad */ "./src/typescript/Trainer/Optimizer/OptimizerAdagrad.ts");
/* harmony import */ var _OptimizerMomentum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptimizerMomentum */ "./src/typescript/Trainer/Optimizer/OptimizerMomentum.ts");
/* harmony import */ var _OptimizerRMSProp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OptimizerRMSProp */ "./src/typescript/Trainer/Optimizer/OptimizerRMSProp.ts");







/***/ }),

/***/ "./src/typescript/Trainer/RNNTrainer.ts":
/*!**********************************************!*\
  !*** ./src/typescript/Trainer/RNNTrainer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RNNTrainer: () => (/* binding */ RNNTrainer)
/* harmony export */ });
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Optimizer_OptimizerRNN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Optimizer/OptimizerRNN */ "./src/typescript/Trainer/Optimizer/OptimizerRNN.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var RNNTrainer = /*#__PURE__*/function () {
  function RNNTrainer(network) {
    _classCallCheck(this, RNNTrainer);
    _defineProperty(this, "network", null);
    _defineProperty(this, "iterations", 1000);
    _defineProperty(this, "learningRate", 0.01);
    _defineProperty(this, "optimizer", null);
    this.network = network;
    this.optimizer = new _Optimizer_OptimizerRNN__WEBPACK_IMPORTED_MODULE_1__.OptimizerRNN(network).setLearningRate(this.learningRate);
  }
  return _createClass(RNNTrainer, [{
    key: "train",
    value: function train(dataset) {
      var _dataset$buildData = dataset.buildData(this.network.getDimensions()[0]),
        _dataset$buildData2 = _slicedToArray(_dataset$buildData, 2),
        X = _dataset$buildData2[0],
        Y = _dataset$buildData2[1];
      var _dataset$vectorizatio = dataset.vectorization(X, Y),
        _dataset$vectorizatio2 = _slicedToArray(_dataset$vectorizatio, 2),
        x = _dataset$vectorizatio2[0],
        y = _dataset$vectorizatio2[1];

      //const hs = {};
      //const ys = {};
      this.optimizer.setT(-1).setHS(new impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.network.getDimensions()[0], this.network.getDimensions()[0]).setZeros());

      /*let mWxh = new Matrix(this.network.getDimensions()[0], this.network.getDimensions()[1]).setZeros();
      let mWhh = new Matrix(this.network.getDimensions()[0], this.network.getDimensions()[0]).setZeros();
      let mWhy = new Matrix(this.network.getDimensions()[1], this.network.getDimensions()[0]).setZeros();
      let mbh = new Matrix(this.network.layers[0].dwB.rows, this.network.layers[0].dwB.cols).setZeros();
      let mby = new Matrix(this.network.layers[0].dwBY.rows, this.network.layers[0].dwBY.cols).setZeros();*/

      for (var iteration = 0; iteration < this.iterations; iteration += 1) {
        var _loss = 0;
        for (var i = 0; i < X.length; i += 1) {
          var _this$network$forward = this.network.forward(x[i], y[i], this.optimizer.hs[i - 1]),
            aNext = _this$network$forward.aNext,
            _y = _this$network$forward.y,
            loss = _this$network$forward.loss;
          this.optimizer.setT(i).setHS(aNext).setYS(_y);
          //hs[i] = aNext;
          //ys[i] = _y;

          if ((i + 1) % 1000 === 0) {
            console.log("FORWARD Example ".concat(i + 1, " | Iteration ").concat(iteration + 1));
          }
          _loss += loss;
        }
        console.log("Loss ".concat(_loss, " | Iteration: ").concat(iteration));
        for (var _i = X.length - 1; _i >= 0; _i -= 1) {
          var dy = impulse_math_ts__WEBPACK_IMPORTED_MODULE_0__.Matrix.from(this.optimizer.ys[_i].data);
          for (var row = 0; row < dy.rows; row += 1) {
            dy.data[row][x[_i].transpose().rowMaxCoeffIndex(row)] -= 1;
          }
          this.network.backward(x[_i], dy, this.optimizer.hs[_i - 1], this.optimizer.hs[_i]);
          if ((_i + 1) % 1000 === 0) {
            console.log("BACKWARD Example ".concat(_i + 1, " | Iteration ").concat(iteration + 1));
          }
        }
        this.optimizer.optimize(this.network.layers[0]);
        console.log(this.network.sample(dataset).trim());
      }
      return [0];
    }
  }, {
    key: "setIterations",
    value: function setIterations(num) {
      this.iterations = num;
      return this;
    }
  }, {
    key: "setLearningRate",
    value: function setLearningRate(num) {
      this.learningRate = num;
      this.optimizer.setLearningRate(num);
      return this;
    }
  }]);
}();

/***/ }),

/***/ "./src/typescript/Trainer/Trainer.ts":
/*!*******************************************!*\
  !*** ./src/typescript/Trainer/Trainer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Trainer: () => (/* binding */ Trainer)
/* harmony export */ });
/* harmony import */ var _AbstractTrainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTrainer */ "./src/typescript/Trainer/AbstractTrainer.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Trainer = /*#__PURE__*/function (_AbstractTrainer) {
  function Trainer() {
    _classCallCheck(this, Trainer);
    return _callSuper(this, Trainer, arguments);
  }
  _inherits(Trainer, _AbstractTrainer);
  return _createClass(Trainer, [{
    key: "train",
    value: function train(inputDataset, outputDataset) {
      var _this = this;
      var numberOfExamples = inputDataset.getNumberOfExamples();
      var t = 0;
      this.optimizer.setBatchSize(numberOfExamples);
      this.optimizer.setLearningRate(this.learningRate);
      for (var i = 0; i < this.iterations; i += 1) {
        var startTime = new Date().getTime();
        this.network.backward(inputDataset.data.transpose(), outputDataset.data.transpose(), this.regularization);
        this.optimizer.setT(++t);
        this.network.getLayers().forEach(function (layer) {
          _this.optimizer.optimize(layer);
        });
        if (this.verbose) {
          if ((i + 1) % this.verboseStep === 0) {
            var currentResult = this.cost(inputDataset, outputDataset);
            var endTime = new Date().getTime();
            console.log("Iteration: ".concat(i + 1, " | Cost: ").concat((0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.round)(currentResult.cost, 5), " | Accuracy: ").concat((0,impulse_math_ts__WEBPACK_IMPORTED_MODULE_1__.round)(currentResult.accuracy, 2), "% | Time: ").concat((endTime - startTime) / 1000, " s."));
          }
        }
        this.stepCallback({
          iteration: i
        });
      }
      return this;
    }
  }]);
}(_AbstractTrainer__WEBPACK_IMPORTED_MODULE_0__.AbstractTrainer);

/***/ }),

/***/ "./src/typescript/Trainer/index.ts":
/*!*****************************************!*\
  !*** ./src/typescript/Trainer/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MiniBatchTrainer: () => (/* reexport safe */ _MiniBatchTrainer__WEBPACK_IMPORTED_MODULE_0__.MiniBatchTrainer),
/* harmony export */   RNNTrainer: () => (/* reexport safe */ _RNNTrainer__WEBPACK_IMPORTED_MODULE_2__.RNNTrainer),
/* harmony export */   Trainer: () => (/* reexport safe */ _Trainer__WEBPACK_IMPORTED_MODULE_1__.Trainer)
/* harmony export */ });
/* harmony import */ var _MiniBatchTrainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiniBatchTrainer */ "./src/typescript/Trainer/MiniBatchTrainer.ts");
/* harmony import */ var _Trainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trainer */ "./src/typescript/Trainer/Trainer.ts");
/* harmony import */ var _RNNTrainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RNNTrainer */ "./src/typescript/Trainer/RNNTrainer.ts");





/***/ }),

/***/ "./src/typescript/types.ts":
/*!*********************************!*\
  !*** ./src/typescript/types.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerType: () => (/* binding */ LayerType)
/* harmony export */ });
var LayerType = /*#__PURE__*/function (LayerType) {
  LayerType["logistic"] = "logistic";
  LayerType["softmax"] = "softmax";
  LayerType["tanh"] = "tanh";
  LayerType["relu"] = "relu";
  LayerType["softplus"] = "softplus";
  LayerType["conv"] = "conv";
  LayerType["maxpool"] = "maxpool";
  LayerType["fullyconnected"] = "fullyconnected";
  LayerType["purelin"] = "purelin";
  LayerType["rnnlayer"] = "rnnlayer";
  return LayerType;
}({});

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/typescript/main.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Layer: () => (/* binding */ Layer),
/* harmony export */   Math: () => (/* binding */ Math),
/* harmony export */   Network: () => (/* binding */ Network),
/* harmony export */   NetworkBuilder: () => (/* binding */ NetworkBuilder),
/* harmony export */   Optimizer: () => (/* binding */ Optimizer),
/* harmony export */   Trainer: () => (/* binding */ Trainer)
/* harmony export */ });
/* harmony import */ var _NetworkBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NetworkBuilder */ "./src/typescript/NetworkBuilder/index.ts");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer */ "./src/typescript/Layer/index.ts");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! impulse-math-ts */ "../impulse-math-ts/dist/impulse-math-ts.dev.js");
/* harmony import */ var impulse_math_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Trainer/Optimizer */ "./src/typescript/Trainer/Optimizer/index.ts");
/* harmony import */ var _Trainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Trainer */ "./src/typescript/Trainer/index.ts");
/* harmony import */ var _Network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Network */ "./src/typescript/Network/index.ts");






var NetworkBuilder = {
  NetworkBuilder1D: _NetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.NetworkBuilder1D,
  NetworkBuilder3D: _NetworkBuilder__WEBPACK_IMPORTED_MODULE_0__.NetworkBuilder3D
};
var Math = {
  Matrix: impulse_math_ts__WEBPACK_IMPORTED_MODULE_2__.Matrix
};
var Layer = {
  SoftmaxLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.SoftmaxLayer,
  LogisticLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.LogisticLayer,
  ReluLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.ReluLayer,
  SoftplusLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.SoftplusLayer,
  TanhLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.TanhLayer,
  ConvLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.ConvLayer,
  MaxPoolLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.MaxPoolLayer,
  FullyConnectedLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.FullyConnectedLayer,
  RecurrentLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.RecurrentLayer,
  LSTMLayer: _Layer__WEBPACK_IMPORTED_MODULE_1__.LSTMLayer
};
var Optimizer = {
  OptimizerAdam: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__.OptimizerAdam,
  OptimizerGradientDescent: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__.OptimizerGradientDescent,
  OptimizerAdagrad: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__.OptimizerAdagrad,
  OptimizerMomentum: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__.OptimizerMomentum,
  OptimizerRMSProp: _Trainer_Optimizer__WEBPACK_IMPORTED_MODULE_3__.OptimizerRMSProp
};
var Trainer = {
  MiniBatchTrainer: _Trainer__WEBPACK_IMPORTED_MODULE_4__.MiniBatchTrainer,
  Trainer: _Trainer__WEBPACK_IMPORTED_MODULE_4__.Trainer,
  RNNTrainer: _Trainer__WEBPACK_IMPORTED_MODULE_4__.RNNTrainer
};
var Network = {
  NetworkRNN: _Network__WEBPACK_IMPORTED_MODULE_5__.NetworkRNN,
  NetworkLSTM: _Network__WEBPACK_IMPORTED_MODULE_5__.NetworkLSTM
};

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=impulse-ts.dev.js.map