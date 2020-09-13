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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);


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
      lineNumber: 27,
      columnNumber: 3
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 30
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 6
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 6
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 12
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 6
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 14
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(PostCardContent, {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
          lineNumber: 64,
          columnNumber: 8
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 18
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImxpa2VkIiwic2V0TGlrZWQiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50IiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiQ2FyZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsS0FBRCxDQURMO0FBQUEsTUFDckJDLEtBRHFCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFcUJGLHNEQUFRLENBQUMsS0FBRCxDQUY3QjtBQUFBLE1BRXJCRyxpQkFGcUI7QUFBQSxNQUVIQyxvQkFGRzs7QUFHNUIsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdENKLFlBQVEsQ0FBQyxVQUFDSyxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFSO0FBQ0EsR0FGK0IsRUFFOUIsRUFGOEIsQ0FBaEM7QUFHQSxNQUFN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LENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCLENBTFc7QUFNcEJYLFVBQU0sRUFBQ1EsaURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUI7QUFOYSxHQUFoQixFQU9GSTtBQVJpQixDQUFyQjtBQVdlbEMsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzAzOTcwZDdiYjNiYjUyMTIxYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtQb3BvdmVyLENhcmQsQnV0dG9uLCBBdmF0YXIsIExpc3QsIENvbW1lbnR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge1JldHdlZXRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLCBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIEVsbGlwc2lzT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7cG9zdH0pID0+IHtcclxuXHRjb25zdCBbbGlrZWQsc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCxzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0TGlrZWQoKHByZXYpID0+ICFwcmV2KTtcclxuXHR9LFtdKVxyXG5cdGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcblx0fSxbXSk7XHJcblx0Y29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuXHJcblx0Y29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cdFx0bWFyZ2luLWJvdHRvbToyMHB4O1xyXG5cdGBcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcmRXcmFwcGVyPlxyXG5cdFx0XHQ8Q2FyZFxyXG5cdFx0XHRcdGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuXHRcdFx0XHRhY3Rpb25zPXtbXHJcblx0XHRcdFx0XHQ8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPixcclxuXHRcdFx0XHRcdGxpa2VkXHJcblx0XHRcdFx0XHRcdD8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9Lz5cclxuXHRcdFx0XHRcdFx0OiA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0gLz4sXHJcblx0XHRcdFx0XHQ8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9Lz4sXHJcblx0XHRcdFx0XHQ8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KFxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uLkdyb3VwPlxyXG5cdFx0XHRcdFx0XHRcdHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIj7sgq3soJw8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24uR3JvdXA+XHJcblx0XHRcdFx0XHQpfT5cclxuXHRcdFx0XHRcdFx0PEVsbGlwc2lzT3V0bGluZWQgLz5cclxuXHRcdFx0XHRcdDwvUG9wb3Zlcj5cclxuXHRcdFx0XHRdfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PENhcmQuTWV0YVxyXG5cdFx0XHRcdFx0YXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG5cdFx0XHRcdFx0dGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0e2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuXHRcdFx0XHRcdDxMaXN0XHJcblx0XHRcdFx0XHRcdGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcblx0XHRcdFx0XHRcdGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuXHRcdFx0XHRcdFx0ZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuXHRcdFx0XHRcdFx0cmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Db21tZW50PlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7LyogPENvbW1lbnRGb3JtIC8+ICovfVxyXG5cdFx0XHR7LyogPENvbW1lbnRzIC8+ICovfVxyXG5cdFx0PC9DYXJkV3JhcHBlcj5cclxuXHQpXHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcblx0cG9zdDpQcm9wVHlwZXMuc2hhcGUoe1xyXG5cdFx0aWQ6UHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFVzZXI6UHJvcFR5cGVzLm9iamVjdCxcclxuXHRcdGNvbnRlbnQ6UHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdGNyZWF0ZWRBdCA6IFByb3BUeXBlcy5vYmplY3QsXHJcblx0XHRDb21tZW50czpQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuXHRcdEltYWdlczpQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxyXG5cdH0pLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=