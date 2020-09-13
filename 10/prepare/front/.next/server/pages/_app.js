module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "D:\\0_0study\\react_practice\\test\\10\\prepare\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NodeBird = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, __jsx("meta", {
    charset: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, "NodeBird")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }));
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // 쪼갠걸 합쳐주는 거 : 객체와 달리 함수는 합치기 쉽지 않아서 필요

 // 쪼갠걸 불러온다


 // initialState에서 state를 user와 post로 구분해서 각각을 위해 js 파일을 만든다
// user와 post 안에 있던 state들을 파일로 옮긴다
// 또한 해당 파일 안에서 export 시킨다

const initialState = {
  user: {},
  post: {}
}; // action creator

const changeNickname = data => {
  return {
    type: 'CHANGE_NICKNAME',
    data
  };
}; // (이전 상태, action) => 다음 상태


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  // redux serverside rendering을 위해서 HYDRATE가 필요하다
  // HYDRATE를 위해서 index reducer 추가
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);
      // reducer 초기화할 때도 실행되므로 필요

      default:
        return state;
    }
  },
  // combine reducer가 알아서 initialState 넣어준다
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  mainPosts: [{
    id: 1,
    // sequalize에서 다른 정보들과 합쳐줄 때 대문자로 바꿔줘서 대문자
    User: {
      id: 1,
      nickname: 'zerocho'
    },
    content: '첫 번째 게시글 #해시태그 #express',
    Images: [{
      src: 'https://img.hankyung.com/photo/201909/BF.20602111.1.jpg'
    }, {
      src: 'https://img.vogue.co.kr/vogue/2019/07/style_5d23f90d9af37.png'
    }, {
      src: 'https://file.mk.co.kr/meet/neds/2020/06/image_readtop_2020_619588_15923560384244181.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '오옹'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '보고싶다'
    }]
  }],
  imagePaths: [],
  postAdded: false
};
const ADD_POST = 'ADD_POST';
const addPost = {
  type: ADD_POST
};
const dummyPost = {
  id: 12,
  // sequalize에서 다른 정보들과 합쳐줄 때 대문자로 바꿔줘서 대문자
  User: {
    id: 2,
    nickname: 'zerocho'
  },
  content: '첫 번째 게시글 #해시태그 #express',
  Images: [{
    src: 'https://img.hankyung.com/photo/201909/BF.20602111.1.jpg'
  }, {
    src: 'https://img.vogue.co.kr/vogue/2019/07/style_5d23f90d9af37.png'
  }, {
    src: 'https://file.mk.co.kr/meet/neds/2020/06/image_readtop_2020_619588_15923560384244181.jpg'
  }],
  Comments: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        // 새로 추가한 포스트가 앞에 뜨게 하기
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {}
}; // action creator

const loginAction = data => {
  console.log('loginAction', data);
  return {
    type: 'LOG_IN',
    data
  };
};
const logoutAction = () => {
  return {
    type: 'LOG_OUT'
  };
}; // initialState depth가 줄어서 return 부분도 depth를 줄여야 한다

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        me: action.data
      });

    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        me: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);



 // 그럼 바로 index.js 가져오나?

 //configureStore.js

const configureStore = () => {
  const middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a];
  const enhancer = false ? undefined // 배포용
  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJwb3N0IiwiY2hhbmdlTmlja25hbWUiLCJkYXRhIiwidHlwZSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJwYXlsb2FkIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwiZHVtbXlQb3N0IiwicmVkdWNlciIsImlzTG9nZ2VkSW4iLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpbkFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXRBY3Rpb24iLCJjb25maWd1cmVTdG9yZSIsIm1pZGRsZXdhcmVzIiwidGh1bmtNaWRkbGV3YXJlIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFpQjtBQUNqQyxTQUNDLG1FQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFB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Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtDQUNtQzs7Q0FHbkM7O0FBQ0EsTUFBTVMsY0FBYyxHQUFHLE1BQU07QUFDekIsUUFBTUMsV0FBVyxHQUFHLENBQUNDLGtEQUFELENBQXBCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLFFBQ2RDLFNBRGMsQ0FDMkI7QUFEM0IsSUFFZEMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0wsV0FBSixDQUFoQixDQUZ0QjtBQUlBLFFBQU1NLEtBQUssR0FBR0MseURBQVcsQ0FBQ2pCLGlEQUFELEVBQVVZLFFBQVYsQ0FBekI7QUFDQSxTQUFPSSxLQUFQO0FBQ0gsQ0FSRDs7QUFVQSxNQUFNNUMsT0FBTyxHQUFHOEMsd0VBQWEsQ0FBQ1QsY0FBRCxFQUFpQjtBQUFDVSxPQUFLO0FBQU4sQ0FBakIsQ0FBN0I7QUFFZS9DLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnXHJcblxyXG5jb25zdCBOb2RlQmlyZCA9ICh7Q29tcG9uZW50fSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiLz5cclxuXHRcdFx0XHRcdDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PENvbXBvbmVudCAvPlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBDb21wb25lbnQgOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpOyIsImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuLy8g7Kq86rCg6rG4IO2VqeyzkOyjvOuKlCDqsbAgOiDqsJ3ssrTsmYAg64us66asIO2VqOyImOuKlCDtlansuZjquLAg7Im97KeAIOyViuyVhOyEnCDtlYTsmpRcclxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcclxuLy8g7Kq86rCg6rG4IOu2iOufrOyYqOuLpFxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuLy8gaW5pdGlhbFN0YXRl7JeQ7IScIHN0YXRl66W8IHVzZXLsmYAgcG9zdOuhnCDqtazrtoTtlbTshJwg6rCB6rCB7J2EIOychO2VtCBqcyDtjIzsnbzsnYQg66eM65Og64ukXHJcbi8vIHVzZXLsmYAgcG9zdCDslYjsl5Ag7J6I642YIHN0YXRl65Ok7J2EIO2MjOydvOuhnCDsmK7quLTri6RcclxuLy8g65iQ7ZWcIO2VtOuLuSDtjIzsnbwg7JWI7JeQ7IScIGV4cG9ydCDsi5ztgqjri6RcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdXNlcjp7ICAgICAgICBcclxuICAgIH0sXHJcbiAgICBwb3N0OntcclxuICAgIH1cclxufVxyXG4vLyBhY3Rpb24gY3JlYXRvclxyXG5jb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6J0NIQU5HRV9OSUNLTkFNRScsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyAo7J207KCEIOyDge2DnCwgYWN0aW9uKSA9PiDri6TsnYwg7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHQvLyByZWR1eCBzZXJ2ZXJzaWRlIHJlbmRlcmluZ+ydhCDsnITtlbTshJwgSFlEUkFUReqwgCDtlYTsmpTtlZjri6RcclxuXHQvLyBIWURSQVRF66W8IOychO2VtOyEnCBpbmRleCByZWR1Y2VyIOy2lOqwgFxyXG5cdGluZGV4OihzdGF0ZT17fSxhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfTtcclxuICAgICAgICAvLyByZWR1Y2VyIOy0iOq4sO2ZlO2VoCDrlYzrj4Qg7Iuk7ZaJ65CY66+A66GcIO2VhOyalFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIGNvbWJpbmUgcmVkdWNlcuqwgCDslYzslYTshJwgaW5pdGlhbFN0YXRlIOuEo+yWtOykgOuLpFxyXG5cdHVzZXIsXHJcblx0cG9zdFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOlt7XHJcblx0XHRpZDoxLFxyXG5cdFx0Ly8gc2VxdWFsaXpl7JeQ7IScIOuLpOuluCDsoJXrs7Trk6Tqs7wg7ZWp7LOQ7KSEIOuVjCDrjIDrrLjsnpDroZwg67CU6r+U7KSY7IScIOuMgOusuOyekFxyXG5cdFx0VXNlcjp7XHJcblx0XHRcdGlkOjEsXHJcblx0XHRcdG5pY2tuYW1lOid6ZXJvY2hvJ1xyXG5cdFx0fSxcclxuXHRcdGNvbnRlbnQ6J+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI2V4cHJlc3MnLFxyXG5cdFx0SW1hZ2VzOlt7XHJcblx0XHRcdHNyYyA6ICdodHRwczovL2ltZy5oYW5reXVuZy5jb20vcGhvdG8vMjAxOTA5L0JGLjIwNjAyMTExLjEuanBnJ1xyXG5cdFx0fSx7XHJcblx0XHRcdHNyYyA6ICdodHRwczovL2ltZy52b2d1ZS5jby5rci92b2d1ZS8yMDE5LzA3L3N0eWxlXzVkMjNmOTBkOWFmMzcucG5nJ1xyXG5cdFx0fSx7XHJcblx0XHRcdHNyYyA6ICdodHRwczovL2ZpbGUubWsuY28ua3IvbWVldC9uZWRzLzIwMjAvMDYvaW1hZ2VfcmVhZHRvcF8yMDIwXzYxOTU4OF8xNTkyMzU2MDM4NDI0NDE4MS5qcGcnXHJcblx0XHR9XSxcclxuXHRcdENvbW1lbnRzOiBbe1xyXG5cdFx0XHRVc2VyOntcclxuXHRcdFx0XHRuaWNrbmFtZTonbmVybydcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDon7Jik7Ji5J1xyXG5cdFx0fSwge1xyXG5cdFx0XHRVc2VyOntcclxuXHRcdFx0XHRuaWNrbmFtZTonaGVybydcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDon67O06rOg7Iu264ukJ1xyXG5cdFx0fV1cclxuXHR9XSxcclxuXHRpbWFnZVBhdGhzOltdLFxyXG5cdHBvc3RBZGRlZDpmYWxzZSxcclxufVxyXG5cclxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuXHR0eXBlOkFERF9QT1NULFxyXG59XHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuXHRpZDoxMixcclxuXHQvLyBzZXF1YWxpemXsl5DshJwg64uk66W4IOygleuztOuTpOqzvCDtlanss5DspIQg65WMIOuMgOusuOyekOuhnCDrsJTqv5TspJjshJwg64yA66y47J6QXHJcblx0VXNlcjp7XHJcblx0XHRpZDoyLFxyXG5cdFx0bmlja25hbWU6J3plcm9jaG8nXHJcblx0fSxcclxuXHRjb250ZW50Oifssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICNleHByZXNzJyxcclxuXHRJbWFnZXM6W3tcclxuXHRcdHNyYyA6ICdodHRwczovL2ltZy5oYW5reXVuZy5jb20vcGhvdG8vMjAxOTA5L0JGLjIwNjAyMTExLjEuanBnJ1xyXG5cdH0se1xyXG5cdFx0c3JjIDogJ2h0dHBzOi8vaW1nLnZvZ3VlLmNvLmtyL3ZvZ3VlLzIwMTkvMDcvc3R5bGVfNWQyM2Y5MGQ5YWYzNy5wbmcnXHJcblx0fSx7XHJcblx0XHRzcmMgOiAnaHR0cHM6Ly9maWxlLm1rLmNvLmtyL21lZXQvbmVkcy8yMDIwLzA2L2ltYWdlX3JlYWR0b3BfMjAyMF82MTk1ODhfMTU5MjM1NjAzODQyNDQxODEuanBnJ1xyXG5cdH1dLFxyXG5cdENvbW1lbnRzOiBbXVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuXHRcdFx0Y2FzZSBBRERfUE9TVDpcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHQvLyDsg4jroZwg7LaU6rCA7ZWcIO2PrOyKpO2KuOqwgCDslZ7sl5Ag65yo6rKMIO2VmOq4sFxyXG5cdFx0XHRcdFx0bWFpblBvc3RzOltkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcblx0XHRcdFx0XHRwb3N0QWRkZWQ6dHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGlzTG9nZ2VkSW46ZmFsc2UsXHJcbiAgICBtZTpudWxsLFxyXG4gICAgc2lnblVwRGF0YTp7fSxcclxuICAgIGxvZ2luRGF0YTp7fVxyXG59XHJcbi8vIGFjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnbG9naW5BY3Rpb24nLCBkYXRhKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOidMT0dfSU4nLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6J0xPR19PVVQnLFxyXG4gICAgfVxyXG59XHJcbi8vIGluaXRpYWxTdGF0ZSBkZXB0aOqwgCDspITslrTshJwgcmV0dXJuIOu2gOu2hOuPhCBkZXB0aOulvCDspITsl6zslbwg7ZWc64ukXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOmFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdMT0dfT1VUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lOm51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJzsgLy8g6re465+8IOuwlOuhnCBpbmRleC5qcyDqsIDsoLjsmKTrgpg/XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5cclxuLy9jb25maWd1cmVTdG9yZS5qc1xyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3RodW5rTWlkZGxld2FyZV07XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgLy8g67Cw7Y+s7JqpXHJcbiAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge2RlYnVnOnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==