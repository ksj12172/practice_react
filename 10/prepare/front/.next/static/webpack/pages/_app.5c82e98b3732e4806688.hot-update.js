webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
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
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
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
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        // 새로 추가한 포스트가 앞에 뜨게 하기
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxXQUFTLEVBQUMsQ0FBQztBQUNWQyxNQUFFLEVBQUMsQ0FETztBQUVWO0FBQ0FDLFFBQUksRUFBQztBQUNKRCxRQUFFLEVBQUMsQ0FEQztBQUVKRSxjQUFRLEVBQUM7QUFGTCxLQUhLO0FBT1ZDLFdBQU8sRUFBQyx5QkFQRTtBQVFWQyxVQUFNLEVBQUMsQ0FBQztBQUNQQyxTQUFHLEVBQUc7QUFEQyxLQUFELEVBRUw7QUFDREEsU0FBRyxFQUFHO0FBREwsS0FGSyxFQUlMO0FBQ0RBLFNBQUcsRUFBRztBQURMLEtBSkssQ0FSRztBQWVWQyxZQUFRLEVBQUUsQ0FBQztBQUNWTCxVQUFJLEVBQUM7QUFDSkMsZ0JBQVEsRUFBQztBQURMLE9BREs7QUFJVkMsYUFBTyxFQUFDO0FBSkUsS0FBRCxFQUtQO0FBQ0ZGLFVBQUksRUFBQztBQUNKQyxnQkFBUSxFQUFDO0FBREwsT0FESDtBQUlGQyxhQUFPLEVBQUM7QUFKTixLQUxPO0FBZkEsR0FBRCxDQURpQjtBQTRCM0JJLFlBQVUsRUFBQyxFQTVCZ0I7QUE2QjNCQyxXQUFTLEVBQUM7QUE3QmlCLENBQXJCO0FBZ0NQLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNPLElBQU1DLE9BQU8sR0FBRztBQUN0QkMsTUFBSSxFQUFDRjtBQURpQixDQUFoQjtBQUdQLElBQU1HLFNBQVMsR0FBRztBQUNqQlosSUFBRSxFQUFDLEVBRGM7QUFFakI7QUFDQUMsTUFBSSxFQUFDO0FBQ0pELE1BQUUsRUFBQyxDQURDO0FBRUpFLFlBQVEsRUFBQztBQUZMLEdBSFk7QUFPakJDLFNBQU8sRUFBQyx5QkFQUztBQVFqQkMsUUFBTSxFQUFDLENBQUM7QUFDUEMsT0FBRyxFQUFHO0FBREMsR0FBRCxFQUVMO0FBQ0RBLE9BQUcsRUFBRztBQURMLEdBRkssRUFJTDtBQUNEQSxPQUFHLEVBQUc7QUFETCxHQUpLLENBUlU7QUFlakJDLFVBQVEsRUFBRSxDQUFDO0FBQ1ZMLFFBQUksRUFBQztBQUNKQyxjQUFRLEVBQUM7QUFETCxLQURLO0FBSVZDLFdBQU8sRUFBQztBQUpFLEdBQUQsRUFLUDtBQUNGRixRQUFJLEVBQUM7QUFDSkMsY0FBUSxFQUFDO0FBREwsS0FESDtBQUlGQyxXQUFPLEVBQUM7QUFKTixHQUxPO0FBZk8sQ0FBbEI7O0FBMkJBLElBQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWdDO0FBQUEsTUFBL0JDLEtBQStCLHVFQUF6QmhCLFlBQXlCO0FBQUEsTUFBWGlCLE1BQVc7O0FBQzVDLFVBQVNBLE1BQU0sQ0FBQ0osSUFBaEI7QUFDRCxTQUFLRixRQUFMO0FBQ0MsNkNBQ0lLLEtBREo7QUFFQztBQUNBZixpQkFBUyxHQUFFYSxTQUFGLHNHQUFnQkUsS0FBSyxDQUFDZixTQUF0QixFQUhWO0FBSUNTLGlCQUFTLEVBQUM7QUFKWDs7QUFNRDtBQUNDLGFBQU9NLEtBQVA7QUFUQTtBQVdILENBWkQ7O0FBY2VELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWM4MmU5OGIzNzMyZTQ4MDY2ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOlt7XHJcblx0XHRpZDoxLFxyXG5cdFx0Ly8gc2VxdWFsaXpl7JeQ7IScIOuLpOuluCDsoJXrs7Trk6Tqs7wg7ZWp7LOQ7KSEIOuVjCDrjIDrrLjsnpDroZwg67CU6r+U7KSY7IScIOuMgOusuOyekFxyXG5cdFx0VXNlcjp7XHJcblx0XHRcdGlkOjEsXHJcblx0XHRcdG5pY2tuYW1lOid6ZXJvY2hvJ1xyXG5cdFx0fSxcclxuXHRcdGNvbnRlbnQ6J+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI2V4cHJlc3MnLFxyXG5cdFx0SW1hZ2VzOlt7XHJcblx0XHRcdHNyYyA6ICdodHRwczovL2ltZy5oYW5reXVuZy5jb20vcGhvdG8vMjAxOTA5L0JGLjIwNjAyMTExLjEuanBnJ1xyXG5cdFx0fSx7XHJcblx0XHRcdHNyYyA6ICdodHRwczovL2ltZy52b2d1ZS5jby5rci92b2d1ZS8yMDE5LzA3L3N0eWxlXzVkMjNmOTBkOWFmMzcucG5nJ1xyXG5cdFx0fSx7XHJcblx0XHRcdHNyYyA6ICdodHRwczovL2ZpbGUubWsuY28ua3IvbWVldC9uZWRzLzIwMjAvMDYvaW1hZ2VfcmVhZHRvcF8yMDIwXzYxOTU4OF8xNTkyMzU2MDM4NDI0NDE4MS5qcGcnXHJcblx0XHR9XSxcclxuXHRcdENvbW1lbnRzOiBbe1xyXG5cdFx0XHRVc2VyOntcclxuXHRcdFx0XHRuaWNrbmFtZTonbmVybydcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDon7Jik7Ji5J1xyXG5cdFx0fSwge1xyXG5cdFx0XHRVc2VyOntcclxuXHRcdFx0XHRuaWNrbmFtZTonaGVybydcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDon67O06rOg7Iu264ukJ1xyXG5cdFx0fV1cclxuXHR9XSxcclxuXHRpbWFnZVBhdGhzOltdLFxyXG5cdHBvc3RBZGRlZDpmYWxzZSxcclxufVxyXG5cclxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcclxuXHR0eXBlOkFERF9QT1NULFxyXG59XHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuXHRpZDoxMixcclxuXHQvLyBzZXF1YWxpemXsl5DshJwg64uk66W4IOygleuztOuTpOqzvCDtlanss5DspIQg65WMIOuMgOusuOyekOuhnCDrsJTqv5TspJjshJwg64yA66y47J6QXHJcblx0VXNlcjp7XHJcblx0XHRpZDoyLFxyXG5cdFx0bmlja25hbWU6J3plcm9jaG8nXHJcblx0fSxcclxuXHRjb250ZW50Oifssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICNleHByZXNzJyxcclxuXHRJbWFnZXM6W3tcclxuXHRcdHNyYyA6ICdodHRwczovL2ltZy5oYW5reXVuZy5jb20vcGhvdG8vMjAxOTA5L0JGLjIwNjAyMTExLjEuanBnJ1xyXG5cdH0se1xyXG5cdFx0c3JjIDogJ2h0dHBzOi8vaW1nLnZvZ3VlLmNvLmtyL3ZvZ3VlLzIwMTkvMDcvc3R5bGVfNWQyM2Y5MGQ5YWYzNy5wbmcnXHJcblx0fSx7XHJcblx0XHRzcmMgOiAnaHR0cHM6Ly9maWxlLm1rLmNvLmtyL21lZXQvbmVkcy8yMDIwLzA2L2ltYWdlX3JlYWR0b3BfMjAyMF82MTk1ODhfMTU5MjM1NjAzODQyNDQxODEuanBnJ1xyXG5cdH1dLFxyXG5cdENvbW1lbnRzOiBbe1xyXG5cdFx0VXNlcjp7XHJcblx0XHRcdG5pY2tuYW1lOiduZXJvJ1xyXG5cdFx0fSxcclxuXHRcdGNvbnRlbnQ6J+yYpOyYuSdcclxuXHR9LCB7XHJcblx0XHRVc2VyOntcclxuXHRcdFx0bmlja25hbWU6J2hlcm8nXHJcblx0XHR9LFxyXG5cdFx0Y29udGVudDon67O06rOg7Iu264ukJ1xyXG5cdH1dXHJcbn1cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcblx0XHRcdGNhc2UgQUREX1BPU1Q6XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0Ly8g7IOI66GcIOy2lOqwgO2VnCDtj6zsiqTtirjqsIAg7JWe7JeQIOucqOqyjCDtlZjquLBcclxuXHRcdFx0XHRcdG1haW5Qb3N0czpbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG5cdFx0XHRcdFx0cG9zdEFkZGVkOnRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=