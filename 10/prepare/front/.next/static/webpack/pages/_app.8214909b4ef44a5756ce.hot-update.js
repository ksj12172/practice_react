webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
  }]
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxXQUFTLEVBQUMsQ0FBQztBQUNWQyxNQUFFLEVBQUMsQ0FETztBQUVWO0FBQ0FDLFFBQUksRUFBQztBQUNKRCxRQUFFLEVBQUMsQ0FEQztBQUVKRSxjQUFRLEVBQUM7QUFGTCxLQUhLO0FBT1ZDLFdBQU8sRUFBQyx5QkFQRTtBQVFWQyxVQUFNLEVBQUMsQ0FBQztBQUNQQyxTQUFHLEVBQUc7QUFEQyxLQUFELEVBRUw7QUFDREEsU0FBRyxFQUFHO0FBREwsS0FGSyxFQUlMO0FBQ0RBLFNBQUcsRUFBRztBQURMLEtBSkssQ0FSRztBQWVWQyxZQUFRLEVBQUUsQ0FBQztBQUNWTCxVQUFJLEVBQUM7QUFDSkMsZ0JBQVEsRUFBQztBQURMLE9BREs7QUFJVkMsYUFBTyxFQUFDO0FBSkUsS0FBRCxFQUtQO0FBQ0ZGLFVBQUksRUFBQztBQUNKQyxnQkFBUSxFQUFDO0FBREwsT0FESDtBQUlGQyxhQUFPLEVBQUM7QUFKTixLQUxPO0FBZkEsR0FBRDtBQURpQixDQUFyQjs7QUE4QlAsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBZ0M7QUFBQSxNQUEvQkMsS0FBK0IsdUVBQXpCVixZQUF5QjtBQUFBLE1BQVhXLE1BQVc7O0FBQzVDLFVBQVNBLE1BQU0sQ0FBQ0MsSUFBaEI7QUFDSTtBQUNJLGFBQU9GLEtBQVA7QUFGUjtBQUlILENBTEQ7O0FBT2VELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODIxNDkwOWI0ZWY0NGE1NzU2Y2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0bWFpblBvc3RzOlt7XHJcblx0XHRpZDoxLFxyXG5cdFx0Ly8gc2VxdWFsaXpl7JeQ7IScIOuLpOuluCDsoJXrs7Trk6Tqs7wg7ZWp7LOQ7KSEIOuVjCDrjIDrrLjsnpDroZwg67CU6r+U7KSY7IScIOuMgOusuOyekFxyXG5cdFx0VXNlcjp7XHJcblx0XHRcdGlkOjEsXHJcblx0XHRcdG5pY2tuYW1lOid6ZXJvY2hvJ1xyXG5cdFx0fSxcclxuXHRcdGNvbnRlbnQ6J+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI2V4cHJlc3MnLFxyXG5cdFx0SW1hZ2VzOlt7XHJcblx0XHRcdHNyYyA6ICdodHRwczovL2ltZy5oYW5reXVuZy5jb20vcGhvdG8vMjAxOTA5L0JGLjIwNjAyMTExLjEuanBnJ1xyXG5cdFx0fSx7XHJcblx0XHRcdHNyYyA6ICdodHRwczovL2ltZy52b2d1ZS5jby5rci92b2d1ZS8yMDE5LzA3L3N0eWxlXzVkMjNmOTBkOWFmMzcucG5nJ1xyXG5cdFx0fSx7XHJcblx0XHRcdHNyYyA6ICdodHRwczovL2ZpbGUubWsuY28ua3IvbWVldC9uZWRzLzIwMjAvMDYvaW1hZ2VfcmVhZHRvcF8yMDIwXzYxOTU4OF8xNTkyMzU2MDM4NDI0NDE4MS5qcGcnXHJcblx0XHR9XSxcclxuXHRcdENvbW1lbnRzOiBbe1xyXG5cdFx0XHRVc2VyOntcclxuXHRcdFx0XHRuaWNrbmFtZTonbmVybydcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDon7Jik7Ji5J1xyXG5cdFx0fSwge1xyXG5cdFx0XHRVc2VyOntcclxuXHRcdFx0XHRuaWNrbmFtZTonaGVybydcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudDon67O06rOg7Iu264ukJ1xyXG5cdFx0fV1cclxuXHR9XSxcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=