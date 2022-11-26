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

/***/ "./components/AddItem.tsx":
/*!********************************!*\
  !*** ./components/AddItem.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddItem\": function() { return /* binding */ AddItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ \"./components/Input.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/api/image */ \"./pages/api/image.ts\");\n/* harmony import */ var _connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connectProvider/contrWithSigner */ \"./components/connectProvider/contrWithSigner.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AddItem() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [desc, setDesc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [stock, setStock] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [valid, setValid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [selectedFileUrl, setSelectedFileUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function handleUploadImage() {\n        setUploading(true);\n        try {\n            if (!selectedFile) return;\n            const formData = new FormData();\n            formData.append(\"myImage\", selectedFile);\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/image\", formData);\n            console.log(data);\n        } catch (error) {\n            var ref;\n            console.log((ref = error.response) === null || ref === void 0 ? void 0 : ref.data);\n        }\n        setUploading(false);\n    }\n    function handleFormSubmit(event) {\n        event.preventDefault();\n        if (name && desc && selectedFile && price && stock) {\n            handleUploadImage();\n            (0,_connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().submitCommodity(name, desc, _pages_api_image__WEBPACK_IMPORTED_MODULE_3__.SVGFormula, price, stock);\n        } else {\n            setValid(\"it is nessesary to fill all the fields\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ui-form\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleFormSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"w-[0.1px] h-[0.1px] overflow-hidden absolute z-[-1]\",\n                            type: \"file\",\n                            id: \"file\",\n                            onChange: (param)=>{\n                                let { target  } = param;\n                                if (target.files) {\n                                    const file = target.files[0];\n                                    const fileUrl = URL.createObjectURL(file);\n                                    setSelectedFileUrl(fileUrl);\n                                    setSelectedFile(file);\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"file\",\n                            className: \"text-center w-[150px] h-[50px] font-mono font-medium mx-[25px] my-[15px] bg-slate-400 cursor-pointer border-black border-[2px] block hover:bg-slate-600 hover:text-white hover:border-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"pt-[10px]\",\n                                children: \"Choose an image\"\n                            }, void 0, false, {\n                                fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: selectedFileUrl\n                        }, void 0, false, {\n                            fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"metadata-input\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            placeholder: \"enter the name of the product\",\n                            on_change: (e)=>setName(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            placeholder: \"enter the description\",\n                            on_change: (e)=>setDesc(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            placeholder: \"enter the price\",\n                            on_change: (e)=>setPrice(Number(e.target.value))\n                        }, void 0, false, {\n                            fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                            placeholder: \"enter stock\",\n                            on_change: (e)=>setStock(Number(e.target.value))\n                        }, void 0, false, {\n                            fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this),\n                valid === \"\" ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"m-[auto]\",\n                    children: valid\n                }, void 0, false, {\n                    fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 38\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleFormSubmit,\n                    disabled: uploading,\n                    style: {\n                        opacity: uploading ? \".5\" : \"1\"\n                    },\n                    className: \"block border-[2px] w-[100px] h-[50px] mx-[25px] my-[15px]\",\n                    children: uploading ? \"Uploading..\" : \"Upload\"\n                }, void 0, false, {\n                    fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"B:\\\\.crypto-shop\\\\cryptoshop\\\\components\\\\AddItem.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(AddItem, \"TAgzWNJyz38b4rFfSjePTBjvUHA=\");\n_c = AddItem;\n\nvar _c;\n$RefreshReg$(_c, \"AddItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFDYyxLQUFLOzs7Ozs7c0NBQ3JGLDhEQUFDMUQseUNBQUtBOzRCQUFDdUQsYUFBWTs0QkFBY0MsV0FBVyxDQUFDQyxJQUFNNUMsU0FBUzhDLE9BQU9GLEVBQUViLE1BQU0sQ0FBQ2MsS0FBSzs7Ozs7Ozs7Ozs7O2dCQUVwRjVDLFVBQVUsS0FBSyxtQkFBSyw4REFBQ3NDO29CQUFHZixXQUFVOzhCQUFZdkI7Ozs7O3dCQUFXOzhCQUMxRCw4REFBQzhDO29CQUNHQyxTQUFTN0I7b0JBQ1Q4QixVQUFZOUM7b0JBQ1orQyxPQUFTO3dCQUFDQyxTQUFTaEQsWUFBWSxPQUFPLEdBQUc7b0JBQUE7b0JBQ3pDcUIsV0FBWTs4QkFFWHJCLFlBQVksZ0JBQWdCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpEO0dBcEZTWDtLQUFBQTtBQXNGTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZEl0ZW0udHN4P2JiZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL0lucHV0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZXRoZXJzfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IFNWR0Zvcm11bGEgfSBmcm9tIFwiLi4vcGFnZXMvYXBpL2ltYWdlXCI7XHJcbmltcG9ydCBjb250cldpdGhTaWduZXIgZnJvbSBcIi4vY29ubmVjdFByb3ZpZGVyL2NvbnRyV2l0aFNpZ25lclwiXHJcblxyXG5cclxuZnVuY3Rpb24gQWRkSXRlbSgpIHtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Rlc2MsIHNldERlc2NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbc3RvY2ssIHNldFN0b2NrXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbdmFsaWQsIHNldFZhbGlkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3VwbG9hZGluZywgc2V0VXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSB1c2VTdGF0ZTxCbG9iIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRGaWxlVXJsLCBzZXRTZWxlY3RlZEZpbGVVcmxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVVcGxvYWRJbWFnZSAoKSB7XHJcbiAgICAgICAgc2V0VXBsb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZighc2VsZWN0ZWRGaWxlKSByZXR1cm47XHJcbiAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibXlJbWFnZVwiLCBzZWxlY3RlZEZpbGUpO1xyXG4gICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvaW1hZ2VcIiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZT8uZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFVwbG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudDogRm9ybUV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgICAgIGlmKG5hbWUgJiYgZGVzYyAmJiBzZWxlY3RlZEZpbGUgJiYgcHJpY2UgJiYgc3RvY2spe1xyXG4gICAgICAgIGhhbmRsZVVwbG9hZEltYWdlKCk7XHJcbiAgICAgICAgY29udHJXaXRoU2lnbmVyKCkuc3VibWl0Q29tbW9kaXR5KG5hbWUsIGRlc2MsIFNWR0Zvcm11bGEsIHByaWNlLCBzdG9jayk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgc2V0VmFsaWQoXCJpdCBpcyBuZXNzZXNhcnkgdG8gZmlsbCBhbGwgdGhlIGZpZWxkc1wiKVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwidWktZm9ybVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJ3LVswLjFweF0gaC1bMC4xcHhdIG92ZXJmbG93LWhpZGRlbiBhYnNvbHV0ZSB6LVstMV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBcImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoe3RhcmdldH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmZpbGVzKSB7ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRhcmdldC5maWxlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRGaWxlVXJsKGZpbGVVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LVsxNTBweF0gaC1bNTBweF0gZm9udC1tb25vXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW0gbXgtWzI1cHhdIG15LVsxNXB4XSBiZy1zbGF0ZS00MDAgY3Vyc29yLXBvaW50ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJsYWNrIGJvcmRlci1bMnB4XSBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLXNsYXRlLTYwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHQtWzEwcHhdXCI+Q2hvb3NlIGFuIGltYWdlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzZWxlY3RlZEZpbGVVcmx9Lz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFkYXRhLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiZW50ZXIgdGhlIG5hbWUgb2YgdGhlIHByb2R1Y3RcIiBvbl9jaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJlbnRlciB0aGUgZGVzY3JpcHRpb25cIiBvbl9jaGFuZ2U9eyhlKSA9PiBzZXREZXNjKGUudGFyZ2V0LnZhbHVlKX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJlbnRlciB0aGUgcHJpY2VcIiBvbl9jaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJlbnRlciBzdG9ja1wiIG9uX2NoYW5nZT17KGUpID0+IHNldFN0b2NrKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7dmFsaWQgPT09IFwiXCIgPyBcIlwiIDogPGgxIGNsYXNzTmFtZT1cIm0tW2F1dG9dXCI+e3ZhbGlkfTwvaDE+fVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB7dXBsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tvcGFjaXR5OiB1cGxvYWRpbmcgPyBcIi41XCIgOiBcIjFcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJibG9jayBib3JkZXItWzJweF0gdy1bMTAwcHhdIGgtWzUwcHhdIG14LVsyNXB4XSBteS1bMTVweF1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1cGxvYWRpbmcgPyBcIlVwbG9hZGluZy4uXCIgOiBcIlVwbG9hZFwifVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQge0FkZEl0ZW19Il0sIm5hbWVzIjpbImF4aW9zIiwiSW5wdXQiLCJSZWFjdCIsInVzZVN0YXRlIiwiU1ZHRm9ybXVsYSIsImNvbnRyV2l0aFNpZ25lciIsIkFkZEl0ZW0iLCJuYW1lIiwic2V0TmFtZSIsImRlc2MiLCJzZXREZXNjIiwicHJpY2UiLCJzZXRQcmljZSIsInN0b2NrIiwic2V0U3RvY2siLCJ2YWxpZCIsInNldFZhbGlkIiwidXBsb2FkaW5nIiwic2V0VXBsb2FkaW5nIiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwic2VsZWN0ZWRGaWxlVXJsIiwic2V0U2VsZWN0ZWRGaWxlVXJsIiwiaGFuZGxlVXBsb2FkSW1hZ2UiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZGF0YSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXNwb25zZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0Q29tbW9kaXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwiZmlsZSIsImZpbGVVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsYWJlbCIsImh0bWxGb3IiLCJoMSIsImltZyIsInNyYyIsInBsYWNlaG9sZGVyIiwib25fY2hhbmdlIiwiZSIsInZhbHVlIiwiTnVtYmVyIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwic3R5bGUiLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddItem.tsx\n"));

/***/ })

});