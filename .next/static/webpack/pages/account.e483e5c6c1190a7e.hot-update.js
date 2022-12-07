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

/***/ "./pages/account.tsx":
/*!***************************!*\
  !*** ./pages/account.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectProvider/contrWithSigner */ \"./components/connectProvider/contrWithSigner.ts\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_OwnedItemsRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/OwnedItemsRender */ \"./components/OwnedItemsRender.tsx\");\n/* harmony import */ var _components_SubmitForSalePortal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SubmitForSalePortal */ \"./components/SubmitForSalePortal.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Account() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isSeller, setIsSeller] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const contr = await (0,_components_connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            setIsSeller(await contr.hasRole(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.solidityKeccak256([\n                \"string\"\n            ], [\n                \"SELLER_ROLE\"\n            ]), await contr.signer.getAddress()));\n        })();\n    }, []);\n    async function becomeSellerClick() {\n        try {\n            await (await (0,_components_connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()).becomeSeller({\n                gasLimit: 50000\n            });\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    function buttonDisplayHandler() {\n        if (typeof isSeller == \"undefined\") return null;\n        else if (isSeller === true) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubmitForSalePortal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            open: open,\n            setOpen: setOpen\n        }, void 0, false, {\n            fileName: \"/Users/andrejsamokis/cryptoshop/pages/account.tsx\",\n            lineNumber: 36,\n            columnNumber: 40\n        }, this);\n        else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n            primary: true,\n            onClick: becomeSellerClick,\n            children: \"Become seller\"\n        }, void 0, false, {\n            fileName: \"/Users/andrejsamokis/cryptoshop/pages/account.tsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            buttonDisplayHandler(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                onClick: ()=>setOpen(true),\n                children: \"Submit item for sale\"\n            }, void 0, false, {\n                fileName: \"/Users/andrejsamokis/cryptoshop/pages/account.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Your items:\"\n            }, void 0, false, {\n                fileName: \"/Users/andrejsamokis/cryptoshop/pages/account.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_OwnedItemsRender__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrejsamokis/cryptoshop/pages/account.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrejsamokis/cryptoshop/pages/account.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Account, \"xR8k/+P1FPEinyqI3ab5Ixe3Clc=\");\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFnQztBQUNZO0FBQ0Q7QUFDaUM7QUFDbEM7QUFFb0I7QUFDTTtBQUVwRSxTQUFTUSxVQUFVOztJQUNqQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBO0lBRXhDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2IsV0FBWTtZQUNYLE1BQU1ZLFFBQVEsTUFBTVQsdUZBQWVBO1lBQ25DUSxZQUNFLE1BQU1DLE1BQU1DLE9BQU8sQ0FDakJkLGtFQUE4QixDQUFDO2dCQUFDO2FBQVMsRUFBRTtnQkFBQzthQUFjLEdBQzFELE1BQU1hLE1BQU1JLE1BQU0sQ0FBQ0MsVUFBVTtRQUduQztJQUNGLEdBQUcsRUFBRTtJQUVMLGVBQWVDLG9CQUFvQjtRQUNqQyxJQUFJO1lBQ0YsTUFBTSxDQUFDLE1BQU1mLHVGQUFlQSxFQUFDLEVBQUdnQixZQUFZLENBQUM7Z0JBQUVDLFVBQVU7WUFBTTtRQUNqRSxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEsU0FBU0UsdUJBQXVCO1FBQzlCLElBQUksT0FBT2IsWUFBWSxhQUFhLE9BQU8sSUFBSTthQUMxQyxJQUFJQSxhQUFhLElBQUksRUFBRSxxQkFBTyw4REFBQ0osdUVBQW1CQTtZQUFDRSxNQUFNQTtZQUFNQyxTQUFTQTs7Ozs7O2FBRTNFLHFCQUNFLDhEQUFDUCxxREFBTUE7WUFBQ3NCLE9BQU87WUFBQ0MsU0FBU1A7c0JBQW1COzs7Ozs7SUFJbEQ7SUFFQSxxQkFDRSw4REFBQ2QsMERBQU1BOztZQUNKbUI7MEJBQ0QsOERBQUNyQixxREFBTUE7Z0JBQUN1QixTQUFTLElBQU1oQixRQUFRLElBQUk7MEJBQUc7Ozs7OzswQkFDdEMsOERBQUNpQjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDckIsb0VBQWdCQTs7Ozs7Ozs7Ozs7QUFHdkI7R0EzQ1NFO0tBQUFBO0FBNkNULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjY291bnQudHN4PzlhNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgY29udHJXaXRoU2lnbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Nvbm5lY3RQcm92aWRlci9jb250cldpdGhTaWduZXJcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgbWFpbkNvbnRyIGZyb20gXCIuLi9jb21wb25lbnRzL21haW5Db250clwiO1xuaW1wb3J0IE93bmVkSXRlbXNSZW5kZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvT3duZWRJdGVtc1JlbmRlclwiO1xuaW1wb3J0IFN1Ym1pdEZvclNhbGVQb3J0YWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3VibWl0Rm9yU2FsZVBvcnRhbFwiO1xuXG5mdW5jdGlvbiBBY2NvdW50KCkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1NlbGxlciwgc2V0SXNTZWxsZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ciA9IGF3YWl0IGNvbnRyV2l0aFNpZ25lcigpO1xuICAgICAgc2V0SXNTZWxsZXIoXG4gICAgICAgIGF3YWl0IGNvbnRyLmhhc1JvbGUoXG4gICAgICAgICAgZXRoZXJzLnV0aWxzLnNvbGlkaXR5S2VjY2FrMjU2KFtcInN0cmluZ1wiXSwgW1wiU0VMTEVSX1JPTEVcIl0pLFxuICAgICAgICAgIGF3YWl0IGNvbnRyLnNpZ25lci5nZXRBZGRyZXNzKClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gYmVjb21lU2VsbGVyQ2xpY2soKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IChhd2FpdCBjb250cldpdGhTaWduZXIoKSkuYmVjb21lU2VsbGVyKHsgZ2FzTGltaXQ6IDUwMDAwIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidXR0b25EaXNwbGF5SGFuZGxlcigpIHtcbiAgICBpZiAodHlwZW9mIGlzU2VsbGVyID09IFwidW5kZWZpbmVkXCIpIHJldHVybiBudWxsO1xuICAgIGVsc2UgaWYgKGlzU2VsbGVyID09PSB0cnVlKSByZXR1cm4gPFN1Ym1pdEZvclNhbGVQb3J0YWwgb3Blbj17b3Blbn0gc2V0T3Blbj17c2V0T3Blbn0gLz47XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IG9uQ2xpY2s9e2JlY29tZVNlbGxlckNsaWNrfT5cbiAgICAgICAgICBCZWNvbWUgc2VsbGVyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtidXR0b25EaXNwbGF5SGFuZGxlcigpfVxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfT5TdWJtaXQgaXRlbSBmb3Igc2FsZTwvQnV0dG9uPlxuICAgICAgPGgxPllvdXIgaXRlbXM6PC9oMT5cbiAgICAgIDxPd25lZEl0ZW1zUmVuZGVyIC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJjb250cldpdGhTaWduZXIiLCJMYXlvdXQiLCJPd25lZEl0ZW1zUmVuZGVyIiwiU3VibWl0Rm9yU2FsZVBvcnRhbCIsIkFjY291bnQiLCJvcGVuIiwic2V0T3BlbiIsImlzU2VsbGVyIiwic2V0SXNTZWxsZXIiLCJjb250ciIsImhhc1JvbGUiLCJ1dGlscyIsInNvbGlkaXR5S2VjY2FrMjU2Iiwic2lnbmVyIiwiZ2V0QWRkcmVzcyIsImJlY29tZVNlbGxlckNsaWNrIiwiYmVjb21lU2VsbGVyIiwiZ2FzTGltaXQiLCJlcnJvciIsImNvbnNvbGUiLCJidXR0b25EaXNwbGF5SGFuZGxlciIsInByaW1hcnkiLCJvbkNsaWNrIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/account.tsx\n"));

/***/ })

});