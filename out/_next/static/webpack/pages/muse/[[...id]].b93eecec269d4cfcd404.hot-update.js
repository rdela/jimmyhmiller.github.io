webpackHotUpdate_N_E("pages/muse/[[...id]]",{

/***/ "./pages/muse/[[...id]].js":
/*!*********************************!*\
  !*** ./pages/muse/[[...id]].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/board/contents.json */ \"./public/board/contents.json\");\nvar _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/board/contents.json */ \"./public/board/contents.json\", 1);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/jimmyhmiller/Documents/Code/jimmyhmiller.github.io/pages/muse/[[...id]].js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Image = function Image(_ref) {\n  var original_file = _ref.original_file;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    style: {\n      position: \"absolute\",\n      width: \"100%\",\n      height: \"100%\"\n    },\n    src: \"/board/files/\".concat(original_file)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = Image;\n\nvar Ink = function Ink(_ref2) {\n  var ink_svg = _ref2.ink_svg;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    style: {\n      position: \"absolute\"\n    },\n    src: \"/board/files/\".concat(ink_svg)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 10\n  }, _this);\n};\n\n_c2 = Ink;\n\nvar Text = function Text(_ref3) {\n  _s();\n\n  var original_file = _ref3.original_file;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      fileContent = _useState[0],\n      setFileContent = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    fetch(\"/board/files/\".concat(original_file)).then(function (resp) {\n      return resp.text();\n    }).then(function (text) {\n      return setFileContent(text);\n    });\n  }, [original_file]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      padding: \"10px 0 0 10px\"\n    },\n    children: fileContent\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(Text, \"a9jURcFZnM2ahW0foU1KCxDEHGQ=\");\n\n_c3 = Text;\n\nvar Card = function Card(_ref4) {\n  _s2();\n\n  var type = _ref4.type,\n      document_id = _ref4.document_id,\n      position_x = _ref4.position_x,\n      position_y = _ref4.position_y,\n      size_height = _ref4.size_height,\n      size_width = _ref4.size_width,\n      recurse = _ref4.recurse,\n      z = _ref4.z,\n      rest = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref4, [\"type\", \"document_id\", \"position_x\", \"position_y\", \"size_height\", \"size_width\", \"recurse\", \"z\"]);\n\n  var cardInfo = _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__.documents[document_id];\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: \"absolute\",\n      left: position_x,\n      top: position_y,\n      width: size_width,\n      height: size_height,\n      zIndex: z\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        color: \"black\",\n        top: -20,\n        position: \"absolute\",\n        width: size_width - 20,\n        textOverflow: \"ellipsis\",\n        overflow: \"hidden\",\n        whiteSpace: \"nowrap\"\n      },\n      children: cardInfo.label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: size_width,\n        height: size_height,\n        borderRadius: 9,\n        boxShadow: \"0px 0px 20px rgba(0,0,0,0.2)\",\n        backgroundColor: \"#F0EEE8\",\n        overflow: \"hidden\"\n      },\n      onClick: function onClick() {\n        console.log(\"transitioning  \".concat(document_id, \"}\"));\n        router.push(\"/muse/\".concat(document_id));\n      },\n      children: cardInfo.type !== \"board\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CardForType, _objectSpread({}, cardInfo), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          position: \"relative\",\n          transform: \"scale(0.1)\",\n          width: 0\n        },\n        children: recurse ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Board, _objectSpread(_objectSpread({}, cardInfo), {}, {\n          recurse: false\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 24\n        }, _this) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Card, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c4 = Card;\n\nvar inkToArray = function inkToArray(ink_models) {\n  return Object.entries(ink_models || {}).filter(function (_ref5) {\n    var _ref6 = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref5, 2),\n        k = _ref6[0],\n        v = _ref6[1];\n\n    return v.ink_svg;\n  }).map(function (_ref7) {\n    var _ref8 = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref7, 2),\n        k = _ref8[0],\n        v = _ref8[1];\n\n    return v;\n  });\n};\n\nvar Board = function Board(_ref9) {\n  var cards = _ref9.cards,\n      ink_models = _ref9.ink_models,\n      recurse = _ref9.recurse,\n      type = _ref9.type,\n      rest = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref9, [\"cards\", \"ink_models\", \"recurse\", \"type\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [(cards || []).map(function (card) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, _objectSpread(_objectSpread({}, card), {}, {\n        recurse: recurse\n      }), card.document_id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 32\n      }, _this);\n    }), inkToArray(ink_models).map(function (ink) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Ink, _objectSpread({}, ink), ink.ink_svg, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 40\n      }, _this);\n    })]\n  }, void 0, true);\n};\n\n_c5 = Board;\n\nvar CardForType = function CardForType(_ref10) {\n  var type = _ref10.type,\n      cardInfo = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref10, [\"type\"]);\n\n  if (type === \"image\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, _objectSpread({}, cardInfo), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (type === \"text\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Text, _objectSpread({}, cardInfo), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (type === \"board\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Board, _objectSpread({}, cardInfo), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return type;\n};\n\n_c6 = CardForType;\n\nvar Muse = function Muse() {\n  _s3();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var boardId = router.query.id && router.query.id[0];\n  var currentBoard = _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__.documents[boardId || _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__.root];\n  console.log(currentBoard);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      id: \"1481484493\",\n      children: \"body{background-color:#ECE9E1;font-family:sans-serif;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW1teWhtaWxsZXIvRG9jdW1lbnRzL0NvZGUvamltbXlobWlsbGVyLmdpdGh1Yi5pby9wYWdlcy9tdXNlL1tbLi4uaWRdXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR3VCLEFBR2tDLHlCQUNGLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvamltbXlobWlsbGVyL0RvY3VtZW50cy9Db2RlL2ppbW15aG1pbGxlci5naXRodWIuaW8vcGFnZXMvbXVzZS9bWy4uLmlkXV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGJvYXJkIGZyb20gJy4uLy4uL3B1YmxpYy9ib2FyZC9jb250ZW50cy5qc29uJ1xuXG5cbmNvbnN0IEltYWdlID0gKHsgb3JpZ2luYWxfZmlsZSB9KSA9PiB7XG4gIHJldHVybiA8aW1nIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0gc3JjPXtgL2JvYXJkL2ZpbGVzLyR7b3JpZ2luYWxfZmlsZX1gfSAvPlxufSBcblxuY29uc3QgSW5rID0gKHsgaW5rX3N2ZyB9KSA9PiB7XG4gIHJldHVybiA8aW1nIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIn19IHNyYz17YC9ib2FyZC9maWxlcy8ke2lua19zdmd9YH0gLz5cbn0gXG5cbmNvbnN0IFRleHQgPSAoeyBvcmlnaW5hbF9maWxlIH0pID0+IHtcbiAgY29uc3QgW2ZpbGVDb250ZW50LCBzZXRGaWxlQ29udGVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGZldGNoKGAvYm9hcmQvZmlsZXMvJHtvcmlnaW5hbF9maWxlfWApLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgIHJldHVybiByZXNwLnRleHQoKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHRleHQgPT4gc2V0RmlsZUNvbnRlbnQodGV4dCkpXG4gICAgfSxcbiAgICBbb3JpZ2luYWxfZmlsZV1cbiAgKVxuICByZXR1cm4gPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwIDAgMTBweFwifX0+e2ZpbGVDb250ZW50fTwvZGl2PlxufVxuXG5jb25zdCBDYXJkID0gKHsgdHlwZSwgZG9jdW1lbnRfaWQsIHBvc2l0aW9uX3gsIHBvc2l0aW9uX3ksIHNpemVfaGVpZ2h0LCBzaXplX3dpZHRoLCByZWN1cnNlLCB6LCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgY2FyZEluZm8gPSBib2FyZC5kb2N1bWVudHNbZG9jdW1lbnRfaWRdXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBsZWZ0OiBwb3NpdGlvbl94LCBcbiAgICAgIHRvcDogcG9zaXRpb25feSxcbiAgICAgIHdpZHRoOiBzaXplX3dpZHRoLCBcbiAgICAgIGhlaWdodDogc2l6ZV9oZWlnaHQsXG4gICAgICB6SW5kZXg6IHosXG4gICAgICB9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCB0b3A6IC0yMCwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IHNpemVfd2lkdGggLSAyMCwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIG92ZXJmbG93OiBcImhpZGRlblwiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+e2NhcmRJbmZvLmxhYmVsfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBzaXplX3dpZHRoLCBcbiAgICAgICAgICBoZWlnaHQ6IHNpemVfaGVpZ2h0LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogOSxcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAyMHB4IHJnYmEoMCwwLDAsMC4yKVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjBFRUU4XCIsXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICAgICAgfX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYHRyYW5zaXRpb25pbmcgICR7ZG9jdW1lbnRfaWR9fWApXG4gICAgICAgIHJvdXRlci5wdXNoKGAvbXVzZS8ke2RvY3VtZW50X2lkfWApXG4gICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2FyZEluZm8udHlwZSAhPT0gXCJib2FyZFwiIFxuICAgICAgICAgID8gPENhcmRGb3JUeXBlIHsuLi5jYXJkSW5mb30gLz5cbiAgICAgICAgICA6XG4gICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRyYW5zZm9ybTogXCJzY2FsZSgwLjEpXCIsIHdpZHRoOiAwfX0+XG4gICAgICAgICAgICB7cmVjdXJzZSA/IDxCb2FyZCB7Li4uY2FyZEluZm99IHJlY3Vyc2U9e2ZhbHNlfSAvPiA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IGlua1RvQXJyYXkgPSAoaW5rX21vZGVscykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoaW5rX21vZGVscyB8fCB7fSlcbiAgICAuZmlsdGVyKChbaywgdl0pID0+IHYuaW5rX3N2ZylcbiAgICAubWFwKChbaywgdl0pID0+IHYpXG59XG5cbmNvbnN0IEJvYXJkID0gKHsgY2FyZHMsIGlua19tb2RlbHMsIHJlY3Vyc2UsIHR5cGUsIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gPD5cbiAgICB7KGNhcmRzIHx8IFtdKS5tYXAoY2FyZCA9PiA8Q2FyZCBrZXk9e2NhcmQuZG9jdW1lbnRfaWR9IHsuLi5jYXJkfSByZWN1cnNlPXtyZWN1cnNlfSAvPil9XG4gICAge2lua1RvQXJyYXkoaW5rX21vZGVscykubWFwKGluayA9PiA8SW5rIGtleT17aW5rLmlua19zdmd9IHsuLi5pbmt9IC8+KX1cbiAgPC8+XG59XG5cblxuY29uc3QgQ2FyZEZvclR5cGUgPSAoeyB0eXBlLCAuLi5jYXJkSW5mbyB9KSA9PiB7XG4gIGlmICh0eXBlID09PSBcImltYWdlXCIpIHtcbiAgICByZXR1cm4gPEltYWdlIHsuLi5jYXJkSW5mb30gLz5cbiAgfVxuICBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICByZXR1cm4gPFRleHQgey4uLmNhcmRJbmZvfSAvPlxuICB9XG4gIGlmICh0eXBlID09PSBcImJvYXJkXCIpIHtcbiAgICByZXR1cm4gPEJvYXJkIHsuLi5jYXJkSW5mb30gLz5cbiAgfVxuICByZXR1cm4gdHlwZVxufVxuXG5cbmNvbnN0IE11c2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBib2FyZElkID0gcm91dGVyLnF1ZXJ5LmlkICYmIHJvdXRlci5xdWVyeS5pZFswXTtcbiAgY29uc3QgY3VycmVudEJvYXJkID0gYm9hcmQuZG9jdW1lbnRzW2JvYXJkSWQgfHwgYm9hcmQucm9vdF07XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRCb2FyZClcbiAgcmV0dXJuIDw+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFOUUxO1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxDYXJkRm9yVHlwZSB7Li4uY3VycmVudEJvYXJkfSByZWN1cnNlPXt0cnVlfSAgLz5cbiAgPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11c2UiXX0= */\\n/*@ sourceURL=/Users/jimmyhmiller/Documents/Code/jimmyhmiller.github.io/pages/muse/[[...id]].js */\"\n    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CardForType, _objectSpread(_objectSpread({}, currentBoard), {}, {\n      recurse: true\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_s3(Muse, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c7 = Muse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Muse);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Image\");\n$RefreshReg$(_c2, \"Ink\");\n$RefreshReg$(_c3, \"Text\");\n$RefreshReg$(_c4, \"Card\");\n$RefreshReg$(_c5, \"Board\");\n$RefreshReg$(_c6, \"CardForType\");\n$RefreshReg$(_c7, \"Muse\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXVzZS9bWy4uLmlkXV0uanM/ZGQ5YyJdLCJuYW1lcyI6WyJJbWFnZSIsIm9yaWdpbmFsX2ZpbGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiSW5rIiwiaW5rX3N2ZyIsIlRleHQiLCJ1c2VTdGF0ZSIsImZpbGVDb250ZW50Iiwic2V0RmlsZUNvbnRlbnQiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwidGV4dCIsInBhZGRpbmciLCJDYXJkIiwidHlwZSIsImRvY3VtZW50X2lkIiwicG9zaXRpb25feCIsInBvc2l0aW9uX3kiLCJzaXplX2hlaWdodCIsInNpemVfd2lkdGgiLCJyZWN1cnNlIiwieiIsInJlc3QiLCJjYXJkSW5mbyIsImJvYXJkIiwiZG9jdW1lbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwibGVmdCIsInRvcCIsInpJbmRleCIsImNvbG9yIiwidGV4dE92ZXJmbG93Iiwib3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwibGFiZWwiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInRyYW5zZm9ybSIsImlua1RvQXJyYXkiLCJpbmtfbW9kZWxzIiwiT2JqZWN0IiwiZW50cmllcyIsImZpbHRlciIsImsiLCJ2IiwibWFwIiwiQm9hcmQiLCJjYXJkcyIsImNhcmQiLCJpbmsiLCJDYXJkRm9yVHlwZSIsIk11c2UiLCJib2FyZElkIiwicXVlcnkiLCJpZCIsImN1cnJlbnRCb2FyZCIsInJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXVCO0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtBQUNuQyxzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFDQyxjQUFRLEVBQUUsVUFBWDtBQUF1QkMsV0FBSyxFQUFFLE1BQTlCO0FBQXNDQyxZQUFNLEVBQUU7QUFBOUMsS0FBWjtBQUFtRSxPQUFHLHlCQUFrQkgsYUFBbEI7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRDs7S0FBTUQsSzs7QUFJTixJQUFNSyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxRQUFpQjtBQUFBLE1BQWRDLE9BQWMsU0FBZEEsT0FBYztBQUMzQixzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFDSixjQUFRLEVBQUU7QUFBWCxLQUFaO0FBQW9DLE9BQUcseUJBQWtCSSxPQUFsQjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztNQUFNRCxHOztBQUlOLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQXVCO0FBQUE7O0FBQUEsTUFBcEJOLGFBQW9CLFNBQXBCQSxhQUFvQjs7QUFBQSxrQkFDSU8sc0RBQVEsQ0FBQyxJQUFELENBRFo7QUFBQSxNQUMzQkMsV0FEMkI7QUFBQSxNQUNkQyxjQURjOztBQUVsQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFNBQUssd0JBQWlCWCxhQUFqQixFQUFMLENBQXVDWSxJQUF2QyxDQUE0QyxVQUFBQyxJQUFJLEVBQUk7QUFDbEQsYUFBT0EsSUFBSSxDQUFDQyxJQUFMLEVBQVA7QUFDRCxLQUZELEVBR0NGLElBSEQsQ0FHTSxVQUFBRSxJQUFJO0FBQUEsYUFBSUwsY0FBYyxDQUFDSyxJQUFELENBQWxCO0FBQUEsS0FIVjtBQUlELEdBTE0sRUFNUCxDQUFDZCxhQUFELENBTk8sQ0FBVDtBQVFBLHNCQUFPO0FBQUssU0FBSyxFQUFFO0FBQUNlLGFBQU8sRUFBRTtBQUFWLEtBQVo7QUFBQSxjQUF5Q1A7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FYRDs7R0FBTUYsSTs7TUFBQUEsSTs7QUFhTixJQUFNVSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxRQUFpRztBQUFBOztBQUFBLE1BQTlGQyxJQUE4RixTQUE5RkEsSUFBOEY7QUFBQSxNQUF4RkMsV0FBd0YsU0FBeEZBLFdBQXdGO0FBQUEsTUFBM0VDLFVBQTJFLFNBQTNFQSxVQUEyRTtBQUFBLE1BQS9EQyxVQUErRCxTQUEvREEsVUFBK0Q7QUFBQSxNQUFuREMsV0FBbUQsU0FBbkRBLFdBQW1EO0FBQUEsTUFBdENDLFVBQXNDLFNBQXRDQSxVQUFzQztBQUFBLE1BQTFCQyxPQUEwQixTQUExQkEsT0FBMEI7QUFBQSxNQUFqQkMsQ0FBaUIsU0FBakJBLENBQWlCO0FBQUEsTUFBWEMsSUFBVzs7QUFDNUcsTUFBTUMsUUFBUSxHQUFHQyx3REFBSyxDQUFDQyxTQUFOLENBQWdCVixXQUFoQixDQUFqQjtBQUNBLE1BQU1XLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUNWN0IsY0FBUSxFQUFFLFVBREE7QUFFVjhCLFVBQUksRUFBRVosVUFGSTtBQUdWYSxTQUFHLEVBQUVaLFVBSEs7QUFJVmxCLFdBQUssRUFBRW9CLFVBSkc7QUFLVm5CLFlBQU0sRUFBRWtCLFdBTEU7QUFNVlksWUFBTSxFQUFFVDtBQU5FLEtBQVo7QUFBQSw0QkFRRTtBQUFLLFdBQUssRUFBRTtBQUFDVSxhQUFLLEVBQUUsT0FBUjtBQUFpQkYsV0FBRyxFQUFFLENBQUMsRUFBdkI7QUFBMkIvQixnQkFBUSxFQUFFLFVBQXJDO0FBQWlEQyxhQUFLLEVBQUVvQixVQUFVLEdBQUcsRUFBckU7QUFBeUVhLG9CQUFZLEVBQUUsVUFBdkY7QUFBbUdDLGdCQUFRLEVBQUUsUUFBN0c7QUFBdUhDLGtCQUFVLEVBQUU7QUFBbkksT0FBWjtBQUFBLGdCQUEySlgsUUFBUSxDQUFDWTtBQUFwSztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFTRTtBQUNFLFdBQUssRUFBRTtBQUNMcEMsYUFBSyxFQUFFb0IsVUFERjtBQUVMbkIsY0FBTSxFQUFFa0IsV0FGSDtBQUdMa0Isb0JBQVksRUFBRSxDQUhUO0FBSUxDLGlCQUFTLEVBQUUsOEJBSk47QUFLTEMsdUJBQWUsRUFBRSxTQUxaO0FBTUxMLGdCQUFRLEVBQUU7QUFOTCxPQURUO0FBU0EsYUFBTyxFQUFFLG1CQUFNO0FBQ2JNLGVBQU8sQ0FBQ0MsR0FBUiwwQkFBOEJ6QixXQUE5QjtBQUNBVyxjQUFNLENBQUNlLElBQVAsaUJBQXFCMUIsV0FBckI7QUFDRCxPQVpEO0FBQUEsZ0JBY0dRLFFBQVEsQ0FBQ1QsSUFBVCxLQUFrQixPQUFsQixnQkFDRyxxRUFBQyxXQUFELG9CQUFpQlMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILGdCQUdDO0FBQUssYUFBSyxFQUFFO0FBQUN6QixrQkFBUSxFQUFFLFVBQVg7QUFBdUI0QyxtQkFBUyxFQUFFLFlBQWxDO0FBQWdEM0MsZUFBSyxFQUFFO0FBQXZELFNBQVo7QUFBQSxrQkFDR3FCLE9BQU8sZ0JBQUcscUVBQUMsS0FBRCxrQ0FBV0csUUFBWDtBQUFxQixpQkFBTyxFQUFFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUgsR0FBNkM7QUFEdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQ0QsQ0FyQ0Q7O0lBQU1WLEk7VUFFV2MscUQ7OztNQUZYZCxJOztBQXVDTixJQUFNOEIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNqQyxTQUFPQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUYsVUFBVSxJQUFJLEVBQTdCLEVBQ0pHLE1BREksQ0FDRztBQUFBO0FBQUEsUUFBRUMsQ0FBRjtBQUFBLFFBQUtDLENBQUw7O0FBQUEsV0FBWUEsQ0FBQyxDQUFDL0MsT0FBZDtBQUFBLEdBREgsRUFFSmdELEdBRkksQ0FFQTtBQUFBO0FBQUEsUUFBRUYsQ0FBRjtBQUFBLFFBQUtDLENBQUw7O0FBQUEsV0FBWUEsQ0FBWjtBQUFBLEdBRkEsQ0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFBbUQ7QUFBQSxNQUFoREMsS0FBZ0QsU0FBaERBLEtBQWdEO0FBQUEsTUFBekNSLFVBQXlDLFNBQXpDQSxVQUF5QztBQUFBLE1BQTdCeEIsT0FBNkIsU0FBN0JBLE9BQTZCO0FBQUEsTUFBcEJOLElBQW9CLFNBQXBCQSxJQUFvQjtBQUFBLE1BQVhRLElBQVc7O0FBQy9ELHNCQUFPO0FBQUEsZUFDSixDQUFDOEIsS0FBSyxJQUFJLEVBQVYsRUFBY0YsR0FBZCxDQUFrQixVQUFBRyxJQUFJO0FBQUEsMEJBQUkscUVBQUMsSUFBRCxrQ0FBaUNBLElBQWpDO0FBQXVDLGVBQU8sRUFBRWpDO0FBQWhELFVBQVdpQyxJQUFJLENBQUN0QyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUF0QixDQURJLEVBRUo0QixVQUFVLENBQUNDLFVBQUQsQ0FBVixDQUF1Qk0sR0FBdkIsQ0FBMkIsVUFBQUksR0FBRztBQUFBLDBCQUFJLHFFQUFDLEdBQUQsb0JBQTJCQSxHQUEzQixHQUFVQSxHQUFHLENBQUNwRCxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQTlCLENBRkk7QUFBQSxrQkFBUDtBQUlELENBTEQ7O01BQU1pRCxLOztBQVFOLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLFNBQTJCO0FBQUEsTUFBeEJ6QyxJQUF3QixVQUF4QkEsSUFBd0I7QUFBQSxNQUFmUyxRQUFlOztBQUM3QyxNQUFJVCxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQix3QkFBTyxxRUFBQyxLQUFELG9CQUFXUyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUNELE1BQUlULElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CLHdCQUFPLHFFQUFDLElBQUQsb0JBQVVTLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0QsTUFBSVQsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDcEIsd0JBQU8scUVBQUMsS0FBRCxvQkFBV1MsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFDRCxTQUFPVCxJQUFQO0FBQ0QsQ0FYRDs7TUFBTXlDLFc7O0FBY04sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNOUIsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU04QixPQUFPLEdBQUcvQixNQUFNLENBQUNnQyxLQUFQLENBQWFDLEVBQWIsSUFBbUJqQyxNQUFNLENBQUNnQyxLQUFQLENBQWFDLEVBQWIsQ0FBZ0IsQ0FBaEIsQ0FBbkM7QUFDQSxNQUFNQyxZQUFZLEdBQUdwQyx3REFBSyxDQUFDQyxTQUFOLENBQWdCZ0MsT0FBTyxJQUFJakMsd0RBQUssQ0FBQ3FDLElBQWpDLENBQXJCO0FBQ0F0QixTQUFPLENBQUNDLEdBQVIsQ0FBWW9CLFlBQVo7QUFDQSxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQVNMLHFFQUFDLFdBQUQsa0NBQWlCQSxZQUFqQjtBQUErQixhQUFPLEVBQUU7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRLO0FBQUEsa0JBQVA7QUFXRCxDQWhCRDs7SUFBTUosSTtVQUNXN0IscUQ7OztNQURYNkIsSTtBQWtCU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9tdXNlL1tbLi4uaWRdXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYm9hcmQgZnJvbSAnLi4vLi4vcHVibGljL2JvYXJkL2NvbnRlbnRzLmpzb24nXG5cblxuY29uc3QgSW1hZ2UgPSAoeyBvcmlnaW5hbF9maWxlIH0pID0+IHtcbiAgcmV0dXJuIDxpbWcgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fSBzcmM9e2AvYm9hcmQvZmlsZXMvJHtvcmlnaW5hbF9maWxlfWB9IC8+XG59IFxuXG5jb25zdCBJbmsgPSAoeyBpbmtfc3ZnIH0pID0+IHtcbiAgcmV0dXJuIDxpbWcgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0gc3JjPXtgL2JvYXJkL2ZpbGVzLyR7aW5rX3N2Z31gfSAvPlxufSBcblxuY29uc3QgVGV4dCA9ICh7IG9yaWdpbmFsX2ZpbGUgfSkgPT4ge1xuICBjb25zdCBbZmlsZUNvbnRlbnQsIHNldEZpbGVDb250ZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2goYC9ib2FyZC9maWxlcy8ke29yaWdpbmFsX2ZpbGV9YCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3AudGV4dCgpXG4gICAgICB9KVxuICAgICAgLnRoZW4odGV4dCA9PiBzZXRGaWxlQ29udGVudCh0ZXh0KSlcbiAgICB9LFxuICAgIFtvcmlnaW5hbF9maWxlXVxuICApXG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4IDAgMCAxMHB4XCJ9fT57ZmlsZUNvbnRlbnR9PC9kaXY+XG59XG5cbmNvbnN0IENhcmQgPSAoeyB0eXBlLCBkb2N1bWVudF9pZCwgcG9zaXRpb25feCwgcG9zaXRpb25feSwgc2l6ZV9oZWlnaHQsIHNpemVfd2lkdGgsIHJlY3Vyc2UsIHosIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCBjYXJkSW5mbyA9IGJvYXJkLmRvY3VtZW50c1tkb2N1bWVudF9pZF1cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGxlZnQ6IHBvc2l0aW9uX3gsIFxuICAgICAgdG9wOiBwb3NpdGlvbl95LFxuICAgICAgd2lkdGg6IHNpemVfd2lkdGgsIFxuICAgICAgaGVpZ2h0OiBzaXplX2hlaWdodCxcbiAgICAgIHpJbmRleDogeixcbiAgICAgIH19PlxuICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiBcImJsYWNrXCIsIHRvcDogLTIwLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogc2l6ZV93aWR0aCAtIDIwLCB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHdoaXRlU3BhY2U6IFwibm93cmFwXCJ9fT57Y2FyZEluZm8ubGFiZWx9PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IHNpemVfd2lkdGgsIFxuICAgICAgICAgIGhlaWdodDogc2l6ZV9oZWlnaHQsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA5LFxuICAgICAgICAgIGJveFNoYWRvdzogXCIwcHggMHB4IDIwcHggcmdiYSgwLDAsMCwwLjIpXCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGMEVFRThcIixcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICAgICAgICB9fVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgdHJhbnNpdGlvbmluZyAgJHtkb2N1bWVudF9pZH19YClcbiAgICAgICAgcm91dGVyLnB1c2goYC9tdXNlLyR7ZG9jdW1lbnRfaWR9YClcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjYXJkSW5mby50eXBlICE9PSBcImJvYXJkXCIgXG4gICAgICAgICAgPyA8Q2FyZEZvclR5cGUgey4uLmNhcmRJbmZvfSAvPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdHJhbnNmb3JtOiBcInNjYWxlKDAuMSlcIiwgd2lkdGg6IDB9fT5cbiAgICAgICAgICAgIHtyZWN1cnNlID8gPEJvYXJkIHsuLi5jYXJkSW5mb30gcmVjdXJzZT17ZmFsc2V9IC8+IDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgaW5rVG9BcnJheSA9IChpbmtfbW9kZWxzKSA9PiB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhpbmtfbW9kZWxzIHx8IHt9KVxuICAgIC5maWx0ZXIoKFtrLCB2XSkgPT4gdi5pbmtfc3ZnKVxuICAgIC5tYXAoKFtrLCB2XSkgPT4gdilcbn1cblxuY29uc3QgQm9hcmQgPSAoeyBjYXJkcywgaW5rX21vZGVscywgcmVjdXJzZSwgdHlwZSwgLi4ucmVzdCB9KSA9PiB7XG4gIHJldHVybiA8PlxuICAgIHsoY2FyZHMgfHwgW10pLm1hcChjYXJkID0+IDxDYXJkIGtleT17Y2FyZC5kb2N1bWVudF9pZH0gey4uLmNhcmR9IHJlY3Vyc2U9e3JlY3Vyc2V9IC8+KX1cbiAgICB7aW5rVG9BcnJheShpbmtfbW9kZWxzKS5tYXAoaW5rID0+IDxJbmsga2V5PXtpbmsuaW5rX3N2Z30gey4uLmlua30gLz4pfVxuICA8Lz5cbn1cblxuXG5jb25zdCBDYXJkRm9yVHlwZSA9ICh7IHR5cGUsIC4uLmNhcmRJbmZvIH0pID0+IHtcbiAgaWYgKHR5cGUgPT09IFwiaW1hZ2VcIikge1xuICAgIHJldHVybiA8SW1hZ2Ugey4uLmNhcmRJbmZvfSAvPlxuICB9XG4gIGlmICh0eXBlID09PSBcInRleHRcIikge1xuICAgIHJldHVybiA8VGV4dCB7Li4uY2FyZEluZm99IC8+XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwiYm9hcmRcIikge1xuICAgIHJldHVybiA8Qm9hcmQgey4uLmNhcmRJbmZvfSAvPlxuICB9XG4gIHJldHVybiB0eXBlXG59XG5cblxuY29uc3QgTXVzZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGJvYXJkSWQgPSByb3V0ZXIucXVlcnkuaWQgJiYgcm91dGVyLnF1ZXJ5LmlkWzBdO1xuICBjb25zdCBjdXJyZW50Qm9hcmQgPSBib2FyZC5kb2N1bWVudHNbYm9hcmRJZCB8fCBib2FyZC5yb290XTtcbiAgY29uc29sZS5sb2coY3VycmVudEJvYXJkKVxuICByZXR1cm4gPD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0U5RTE7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuXG4gICAgPENhcmRGb3JUeXBlIHsuLi5jdXJyZW50Qm9hcmR9IHJlY3Vyc2U9e3RydWV9ICAvPlxuICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/muse/[[...id]].js\n");

/***/ })

})