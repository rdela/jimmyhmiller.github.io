webpackHotUpdate_N_E("pages/muse/[[...id]]",{

/***/ "./pages/muse/[[...id]].js":
/*!*********************************!*\
  !*** ./pages/muse/[[...id]].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_board_contents_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/board/contents.json */ \"./public/board/contents.json\");\nvar _public_board_contents_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/board/contents.json */ \"./public/board/contents.json\", 1);\n\n\n\n\n\nvar _jsxFileName = \"/Users/jimmyhmiller/Documents/Code/jimmyhmiller.github.io/pages/muse/[[...id]].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Card = function Card(_ref) {\n  var document_id = _ref.document_id,\n      position_x = _ref.position_x,\n      position_y = _ref.position_y,\n      size_height = _ref.size_height,\n      size_width = _ref.size_width,\n      recurse = _ref.recurse,\n      setCurrentBoard = _ref.setCurrentBoard;\n  var cardInfo = _public_board_contents_json__WEBPACK_IMPORTED_MODULE_6__.documents[document_id];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: \"absolute\",\n      left: position_x,\n      top: position_y,\n      width: size_width,\n      height: size_height,\n      borderRadius: 9,\n      boxShadow: \"0px 0px 20px rgba(0,0,0,0.2)\",\n      backgroundColor: \"#F0EEE8\"\n    },\n    onClick: function onClick() {\n      return setCurrentBoard(cardInfo);\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        color: \"black\",\n        top: -20,\n        position: \"absolute\"\n      },\n      children: cardInfo.label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        position: \"relative\",\n        transform: \"scale(0.1)\",\n        width: 0\n      },\n      children: recurse ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Board, _objectSpread(_objectSpread({}, cardInfo), {}, {\n        recurse: false,\n        setCurrentBoard: setCurrentBoard\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 20\n      }, _this) : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Card;\n\nvar Board = function Board(_ref2) {\n  var cards = _ref2.cards,\n      recurse = _ref2.recurse,\n      setCurrentBoard = _ref2.setCurrentBoard,\n      rest = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, [\"cards\", \"recurse\", \"setCurrentBoard\"]);\n\n  if (!cards) {\n    return JSON.stringify(rest);\n  }\n\n  return cards.map(function (card) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, _objectSpread(_objectSpread({}, card), {}, {\n      recurse: recurse,\n      setCurrentBoard: setCurrentBoard\n    }), card.document_id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 28\n    }, _this);\n  });\n};\n\n_c2 = Board;\n\nvar Muse = function Muse() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  console.log(router);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(_public_board_contents_json__WEBPACK_IMPORTED_MODULE_6__.documents[_public_board_contents_json__WEBPACK_IMPORTED_MODULE_6__.root]),\n      currentBoard = _useState[0],\n      setCurrentBoard = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1481484493\",\n      children: \"body{background-color:#ECE9E1;font-family:sans-serif;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW1teWhtaWxsZXIvRG9jdW1lbnRzL0NvZGUvamltbXlobWlsbGVyLmdpdGh1Yi5pby9wYWdlcy9tdXNlL1tbLi4uaWRdXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ3VCLEFBR2tDLHlCQUNGLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvamltbXlobWlsbGVyL0RvY3VtZW50cy9Db2RlL2ppbW15aG1pbGxlci5naXRodWIuaW8vcGFnZXMvbXVzZS9bWy4uLmlkXV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBib2FyZCBmcm9tICcuLi8uLi9wdWJsaWMvYm9hcmQvY29udGVudHMuanNvbidcblxuXG5jb25zdCBDYXJkID0gKHsgZG9jdW1lbnRfaWQsIHBvc2l0aW9uX3gsIHBvc2l0aW9uX3ksIHNpemVfaGVpZ2h0LCBzaXplX3dpZHRoLCByZWN1cnNlLCBzZXRDdXJyZW50Qm9hcmQgfSkgPT4ge1xuICBjb25zdCBjYXJkSW5mbyA9IGJvYXJkLmRvY3VtZW50c1tkb2N1bWVudF9pZF1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBsZWZ0OiBwb3NpdGlvbl94LCBcbiAgICAgICAgdG9wOiBwb3NpdGlvbl95LFxuICAgICAgICB3aWR0aDogc2l6ZV93aWR0aCwgXG4gICAgICAgIGhlaWdodDogc2l6ZV9oZWlnaHQsXG4gICAgICAgIGJvcmRlclJhZGl1czogOSxcbiAgICAgICAgYm94U2hhZG93OiBcIjBweCAwcHggMjBweCByZ2JhKDAsMCwwLDAuMilcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGMEVFRThcIixcbiAgICAgIH19XG4gICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudEJvYXJkKGNhcmRJbmZvKX1cbiAgICA+XG4gICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6IFwiYmxhY2tcIiwgdG9wOiAtMjAsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT57Y2FyZEluZm8ubGFiZWx9PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdHJhbnNmb3JtOiBcInNjYWxlKDAuMSlcIiwgd2lkdGg6IDB9fT5cbiAgICAgICAge3JlY3Vyc2UgPyA8Qm9hcmQgey4uLmNhcmRJbmZvfSByZWN1cnNlPXtmYWxzZX0gc2V0Q3VycmVudEJvYXJkPXtzZXRDdXJyZW50Qm9hcmR9IC8+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59IFxuXG5cbmNvbnN0IEJvYXJkID0gKHsgY2FyZHMsIHJlY3Vyc2UsIHNldEN1cnJlbnRCb2FyZCwgLi4ucmVzdCB9KSA9PiB7XG4gIGlmICghY2FyZHMpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdClcbiAgfVxuICByZXR1cm4gY2FyZHMubWFwKGNhcmQgPT4gPENhcmQga2V5PXtjYXJkLmRvY3VtZW50X2lkfSB7Li4uY2FyZH0gcmVjdXJzZT17cmVjdXJzZX0gc2V0Q3VycmVudEJvYXJkPXtzZXRDdXJyZW50Qm9hcmR9IC8+KVxufVxuXG5cbmNvbnN0IE11c2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZyhyb3V0ZXIpXG4gIGNvbnN0IFtjdXJyZW50Qm9hcmQsIHNldEN1cnJlbnRCb2FyZF0gPSB1c2VTdGF0ZShib2FyZC5kb2N1bWVudHNbYm9hcmQucm9vdF0pXG4gIHJldHVybiA8PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRTlFMTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8Qm9hcmQgey4uLmN1cnJlbnRCb2FyZH0gcmVjdXJzZT17dHJ1ZX0gc2V0Q3VycmVudEJvYXJkPXtzZXRDdXJyZW50Qm9hcmR9IC8+XG4gIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNdXNlIl19 */\\n/*@ sourceURL=/Users/jimmyhmiller/Documents/Code/jimmyhmiller.github.io/pages/muse/[[...id]].js */\"\n    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Board, _objectSpread(_objectSpread({}, currentBoard), {}, {\n      recurse: true,\n      setCurrentBoard: setCurrentBoard\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Muse, \"9eBJnDCa2HISqsyNW4ajnU1c0cM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c3 = Muse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Muse);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"Board\");\n$RefreshReg$(_c3, \"Muse\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXVzZS9bWy4uLmlkXV0uanM/ZGQ5YyJdLCJuYW1lcyI6WyJDYXJkIiwiZG9jdW1lbnRfaWQiLCJwb3NpdGlvbl94IiwicG9zaXRpb25feSIsInNpemVfaGVpZ2h0Iiwic2l6ZV93aWR0aCIsInJlY3Vyc2UiLCJzZXRDdXJyZW50Qm9hcmQiLCJjYXJkSW5mbyIsImJvYXJkIiwiZG9jdW1lbnRzIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImxhYmVsIiwidHJhbnNmb3JtIiwiQm9hcmQiLCJjYXJkcyIsInJlc3QiLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwiY2FyZCIsIk11c2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJyb290IiwiY3VycmVudEJvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWdHO0FBQUEsTUFBN0ZDLFdBQTZGLFFBQTdGQSxXQUE2RjtBQUFBLE1BQWhGQyxVQUFnRixRQUFoRkEsVUFBZ0Y7QUFBQSxNQUFwRUMsVUFBb0UsUUFBcEVBLFVBQW9FO0FBQUEsTUFBeERDLFdBQXdELFFBQXhEQSxXQUF3RDtBQUFBLE1BQTNDQyxVQUEyQyxRQUEzQ0EsVUFBMkM7QUFBQSxNQUEvQkMsT0FBK0IsUUFBL0JBLE9BQStCO0FBQUEsTUFBdEJDLGVBQXNCLFFBQXRCQSxlQUFzQjtBQUMzRyxNQUFNQyxRQUFRLEdBQUdDLHdEQUFLLENBQUNDLFNBQU4sQ0FBZ0JULFdBQWhCLENBQWpCO0FBQ0Esc0JBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTFUsY0FBUSxFQUFFLFVBREw7QUFFTEMsVUFBSSxFQUFFVixVQUZEO0FBR0xXLFNBQUcsRUFBRVYsVUFIQTtBQUlMVyxXQUFLLEVBQUVULFVBSkY7QUFLTFUsWUFBTSxFQUFFWCxXQUxIO0FBTUxZLGtCQUFZLEVBQUUsQ0FOVDtBQU9MQyxlQUFTLEVBQUUsOEJBUE47QUFRTEMscUJBQWUsRUFBRTtBQVJaLEtBRFQ7QUFXQSxXQUFPLEVBQUU7QUFBQSxhQUFNWCxlQUFlLENBQUNDLFFBQUQsQ0FBckI7QUFBQSxLQVhUO0FBQUEsNEJBYUU7QUFBSyxXQUFLLEVBQUU7QUFBQ1csYUFBSyxFQUFFLE9BQVI7QUFBaUJOLFdBQUcsRUFBRSxDQUFDLEVBQXZCO0FBQTJCRixnQkFBUSxFQUFFO0FBQXJDLE9BQVo7QUFBQSxnQkFBK0RILFFBQVEsQ0FBQ1k7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLGVBY0U7QUFBSyxXQUFLLEVBQUU7QUFBQ1QsZ0JBQVEsRUFBRSxVQUFYO0FBQXVCVSxpQkFBUyxFQUFFLFlBQWxDO0FBQWdEUCxhQUFLLEVBQUU7QUFBdkQsT0FBWjtBQUFBLGdCQUNHUixPQUFPLGdCQUFHLHFFQUFDLEtBQUQsa0NBQVdFLFFBQVg7QUFBcUIsZUFBTyxFQUFFLEtBQTlCO0FBQXFDLHVCQUFlLEVBQUVEO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUErRTtBQUR6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0F0QkQ7O0tBQU1QLEk7O0FBeUJOLElBQU1zQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxRQUFrRDtBQUFBLE1BQS9DQyxLQUErQyxTQUEvQ0EsS0FBK0M7QUFBQSxNQUF4Q2pCLE9BQXdDLFNBQXhDQSxPQUF3QztBQUFBLE1BQS9CQyxlQUErQixTQUEvQkEsZUFBK0I7QUFBQSxNQUFYaUIsSUFBVzs7QUFDOUQsTUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixXQUFPRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsSUFBZixDQUFQO0FBQ0Q7O0FBQ0QsU0FBT0QsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLHdCQUFJLHFFQUFDLElBQUQsa0NBQWlDQSxJQUFqQztBQUF1QyxhQUFPLEVBQUV0QixPQUFoRDtBQUF5RCxxQkFBZSxFQUFFQztBQUExRSxRQUFXcUIsSUFBSSxDQUFDM0IsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFKO0FBQUEsR0FBZCxDQUFQO0FBQ0QsQ0FMRDs7TUFBTXFCLEs7O0FBUU4sSUFBTU8sSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaOztBQUZpQixrQkFHdUJJLHNEQUFRLENBQUN6Qix3REFBSyxDQUFDQyxTQUFOLENBQWdCRCx3REFBSyxDQUFDMEIsSUFBdEIsQ0FBRCxDQUgvQjtBQUFBLE1BR1ZDLFlBSFU7QUFBQSxNQUdJN0IsZUFISjs7QUFJakIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFTTCxxRUFBQyxLQUFELGtDQUFXNkIsWUFBWDtBQUF5QixhQUFPLEVBQUUsSUFBbEM7QUFBd0MscUJBQWUsRUFBRTdCO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSztBQUFBLGtCQUFQO0FBV0QsQ0FmRDs7R0FBTXNCLEk7VUFDV0UscUQ7OztNQURYRixJO0FBaUJTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL211c2UvW1suLi5pZF1dLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYm9hcmQgZnJvbSAnLi4vLi4vcHVibGljL2JvYXJkL2NvbnRlbnRzLmpzb24nXG5cblxuY29uc3QgQ2FyZCA9ICh7IGRvY3VtZW50X2lkLCBwb3NpdGlvbl94LCBwb3NpdGlvbl95LCBzaXplX2hlaWdodCwgc2l6ZV93aWR0aCwgcmVjdXJzZSwgc2V0Q3VycmVudEJvYXJkIH0pID0+IHtcbiAgY29uc3QgY2FyZEluZm8gPSBib2FyZC5kb2N1bWVudHNbZG9jdW1lbnRfaWRdXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgbGVmdDogcG9zaXRpb25feCwgXG4gICAgICAgIHRvcDogcG9zaXRpb25feSxcbiAgICAgICAgd2lkdGg6IHNpemVfd2lkdGgsIFxuICAgICAgICBoZWlnaHQ6IHNpemVfaGVpZ2h0LFxuICAgICAgICBib3JkZXJSYWRpdXM6IDksXG4gICAgICAgIGJveFNoYWRvdzogXCIwcHggMHB4IDIwcHggcmdiYSgwLDAsMCwwLjIpXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjBFRUU4XCIsXG4gICAgICB9fVxuICAgIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRCb2FyZChjYXJkSW5mbyl9XG4gICAgPlxuICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCIsIHRvcDogLTIwLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+e2NhcmRJbmZvLmxhYmVsfTwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRyYW5zZm9ybTogXCJzY2FsZSgwLjEpXCIsIHdpZHRoOiAwfX0+XG4gICAgICAgIHtyZWN1cnNlID8gPEJvYXJkIHsuLi5jYXJkSW5mb30gcmVjdXJzZT17ZmFsc2V9IHNldEN1cnJlbnRCb2FyZD17c2V0Q3VycmVudEJvYXJkfSAvPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSBcblxuXG5jb25zdCBCb2FyZCA9ICh7IGNhcmRzLCByZWN1cnNlLCBzZXRDdXJyZW50Qm9hcmQsIC4uLnJlc3QgfSkgPT4ge1xuICBpZiAoIWNhcmRzKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3QpXG4gIH1cbiAgcmV0dXJuIGNhcmRzLm1hcChjYXJkID0+IDxDYXJkIGtleT17Y2FyZC5kb2N1bWVudF9pZH0gey4uLmNhcmR9IHJlY3Vyc2U9e3JlY3Vyc2V9IHNldEN1cnJlbnRCb2FyZD17c2V0Q3VycmVudEJvYXJkfSAvPilcbn1cblxuXG5jb25zdCBNdXNlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2cocm91dGVyKVxuICBjb25zdCBbY3VycmVudEJvYXJkLCBzZXRDdXJyZW50Qm9hcmRdID0gdXNlU3RhdGUoYm9hcmQuZG9jdW1lbnRzW2JvYXJkLnJvb3RdKVxuICByZXR1cm4gPD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0U5RTE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuXG4gICAgPEJvYXJkIHsuLi5jdXJyZW50Qm9hcmR9IHJlY3Vyc2U9e3RydWV9IHNldEN1cnJlbnRCb2FyZD17c2V0Q3VycmVudEJvYXJkfSAvPlxuICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/muse/[[...id]].js\n");

/***/ }),

/***/ "next":
false

})