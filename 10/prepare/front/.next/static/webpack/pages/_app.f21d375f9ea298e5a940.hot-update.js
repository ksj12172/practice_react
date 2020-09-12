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
  Comments: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxXQUFTLEVBQUMsQ0FBQztBQUNWQyxNQUFFLEVBQUMsQ0FETztBQUVWO0FBQ0FDLFFBQUksRUFBQztBQUNKRCxRQUFFLEVBQUMsQ0FEQztBQUVKRSxjQUFRLEVBQUM7QUFGTCxLQUhLO0FBT1ZDLFdBQU8sRUFBQyx5QkFQRTtBQVFWQyxVQUFNLEVBQUMsQ0FBQztBQUNQQyxTQUFHLEVBQUc7QUFEQyxLQUFELEVBRUw7QUFDREEsU0FBRyxFQUFHO0FBREwsS0FGSyxFQUlMO0FBQ0RBLFNBQUcsRUFBRztBQURMLEtBSkssQ0FSRztBQWVWQyxZQUFRLEVBQUUsQ0FBQztBQUNWTCxVQUFJLEVBQUM7QUFDSkMsZ0JBQVEsRUFBQztBQURMLE9BREs7QUFJVkMsYUFBTyxFQUFDO0FBSkUsS0FBRCxFQUtQO0FBQ0ZGLFVBQUksRUFBQztBQUNKQyxnQkFBUSxFQUFDO0FBREwsT0FESDtBQUlGQyxhQUFPLEVBQUM7QUFKTixLQUxPO0FBZkEsR0FBRCxDQURpQjtBQTRCM0JJLFlBQVUsRUFBQyxFQTVCZ0I7QUE2QjNCQyxXQUFTLEVBQUM7QUE3QmlCLENBQXJCO0FBZ0NQLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNPLElBQU1DLE9BQU8sR0FBRztBQUN0QkMsTUFBSSxFQUFDRjtBQURpQixDQUFoQjtBQUdQLElBQU1HLFNBQVMsR0FBRztBQUNqQlosSUFBRSxFQUFDLEVBRGM7QUFFakI7QUFDQUMsTUFBSSxFQUFDO0FBQ0pELE1BQUUsRUFBQyxDQURDO0FBRUpFLFlBQVEsRUFBQztBQUZMLEdBSFk7QUFPakJDLFNBQU8sRUFBQyx5QkFQUztBQVFqQkMsUUFBTSxFQUFDLENBQUM7QUFDUEMsT0FBRyxFQUFHO0FBREMsR0FBRCxFQUVMO0FBQ0RBLE9BQUcsRUFBRztBQURMLEdBRkssRUFJTDtBQUNEQSxPQUFHLEVBQUc7QUFETCxHQUpLLENBUlU7QUFlakJDLFVBQVEsRUFBRTtBQWZPLENBQWxCOztBQWlCQSxJQUFNTyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFnQztBQUFBLE1BQS9CQyxLQUErQix1RUFBekJoQixZQUF5QjtBQUFBLE1BQVhpQixNQUFXOztBQUM1QyxVQUFTQSxNQUFNLENBQUNKLElBQWhCO0FBQ0QsU0FBS0YsUUFBTDtBQUNDLDZDQUNJSyxLQURKO0FBRUM7QUFDQWYsaUJBQVMsR0FBRWEsU0FBRixzR0FBZ0JFLEtBQUssQ0FBQ2YsU0FBdEIsRUFIVjtBQUlDUyxpQkFBUyxFQUFDO0FBSlg7O0FBTUQ7QUFDQyxhQUFPTSxLQUFQO0FBVEE7QUFXSCxDQVpEOztBQWNlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmYyMWQzNzVmOWVhMjk4ZTVhOTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdG1haW5Qb3N0czpbe1xyXG5cdFx0aWQ6MSxcclxuXHRcdC8vIHNlcXVhbGl6ZeyXkOyEnCDri6Trpbgg7KCV67O065Ok6rO8IO2VqeyzkOykhCDrlYwg64yA66y47J6Q66GcIOuwlOq/lOykmOyEnCDrjIDrrLjsnpBcclxuXHRcdFVzZXI6e1xyXG5cdFx0XHRpZDoxLFxyXG5cdFx0XHRuaWNrbmFtZTonemVyb2NobydcclxuXHRcdH0sXHJcblx0XHRjb250ZW50Oifssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICNleHByZXNzJyxcclxuXHRcdEltYWdlczpbe1xyXG5cdFx0XHRzcmMgOiAnaHR0cHM6Ly9pbWcuaGFua3l1bmcuY29tL3Bob3RvLzIwMTkwOS9CRi4yMDYwMjExMS4xLmpwZydcclxuXHRcdH0se1xyXG5cdFx0XHRzcmMgOiAnaHR0cHM6Ly9pbWcudm9ndWUuY28ua3Ivdm9ndWUvMjAxOS8wNy9zdHlsZV81ZDIzZjkwZDlhZjM3LnBuZydcclxuXHRcdH0se1xyXG5cdFx0XHRzcmMgOiAnaHR0cHM6Ly9maWxlLm1rLmNvLmtyL21lZXQvbmVkcy8yMDIwLzA2L2ltYWdlX3JlYWR0b3BfMjAyMF82MTk1ODhfMTU5MjM1NjAzODQyNDQxODEuanBnJ1xyXG5cdFx0fV0sXHJcblx0XHRDb21tZW50czogW3tcclxuXHRcdFx0VXNlcjp7XHJcblx0XHRcdFx0bmlja25hbWU6J25lcm8nXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnQ6J+yYpOyYuSdcclxuXHRcdH0sIHtcclxuXHRcdFx0VXNlcjp7XHJcblx0XHRcdFx0bmlja25hbWU6J2hlcm8nXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnQ6J+uztOqzoOyLtuuLpCdcclxuXHRcdH1dXHJcblx0fV0sXHJcblx0aW1hZ2VQYXRoczpbXSxcclxuXHRwb3N0QWRkZWQ6ZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XHJcblx0dHlwZTpBRERfUE9TVCxcclxufVxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcblx0aWQ6MTIsXHJcblx0Ly8gc2VxdWFsaXpl7JeQ7IScIOuLpOuluCDsoJXrs7Trk6Tqs7wg7ZWp7LOQ7KSEIOuVjCDrjIDrrLjsnpDroZwg67CU6r+U7KSY7IScIOuMgOusuOyekFxyXG5cdFVzZXI6e1xyXG5cdFx0aWQ6MixcclxuXHRcdG5pY2tuYW1lOid6ZXJvY2hvJ1xyXG5cdH0sXHJcblx0Y29udGVudDon7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAjZXhwcmVzcycsXHJcblx0SW1hZ2VzOlt7XHJcblx0XHRzcmMgOiAnaHR0cHM6Ly9pbWcuaGFua3l1bmcuY29tL3Bob3RvLzIwMTkwOS9CRi4yMDYwMjExMS4xLmpwZydcclxuXHR9LHtcclxuXHRcdHNyYyA6ICdodHRwczovL2ltZy52b2d1ZS5jby5rci92b2d1ZS8yMDE5LzA3L3N0eWxlXzVkMjNmOTBkOWFmMzcucG5nJ1xyXG5cdH0se1xyXG5cdFx0c3JjIDogJ2h0dHBzOi8vZmlsZS5tay5jby5rci9tZWV0L25lZHMvMjAyMC8wNi9pbWFnZV9yZWFkdG9wXzIwMjBfNjE5NTg4XzE1OTIzNTYwMzg0MjQ0MTgxLmpwZydcclxuXHR9XSxcclxuXHRDb21tZW50czogW11cclxufVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcclxuXHRcdFx0Y2FzZSBBRERfUE9TVDpcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHQvLyDsg4jroZwg7LaU6rCA7ZWcIO2PrOyKpO2KuOqwgCDslZ7sl5Ag65yo6rKMIO2VmOq4sFxyXG5cdFx0XHRcdFx0bWFpblBvc3RzOltkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcblx0XHRcdFx0XHRwb3N0QWRkZWQ6dHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==