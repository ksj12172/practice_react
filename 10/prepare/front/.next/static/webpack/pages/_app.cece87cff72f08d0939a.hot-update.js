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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRztBQUMzQkMsV0FBUyxFQUFDLENBQUM7QUFDVkMsTUFBRSxFQUFDLENBRE87QUFFVkMsUUFBSSxFQUFDO0FBQ0pELFFBQUUsRUFBQyxDQURDO0FBRUpFLGNBQVEsRUFBQztBQUZMLEtBRks7QUFNVkMsV0FBTyxFQUFDLHlCQU5FO0FBT1ZDLFVBQU0sRUFBQyxDQUFDO0FBQ1BDLFNBQUcsRUFBRztBQURDLEtBQUQsRUFFTDtBQUNEQSxTQUFHLEVBQUc7QUFETCxLQUZLLEVBSUw7QUFDREEsU0FBRyxFQUFHO0FBREwsS0FKSztBQVBHLEdBQUQ7QUFEaUIsQ0FBckI7O0FBa0JQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWdDO0FBQUEsTUFBL0JDLEtBQStCLHVFQUF6QlQsWUFBeUI7QUFBQSxNQUFYVSxNQUFXOztBQUM1QyxVQUFTQSxNQUFNLENBQUNDLElBQWhCO0FBQ0k7QUFDSSxhQUFPRixLQUFQO0FBRlI7QUFJSCxDQUxEOztBQU9lRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNlY2U4N2NmZjcyZjA4ZDA5MzlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czpbe1xyXG5cdFx0aWQ6MSxcclxuXHRcdFVzZXI6e1xyXG5cdFx0XHRpZDoxLFxyXG5cdFx0XHRuaWNrbmFtZTonemVyb2NobydcclxuXHRcdH0sXHJcblx0XHRjb250ZW50Oifssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICNleHByZXNzJyxcclxuXHRcdEltYWdlczpbe1xyXG5cdFx0XHRzcmMgOiAnaHR0cHM6Ly9pbWcuaGFua3l1bmcuY29tL3Bob3RvLzIwMTkwOS9CRi4yMDYwMjExMS4xLmpwZydcclxuXHRcdH0se1xyXG5cdFx0XHRzcmMgOiAnaHR0cHM6Ly9pbWcudm9ndWUuY28ua3Ivdm9ndWUvMjAxOS8wNy9zdHlsZV81ZDIzZjkwZDlhZjM3LnBuZydcclxuXHRcdH0se1xyXG5cdFx0XHRzcmMgOiAnaHR0cHM6Ly9maWxlLm1rLmNvLmtyL21lZXQvbmVkcy8yMDIwLzA2L2ltYWdlX3JlYWR0b3BfMjAyMF82MTk1ODhfMTU5MjM1NjAzODQyNDQxODEuanBnJ1xyXG5cdFx0fV1cclxuXHR9XSxcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=