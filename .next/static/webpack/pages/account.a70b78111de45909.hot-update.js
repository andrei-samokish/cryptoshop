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

/***/ "./components/ownedItemsRender.tsx":
/*!*****************************************!*\
  !*** ./components/ownedItemsRender.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OwnedItemsRender; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useLoadPersonalItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLoadPersonalItems */ \"./components/useLoadPersonalItems.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction OwnedItemsRender() {\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            try {\n                setItems(await (0,_useLoadPersonalItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n            } catch (error) {\n                console.error(error);\n            }\n        })();\n    }, []);\n    function displayItems() {\n        return items.map((item)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[75px] h-[150px] border border-solid border-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/Users/andrejsamokis/cryptoshop/components/ownedItemsRender.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"data:image/svg+xml;base64,\".concat(item.img)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrejsamokis/cryptoshop/components/ownedItemsRender.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: item.price\n                    }, void 0, false, {\n                        fileName: \"/Users/andrejsamokis/cryptoshop/components/ownedItemsRender.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: item.amount\n                    }, void 0, false, {\n                        fileName: \"/Users/andrejsamokis/cryptoshop/components/ownedItemsRender.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrejsamokis/cryptoshop/components/ownedItemsRender.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-40 h-40 flex border border-solid border-black\",\n        children: displayItems()\n    }, void 0, false, {\n        fileName: \"/Users/andrejsamokis/cryptoshop/components/ownedItemsRender.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(OwnedItemsRender, \"E85yb7BhBnl3/OpymRdjFiQJ97s=\");\n_c = OwnedItemsRender;\nvar _c;\n$RefreshReg$(_c, \"OwnedItemsRender\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL293bmVkSXRlbXNSZW5kZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUM0QztBQUljO0FBRTNDLFNBQVNHLG1CQUFtQjs7SUFDekMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQVFoQyxFQUFFO0lBRUpELGdEQUFTQSxDQUFDLElBQU07UUFDYixXQUFZO1lBQ1gsSUFBSTtnQkFDRkssU0FBUyxNQUFNSCxpRUFBb0JBO1lBQ3JDLEVBQUUsT0FBT0ksT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNoQjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwsU0FBU0UsZUFBZTtRQUN0QixPQUFPSixNQUFNSyxHQUFHLENBQUMsQ0FBQ0MsT0FBUztZQUN6QixxQkFDRSw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FBSUgsS0FBS0ksSUFBSTs7Ozs7O2tDQUNkLDhEQUFDQzt3QkFBSUMsS0FBSyw2QkFBc0MsT0FBVE4sS0FBS0ssR0FBRzs7Ozs7O2tDQUMvQyw4REFBQ0U7a0NBQUlQLEtBQUtRLEtBQUs7Ozs7OztrQ0FDZiw4REFBQ0Q7a0NBQUlQLEtBQUtTLE1BQU07Ozs7Ozs7Ozs7OztRQUd0QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNSO1FBQUlDLFdBQVU7a0JBQ1pKOzs7Ozs7QUFHUCxDQUFDO0dBdkN1Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vd25lZEl0ZW1zUmVuZGVyLnRzeD9iYjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRlZmF1bHRQcm92aWRlciB9IGZyb20gXCIuL2Nvbm5lY3RQcm92aWRlci9kZWZhdWx0UHJvdmlkZXJcIjtcbmltcG9ydCBtYWluQ29udHIgZnJvbSBcIi4vbWFpbkNvbnRyXCI7XG5pbXBvcnQgdXNlTG9hZEl0ZW1zIGZyb20gXCIuL3VzZUxvYWRJdGVtc1wiO1xuaW1wb3J0IHVzZUxvYWRQZXJzb25hbEl0ZW1zIGZyb20gXCIuL3VzZUxvYWRQZXJzb25hbEl0ZW1zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE93bmVkSXRlbXNSZW5kZXIoKSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGU8XG4gICAgQXJyYXk8e1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgZGVzYzogc3RyaW5nO1xuICAgICAgaW1nOiBzdHJpbmc7XG4gICAgICBwcmljZTogbnVtYmVyO1xuICAgICAgYW1vdW50OiBudW1iZXI7XG4gICAgfT5cbiAgPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0SXRlbXMoYXdhaXQgdXNlTG9hZFBlcnNvbmFsSXRlbXMoKSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gZGlzcGxheUl0ZW1zKCkge1xuICAgIHJldHVybiBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNzVweF0gaC1bMTUwcHhdIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWJsYWNrXCI+XG4gICAgICAgICAgPGgyPntpdGVtLm5hbWV9PC9oMj5cbiAgICAgICAgICA8aW1nIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHtpdGVtLmltZ31gfSAvPlxuICAgICAgICAgIDxoMz57aXRlbS5wcmljZX08L2gzPlxuICAgICAgICAgIDxoMz57aXRlbS5hbW91bnR9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctNDAgaC00MCBmbGV4IGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWJsYWNrXCI+XG4gICAgICB7ZGlzcGxheUl0ZW1zKCl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VMb2FkUGVyc29uYWxJdGVtcyIsIk93bmVkSXRlbXNSZW5kZXIiLCJpdGVtcyIsInNldEl0ZW1zIiwiZXJyb3IiLCJjb25zb2xlIiwiZGlzcGxheUl0ZW1zIiwibWFwIiwiaXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibmFtZSIsImltZyIsInNyYyIsImgzIiwicHJpY2UiLCJhbW91bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ownedItemsRender.tsx\n"));

/***/ }),

/***/ "./components/useLoadPersonalItems.ts":
/*!********************************************!*\
  !*** ./components/useLoadPersonalItems.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useLoadPersonalItems; }\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connectProvider/contrWithSigner */ \"./components/connectProvider/contrWithSigner.ts\");\n/* harmony import */ var _mainContr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContr */ \"./components/mainContr.ts\");\n\n\n\nasync function useLoadPersonalItems() {\n    let items = [];\n    let i = 0;\n    const contract = await (0,_connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    while(true){\n        const id = await contract.ownedItems(await contract.signer.getAddress(), i, 0);\n        console.log(contract.ownedItems(await contract.signer.getAddress(), i, 0));\n        const amount = await contract.ownedItems(await contract.signer.getAddress(), i, 1);\n        const [desc_, img, , price] = await _mainContr__WEBPACK_IMPORTED_MODULE_1__[\"default\"].items(id);\n        const name = await _mainContr__WEBPACK_IMPORTED_MODULE_1__[\"default\"].names(id);\n        const item = {\n            name,\n            desc: desc_,\n            img,\n            price: parseInt(ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatEther(price)),\n            amount: parseInt(ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatEther(amount))\n        };\n        items = [\n            ...items,\n            item\n        ];\n        i++;\n    }\n    return items;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZUxvYWRQZXJzb25hbEl0ZW1zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0M7QUFDZ0M7QUFDNUI7QUFFckIsZUFBZUcsdUJBQXVCO0lBQ25ELElBQUlDLFFBTUMsRUFBRTtJQUVQLElBQUlDLElBQUk7SUFFUixNQUFNQyxXQUFXLE1BQU1MLDRFQUFlQTtJQUV0QyxNQUFPLElBQUksQ0FBRTtRQUNYLE1BQU1NLEtBQUssTUFBTUQsU0FBU0UsVUFBVSxDQUNsQyxNQUFNRixTQUFTRyxNQUFNLENBQUNDLFVBQVUsSUFDaENMLEdBQ0E7UUFHRk0sUUFBUUMsR0FBRyxDQUFDTixTQUFTRSxVQUFVLENBQUMsTUFBTUYsU0FBU0csTUFBTSxDQUFDQyxVQUFVLElBQUlMLEdBQUc7UUFDdkUsTUFBTVEsU0FBUyxNQUFNUCxTQUFTRSxVQUFVLENBQ3RDLE1BQU1GLFNBQVNHLE1BQU0sQ0FBQ0MsVUFBVSxJQUNoQ0wsR0FDQTtRQUdGLE1BQU0sQ0FBQ1MsT0FBT0MsT0FBT0MsTUFBTSxHQUFHLE1BQU1kLHdEQUFlLENBQUNLO1FBQ3BELE1BQU1VLE9BQU8sTUFBTWYsd0RBQWUsQ0FBQ0s7UUFFbkMsTUFBTVksT0FBTztZQUNYRjtZQUNBRyxNQUFNTjtZQUNOQztZQUNBQyxPQUFPSyxTQUFTckIsNERBQXdCLENBQUNnQjtZQUN6Q0gsUUFBUVEsU0FBU3JCLDREQUF3QixDQUFDYTtRQUM1QztRQUNBVCxRQUFRO2VBQUlBO1lBQU9lO1NBQUs7UUFDeEJkO0lBQ0Y7SUFFQSxPQUFPRDtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VMb2FkUGVyc29uYWxJdGVtcy50cz9jM2FmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBjb250cldpdGhTaWduZXIgZnJvbSBcIi4vY29ubmVjdFByb3ZpZGVyL2NvbnRyV2l0aFNpZ25lclwiO1xuaW1wb3J0IG1haW5Db250ciBmcm9tIFwiLi9tYWluQ29udHJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXNlTG9hZFBlcnNvbmFsSXRlbXMoKSB7XG4gIGxldCBpdGVtczogQXJyYXk8e1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjOiBzdHJpbmc7XG4gICAgaW1nOiBzdHJpbmc7XG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgfT4gPSBbXTtcblxuICBsZXQgaSA9IDA7XG5cbiAgY29uc3QgY29udHJhY3QgPSBhd2FpdCBjb250cldpdGhTaWduZXIoKTtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IGlkID0gYXdhaXQgY29udHJhY3Qub3duZWRJdGVtcyhcbiAgICAgIGF3YWl0IGNvbnRyYWN0LnNpZ25lci5nZXRBZGRyZXNzKCksXG4gICAgICBpLFxuICAgICAgMFxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhjb250cmFjdC5vd25lZEl0ZW1zKGF3YWl0IGNvbnRyYWN0LnNpZ25lci5nZXRBZGRyZXNzKCksIGksIDApKTtcbiAgICBjb25zdCBhbW91bnQgPSBhd2FpdCBjb250cmFjdC5vd25lZEl0ZW1zKFxuICAgICAgYXdhaXQgY29udHJhY3Quc2lnbmVyLmdldEFkZHJlc3MoKSxcbiAgICAgIGksXG4gICAgICAxXG4gICAgKTtcblxuICAgIGNvbnN0IFtkZXNjXywgaW1nLCAsIHByaWNlXSA9IGF3YWl0IG1haW5Db250ci5pdGVtcyhpZCk7XG4gICAgY29uc3QgbmFtZSA9IGF3YWl0IG1haW5Db250ci5uYW1lcyhpZCk7XG5cbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGRlc2M6IGRlc2NfLFxuICAgICAgaW1nLFxuICAgICAgcHJpY2U6IHBhcnNlSW50KGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihwcmljZSkpLFxuICAgICAgYW1vdW50OiBwYXJzZUludChldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoYW1vdW50KSksXG4gICAgfTtcbiAgICBpdGVtcyA9IFsuLi5pdGVtcywgaXRlbV07XG4gICAgaSsrO1xuICB9XG5cbiAgcmV0dXJuIGl0ZW1zO1xufVxuIl0sIm5hbWVzIjpbImV0aGVycyIsImNvbnRyV2l0aFNpZ25lciIsIm1haW5Db250ciIsInVzZUxvYWRQZXJzb25hbEl0ZW1zIiwiaXRlbXMiLCJpIiwiY29udHJhY3QiLCJpZCIsIm93bmVkSXRlbXMiLCJzaWduZXIiLCJnZXRBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImFtb3VudCIsImRlc2NfIiwiaW1nIiwicHJpY2UiLCJuYW1lIiwibmFtZXMiLCJpdGVtIiwiZGVzYyIsInBhcnNlSW50IiwidXRpbHMiLCJmb3JtYXRFdGhlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/useLoadPersonalItems.ts\n"));

/***/ }),

/***/ "./pages/account.tsx":
/*!***************************!*\
  !*** ./pages/account.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BecomeSellerButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BecomeSellerButton */ \"./components/BecomeSellerButton.tsx\");\n/* harmony import */ var _components_ItemsRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ItemsRender */ \"./components/ItemsRender.tsx\");\n/* harmony import */ var _components_LogInButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LogInButton */ \"./components/LogInButton.tsx\");\n/* harmony import */ var _components_ownedItemsRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ownedItemsRender */ \"./components/ownedItemsRender.tsx\");\n\n\n\n\n\nfunction Account() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ItemsRender__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrejsamokis/cryptoshop/pages/account.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BecomeSellerButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrejsamokis/cryptoshop/pages/account.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LogInButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrejsamokis/cryptoshop/pages/account.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ownedItemsRender__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrejsamokis/cryptoshop/pages/account.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBa0U7QUFDZDtBQUNBO0FBQ1U7QUFFOUQsU0FBU0ksVUFBVTtJQUNqQixxQkFDRTs7MEJBQ0UsOERBQUNILCtEQUFXQTs7Ozs7MEJBQ1osOERBQUNELHNFQUFrQkE7Ozs7OzBCQUNuQiw4REFBQ0UsK0RBQVdBOzs7OzswQkFDWiw4REFBQ0Msb0VBQWdCQTs7Ozs7OztBQUd2QjtLQVRTQztBQVdULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjY291bnQudHN4PzlhNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJlY29tZVNlbGxlckJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CZWNvbWVTZWxsZXJCdXR0b25cIjtcbmltcG9ydCBJdGVtc1JlbmRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9JdGVtc1JlbmRlclwiO1xuaW1wb3J0IExvZ2luQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ0luQnV0dG9uXCI7XG5pbXBvcnQgT3duZWRJdGVtc1JlbmRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9vd25lZEl0ZW1zUmVuZGVyXCI7XG5cbmZ1bmN0aW9uIEFjY291bnQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJdGVtc1JlbmRlciAvPlxuICAgICAgPEJlY29tZVNlbGxlckJ1dHRvbiAvPlxuICAgICAgPExvZ2luQnV0dG9uIC8+XG4gICAgICA8T3duZWRJdGVtc1JlbmRlciAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50O1xuIl0sIm5hbWVzIjpbIkJlY29tZVNlbGxlckJ1dHRvbiIsIkl0ZW1zUmVuZGVyIiwiTG9naW5CdXR0b24iLCJPd25lZEl0ZW1zUmVuZGVyIiwiQWNjb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/account.tsx\n"));

/***/ })

});