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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemsRender; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useLoadItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLoadItems */ \"./components/useLoadItems.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction ItemsRender() {\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _s = $RefreshSig$();\n        _s(async ()=>{\n            _s();\n            setItems(await (0,_useLoadItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n        }, \"B7CrELi6Pil+3uyyn5LzdMCudiM=\", false, function() {\n            return [\n                _useLoadItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n            ];\n        })();\n    }, []);\n    function displayItems() {\n        return items.map((item, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[75px] h-[150px] border border-solid border-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/andrejsamokis/cryptoshop/components/ItemsRender.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"data:image/svg+xml;base64,\".concat(item.img)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrejsamokis/cryptoshop/components/ItemsRender.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: item.price\n                    }, void 0, false, {\n                        fileName: \"/Users/andrejsamokis/cryptoshop/components/ItemsRender.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/andrejsamokis/cryptoshop/components/ItemsRender.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-40 h-40 flex border border-solid border-black\",\n        children: displayItems()\n    }, void 0, false, {\n        fileName: \"/Users/andrejsamokis/cryptoshop/components/ItemsRender.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(ItemsRender, \"E85yb7BhBnl3/OpymRdjFiQJ97s=\");\n_c = ItemsRender;\nvar _c;\n$RefreshReg$(_c, \"ItemsRender\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW1zUmVuZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDRjtBQUUzQixTQUFTRyxjQUFjOztJQUNwQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBRWhDLEVBQUU7SUFFSkQsZ0RBQVNBLENBQUMsSUFBTTs7UUFDZCxHQUFDLFVBQVk7O1lBQ1hLLFNBQVMsTUFBTUgseURBQVlBO1FBQzdCOztnQkFEaUJBLHFEQUFZQTs7O0lBRS9CLEdBQUcsRUFBRTtJQUVMLFNBQVNJLGVBQWU7UUFDdEIsT0FBT0YsTUFBTUcsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7WUFDaEMscUJBQ0UsOERBQUNDO2dCQUNDQyxXQUFVOztrQ0FFViw4REFBQ0M7a0NBQUlKLEtBQUtLLElBQUk7Ozs7OztrQ0FDZCw4REFBQ0M7d0JBQUlDLEtBQUssNkJBQXNDLE9BQVRQLEtBQUtNLEdBQUc7Ozs7OztrQ0FDL0MsOERBQUNFO2tDQUFJUixLQUFLUyxLQUFLOzs7Ozs7O2VBSFZSOzs7OztRQU1YO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWkw7Ozs7OztBQUdQLENBQUM7R0E5QnVCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0l0ZW1zUmVuZGVyLnRzeD8zMDk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2FkSXRlbXMgZnJvbSBcIi4vdXNlTG9hZEl0ZW1zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1zUmVuZGVyKCkge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPFxuICAgIEFycmF5PHsgbmFtZTogc3RyaW5nOyBkZXNjOiBzdHJpbmc7IGltZzogc3RyaW5nOyBwcmljZTogbnVtYmVyIH0+XG4gID4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHNldEl0ZW1zKGF3YWl0IHVzZUxvYWRJdGVtcygpKTtcbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gZGlzcGxheUl0ZW1zKCkge1xuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bNzVweF0gaC1bMTUwcHhdIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWJsYWNrXCJcbiAgICAgICAgICBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8aDI+e2l0ZW0ubmFtZX08L2gyPlxuICAgICAgICAgIDxpbWcgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke2l0ZW0uaW1nfWB9IC8+XG4gICAgICAgICAgPGgzPntpdGVtLnByaWNlfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQwIGgtNDAgZmxleCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFja1wiPlxuICAgICAge2Rpc3BsYXlJdGVtcygpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTG9hZEl0ZW1zIiwiSXRlbXNSZW5kZXIiLCJpdGVtcyIsInNldEl0ZW1zIiwiZGlzcGxheUl0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJuYW1lIiwiaW1nIiwic3JjIiwiaDMiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ItemsRender.tsx\n"));

/***/ })

});