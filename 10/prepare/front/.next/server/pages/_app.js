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
  user: null,
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
        user: action.data
      });

    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        user: null
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



 // 그럼 바로 index.js 가져오나?
//configureStore.js

const configureStore = () => {
  const middlewares = [];
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwicG9zdCIsImNoYW5nZU5pY2tuYW1lIiwiZGF0YSIsInR5cGUiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwicGF5bG9hZCIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJpc0xvZ2dlZEluIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiY29uc29sZSIsImxvZyIsImxvZ291dEFjdGlvbiIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWlCO0FBQ2pDLFNBQ0MsbUVBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLENBREQsRUFLQyxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELENBREQ7QUFTQSxDQVZEOztBQVlBRCxRQUFRLENBQUNFLFNBQVQsR0FBcUI7QUFDakJELFdBQVMsRUFBR0UsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkM7QUFEakIsQ0FBckI7QUFJZUMsNEhBQU8sQ0FBQ0MsU0FBUixDQUFrQlAsUUFBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDckJBOztDQUVBOztBQUNBO0NBR0E7QUFDQTtBQUNBOztBQUNBLE1BQU1RLFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFDLEVBRFk7QUFHakJDLE1BQUksRUFBQztBQUhZLENBQXJCLEMsQ0FNQTs7QUFDQSxNQUFNQyxjQUFjLEdBQUlDLElBQUQsSUFBVTtBQUM3QixTQUFPO0FBQ0hDLFFBQUksRUFBQyxpQkFERjtBQUVIRDtBQUZHLEdBQVA7QUFJSCxDQUxELEMsQ0FPQTs7O0FBQ0EsTUFBTUUsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ25DO0FBQ0E7QUFDQUMsT0FBSyxFQUFDLENBQUNDLEtBQUssR0FBQyxFQUFQLEVBQVVDLE1BQVYsS0FBcUI7QUFDeEIsWUFBUUEsTUFBTSxDQUFDTCxJQUFmO0FBQ0ksV0FBS00sMERBQUw7QUFDSSwrQ0FBV0YsS0FBWCxHQUFxQkMsTUFBTSxDQUFDRSxPQUE1QjtBQUNKOztBQUNBO0FBQ0ksZUFBT0gsS0FBUDtBQUxSO0FBT0YsR0FYa0M7QUFZbkM7QUFDQVIscURBYm1DO0FBY25DQyxxREFBSUE7QUFkK0IsQ0FBRCxDQUFuQztBQWlCZUksMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNPLE1BQU1OLFlBQVksR0FBRztBQUMzQmEsV0FBUyxFQUFDLENBQUM7QUFDVkMsTUFBRSxFQUFDLENBRE87QUFFVjtBQUNBQyxRQUFJLEVBQUM7QUFDSkQsUUFBRSxFQUFDLENBREM7QUFFSkUsY0FBUSxFQUFDO0FBRkwsS0FISztBQU9WQyxXQUFPLEVBQUMseUJBUEU7QUFRVkMsVUFBTSxFQUFDLENBQUM7QUFDUEMsU0FBRyxFQUFHO0FBREMsS0FBRCxFQUVMO0FBQ0RBLFNBQUcsRUFBRztBQURMLEtBRkssRUFJTDtBQUNEQSxTQUFHLEVBQUc7QUFETCxLQUpLLENBUkc7QUFlVkMsWUFBUSxFQUFFLENBQUM7QUFDVkwsVUFBSSxFQUFDO0FBQ0pDLGdCQUFRLEVBQUM7QUFETCxPQURLO0FBSVZDLGFBQU8sRUFBQztBQUpFLEtBQUQsRUFLUDtBQUNGRixVQUFJLEVBQUM7QUFDSkMsZ0JBQVEsRUFBQztBQURMLE9BREg7QUFJRkMsYUFBTyxFQUFDO0FBSk4sS0FMTztBQWZBLEdBQUQsQ0FEaUI7QUE0QjNCSSxZQUFVLEVBQUMsRUE1QmdCO0FBNkIzQkMsV0FBUyxFQUFDO0FBN0JpQixDQUFyQjtBQWdDUCxNQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDTyxNQUFNQyxPQUFPLEdBQUc7QUFDdEJuQixNQUFJLEVBQUNrQjtBQURpQixDQUFoQjtBQUdQLE1BQU1FLFNBQVMsR0FBRztBQUNqQlgsSUFBRSxFQUFDLEVBRGM7QUFFakI7QUFDQUMsTUFBSSxFQUFDO0FBQ0pELE1BQUUsRUFBQyxDQURDO0FBRUpFLFlBQVEsRUFBQztBQUZMLEdBSFk7QUFPakJDLFNBQU8sRUFBQyx5QkFQUztBQVFqQkMsUUFBTSxFQUFDLENBQUM7QUFDUEMsT0FBRyxFQUFHO0FBREMsR0FBRCxFQUVMO0FBQ0RBLE9BQUcsRUFBRztBQURMLEdBRkssRUFJTDtBQUNEQSxPQUFHLEVBQUc7QUFETCxHQUpLLENBUlU7QUFlakJDLFVBQVEsRUFBRTtBQWZPLENBQWxCOztBQWlCQSxNQUFNTSxPQUFPLEdBQUcsQ0FBQ2pCLEtBQUssR0FBQ1QsWUFBUCxFQUFxQlUsTUFBckIsS0FBZ0M7QUFDNUMsVUFBU0EsTUFBTSxDQUFDTCxJQUFoQjtBQUNELFNBQUtrQixRQUFMO0FBQ0MsNkNBQ0lkLEtBREo7QUFFQztBQUNBSSxpQkFBUyxFQUFDLENBQUNZLFNBQUQsRUFBWSxHQUFHaEIsS0FBSyxDQUFDSSxTQUFyQixDQUhYO0FBSUNTLGlCQUFTLEVBQUM7QUFKWDs7QUFNRDtBQUNDLGFBQU9iLEtBQVA7QUFUQTtBQVdILENBWkQ7O0FBY2VpQixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVPLE1BQU0xQixZQUFZLEdBQUc7QUFDeEIyQixZQUFVLEVBQUMsS0FEYTtBQUV4QjFCLE1BQUksRUFBQyxJQUZtQjtBQUd4QjJCLFlBQVUsRUFBQyxFQUhhO0FBSXhCQyxXQUFTLEVBQUM7QUFKYyxDQUFyQixDLENBTVA7O0FBQ08sTUFBTUMsV0FBVyxHQUFJMUIsSUFBRCxJQUFVO0FBQ2pDMkIsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQjVCLElBQTNCO0FBQ0EsU0FBTztBQUNIQyxRQUFJLEVBQUMsUUFERjtBQUVIRDtBQUZHLEdBQVA7QUFJSCxDQU5NO0FBUUEsTUFBTTZCLFlBQVksR0FBRyxNQUFNO0FBQzlCLFNBQU87QUFDSDVCLFFBQUksRUFBQztBQURGLEdBQVA7QUFHSCxDQUpNLEMsQ0FLUDs7QUFDQSxNQUFNcUIsT0FBTyxHQUFHLENBQUNqQixLQUFLLEdBQUNULFlBQVAsRUFBcUJVLE1BQXJCLEtBQWdDO0FBQzVDLFVBQVNBLE1BQU0sQ0FBQ0wsSUFBaEI7QUFDSSxTQUFLLFFBQUw7QUFDSSw2Q0FDT0ksS0FEUDtBQUVJa0Isa0JBQVUsRUFBQyxJQUZmO0FBR0kxQixZQUFJLEVBQUNTLE1BQU0sQ0FBQ047QUFIaEI7O0FBS0osU0FBSyxTQUFMO0FBQ0ksNkNBQ09LLEtBRFA7QUFFSWtCLGtCQUFVLEVBQUMsS0FGZjtBQUdJMUIsWUFBSSxFQUFDO0FBSFQ7O0FBS0o7QUFDSSxhQUFPUSxLQUFQO0FBZFI7QUFnQkgsQ0FqQkQ7O0FBbUJlaUIsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDeENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FDbUM7QUFFbkM7O0FBQ0EsTUFBTVEsY0FBYyxHQUFHLE1BQU07QUFDekIsUUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLFFBQ2RDLFNBRGMsQ0FDMkI7QUFEM0IsSUFFZEMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUZ0QjtBQUlBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ2YsaURBQUQsRUFBVVUsUUFBVixDQUF6QjtBQUNBLFNBQU9JLEtBQVA7QUFDSCxDQVJEOztBQVVBLE1BQU0xQyxPQUFPLEdBQUc0Qyx3RUFBYSxDQUFDUixjQUFELEVBQWlCO0FBQUNTLE9BQUs7QUFBTixDQUFqQixDQUE3QjtBQUVlN0Msc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJ1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSdcclxuXHJcbmNvbnN0IE5vZGVCaXJkID0gKHtDb21wb25lbnR9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PG1ldGEgY2hhcnNldD1cInV0Zi04XCIvPlxyXG5cdFx0XHRcdFx0PHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8Q29tcG9uZW50IC8+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuXHJcbk5vZGVCaXJkLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudCA6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7IiwiaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG4vLyDsqrzqsKDqsbgg7ZWp7LOQ7KO864qUIOqxsCA6IOqwneyytOyZgCDri6zrpqwg7ZWo7IiY64qUIO2Vqey5mOq4sCDsib3sp4Ag7JWK7JWE7IScIO2VhOyalFxyXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xyXG4vLyDsqrzqsKDqsbgg67aI65+s7Jio64ukXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyBpbml0aWFsU3RhdGXsl5DshJwgc3RhdGXrpbwgdXNlcuyZgCBwb3N066GcIOq1rOu2hO2VtOyEnCDqsIHqsIHsnYQg7JyE7ZW0IGpzIO2MjOydvOydhCDrp4zrk6Dri6RcclxuLy8gdXNlcuyZgCBwb3N0IOyViOyXkCDsnojrjZggc3RhdGXrk6TsnYQg7YyM7J2866GcIOyYruq4tOuLpFxyXG4vLyDrmJDtlZwg7ZW064u5IO2MjOydvCDslYjsl5DshJwgZXhwb3J0IOyLnO2CqOuLpFxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOnsgICAgICAgIFxyXG4gICAgfSxcclxuICAgIHBvc3Q6e1xyXG4gICAgfVxyXG59XHJcbi8vIGFjdGlvbiBjcmVhdG9yXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTonQ0hBTkdFX05JQ0tOQU1FJyxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vICjsnbTsoIQg7IOB7YOcLCBhY3Rpb24pID0+IOuLpOydjCDsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdC8vIHJlZHV4IHNlcnZlcnNpZGUgcmVuZGVyaW5n7J2EIOychO2VtOyEnCBIWURSQVRF6rCAIO2VhOyalO2VmOuLpFxyXG5cdC8vIEhZRFJBVEXrpbwg7JyE7ZW07IScIGluZGV4IHJlZHVjZXIg7LaU6rCAXHJcblx0aW5kZXg6KHN0YXRlPXt9LGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9O1xyXG4gICAgICAgIC8vIHJlZHVjZXIg7LSI6riw7ZmU7ZWgIOuVjOuPhCDsi6TtlonrkJjrr4DroZwg7ZWE7JqUXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly8gY29tYmluZSByZWR1Y2Vy6rCAIOyVjOyVhOyEnCBpbml0aWFsU3RhdGUg64Sj7Ja07KSA64ukXHJcblx0dXNlcixcclxuXHRwb3N0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRtYWluUG9zdHM6W3tcclxuXHRcdGlkOjEsXHJcblx0XHQvLyBzZXF1YWxpemXsl5DshJwg64uk66W4IOygleuztOuTpOqzvCDtlanss5DspIQg65WMIOuMgOusuOyekOuhnCDrsJTqv5TspJjshJwg64yA66y47J6QXHJcblx0XHRVc2VyOntcclxuXHRcdFx0aWQ6MSxcclxuXHRcdFx0bmlja25hbWU6J3plcm9jaG8nXHJcblx0XHR9LFxyXG5cdFx0Y29udGVudDon7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAjZXhwcmVzcycsXHJcblx0XHRJbWFnZXM6W3tcclxuXHRcdFx0c3JjIDogJ2h0dHBzOi8vaW1nLmhhbmt5dW5nLmNvbS9waG90by8yMDE5MDkvQkYuMjA2MDIxMTEuMS5qcGcnXHJcblx0XHR9LHtcclxuXHRcdFx0c3JjIDogJ2h0dHBzOi8vaW1nLnZvZ3VlLmNvLmtyL3ZvZ3VlLzIwMTkvMDcvc3R5bGVfNWQyM2Y5MGQ5YWYzNy5wbmcnXHJcblx0XHR9LHtcclxuXHRcdFx0c3JjIDogJ2h0dHBzOi8vZmlsZS5tay5jby5rci9tZWV0L25lZHMvMjAyMC8wNi9pbWFnZV9yZWFkdG9wXzIwMjBfNjE5NTg4XzE1OTIzNTYwMzg0MjQ0MTgxLmpwZydcclxuXHRcdH1dLFxyXG5cdFx0Q29tbWVudHM6IFt7XHJcblx0XHRcdFVzZXI6e1xyXG5cdFx0XHRcdG5pY2tuYW1lOiduZXJvJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250ZW50OifsmKTsmLknXHJcblx0XHR9LCB7XHJcblx0XHRcdFVzZXI6e1xyXG5cdFx0XHRcdG5pY2tuYW1lOidoZXJvJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250ZW50Oifrs7Tqs6Dsi7bri6QnXHJcblx0XHR9XVxyXG5cdH1dLFxyXG5cdGltYWdlUGF0aHM6W10sXHJcblx0cG9zdEFkZGVkOmZhbHNlLFxyXG59XHJcblxyXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG5cdHR5cGU6QUREX1BPU1QsXHJcbn1cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG5cdGlkOjEyLFxyXG5cdC8vIHNlcXVhbGl6ZeyXkOyEnCDri6Trpbgg7KCV67O065Ok6rO8IO2VqeyzkOykhCDrlYwg64yA66y47J6Q66GcIOuwlOq/lOykmOyEnCDrjIDrrLjsnpBcclxuXHRVc2VyOntcclxuXHRcdGlkOjIsXHJcblx0XHRuaWNrbmFtZTonemVyb2NobydcclxuXHR9LFxyXG5cdGNvbnRlbnQ6J+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI2V4cHJlc3MnLFxyXG5cdEltYWdlczpbe1xyXG5cdFx0c3JjIDogJ2h0dHBzOi8vaW1nLmhhbmt5dW5nLmNvbS9waG90by8yMDE5MDkvQkYuMjA2MDIxMTEuMS5qcGcnXHJcblx0fSx7XHJcblx0XHRzcmMgOiAnaHR0cHM6Ly9pbWcudm9ndWUuY28ua3Ivdm9ndWUvMjAxOS8wNy9zdHlsZV81ZDIzZjkwZDlhZjM3LnBuZydcclxuXHR9LHtcclxuXHRcdHNyYyA6ICdodHRwczovL2ZpbGUubWsuY28ua3IvbWVldC9uZWRzLzIwMjAvMDYvaW1hZ2VfcmVhZHRvcF8yMDIwXzYxOTU4OF8xNTkyMzU2MDM4NDI0NDE4MS5qcGcnXHJcblx0fV0sXHJcblx0Q29tbWVudHM6IFtdXHJcbn1cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcblx0XHRcdGNhc2UgQUREX1BPU1Q6XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0Ly8g7IOI66GcIOy2lOqwgO2VnCDtj6zsiqTtirjqsIAg7JWe7JeQIOucqOqyjCDtlZjquLBcclxuXHRcdFx0XHRcdG1haW5Qb3N0czpbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG5cdFx0XHRcdFx0cG9zdEFkZGVkOnRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2dlZEluOmZhbHNlLFxyXG4gICAgdXNlcjpudWxsLFxyXG4gICAgc2lnblVwRGF0YTp7fSxcclxuICAgIGxvZ2luRGF0YTp7fVxyXG59XHJcbi8vIGFjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnbG9naW5BY3Rpb24nLCBkYXRhKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOidMT0dfSU4nLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6J0xPR19PVVQnLFxyXG4gICAgfVxyXG59XHJcbi8vIGluaXRpYWxTdGF0ZSBkZXB0aOqwgCDspITslrTshJwgcmV0dXJuIOu2gOu2hOuPhCBkZXB0aOulvCDspITsl6zslbwg7ZWc64ukXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46dHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6YWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ0xPR19PVVQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjpudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7IC8vIOq3uOufvCDrsJTroZwgaW5kZXguanMg6rCA7KC47Jik64KYP1xyXG5cclxuLy9jb25maWd1cmVTdG9yZS5qc1xyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW107XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgLy8g67Cw7Y+s7JqpXHJcbiAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge2RlYnVnOnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==