webpackHotUpdate_N_E("pages/muse/[[...id]]",{

/***/ "./pages/muse/[[...id]].js":
/*!*********************************!*\
  !*** ./pages/muse/[[...id]].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/board/contents.json */ \"./public/board/contents.json\");\nvar _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/board/contents.json */ \"./public/board/contents.json\", 1);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/jimmyhmiller/Documents/Code/jimmyhmiller.github.io/pages/muse/[[...id]].js\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Image = function Image(_ref) {\n  var original_file = _ref.original_file;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    style: {\n      position: \"absolute\",\n      width: \"100%\",\n      height: \"100%\"\n    },\n    src: \"/board/files/\".concat(original_file)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 10\n  }, _this);\n};\n\n_c = Image;\n\nvar Ink = function Ink(_ref2) {\n  var ink_svg = _ref2.ink_svg;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    style: {\n      position: \"absolute\"\n    },\n    src: \"/board/files/\".concat(ink_svg)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 10\n  }, _this);\n};\n\n_c2 = Ink;\n\nvar Text = function Text(_ref3) {\n  _s();\n\n  var original_file = _ref3.original_file;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(undefined),\n      fileContent = _useState[0],\n      setFileContent = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    fetch(\"/board/files/\".concat(original_file)).then(function (resp) {\n      console.log(resp);\n    });\n  }, [original_file]);\n};\n\n_s(Text, \"e5gL8DAJmDXDO4JJX+8PYnJJn7U=\");\n\n_c3 = Text;\n\nvar Card = function Card(_ref4) {\n  _s2();\n\n  var type = _ref4.type,\n      document_id = _ref4.document_id,\n      position_x = _ref4.position_x,\n      position_y = _ref4.position_y,\n      size_height = _ref4.size_height,\n      size_width = _ref4.size_width,\n      recurse = _ref4.recurse,\n      z = _ref4.z,\n      rest = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref4, [\"type\", \"document_id\", \"position_x\", \"position_y\", \"size_height\", \"size_width\", \"recurse\", \"z\"]);\n\n  var cardInfo = _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__.documents[document_id];\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: \"absolute\",\n      left: position_x,\n      top: position_y,\n      width: size_width,\n      height: size_height,\n      zIndex: z\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        color: \"black\",\n        top: -20,\n        position: \"absolute\",\n        width: size_width - 20,\n        textOverflow: \"ellipsis\",\n        overflow: \"hidden\",\n        whiteSpace: \"nowrap\"\n      },\n      children: cardInfo.label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        width: size_width,\n        height: size_height,\n        borderRadius: 9,\n        boxShadow: \"0px 0px 20px rgba(0,0,0,0.2)\",\n        backgroundColor: \"#F0EEE8\",\n        overflow: \"hidden\"\n      },\n      onClick: function onClick() {\n        router.push(\"/muse/\".concat(document_id));\n      },\n      children: cardInfo.type === \"image\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, _objectSpread({}, cardInfo), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          position: \"relative\",\n          transform: \"scale(0.1)\",\n          width: 0\n        },\n        children: recurse ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Board, _objectSpread(_objectSpread({}, cardInfo), {}, {\n          recurse: false\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 24\n        }, _this) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Card, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c4 = Card;\n\nvar inkToArray = function inkToArray(ink_models) {\n  return Object.entries(ink_models || {}).filter(function (_ref5) {\n    var _ref6 = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref5, 2),\n        k = _ref6[0],\n        v = _ref6[1];\n\n    return v.ink_svg;\n  }).map(function (_ref7) {\n    var _ref8 = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref7, 2),\n        k = _ref8[0],\n        v = _ref8[1];\n\n    return v;\n  });\n};\n\nvar Board = function Board(_ref9) {\n  var cards = _ref9.cards,\n      ink_models = _ref9.ink_models,\n      recurse = _ref9.recurse,\n      type = _ref9.type,\n      rest = Object(_Users_jimmyhmiller_Documents_Code_jimmyhmiller_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref9, [\"cards\", \"ink_models\", \"recurse\", \"type\"]);\n\n  if (type === \"image\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, _objectSpread({}, rest), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (type === \"text\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Text, _objectSpread({}, rest), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (!cards) {\n    return JSON.stringify(_objectSpread({\n      type: type\n    }, rest));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [(cards || []).map(function (card) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, _objectSpread(_objectSpread({}, card), {}, {\n        recurse: recurse\n      }), card.document_id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 32\n      }, _this);\n    }), inkToArray(ink_models).map(function (ink) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Ink, _objectSpread({}, ink), ink.ink_svg, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 40\n      }, _this);\n    })]\n  }, void 0, true);\n};\n\n_c5 = Board;\n\nvar Muse = function Muse() {\n  _s3();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var boardId = router.query.id && router.query.id[0];\n  var currentBoard = _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__.documents[boardId || _public_board_contents_json__WEBPACK_IMPORTED_MODULE_7__.root];\n  console.log(currentBoard);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      id: \"1481484493\",\n      children: \"body{background-color:#ECE9E1;font-family:sans-serif;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW1teWhtaWxsZXIvRG9jdW1lbnRzL0NvZGUvamltbXlobWlsbGVyLmdpdGh1Yi5pby9wYWdlcy9tdXNlL1tbLi4uaWRdXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RnVCLEFBR2tDLHlCQUNGLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvamltbXlobWlsbGVyL0RvY3VtZW50cy9Db2RlL2ppbW15aG1pbGxlci5naXRodWIuaW8vcGFnZXMvbXVzZS9bWy4uLmlkXV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGJvYXJkIGZyb20gJy4uLy4uL3B1YmxpYy9ib2FyZC9jb250ZW50cy5qc29uJ1xuXG5cbmNvbnN0IEltYWdlID0gKHsgb3JpZ2luYWxfZmlsZSB9KSA9PiB7XG4gIHJldHVybiA8aW1nIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0gc3JjPXtgL2JvYXJkL2ZpbGVzLyR7b3JpZ2luYWxfZmlsZX1gfSAvPlxufSBcblxuY29uc3QgSW5rID0gKHsgaW5rX3N2ZyB9KSA9PiB7XG4gIHJldHVybiA8aW1nIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIn19IHNyYz17YC9ib2FyZC9maWxlcy8ke2lua19zdmd9YH0gLz5cbn0gXG5cbmNvbnN0IFRleHQgPSAoeyBvcmlnaW5hbF9maWxlIH0pID0+IHtcbiAgY29uc3QgW2ZpbGVDb250ZW50LCBzZXRGaWxlQ29udGVudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2goYC9ib2FyZC9maWxlcy8ke29yaWdpbmFsX2ZpbGV9YCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBbb3JpZ2luYWxfZmlsZV1cbiAgKVxufVxuXG5jb25zdCBDYXJkID0gKHsgdHlwZSwgZG9jdW1lbnRfaWQsIHBvc2l0aW9uX3gsIHBvc2l0aW9uX3ksIHNpemVfaGVpZ2h0LCBzaXplX3dpZHRoLCByZWN1cnNlLCB6LCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgY2FyZEluZm8gPSBib2FyZC5kb2N1bWVudHNbZG9jdW1lbnRfaWRdXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBsZWZ0OiBwb3NpdGlvbl94LCBcbiAgICAgIHRvcDogcG9zaXRpb25feSxcbiAgICAgIHdpZHRoOiBzaXplX3dpZHRoLCBcbiAgICAgIGhlaWdodDogc2l6ZV9oZWlnaHQsXG4gICAgICB6SW5kZXg6IHosXG4gICAgICB9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCB0b3A6IC0yMCwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IHNpemVfd2lkdGggLSAyMCwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIG92ZXJmbG93OiBcImhpZGRlblwiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+e2NhcmRJbmZvLmxhYmVsfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBzaXplX3dpZHRoLCBcbiAgICAgICAgICBoZWlnaHQ6IHNpemVfaGVpZ2h0LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogOSxcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAyMHB4IHJnYmEoMCwwLDAsMC4yKVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjBFRUU4XCIsXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICAgICAgfX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goYC9tdXNlLyR7ZG9jdW1lbnRfaWR9YClcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjYXJkSW5mby50eXBlID09PSBcImltYWdlXCIgXG4gICAgICAgICAgPyA8SW1hZ2Ugey4uLmNhcmRJbmZvfSAvPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdHJhbnNmb3JtOiBcInNjYWxlKDAuMSlcIiwgd2lkdGg6IDB9fT5cbiAgICAgICAgICAgIHtyZWN1cnNlID8gPEJvYXJkIHsuLi5jYXJkSW5mb30gcmVjdXJzZT17ZmFsc2V9IC8+IDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgaW5rVG9BcnJheSA9IChpbmtfbW9kZWxzKSA9PiB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhpbmtfbW9kZWxzIHx8IHt9KVxuICAgIC5maWx0ZXIoKFtrLCB2XSkgPT4gdi5pbmtfc3ZnKVxuICAgIC5tYXAoKFtrLCB2XSkgPT4gdilcbn1cblxuXG5jb25zdCBCb2FyZCA9ICh7IGNhcmRzLCBpbmtfbW9kZWxzLCByZWN1cnNlLCB0eXBlLCAuLi5yZXN0IH0pID0+IHtcbiAgaWYgKHR5cGUgPT09IFwiaW1hZ2VcIikge1xuICAgIHJldHVybiA8SW1hZ2Ugey4uLnJlc3R9IC8+XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgcmV0dXJuIDxUZXh0IHsuLi5yZXN0fSAvPlxuICB9XG4gIGlmICghY2FyZHMpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe3R5cGUsIC4uLnJlc3R9KVxuICB9XG4gIHJldHVybiA8PlxuICAgIHsoY2FyZHMgfHwgW10pLm1hcChjYXJkID0+IDxDYXJkIGtleT17Y2FyZC5kb2N1bWVudF9pZH0gey4uLmNhcmR9IHJlY3Vyc2U9e3JlY3Vyc2V9IC8+KX1cbiAgICB7aW5rVG9BcnJheShpbmtfbW9kZWxzKS5tYXAoaW5rID0+IDxJbmsga2V5PXtpbmsuaW5rX3N2Z30gey4uLmlua30gLz4pfVxuICA8Lz5cbn1cblxuXG5jb25zdCBNdXNlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYm9hcmRJZCA9IHJvdXRlci5xdWVyeS5pZCAmJiByb3V0ZXIucXVlcnkuaWRbMF07XG4gIGNvbnN0IGN1cnJlbnRCb2FyZCA9IGJvYXJkLmRvY3VtZW50c1tib2FyZElkIHx8IGJvYXJkLnJvb3RdO1xuICBjb25zb2xlLmxvZyhjdXJyZW50Qm9hcmQpXG4gIHJldHVybiA8PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRTlFMTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8Qm9hcmQgey4uLmN1cnJlbnRCb2FyZH0gcmVjdXJzZT17dHJ1ZX0gIC8+XG4gIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNdXNlIl19 */\\n/*@ sourceURL=/Users/jimmyhmiller/Documents/Code/jimmyhmiller.github.io/pages/muse/[[...id]].js */\"\n    }, void 0, false, void 0, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Board, _objectSpread(_objectSpread({}, currentBoard), {}, {\n      recurse: true\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_s3(Muse, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c6 = Muse;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Muse);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Image\");\n$RefreshReg$(_c2, \"Ink\");\n$RefreshReg$(_c3, \"Text\");\n$RefreshReg$(_c4, \"Card\");\n$RefreshReg$(_c5, \"Board\");\n$RefreshReg$(_c6, \"Muse\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXVzZS9bWy4uLmlkXV0uanM/ZGQ5YyJdLCJuYW1lcyI6WyJJbWFnZSIsIm9yaWdpbmFsX2ZpbGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiSW5rIiwiaW5rX3N2ZyIsIlRleHQiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsImZpbGVDb250ZW50Iiwic2V0RmlsZUNvbnRlbnQiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwiY29uc29sZSIsImxvZyIsIkNhcmQiLCJ0eXBlIiwiZG9jdW1lbnRfaWQiLCJwb3NpdGlvbl94IiwicG9zaXRpb25feSIsInNpemVfaGVpZ2h0Iiwic2l6ZV93aWR0aCIsInJlY3Vyc2UiLCJ6IiwicmVzdCIsImNhcmRJbmZvIiwiYm9hcmQiLCJkb2N1bWVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsZWZ0IiwidG9wIiwiekluZGV4IiwiY29sb3IiLCJ0ZXh0T3ZlcmZsb3ciLCJvdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJsYWJlbCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImJhY2tncm91bmRDb2xvciIsInB1c2giLCJ0cmFuc2Zvcm0iLCJpbmtUb0FycmF5IiwiaW5rX21vZGVscyIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJrIiwidiIsIm1hcCIsIkJvYXJkIiwiY2FyZHMiLCJKU09OIiwic3RyaW5naWZ5IiwiY2FyZCIsImluayIsIk11c2UiLCJib2FyZElkIiwicXVlcnkiLCJpZCIsImN1cnJlbnRCb2FyZCIsInJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXVCO0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtBQUNuQyxzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFDQyxjQUFRLEVBQUUsVUFBWDtBQUF1QkMsV0FBSyxFQUFFLE1BQTlCO0FBQXNDQyxZQUFNLEVBQUU7QUFBOUMsS0FBWjtBQUFtRSxPQUFHLHlCQUFrQkgsYUFBbEI7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRDs7S0FBTUQsSzs7QUFJTixJQUFNSyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxRQUFpQjtBQUFBLE1BQWRDLE9BQWMsU0FBZEEsT0FBYztBQUMzQixzQkFBTztBQUFLLFNBQUssRUFBRTtBQUFDSixjQUFRLEVBQUU7QUFBWCxLQUFaO0FBQW9DLE9BQUcseUJBQWtCSSxPQUFsQjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztNQUFNRCxHOztBQUlOLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQXVCO0FBQUE7O0FBQUEsTUFBcEJOLGFBQW9CLFNBQXBCQSxhQUFvQjs7QUFBQSxrQkFDSU8sc0RBQVEsQ0FBQ0MsU0FBRCxDQURaO0FBQUEsTUFDM0JDLFdBRDJCO0FBQUEsTUFDZEMsY0FEYzs7QUFFbENDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxTQUFLLHdCQUFpQlosYUFBakIsRUFBTCxDQUF1Q2EsSUFBdkMsQ0FBNEMsVUFBQUMsSUFBSSxFQUFJO0FBQ2xEQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELEtBRkQ7QUFHRCxHQUpNLEVBS1AsQ0FBQ2QsYUFBRCxDQUxPLENBQVQ7QUFPRCxDQVREOztHQUFNTSxJOztNQUFBQSxJOztBQVdOLElBQU1XLElBQUksR0FBRyxTQUFQQSxJQUFPLFFBQWlHO0FBQUE7O0FBQUEsTUFBOUZDLElBQThGLFNBQTlGQSxJQUE4RjtBQUFBLE1BQXhGQyxXQUF3RixTQUF4RkEsV0FBd0Y7QUFBQSxNQUEzRUMsVUFBMkUsU0FBM0VBLFVBQTJFO0FBQUEsTUFBL0RDLFVBQStELFNBQS9EQSxVQUErRDtBQUFBLE1BQW5EQyxXQUFtRCxTQUFuREEsV0FBbUQ7QUFBQSxNQUF0Q0MsVUFBc0MsU0FBdENBLFVBQXNDO0FBQUEsTUFBMUJDLE9BQTBCLFNBQTFCQSxPQUEwQjtBQUFBLE1BQWpCQyxDQUFpQixTQUFqQkEsQ0FBaUI7QUFBQSxNQUFYQyxJQUFXOztBQUM1RyxNQUFNQyxRQUFRLEdBQUdDLHdEQUFLLENBQUNDLFNBQU4sQ0FBZ0JWLFdBQWhCLENBQWpCO0FBQ0EsTUFBTVcsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLHNCQUNFO0FBQUssU0FBSyxFQUFFO0FBQ1Y5QixjQUFRLEVBQUUsVUFEQTtBQUVWK0IsVUFBSSxFQUFFWixVQUZJO0FBR1ZhLFNBQUcsRUFBRVosVUFISztBQUlWbkIsV0FBSyxFQUFFcUIsVUFKRztBQUtWcEIsWUFBTSxFQUFFbUIsV0FMRTtBQU1WWSxZQUFNLEVBQUVUO0FBTkUsS0FBWjtBQUFBLDRCQVFFO0FBQUssV0FBSyxFQUFFO0FBQUNVLGFBQUssRUFBRSxPQUFSO0FBQWlCRixXQUFHLEVBQUUsQ0FBQyxFQUF2QjtBQUEyQmhDLGdCQUFRLEVBQUUsVUFBckM7QUFBaURDLGFBQUssRUFBRXFCLFVBQVUsR0FBRyxFQUFyRTtBQUF5RWEsb0JBQVksRUFBRSxVQUF2RjtBQUFtR0MsZ0JBQVEsRUFBRSxRQUE3RztBQUF1SEMsa0JBQVUsRUFBRTtBQUFuSSxPQUFaO0FBQUEsZ0JBQTJKWCxRQUFRLENBQUNZO0FBQXBLO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQVNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xyQyxhQUFLLEVBQUVxQixVQURGO0FBRUxwQixjQUFNLEVBQUVtQixXQUZIO0FBR0xrQixvQkFBWSxFQUFFLENBSFQ7QUFJTEMsaUJBQVMsRUFBRSw4QkFKTjtBQUtMQyx1QkFBZSxFQUFFLFNBTFo7QUFNTEwsZ0JBQVEsRUFBRTtBQU5MLE9BRFQ7QUFTQSxhQUFPLEVBQUUsbUJBQU07QUFDYlAsY0FBTSxDQUFDYSxJQUFQLGlCQUFxQnhCLFdBQXJCO0FBQ0QsT0FYRDtBQUFBLGdCQWFHUSxRQUFRLENBQUNULElBQVQsS0FBa0IsT0FBbEIsZ0JBQ0cscUVBQUMsS0FBRCxvQkFBV1MsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREgsZ0JBR0M7QUFBSyxhQUFLLEVBQUU7QUFBQzFCLGtCQUFRLEVBQUUsVUFBWDtBQUF1QjJDLG1CQUFTLEVBQUUsWUFBbEM7QUFBZ0QxQyxlQUFLLEVBQUU7QUFBdkQsU0FBWjtBQUFBLGtCQUNHc0IsT0FBTyxnQkFBRyxxRUFBQyxLQUFELGtDQUFXRyxRQUFYO0FBQXFCLGlCQUFPLEVBQUU7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxHQUE2QztBQUR2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQXBDRDs7SUFBTVYsSTtVQUVXYyxxRDs7O01BRlhkLEk7O0FBc0NOLElBQU00QixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxVQUFELEVBQWdCO0FBQ2pDLFNBQU9DLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRixVQUFVLElBQUksRUFBN0IsRUFDSkcsTUFESSxDQUNHO0FBQUE7QUFBQSxRQUFFQyxDQUFGO0FBQUEsUUFBS0MsQ0FBTDs7QUFBQSxXQUFZQSxDQUFDLENBQUM5QyxPQUFkO0FBQUEsR0FESCxFQUVKK0MsR0FGSSxDQUVBO0FBQUE7QUFBQSxRQUFFRixDQUFGO0FBQUEsUUFBS0MsQ0FBTDs7QUFBQSxXQUFZQSxDQUFaO0FBQUEsR0FGQSxDQUFQO0FBR0QsQ0FKRDs7QUFPQSxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxRQUFtRDtBQUFBLE1BQWhEQyxLQUFnRCxTQUFoREEsS0FBZ0Q7QUFBQSxNQUF6Q1IsVUFBeUMsU0FBekNBLFVBQXlDO0FBQUEsTUFBN0J0QixPQUE2QixTQUE3QkEsT0FBNkI7QUFBQSxNQUFwQk4sSUFBb0IsU0FBcEJBLElBQW9CO0FBQUEsTUFBWFEsSUFBVzs7QUFDL0QsTUFBSVIsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDcEIsd0JBQU8scUVBQUMsS0FBRCxvQkFBV1EsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFDRCxNQUFJUixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQix3QkFBTyxxRUFBQyxJQUFELG9CQUFVUSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUNELE1BQUksQ0FBQzRCLEtBQUwsRUFBWTtBQUNWLFdBQU9DLElBQUksQ0FBQ0MsU0FBTDtBQUFnQnRDLFVBQUksRUFBSkE7QUFBaEIsT0FBeUJRLElBQXpCLEVBQVA7QUFDRDs7QUFDRCxzQkFBTztBQUFBLGVBQ0osQ0FBQzRCLEtBQUssSUFBSSxFQUFWLEVBQWNGLEdBQWQsQ0FBa0IsVUFBQUssSUFBSTtBQUFBLDBCQUFJLHFFQUFDLElBQUQsa0NBQWlDQSxJQUFqQztBQUF1QyxlQUFPLEVBQUVqQztBQUFoRCxVQUFXaUMsSUFBSSxDQUFDdEMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKO0FBQUEsS0FBdEIsQ0FESSxFQUVKMEIsVUFBVSxDQUFDQyxVQUFELENBQVYsQ0FBdUJNLEdBQXZCLENBQTJCLFVBQUFNLEdBQUc7QUFBQSwwQkFBSSxxRUFBQyxHQUFELG9CQUEyQkEsR0FBM0IsR0FBVUEsR0FBRyxDQUFDckQsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUE5QixDQUZJO0FBQUEsa0JBQVA7QUFJRCxDQWREOztNQUFNZ0QsSzs7QUFpQk4sSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNN0IsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU02QixPQUFPLEdBQUc5QixNQUFNLENBQUMrQixLQUFQLENBQWFDLEVBQWIsSUFBbUJoQyxNQUFNLENBQUMrQixLQUFQLENBQWFDLEVBQWIsQ0FBZ0IsQ0FBaEIsQ0FBbkM7QUFDQSxNQUFNQyxZQUFZLEdBQUduQyx3REFBSyxDQUFDQyxTQUFOLENBQWdCK0IsT0FBTyxJQUFJaEMsd0RBQUssQ0FBQ29DLElBQWpDLENBQXJCO0FBQ0FqRCxTQUFPLENBQUNDLEdBQVIsQ0FBWStDLFlBQVo7QUFDQSxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQVNMLHFFQUFDLEtBQUQsa0NBQVdBLFlBQVg7QUFBeUIsYUFBTyxFQUFFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSztBQUFBLGtCQUFQO0FBV0QsQ0FoQkQ7O0lBQU1KLEk7VUFDVzVCLHFEOzs7TUFEWDRCLEk7QUFrQlNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbXVzZS9bWy4uLmlkXV0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGJvYXJkIGZyb20gJy4uLy4uL3B1YmxpYy9ib2FyZC9jb250ZW50cy5qc29uJ1xuXG5cbmNvbnN0IEltYWdlID0gKHsgb3JpZ2luYWxfZmlsZSB9KSA9PiB7XG4gIHJldHVybiA8aW1nIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifX0gc3JjPXtgL2JvYXJkL2ZpbGVzLyR7b3JpZ2luYWxfZmlsZX1gfSAvPlxufSBcblxuY29uc3QgSW5rID0gKHsgaW5rX3N2ZyB9KSA9PiB7XG4gIHJldHVybiA8aW1nIHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIn19IHNyYz17YC9ib2FyZC9maWxlcy8ke2lua19zdmd9YH0gLz5cbn0gXG5cbmNvbnN0IFRleHQgPSAoeyBvcmlnaW5hbF9maWxlIH0pID0+IHtcbiAgY29uc3QgW2ZpbGVDb250ZW50LCBzZXRGaWxlQ29udGVudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2goYC9ib2FyZC9maWxlcy8ke29yaWdpbmFsX2ZpbGV9YCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBbb3JpZ2luYWxfZmlsZV1cbiAgKVxufVxuXG5jb25zdCBDYXJkID0gKHsgdHlwZSwgZG9jdW1lbnRfaWQsIHBvc2l0aW9uX3gsIHBvc2l0aW9uX3ksIHNpemVfaGVpZ2h0LCBzaXplX3dpZHRoLCByZWN1cnNlLCB6LCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgY2FyZEluZm8gPSBib2FyZC5kb2N1bWVudHNbZG9jdW1lbnRfaWRdXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBsZWZ0OiBwb3NpdGlvbl94LCBcbiAgICAgIHRvcDogcG9zaXRpb25feSxcbiAgICAgIHdpZHRoOiBzaXplX3dpZHRoLCBcbiAgICAgIGhlaWdodDogc2l6ZV9oZWlnaHQsXG4gICAgICB6SW5kZXg6IHosXG4gICAgICB9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJibGFja1wiLCB0b3A6IC0yMCwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IHNpemVfd2lkdGggLSAyMCwgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsIG92ZXJmbG93OiBcImhpZGRlblwiLCB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+e2NhcmRJbmZvLmxhYmVsfTwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBzaXplX3dpZHRoLCBcbiAgICAgICAgICBoZWlnaHQ6IHNpemVfaGVpZ2h0LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogOSxcbiAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAyMHB4IHJnYmEoMCwwLDAsMC4yKVwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjBFRUU4XCIsXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICAgICAgfX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goYC9tdXNlLyR7ZG9jdW1lbnRfaWR9YClcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjYXJkSW5mby50eXBlID09PSBcImltYWdlXCIgXG4gICAgICAgICAgPyA8SW1hZ2Ugey4uLmNhcmRJbmZvfSAvPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdHJhbnNmb3JtOiBcInNjYWxlKDAuMSlcIiwgd2lkdGg6IDB9fT5cbiAgICAgICAgICAgIHtyZWN1cnNlID8gPEJvYXJkIHsuLi5jYXJkSW5mb30gcmVjdXJzZT17ZmFsc2V9IC8+IDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgaW5rVG9BcnJheSA9IChpbmtfbW9kZWxzKSA9PiB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhpbmtfbW9kZWxzIHx8IHt9KVxuICAgIC5maWx0ZXIoKFtrLCB2XSkgPT4gdi5pbmtfc3ZnKVxuICAgIC5tYXAoKFtrLCB2XSkgPT4gdilcbn1cblxuXG5jb25zdCBCb2FyZCA9ICh7IGNhcmRzLCBpbmtfbW9kZWxzLCByZWN1cnNlLCB0eXBlLCAuLi5yZXN0IH0pID0+IHtcbiAgaWYgKHR5cGUgPT09IFwiaW1hZ2VcIikge1xuICAgIHJldHVybiA8SW1hZ2Ugey4uLnJlc3R9IC8+XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgcmV0dXJuIDxUZXh0IHsuLi5yZXN0fSAvPlxuICB9XG4gIGlmICghY2FyZHMpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe3R5cGUsIC4uLnJlc3R9KVxuICB9XG4gIHJldHVybiA8PlxuICAgIHsoY2FyZHMgfHwgW10pLm1hcChjYXJkID0+IDxDYXJkIGtleT17Y2FyZC5kb2N1bWVudF9pZH0gey4uLmNhcmR9IHJlY3Vyc2U9e3JlY3Vyc2V9IC8+KX1cbiAgICB7aW5rVG9BcnJheShpbmtfbW9kZWxzKS5tYXAoaW5rID0+IDxJbmsga2V5PXtpbmsuaW5rX3N2Z30gey4uLmlua30gLz4pfVxuICA8Lz5cbn1cblxuXG5jb25zdCBNdXNlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYm9hcmRJZCA9IHJvdXRlci5xdWVyeS5pZCAmJiByb3V0ZXIucXVlcnkuaWRbMF07XG4gIGNvbnN0IGN1cnJlbnRCb2FyZCA9IGJvYXJkLmRvY3VtZW50c1tib2FyZElkIHx8IGJvYXJkLnJvb3RdO1xuICBjb25zb2xlLmxvZyhjdXJyZW50Qm9hcmQpXG4gIHJldHVybiA8PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRTlFMTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8Qm9hcmQgey4uLmN1cnJlbnRCb2FyZH0gcmVjdXJzZT17dHJ1ZX0gIC8+XG4gIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNdXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/muse/[[...id]].js\n");

/***/ })

})