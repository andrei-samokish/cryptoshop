"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account",{

/***/ "./components/ItemsRender.tsx":
/*!************************************!*\
  !*** ./components/ItemsRender.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemsRender; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useLoadItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLoadItems */ \"./components/useLoadItems.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction ItemsRender() {\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                setItems(await (0,_useLoadItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    }, []);\n    function displayItems() {\n        return items.map((item)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[75px] h-[150px] border border-solid border-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/andrejsamokis/cryptoshop/components/ItemsRender.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"data:image/svg+xml;base64,\".concat(item.img)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrejsamokis/cryptoshop/components/ItemsRender.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: item.price\n                    }, void 0, false, {\n                        fileName: \"/Users/andrejsamokis/cryptoshop/components/ItemsRender.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrejsamokis/cryptoshop/components/ItemsRender.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-40 h-40 flex border border-solid border-black\",\n        children: displayItems()\n    }, void 0, false, {\n        fileName: \"/Users/andrejsamokis/cryptoshop/components/ItemsRender.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(ItemsRender, \"E85yb7BhBnl3/OpymRdjFiQJ97s=\");\n_c = ItemsRender;\nvar _c;\n$RefreshReg$(_c, \"ItemsRender\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW1zUmVuZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDNEM7QUFHRjtBQUUzQixTQUFTRyxjQUFjOztJQUNwQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBRWhDLEVBQUU7SUFFSkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNiLFdBQVk7WUFDWCxJQUFJO2dCQUNGSyxTQUFTLE1BQU1ILHlEQUFZQTtZQUM3QixFQUFFLE9BQU9JLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDaEI7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLFNBQVNFLGVBQWU7UUFDdEIsT0FBT0osTUFBTUssR0FBRyxDQUFDLENBQUNDLE9BQVM7WUFDekIscUJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQUlILEtBQUtJLElBQUk7Ozs7OztrQ0FDZCw4REFBQ0M7d0JBQUlDLEtBQUssNkJBQXNDLE9BQVROLEtBQUtLLEdBQUc7Ozs7OztrQ0FDL0MsOERBQUNFO2tDQUFJUCxLQUFLUSxLQUFLOzs7Ozs7Ozs7Ozs7UUFHckI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUDtRQUFJQyxXQUFVO2tCQUNaSjs7Ozs7O0FBR1AsQ0FBQztHQWhDdUJMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSXRlbXNSZW5kZXIudHN4PzMwOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGVmYXVsdFByb3ZpZGVyIH0gZnJvbSBcIi4vY29ubmVjdFByb3ZpZGVyL2RlZmF1bHRQcm92aWRlclwiO1xuaW1wb3J0IG1haW5Db250ciBmcm9tIFwiLi9tYWluQ29udHJcIjtcbmltcG9ydCB1c2VMb2FkSXRlbXMgZnJvbSBcIi4vdXNlTG9hZEl0ZW1zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1zUmVuZGVyKCkge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPFxuICAgIEFycmF5PHsgbmFtZTogc3RyaW5nOyBkZXNjOiBzdHJpbmc7IGltZzogc3RyaW5nOyBwcmljZTogbnVtYmVyIH0+XG4gID4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldEl0ZW1zKGF3YWl0IHVzZUxvYWRJdGVtcygpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBkaXNwbGF5SXRlbXMoKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs3NXB4XSBoLVsxNTBweF0gYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItYmxhY2tcIj5cbiAgICAgICAgICA8aDI+e2l0ZW0ubmFtZX08L2gyPlxuICAgICAgICAgIDxpbWcgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke2l0ZW0uaW1nfWB9IC8+XG4gICAgICAgICAgPGgzPntpdGVtLnByaWNlfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQwIGgtNDAgZmxleCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFja1wiPlxuICAgICAge2Rpc3BsYXlJdGVtcygpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTG9hZEl0ZW1zIiwiSXRlbXNSZW5kZXIiLCJpdGVtcyIsInNldEl0ZW1zIiwiZXJyb3IiLCJjb25zb2xlIiwiZGlzcGxheUl0ZW1zIiwibWFwIiwiaXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibmFtZSIsImltZyIsInNyYyIsImgzIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ItemsRender.tsx\n"));

/***/ })

});