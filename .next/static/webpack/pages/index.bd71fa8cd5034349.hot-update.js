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

/***/ "./components/connectProvider/сontrWithSigner.ts":
/*!*******************************************************!*\
  !*** ./components/connectProvider/сontrWithSigner.ts ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _metamaskProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metamaskProvider */ \"./components/connectProvider/metamaskProvider.ts\");\n/* harmony import */ var _typechain_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../typechain-types */ \"./typechain-types/index.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _defaultProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultProvider */ \"./components/connectProvider/defaultProvider.ts\");\n\n\n\n\nconst contrWithSigner = ()=>{\n    const mainContr = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(\"0x89d546Dd87eFFfF1E41cBFa57D6077b2c01c3Cd4\", _typechain_types__WEBPACK_IMPORTED_MODULE_1__.CryptoShop__factory.abi, _defaultProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const signer = _metamaskProvider__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSigner();\n    return mainContr.connect(signer);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (contrWithSigner);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nvbm5lY3RQcm92aWRlci/RgW9udHJXaXRoU2lnbmVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtEO0FBQ3NCO0FBQ3hDO0FBQ2dCO0FBRWhELE1BQU1JLGtCQUFrQixJQUFrQjtJQUN4QyxNQUFNQyxZQUFZLElBQUlILG1EQUFlLENBQ25DSyw0Q0FBNkMsRUFDN0NOLHFFQUF1QixFQUN2QkUsd0RBQWVBO0lBRWpCLE1BQU1RLFNBQVNYLG1FQUEyQjtJQUMxQyxPQUFPLFVBQTBCYSxPQUFPLENBQUNGO0FBQzNDO0FBRUEsK0RBQWVQLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb25uZWN0UHJvdmlkZXIv0YFvbnRyV2l0aFNpZ25lci50cz9lN2Y0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXRhbWFza1Byb3ZpZGVyIGZyb20gXCIuL21ldGFtYXNrUHJvdmlkZXJcIjtcbmltcG9ydCB7IENyeXB0b1Nob3AsIENyeXB0b1Nob3BfX2ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vdHlwZWNoYWluLXR5cGVzXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgZGVmYXVsdFByb3ZpZGVyIGZyb20gXCIuL2RlZmF1bHRQcm92aWRlclwiO1xuXG5jb25zdCBjb250cldpdGhTaWduZXIgPSAoKTogQ3J5cHRvU2hvcCA9PiB7XG4gIGNvbnN0IG1haW5Db250ciA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUFJTl9DT05UUkFDVF9BRERSRVNTIGFzIHN0cmluZyxcbiAgICBDcnlwdG9TaG9wX19mYWN0b3J5LmFiaSxcbiAgICBkZWZhdWx0UHJvdmlkZXJcbiAgKTtcbiAgY29uc3Qgc2lnbmVyID0gbWV0YW1hc2tQcm92aWRlciEuZ2V0U2lnbmVyKCk7XG4gIHJldHVybiAobWFpbkNvbnRyIGFzIENyeXB0b1Nob3ApLmNvbm5lY3Qoc2lnbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyV2l0aFNpZ25lcjtcbiJdLCJuYW1lcyI6WyJtZXRhbWFza1Byb3ZpZGVyIiwiQ3J5cHRvU2hvcF9fZmFjdG9yeSIsImV0aGVycyIsImRlZmF1bHRQcm92aWRlciIsImNvbnRyV2l0aFNpZ25lciIsIm1haW5Db250ciIsIkNvbnRyYWN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01BSU5fQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsInNpZ25lciIsImdldFNpZ25lciIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/connectProvider/сontrWithSigner.ts\n"));

/***/ })

});