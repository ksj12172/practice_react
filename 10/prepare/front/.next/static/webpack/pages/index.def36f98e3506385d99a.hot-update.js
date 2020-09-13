webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);


var _this = undefined,
    _jsxFileName = "D:\\0_0study\\react_practice\\test\\10\\prepare\\front\\components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t\tmargin-bottom:20px;\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      commentFormOpened = _useState2[0],
      setCommentFormOpened = _useState2[1];

  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
  return __jsx(CardWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 30
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 6
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 6
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 12
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 6
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 14
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["List"], {
    header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 8
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 18
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 6
    }
  })));
};

_s(PostCard, "naGGUoXKJKGrQ5PcpqEEvMWBMjQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "D:\\0_0study\\react_practice\\test\\10\\prepare\\front\\components\\PostCardContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PostCardContent = function PostCardContent(_ref) {
  var postData = _ref.postData;

  __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, postData.split(/(#[^\s#]+)/g).map(function (v, i) {
    if (v.match(/(#[^\s#]+)/g)) {
      return __jsx(Link, {
        href: "/hashtag/".concat(v.slice(1)),
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 24
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 70
        }
      }, v));
    }

    return v;
  }));
};

_c = PostCardContent;
PostCardContent.propTypes = {
  postData: PropTypes.string
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

var _c;

$RefreshReg$(_c, "PostCardContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQuanMiXSwibmFtZXMiOlsiUG9zdENhcmQiLCJwb3N0IiwidXNlU3RhdGUiLCJsaWtlZCIsInNldExpa2VkIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uVG9nZ2xlQ29tbWVudCIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsIkNhcmRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiSW1hZ2VzIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiLCJQb3N0Q2FyZENvbnRlbnQiLCJwb3N0RGF0YSIsInNwbGl0IiwibWFwIiwidiIsImkiLCJtYXRjaCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxLQUFELENBREw7QUFBQSxNQUNyQkMsS0FEcUI7QUFBQSxNQUNmQyxRQURlOztBQUFBLG1CQUVxQkYsc0RBQVEsQ0FBQyxLQUFELENBRjdCO0FBQUEsTUFFckJHLGlCQUZxQjtBQUFBLE1BRUhDLG9CQUZHOztBQUc1QixNQUFNQyxZQUFZLEdB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QURHLENBQTVCO0FBSWVJLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRlZjM2Zjk4ZTM1MDYzODVkOTlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7UG9wb3ZlcixDYXJkLEJ1dHRvbiwgQXZhdGFyLCBMaXN0LCBDb21tZW50fSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtSZXR3ZWV0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgSGVhcnRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHtwb3N0fSkgPT4ge1xyXG5cdGNvbnN0IFtsaWtlZCxzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRzZXRMaWtlZCgocHJldikgPT4gIXByZXYpO1xyXG5cdH0sW10pXHJcblx0Y29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuXHR9LFtdKTtcclxuXHRjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG5cclxuXHRjb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblx0XHRtYXJnaW4tYm90dG9tOjIwcHg7XHJcblx0YFxyXG5cdHJldHVybiAoXHJcblx0XHQ8Q2FyZFdyYXBwZXI+XHJcblx0XHRcdDxDYXJkXHJcblx0XHRcdFx0Y292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG5cdFx0XHRcdGFjdGlvbnM9e1tcclxuXHRcdFx0XHRcdDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxyXG5cdFx0XHRcdFx0bGlrZWRcclxuXHRcdFx0XHRcdFx0PyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0vPlxyXG5cdFx0XHRcdFx0XHQ6IDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfSAvPixcclxuXHRcdFx0XHRcdDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0vPixcclxuXHRcdFx0XHRcdDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXHJcblx0XHRcdFx0XHRcdDxCdXR0b24uR3JvdXA+XHJcblx0XHRcdFx0XHRcdFx0e2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cImRhbmdlclwiPuyCreygnDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0KSA6IDxCdXR0b24+7Iug6rOgPC9CdXR0b24+fVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbi5Hcm91cD5cclxuXHRcdFx0XHRcdCl9PlxyXG5cdFx0XHRcdFx0XHQ8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG5cdFx0XHRcdFx0PC9Qb3BvdmVyPlxyXG5cdFx0XHRcdF19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8Q2FyZC5NZXRhXHJcblx0XHRcdFx0XHRhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcblx0XHRcdFx0XHR0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9DYXJkPlxyXG5cdFx0XHR7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0vPlxyXG5cdFx0XHRcdFx0PExpc3RcclxuXHRcdFx0XHRcdFx0aGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuXHRcdFx0XHRcdFx0aXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG5cdFx0XHRcdFx0XHRkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG5cdFx0XHRcdFx0XHRyZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDb21tZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0NvbW1lbnQ+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHRcdHsvKiA8Q29tbWVudEZvcm0gLz4gKi99XHJcblx0XHRcdHsvKiA8Q29tbWVudHMgLz4gKi99XHJcblx0XHQ8L0NhcmRXcmFwcGVyPlxyXG5cdClcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuXHRwb3N0OlByb3BUeXBlcy5zaGFwZSh7XHJcblx0XHRpZDpQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0VXNlcjpQcm9wVHlwZXMub2JqZWN0LFxyXG5cdFx0Y29udGVudDpQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0Y3JlYXRlZEF0IDogUHJvcFR5cGVzLm9iamVjdCxcclxuXHRcdENvbW1lbnRzOlByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG5cdFx0SW1hZ2VzOlByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXHJcblx0fSkuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFBvc3RDYXJkQ29udGVudCA9ICh7cG9zdERhdGF9KSA9PiB7XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHtwb3N0RGF0YS5zcGxpdCgvKCNbXlxccyNdKykvZykubWFwKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzI10rKS9nKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3Yuc2xpY2UoMSl9YH0ga2V5PXtpfT48YT57dn08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbn07XHJcblxyXG5Qb3N0Q2FyZENvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdERhdGEgOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkQ29udGVudDsiXSwic291cmNlUm9vdCI6IiJ9