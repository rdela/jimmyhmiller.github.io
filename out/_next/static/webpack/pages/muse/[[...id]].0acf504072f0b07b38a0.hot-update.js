webpackHotUpdate_N_E("pages/muse/[[...id]]",{

/***/ "./pages/muse/[[...id]].js":
/*!*********************************!*\
  !*** ./pages/muse/[[...id]].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/board/contents.json */ \"./public/board/contents.json\");\nvar _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/board/contents.json */ \"./public/board/contents.json\", 1);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/jimmyhmiller/Documents/Code/jimmyhmiller.github.io/pages/muse/[[...id]].js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n // Need to not set 100% if top level\n\nvar Image = function Image(_ref) {\n  var original_file = _ref.original_file;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    style: {\n      position: \"absolute\",\n      width: \"100%\",\n      height: \"100%\"\n    },\n    src: \"/board/files/\".concat(original_file, \".jpeg\")\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = Image;\n\nvar Ink = function Ink(_ref2) {\n  var ink_svg = _ref2.ink_svg;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    style: {\n      position: \"absolute\"\n    },\n    src: \"/board/files/\".concat(ink_svg)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 10\n  }, _this);\n};\n\n_c2 = Ink;\n\nvar Pdf = function Pdf(_ref3) {\n  var original_file = _ref3.original_file;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    style: {\n      position: \"absolute\",\n      width: \"100%\",\n      height: \"100%\"\n    },\n    src: \"/board/files/\".concat(original_file, \".jpeg\")\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 10\n  }, _this);\n};\n\n_c3 = Pdf;\n\nvar Text = function Text(_ref4) {\n  _s();\n\n  var original_file = _ref4.original_file;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      fileContent = _useState[0],\n      setFileContent = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    fetch(\"/board/files/\".concat(original_file)).then(function (resp) {\n      return resp.text();\n    }).then(function (text) {\n      return setFileContent(text);\n    });\n  }, [original_file]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      padding: \"10px 0 0 10px\"\n    },\n    children: fileContent\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Text, \"a9jURcFZnM2ahW0foU1KCxDEHGQ=\");\n\n_c4 = Text;\n\nvar Card = function Card(_ref5) {\n  _s2();\n\n  var type = _ref5.type,\n      document_id = _ref5.document_id,\n      position_x = _ref5.position_x,\n      position_y = _ref5.position_y,\n      size_height = _ref5.size_height,\n      size_width = _ref5.size_width,\n      recurse = _ref5.recurse,\n      z = _ref5.z,\n      rest = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref5, [\"type\", \"document_id\", \"position_x\", \"position_y\", \"size_height\", \"size_width\", \"recurse\", \"z\"]);\n\n  var cardInfo = _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__.documents[document_id];\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: \"absolute\",\n      left: position_x,\n      top: position_y,\n      width: size_width,\n      height: size_height,\n      zIndex: z\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        color: \"black\",\n        top: -20,\n        position: \"absolute\",\n        width: size_width - 20,\n        textOverflow: \"ellipsis\",\n        overflow: \"hidden\",\n        whiteSpace: \"nowrap\"\n      },\n      children: cardInfo.label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: size_width,\n        height: size_height,\n        borderRadius: 9,\n        boxShadow: \"0px 0px 20px rgba(0,0,0,0.2)\",\n        backgroundColor: \"#F0EEE8\",\n        overflow: \"hidden\"\n      },\n      onClick: function onClick() {\n        // hacky way of only transitioning at top level\n        if (recurse === true) {\n          console.log(\"transitioning  \".concat(document_id, \"}\"));\n          router.push(\"/muse/\".concat(document_id));\n        }\n      },\n      children: cardInfo.type !== \"board\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CardForType, _objectSpread({}, cardInfo), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          position: \"relative\",\n          transform: \"scale(0.1)\",\n          width: 0\n        },\n        children: recurse ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Board, _objectSpread(_objectSpread({}, cardInfo), {}, {\n          recurse: false\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 24\n        }, _this) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Card, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c5 = Card;\n\nvar inkToArray = function inkToArray(ink_models) {\n  return Object.entries(ink_models || {}).filter(function (_ref6) {\n    var _ref7 = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref6, 2),\n        k = _ref7[0],\n        v = _ref7[1];\n\n    return v.ink_svg;\n  }).map(function (_ref8) {\n    var _ref9 = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref8, 2),\n        k = _ref9[0],\n        v = _ref9[1];\n\n    return v;\n  });\n};\n\nvar Board = function Board(_ref10) {\n  var cards = _ref10.cards,\n      ink_models = _ref10.ink_models,\n      recurse = _ref10.recurse,\n      type = _ref10.type,\n      rest = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref10, [\"cards\", \"ink_models\", \"recurse\", \"type\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [(cards || []).map(function (card) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, _objectSpread(_objectSpread({}, card), {}, {\n        recurse: recurse\n      }), card.document_id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 32\n      }, _this);\n    }), inkToArray(ink_models).map(function (ink) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Ink, _objectSpread({}, ink), ink.ink_svg, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 40\n      }, _this);\n    })]\n  }, void 0, true);\n};\n\n_c6 = Board;\n\nvar CardForType = function CardForType(_ref11) {\n  var type = _ref11.type,\n      cardInfo = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref11, [\"type\"]);\n\n  if (type === \"image\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, _objectSpread({}, cardInfo), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (type === \"text\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Text, _objectSpread({}, cardInfo), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (type === \"board\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Board, _objectSpread({}, cardInfo), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return type;\n};\n\n_c7 = CardForType;\n\nvar Muse = function Muse() {\n  _s3();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var boardId = router.query.id && router.query.id[0];\n  var currentBoard = _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__.documents[boardId || _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__.root];\n  console.log(currentBoard);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      id: \"1481484493\",\n      children: \"body{background-color:#ECE9E1;font-family:sans-serif;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW1teWhtaWxsZXIvRG9jdW1lbnRzL0NvZGUvamltbXlobWlsbGVyLmdpdGh1Yi5pby9wYWdlcy9tdXNlL1tbLi4uaWRdXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR3VCLEFBR2tDLHlCQUNGLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvamltbXlobWlsbGVyL0RvY3VtZW50cy9Db2RlL2ppbW15aG1pbGxlci5naXRodWIuaW8vcGFnZXMvbXVzZS9bWy4uLmlkXV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGJvYXJkIGZyb20gJy4uLy4uL3B1YmxpYy9ib2FyZC9jb250ZW50cy5qc29uJ1xuXG5cbi8vIE5lZWQgdG8gbm90IHNldCAxMDAlIGlmIHRvcCBsZXZlbFxuY29uc3QgSW1hZ2UgPSAoeyBvcmlnaW5hbF9maWxlIH0pID0+IHtcbiAgcmV0dXJuIDxpbWcgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fSBzcmM9e2AvYm9hcmQvZmlsZXMvJHtvcmlnaW5hbF9maWxlfS5qcGVnYH0gLz5cbn0gXG5cbmNvbnN0IEluayA9ICh7IGlua19zdmcgfSkgPT4ge1xuICByZXR1cm4gPGltZyBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCJ9fSBzcmM9e2AvYm9hcmQvZmlsZXMvJHtpbmtfc3ZnfWB9IC8+XG59IFxuXG5jb25zdCBQZGYgPSAoeyBvcmlnaW5hbF9maWxlIH0pID0+IHtcbiAgcmV0dXJuIDxpbWcgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fSBzcmM9e2AvYm9hcmQvZmlsZXMvJHtvcmlnaW5hbF9maWxlfS5qcGVnYH0gLz5cbn0gXG5cbmNvbnN0IFRleHQgPSAoeyBvcmlnaW5hbF9maWxlIH0pID0+IHtcbiAgY29uc3QgW2ZpbGVDb250ZW50LCBzZXRGaWxlQ29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGZldGNoKGAvYm9hcmQvZmlsZXMvJHtvcmlnaW5hbF9maWxlfWApLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgIHJldHVybiByZXNwLnRleHQoKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHRleHQgPT4gc2V0RmlsZUNvbnRlbnQodGV4dCkpXG4gICAgfSxcbiAgICBbb3JpZ2luYWxfZmlsZV1cbiAgKVxuICByZXR1cm4gPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwIDAgMTBweFwifX0+e2ZpbGVDb250ZW50fTwvZGl2PlxufVxuXG5jb25zdCBDYXJkID0gKHsgdHlwZSwgZG9jdW1lbnRfaWQsIHBvc2l0aW9uX3gsIHBvc2l0aW9uX3ksIHNpemVfaGVpZ2h0LCBzaXplX3dpZHRoLCByZWN1cnNlLCB6LCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgY2FyZEluZm8gPSBib2FyZC5kb2N1bWVudHNbZG9jdW1lbnRfaWRdXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBsZWZ0OiBwb3NpdGlvbl94LCBcbiAgICAgIHRvcDogcG9zaXRpb25feSxcbiAgICAgIHdpZHRoOiBzaXplX3dpZHRoLCBcbiAgICAgIGhlaWdodDogc2l6ZV9oZWlnaHQsXG4gICAgICB6SW5kZXg6IHosXG4gICAgICB9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCB0b3A6IC0yMCwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IHNpemVfd2lkdGggLSAyMCwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIG92ZXJmbG93OiBcImhpZGRlblwiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+e2NhcmRJbmZvLmxhYmVsfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBzaXplX3dpZHRoLCBcbiAgICAgICAgICBoZWlnaHQ6IHNpemVfaGVpZ2h0LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogOSxcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAyMHB4IHJnYmEoMCwwLDAsMC4yKVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjBFRUU4XCIsXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICAgICAgfX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgLy8gaGFja3kgd2F5IG9mIG9ubHkgdHJhbnNpdGlvbmluZyBhdCB0b3AgbGV2ZWxcbiAgICAgICAgaWYgKHJlY3Vyc2UgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdHJhbnNpdGlvbmluZyAgJHtkb2N1bWVudF9pZH19YClcbiAgICAgICAgICByb3V0ZXIucHVzaChgL211c2UvJHtkb2N1bWVudF9pZH1gKVxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2FyZEluZm8udHlwZSAhPT0gXCJib2FyZFwiIFxuICAgICAgICAgID8gPENhcmRGb3JUeXBlIHsuLi5jYXJkSW5mb30gLz5cbiAgICAgICAgICA6XG4gICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRyYW5zZm9ybTogXCJzY2FsZSgwLjEpXCIsIHdpZHRoOiAwfX0+XG4gICAgICAgICAgICB7cmVjdXJzZSA/IDxCb2FyZCB7Li4uY2FyZEluZm99IHJlY3Vyc2U9e2ZhbHNlfSAvPiA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IGlua1RvQXJyYXkgPSAoaW5rX21vZGVscykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoaW5rX21vZGVscyB8fCB7fSlcbiAgICAuZmlsdGVyKChbaywgdl0pID0+IHYuaW5rX3N2ZylcbiAgICAubWFwKChbaywgdl0pID0+IHYpXG59XG5cbmNvbnN0IEJvYXJkID0gKHsgY2FyZHMsIGlua19tb2RlbHMsIHJlY3Vyc2UsIHR5cGUsIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gPD5cbiAgICB7KGNhcmRzIHx8IFtdKS5tYXAoY2FyZCA9PiA8Q2FyZCBrZXk9e2NhcmQuZG9jdW1lbnRfaWR9IHsuLi5jYXJkfSByZWN1cnNlPXtyZWN1cnNlfSAvPil9XG4gICAge2lua1RvQXJyYXkoaW5rX21vZGVscykubWFwKGluayA9PiA8SW5rIGtleT17aW5rLmlua19zdmd9IHsuLi5pbmt9IC8+KX1cbiAgPC8+XG59XG5cblxuY29uc3QgQ2FyZEZvclR5cGUgPSAoeyB0eXBlLCAuLi5jYXJkSW5mbyB9KSA9PiB7XG4gIGlmICh0eXBlID09PSBcImltYWdlXCIpIHtcbiAgICByZXR1cm4gPEltYWdlIHsuLi5jYXJkSW5mb30gLz5cbiAgfVxuICBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICByZXR1cm4gPFRleHQgey4uLmNhcmRJbmZvfSAvPlxuICB9XG4gIGlmICh0eXBlID09PSBcImJvYXJkXCIpIHtcbiAgICByZXR1cm4gPEJvYXJkIHsuLi5jYXJkSW5mb30gLz5cbiAgfVxuICByZXR1cm4gdHlwZVxufVxuXG5cbmNvbnN0IE11c2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBib2FyZElkID0gcm91dGVyLnF1ZXJ5LmlkICYmIHJvdXRlci5xdWVyeS5pZFswXTtcbiAgY29uc3QgY3VycmVudEJvYXJkID0gYm9hcmQuZG9jdW1lbnRzW2JvYXJkSWQgfHwgYm9hcmQucm9vdF07XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRCb2FyZClcbiAgcmV0dXJuIDw+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFOUUxO1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxDYXJkRm9yVHlwZSB7Li4uY3VycmVudEJvYXJkfSByZWN1cnNlPXt0cnVlfSAgLz5cbiAgPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11c2UiXX0= */\\n/*@ sourceURL=/Users/jimmyhmiller/Documents/Code/jimmyhmiller.github.io/pages/muse/[[...id]].js */\"\n    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CardForType, _objectSpread(_objectSpread({}, currentBoard), {}, {\n      recurse: true\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_s3(Muse, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c8 = Muse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Muse);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"Image\");\n$RefreshReg$(_c2, \"Ink\");\n$RefreshReg$(_c3, \"Pdf\");\n$RefreshReg$(_c4, \"Text\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Board\");\n$RefreshReg$(_c7, \"CardForType\");\n$RefreshReg$(_c8, \"Muse\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXVzZS9bWy4uLmlkXV0uanM/ZGQ5YyJdLCJuYW1lcyI6WyJJbWFnZSIsIm9yaWdpbmFsX2ZpbGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiSW5rIiwiaW5rX3N2ZyIsIlBkZiIsIlRleHQiLCJ1c2VTdGF0ZSIsImZpbGVDb250ZW50Iiwic2V0RmlsZUNvbnRlbnQiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwidGV4dCIsInBhZGRpbmciLCJDYXJkIiwidHlwZSIsImRvY3VtZW50X2lkIiwicG9zaXRpb25feCIsInBvc2l0aW9uX3kiLCJzaXplX2hlaWdodCIsInNpemVfd2lkdGgiLCJyZWN1cnNlIiwieiIsInJlc3QiLCJjYXJkSW5mbyIsImJvYXJkIiwiZG9jdW1lbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwibGVmdCIsInRvcCIsInpJbmRleCIsImNvbG9yIiwidGV4dE92ZXJmbG93Iiwib3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwibGFiZWwiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInRyYW5zZm9ybSIsImlua1RvQXJyYXkiLCJpbmtfbW9kZWxzIiwiT2JqZWN0IiwiZW50cmllcyIsImZpbHRlciIsImsiLCJ2IiwibWFwIiwiQm9hcmQiLCJjYXJkcyIsImNhcmQiLCJpbmsiLCJDYXJkRm9yVHlwZSIsIk11c2UiLCJib2FyZElkIiwicXVlcnkiLCJpZCIsImN1cnJlbnRCb2FyZCIsInJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUlBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXVCO0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtBQUNuQyxzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFDQyxjQUFRLEVB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O0FBQzdDLE1BQUlULElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCLHdCQUFPLHFFQUFDLEtBQUQsb0JBQVdTLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0QsTUFBSVQsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkIsd0JBQU8scUVBQUMsSUFBRCxvQkFBVVMsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFDRCxNQUFJVCxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQix3QkFBTyxxRUFBQyxLQUFELG9CQUFXUyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUNELFNBQU9ULElBQVA7QUFDRCxDQVhEOztNQUFNeUMsVzs7QUFjTixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU05QixNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTThCLE9BQU8sR0FBRy9CLE1BQU0sQ0FBQ2dDLEtBQVAsQ0FBYUMsRUFBYixJQUFtQmpDLE1BQU0sQ0FBQ2dDLEtBQVAsQ0FBYUMsRUFBYixDQUFnQixDQUFoQixDQUFuQztBQUNBLE1BQU1DLFlBQVksR0FBR3BDLHdEQUFLLENBQUNDLFNBQU4sQ0FBZ0JnQyxPQUFPLElBQUlqQyx3REFBSyxDQUFDcUMsSUFBakMsQ0FBckI7QUFDQXRCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsWUFBWjtBQUNBLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBU0wscUVBQUMsV0FBRCxrQ0FBaUJBLFlBQWpCO0FBQStCLGFBQU8sRUFBRTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEs7QUFBQSxrQkFBUDtBQVdELENBaEJEOztJQUFNSixJO1VBQ1c3QixxRDs7O01BRFg2QixJO0FBa0JTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL211c2UvW1suLi5pZF1dLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBib2FyZCBmcm9tICcuLi8uLi9wdWJsaWMvYm9hcmQvY29udGVudHMuanNvbidcblxuXG4vLyBOZWVkIHRvIG5vdCBzZXQgMTAwJSBpZiB0b3AgbGV2ZWxcbmNvbnN0IEltYWdlID0gKHsgb3JpZ2luYWxfZmlsZSB9KSA9PiB7XG4gIHJldHVybiA8aW1nIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0gc3JjPXtgL2JvYXJkL2ZpbGVzLyR7b3JpZ2luYWxfZmlsZX0uanBlZ2B9IC8+XG59IFxuXG5jb25zdCBJbmsgPSAoeyBpbmtfc3ZnIH0pID0+IHtcbiAgcmV0dXJuIDxpbWcgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0gc3JjPXtgL2JvYXJkL2ZpbGVzLyR7aW5rX3N2Z31gfSAvPlxufSBcblxuY29uc3QgUGRmID0gKHsgb3JpZ2luYWxfZmlsZSB9KSA9PiB7XG4gIHJldHVybiA8aW1nIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0gc3JjPXtgL2JvYXJkL2ZpbGVzLyR7b3JpZ2luYWxfZmlsZX0uanBlZ2B9IC8+XG59IFxuXG5jb25zdCBUZXh0ID0gKHsgb3JpZ2luYWxfZmlsZSB9KSA9PiB7XG4gIGNvbnN0IFtmaWxlQ29udGVudCwgc2V0RmlsZUNvbnRlbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmZXRjaChgL2JvYXJkL2ZpbGVzLyR7b3JpZ2luYWxfZmlsZX1gKS50aGVuKHJlc3AgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcC50ZXh0KClcbiAgICAgIH0pXG4gICAgICAudGhlbih0ZXh0ID0+IHNldEZpbGVDb250ZW50KHRleHQpKVxuICAgIH0sXG4gICAgW29yaWdpbmFsX2ZpbGVdXG4gIClcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHggMCAwIDEwcHhcIn19PntmaWxlQ29udGVudH08L2Rpdj5cbn1cblxuY29uc3QgQ2FyZCA9ICh7IHR5cGUsIGRvY3VtZW50X2lkLCBwb3NpdGlvbl94LCBwb3NpdGlvbl95LCBzaXplX2hlaWdodCwgc2l6ZV93aWR0aCwgcmVjdXJzZSwgeiwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGNhcmRJbmZvID0gYm9hcmQuZG9jdW1lbnRzW2RvY3VtZW50X2lkXVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgbGVmdDogcG9zaXRpb25feCwgXG4gICAgICB0b3A6IHBvc2l0aW9uX3ksXG4gICAgICB3aWR0aDogc2l6ZV93aWR0aCwgXG4gICAgICBoZWlnaHQ6IHNpemVfaGVpZ2h0LFxuICAgICAgekluZGV4OiB6LFxuICAgICAgfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6IFwiYmxhY2tcIiwgdG9wOiAtMjAsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHdpZHRoOiBzaXplX3dpZHRoIC0gMjAsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIn19PntjYXJkSW5mby5sYWJlbH08L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogc2l6ZV93aWR0aCwgXG4gICAgICAgICAgaGVpZ2h0OiBzaXplX2hlaWdodCxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDksXG4gICAgICAgICAgYm94U2hhZG93OiBcIjBweCAwcHggMjBweCByZ2JhKDAsMCwwLDAuMilcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0YwRUVFOFwiLFxuICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgICAgIH19XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIC8vIGhhY2t5IHdheSBvZiBvbmx5IHRyYW5zaXRpb25pbmcgYXQgdG9wIGxldmVsXG4gICAgICAgIGlmIChyZWN1cnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYHRyYW5zaXRpb25pbmcgICR7ZG9jdW1lbnRfaWR9fWApXG4gICAgICAgICAgcm91dGVyLnB1c2goYC9tdXNlLyR7ZG9jdW1lbnRfaWR9YClcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NhcmRJbmZvLnR5cGUgIT09IFwiYm9hcmRcIiBcbiAgICAgICAgICA/IDxDYXJkRm9yVHlwZSB7Li4uY2FyZEluZm99IC8+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0cmFuc2Zvcm06IFwic2NhbGUoMC4xKVwiLCB3aWR0aDogMH19PlxuICAgICAgICAgICAge3JlY3Vyc2UgPyA8Qm9hcmQgey4uLmNhcmRJbmZvfSByZWN1cnNlPXtmYWxzZX0gLz4gOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBpbmtUb0FycmF5ID0gKGlua19tb2RlbHMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGlua19tb2RlbHMgfHwge30pXG4gICAgLmZpbHRlcigoW2ssIHZdKSA9PiB2Lmlua19zdmcpXG4gICAgLm1hcCgoW2ssIHZdKSA9PiB2KVxufVxuXG5jb25zdCBCb2FyZCA9ICh7IGNhcmRzLCBpbmtfbW9kZWxzLCByZWN1cnNlLCB0eXBlLCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIDw+XG4gICAgeyhjYXJkcyB8fCBbXSkubWFwKGNhcmQgPT4gPENhcmQga2V5PXtjYXJkLmRvY3VtZW50X2lkfSB7Li4uY2FyZH0gcmVjdXJzZT17cmVjdXJzZX0gLz4pfVxuICAgIHtpbmtUb0FycmF5KGlua19tb2RlbHMpLm1hcChpbmsgPT4gPEluayBrZXk9e2luay5pbmtfc3ZnfSB7Li4uaW5rfSAvPil9XG4gIDwvPlxufVxuXG5cbmNvbnN0IENhcmRGb3JUeXBlID0gKHsgdHlwZSwgLi4uY2FyZEluZm8gfSkgPT4ge1xuICBpZiAodHlwZSA9PT0gXCJpbWFnZVwiKSB7XG4gICAgcmV0dXJuIDxJbWFnZSB7Li4uY2FyZEluZm99IC8+XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgcmV0dXJuIDxUZXh0IHsuLi5jYXJkSW5mb30gLz5cbiAgfVxuICBpZiAodHlwZSA9PT0gXCJib2FyZFwiKSB7XG4gICAgcmV0dXJuIDxCb2FyZCB7Li4uY2FyZEluZm99IC8+XG4gIH1cbiAgcmV0dXJuIHR5cGVcbn1cblxuXG5jb25zdCBNdXNlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYm9hcmRJZCA9IHJvdXRlci5xdWVyeS5pZCAmJiByb3V0ZXIucXVlcnkuaWRbMF07XG4gIGNvbnN0IGN1cnJlbnRCb2FyZCA9IGJvYXJkLmRvY3VtZW50c1tib2FyZElkIHx8IGJvYXJkLnJvb3RdO1xuICBjb25zb2xlLmxvZyhjdXJyZW50Qm9hcmQpXG4gIHJldHVybiA8PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRTlFMTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8Q2FyZEZvclR5cGUgey4uLmN1cnJlbnRCb2FyZH0gcmVjdXJzZT17dHJ1ZX0gIC8+XG4gIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNdXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/muse/[[...id]].js\n");

/***/ })

})