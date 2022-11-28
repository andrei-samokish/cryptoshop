"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./components/AddItem.tsx":
/*!********************************!*\
  !*** ./components/AddItem.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddItem\": function() { return /* binding */ AddItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ \"./components/Input.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/api/image */ \"./pages/api/image.ts\");\n/* harmony import */ var _connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connectProvider/contrWithSigner */ \"./components/connectProvider/contrWithSigner.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AddItem() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [desc, setDesc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [stock, setStock] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [valid, setValid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [selectedFileUrl, setSelectedFileUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function handleUploadImage() {\n        setUploading(true);\n        try {\n            if (!selectedFile) return;\n            const formData = new FormData();\n            formData.append(\"myImage\", selectedFile);\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/image\", formData);\n            console.log(data);\n        } catch (error) {\n            var ref;\n            console.log((ref = error.response) === null || ref === void 0 ? void 0 : ref.data);\n        }\n        setUploading(false);\n    }\n    function handleFormSubmit(event) {\n        event.preventDefault();\n        console.log(_pages_api_image__WEBPACK_IMPORTED_MODULE_3__.SVGFormula);\n        if (name && desc && selectedFile && price && stock) {\n            handleUploadImage();\n            (0,_connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().submitCommodity(name, desc, _pages_api_image__WEBPACK_IMPORTED_MODULE_3__.SVGFormula, price, stock);\n            console.log(_pages_api_image__WEBPACK_IMPORTED_MODULE_3__.SVGFormula);\n        } else {\n            setValid(\"it is nessesary to fill all the fields\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ui-form\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleFormSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"w-[0.1px] h-[0.1px] overflow-hidden absolute z-[-1]\",\n                            type: \"file\",\n                            id: \"file\",\n                            onChange: (param)=>{\n                                let { target  } = param;\n                                if (target.files) {\n                                    const file = target.files[0];\n                                    const fileUrl = URL.createObjectURL(file);\n                                    setSelectedFileUrl(fileUrl);\n                                    setSelectedFile(file);\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"file\",\n                            className: \"text-center w-[150px] h-[50px] font-mono font-medium mx-[25px] my-[15px] bg-slate-400 cursor-pointer border-black border-[2px] block hover:bg-slate-600 hover:text-white hover:border-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"pt-[10px] font-mono font-medium text-base\",\n                                children: \"Choose an image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: selectedFileUrl\n                        }, void 0, false, {\n                            fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"metadata-input\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            placeholder: \"enter the name of the product\",\n                            on_change: (e)=>setName(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            placeholder: \"enter the description\",\n                            on_change: (e)=>setDesc(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            placeholder: \"enter the price\",\n                            on_change: (e)=>setPrice(Number(e.target.value))\n                        }, void 0, false, {\n                            fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            placeholder: \"enter stock\",\n                            on_change: (e)=>setStock(Number(e.target.value))\n                        }, void 0, false, {\n                            fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                valid === \"\" ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"m-[auto]\",\n                    children: valid\n                }, void 0, false, {\n                    fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 30\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleFormSubmit,\n                    disabled: uploading,\n                    style: {\n                        opacity: uploading ? \".5\" : \"1\"\n                    },\n                    className: \"block border-[2px] w-[100px] h-[50px] mx-[25px] my-[15px]\",\n                    children: uploading ? \"Uploading..\" : \"Upload\"\n                }, void 0, false, {\n                    fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/andrejsamokis/cryptoshop/components/AddItem.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(AddItem, \"eYJRuFoajX4ix71r23F6R6TZhQs=\");\n_c = AddItem;\n\nvar _c;\n$RefreshReg$(_c, \"AddItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCx5Q0FBS0E7NEJBQ0p1RCxhQUFZOzRCQUNaQyxXQUFXLENBQUNDLElBQU05QyxTQUFTZ0QsT0FBT0YsRUFBRWIsTUFBTSxDQUFDYyxLQUFLOzs7Ozs7c0NBQ2xELDhEQUFDMUQseUNBQUtBOzRCQUNKdUQsYUFBWTs0QkFDWkMsV0FBVyxDQUFDQyxJQUFNNUMsU0FBUzhDLE9BQU9GLEVBQUViLE1BQU0sQ0FBQ2MsS0FBSzs7Ozs7Ozs7Ozs7O2dCQUVuRDVDLFVBQVUsS0FBSyxtQkFBSyw4REFBQ3NDO29CQUFHZixXQUFVOzhCQUFZdkI7Ozs7O3dCQUFXOzhCQUMxRCw4REFBQzhDO29CQUNDQyxTQUFTN0I7b0JBQ1Q4QixVQUFVOUM7b0JBQ1YrQyxPQUFPO3dCQUFFQyxTQUFTaEQsWUFBWSxPQUFPLEdBQUc7b0JBQUM7b0JBQ3pDcUIsV0FBVTs4QkFDVHJCLFlBQVksZ0JBQWdCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9DO0dBM0ZTWDtLQUFBQTtBQTZGVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZEl0ZW0udHN4P2JiZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU1ZHRm9ybXVsYSB9IGZyb20gXCIuLi9wYWdlcy9hcGkvaW1hZ2VcIjtcbmltcG9ydCBjb250cldpdGhTaWduZXIgZnJvbSBcIi4vY29ubmVjdFByb3ZpZGVyL2NvbnRyV2l0aFNpZ25lclwiO1xuXG5mdW5jdGlvbiBBZGRJdGVtKCkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Rlc2MsIHNldERlc2NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3N0b2NrLCBzZXRTdG9ja10gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbdmFsaWQsIHNldFZhbGlkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXBsb2FkaW5nLCBzZXRVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gdXNlU3RhdGU8QmxvYiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2VsZWN0ZWRGaWxlVXJsLCBzZXRTZWxlY3RlZEZpbGVVcmxdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVXBsb2FkSW1hZ2UoKSB7XG4gICAgc2V0VXBsb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXNlbGVjdGVkRmlsZSkgcmV0dXJuO1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm15SW1hZ2VcIiwgc2VsZWN0ZWRGaWxlKTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvaW1hZ2VcIiwgZm9ybURhdGEpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2U/LmRhdGEpO1xuICAgIH1cbiAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudDogRm9ybUV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnNvbGUubG9nKFNWR0Zvcm11bGEpO1xuXG4gICAgaWYgKG5hbWUgJiYgZGVzYyAmJiBzZWxlY3RlZEZpbGUgJiYgcHJpY2UgJiYgc3RvY2spIHtcbiAgICAgIGhhbmRsZVVwbG9hZEltYWdlKCk7XG4gICAgICBjb250cldpdGhTaWduZXIoKS5zdWJtaXRDb21tb2RpdHkobmFtZSwgZGVzYywgU1ZHRm9ybXVsYSwgcHJpY2UsIHN0b2NrKTtcbiAgICAgIGNvbnNvbGUubG9nKFNWR0Zvcm11bGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRWYWxpZChcIml0IGlzIG5lc3Nlc2FyeSB0byBmaWxsIGFsbCB0aGUgZmllbGRzXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1aS1mb3JtXCI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bMC4xcHhdIGgtWzAuMXB4XSBvdmVyZmxvdy1oaWRkZW4gYWJzb2x1dGUgei1bLTFdXCJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGlkPVwiZmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldC5maWxlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0YXJnZXQuZmlsZXNbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZVVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRGaWxlVXJsKGZpbGVVcmwpO1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkRmlsZShmaWxlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cImZpbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1bMTUwcHhdIGgtWzUwcHhdIGZvbnQtbW9ub1xuICAgICAgICAgICAgICAgICAgICBmb250LW1lZGl1bSBteC1bMjVweF0gbXktWzE1cHhdIGJnLXNsYXRlLTQwMCBjdXJzb3ItcG9pbnRlciBcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJsYWNrIGJvcmRlci1bMnB4XSBibG9ja1xuICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1zbGF0ZS02MDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwdC1bMTBweF0gZm9udC1tb25vIGZvbnQtbWVkaXVtIHRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICBDaG9vc2UgYW4gaW1hZ2VcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRGaWxlVXJsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhZGF0YS1pbnB1dFwiPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciB0aGUgbmFtZSBvZiB0aGUgcHJvZHVjdFwiXG4gICAgICAgICAgICBvbl9jaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0+PC9JbnB1dD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgdGhlIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIG9uX2NoYW5nZT17KGUpID0+IHNldERlc2MoZS50YXJnZXQudmFsdWUpfT48L0lucHV0PlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciB0aGUgcHJpY2VcIlxuICAgICAgICAgICAgb25fY2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9PjwvSW5wdXQ+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIHN0b2NrXCJcbiAgICAgICAgICAgIG9uX2NoYW5nZT17KGUpID0+IHNldFN0b2NrKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT48L0lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3ZhbGlkID09PSBcIlwiID8gXCJcIiA6IDxoMSBjbGFzc05hbWU9XCJtLVthdXRvXVwiPnt2YWxpZH08L2gxPn1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZvcm1TdWJtaXR9XG4gICAgICAgICAgZGlzYWJsZWQ9e3VwbG9hZGluZ31cbiAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiB1cGxvYWRpbmcgPyBcIi41XCIgOiBcIjFcIiB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGJvcmRlci1bMnB4XSB3LVsxMDBweF0gaC1bNTBweF0gbXgtWzI1cHhdIG15LVsxNXB4XVwiPlxuICAgICAgICAgIHt1cGxvYWRpbmcgPyBcIlVwbG9hZGluZy4uXCIgOiBcIlVwbG9hZFwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IHsgQWRkSXRlbSB9O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiSW5wdXQiLCJSZWFjdCIsInVzZVN0YXRlIiwiU1ZHRm9ybXVsYSIsImNvbnRyV2l0aFNpZ25lciIsIkFkZEl0ZW0iLCJuYW1lIiwic2V0TmFtZSIsImRlc2MiLCJzZXREZXNjIiwicHJpY2UiLCJzZXRQcmljZSIsInN0b2NrIiwic2V0U3RvY2siLCJ2YWxpZCIsInNldFZhbGlkIiwidXBsb2FkaW5nIiwic2V0VXBsb2FkaW5nIiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwic2VsZWN0ZWRGaWxlVXJsIiwic2V0U2VsZWN0ZWRGaWxlVXJsIiwiaGFuZGxlVXBsb2FkSW1hZ2UiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZGF0YSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXNwb25zZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0Q29tbW9kaXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZSIsImZpbGVVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsYWJlbCIsImh0bWxGb3IiLCJoMSIsImltZyIsInNyYyIsInBsYWNlaG9sZGVyIiwib25fY2hhbmdlIiwiZSIsInZhbHVlIiwiTnVtYmVyIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwic3R5bGUiLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddItem.tsx\n"));

/***/ })

});