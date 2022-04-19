"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./src/contexts/ThemeContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withAuth */ \"./src/components/withAuth.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header(param) {\n    var loggedInUser = param.loggedInUser, setLoggedInUser = param.setLoggedInUser;\n    _s();\n    var theme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext).theme;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"padT4 padB4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mobile-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: \"SISU Home Page\",\n                            src: \"/images/Summit.png\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: theme === \"light\" ? \"\" : \"text-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"header-title, headerCss\",\n                            children: \"Silicon Slopes - Utah \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"loginCss\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: theme === \"light\" ? \"\" : \"text-muted\",\n                            children: loggedInUser && loggedInUser.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"Welcome \",\n                                            loggedInUser,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-secondary\",\n                                        onClick: function() {\n                                            setLoggedInUser(\"\");\n                                        },\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 22,\n                                columnNumber: 17\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-secondary\",\n                                onClick: function(e) {\n                                    e.preventDefault();\n                                    var username = window.prompt(\"Enter Login name:\", \"\");\n                                    setLoggedInUser(username);\n                                },\n                                children: \"login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n                                lineNumber: 34,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bwilson.CMS-24931\\\\Documents\\\\GitHub\\\\firstReactProject\\\\src\\\\components\\\\Header.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n_s(Header, \"LidUGjXGvl6nqLnPI8yC77ot4bM=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Header));\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDckI7QUFDRDs7U0FFeEJHLE1BQU0sQ0FBQyxLQUFpQyxFQUFFLENBQUM7UUFBbENDLFlBQVksR0FBZCxLQUFpQyxDQUEvQkEsWUFBWSxFQUFFQyxlQUFlLEdBQS9CLEtBQWlDLENBQWpCQSxlQUFlOztJQUM3QyxHQUFLLENBQUdDLEtBQUssR0FBS0wsaURBQVUsQ0FBQ0QsZ0VBQVksRUFBakNNLEtBQUs7SUFFYixNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFhOzhGQUN6QkQsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBNEI7a0dBQ3hDRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBZ0M7O2dHQUM1Q0QsQ0FBRzs4R0FFREUsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFDLENBQWdCOzRCQUFDQyxHQUFHLEVBQUMsQ0FBb0I7Ozs7Ozs7Ozs7O2dHQUVuREosQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFRixLQUFLLEtBQUssQ0FBTyxTQUFHLENBQUUsSUFBRyxDQUFZOzhHQUNsRE0sQ0FBRTs0QkFBQ0osU0FBUyxFQUFDLENBQXlCO3NDQUFDLENBQXNCOzs7Ozs7Ozs7OztnR0FFL0RELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFVOzhHQUN0QkQsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFFRixLQUFLLEtBQUssQ0FBTyxTQUFHLENBQUUsSUFBRyxDQUFZO3NDQUNsREYsWUFBWSxJQUFJQSxZQUFZLENBQUNTLE1BQU0sR0FBRyxDQUFDLCtFQUNyQ04sQ0FBRzs7Z0hBQ0RPLENBQUk7OzRDQUFDLENBQVE7NENBQUNWLFlBQVk7NENBQUMsQ0FBQzs7Ozs7OztnSEFDNUJXLENBQU07d0NBQ0xQLFNBQVMsRUFBQyxDQUFtQjt3Q0FDN0JRLE9BQU8sRUFBRSxRQUFRLEdBQUYsQ0FBQzs0Q0FDZFgsZUFBZSxDQUFDLENBQUU7d0NBQ3BCLENBQUM7a0RBQ0YsQ0FFRDs7Ozs7Ozs7Ozs7bUhBR0RVLENBQU07Z0NBQ0xQLFNBQVMsRUFBQyxDQUFtQjtnQ0FDN0JRLE9BQU8sRUFBRSxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO29DQUNmQSxDQUFDLENBQUNDLGNBQWM7b0NBQ2hCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFtQixvQkFBRSxDQUFFO29DQUN0RGhCLGVBQWUsQ0FBQ2MsUUFBUTtnQ0FDMUIsQ0FBQzswQ0FDRixDQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoQixDQUFDO0dBOUNRaEIsTUFBTTtLQUFOQSxNQUFNO0FBZ0RmLCtEQUFlLE1BQUFELHFEQUFRLENBQUNDLE1BQU0sQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcz8zMzJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4vd2l0aEF1dGhcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IGxvZ2dlZEluVXNlciwgc2V0TG9nZ2VkSW5Vc2VyIH0pIHtcclxuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZFQ0IHBhZEI0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1vYmlsZS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxpbWcgYWx0PVwiU1ZDQyBIb21lIFBhZ2VcIiBzcmM9XCIvaW1hZ2VzL1NWQ0NMb2dvLnBuZ1wiIC8+ICovfVxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlNJU1UgSG9tZSBQYWdlXCIgc3JjPVwiL2ltYWdlcy9TdW1taXQucG5nXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIlwiIDogXCJ0ZXh0LXdoaXRlXCJ9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlLCBoZWFkZXJDc3NcIj5TaWxpY29uIFNsb3BlcyAtIFV0YWggPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkNzc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09IFwibGlnaHRcIiA/IFwiXCIgOiBcInRleHQtbXV0ZWRcIn0+XHJcbiAgICAgICAgICAgICAge2xvZ2dlZEluVXNlciAmJiBsb2dnZWRJblVzZXIubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPldlbGNvbWUge2xvZ2dlZEluVXNlcn0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldExvZ2dlZEluVXNlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciBMb2dpbiBuYW1lOlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2dnZWRJblVzZXIodXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBsb2dpblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChIZWFkZXIpOyJdLCJuYW1lcyI6WyJUaGVtZUNvbnRleHQiLCJ1c2VDb250ZXh0Iiwid2l0aEF1dGgiLCJIZWFkZXIiLCJsb2dnZWRJblVzZXIiLCJzZXRMb2dnZWRJblVzZXIiLCJ0aGVtZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsImFsdCIsInNyYyIsImgyIiwibGVuZ3RoIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsIndpbmRvdyIsInByb21wdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.js\n");

/***/ })

});