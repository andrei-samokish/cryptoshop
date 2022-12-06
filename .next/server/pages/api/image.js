"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/image";
exports.ids = ["pages/api/image"];
exports.modules = {

/***/ "(api)/./pages/api/image.ts":
/*!****************************!*\
  !*** ./pages/api/image.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet SVGFormula;\nconst readFile = (req)=>{\n    SVGFormula = req.body.match(/<svg (.*?)svg>/gms)[0];\n};\nasync function handler(req, res) {\n    await readFile(req);\n    return res.status(200).json({\n        SVGFormula\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\nconst config = {\n    api: {\n        bodyParser: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW1hZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFJQTtBQUNKLE1BQU1DLFdBQVcsQ0FBQ0MsTUFBd0I7SUFDeENGLGFBQWFFLElBQUlDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7QUFDckQ7QUFFQSxlQUFlQyxRQUNiSCxHQUFtQixFQUNuQkksR0FBb0IsRUFDTDtJQUNmLE1BQU1MLFNBQVNDO0lBQ2YsT0FBT0ksSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFUjtJQUFXO0FBQzNDO0FBQ0EsaUVBQWVLLE9BQU9BLEVBQUM7QUFFaEIsTUFBTUksU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZLElBQUk7SUFDbEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J5cHRvc2hvcC8uL3BhZ2VzL2FwaS9pbWFnZS50cz9iNDVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxubGV0IFNWR0Zvcm11bGE6IHN0cmluZztcclxuY29uc3QgcmVhZEZpbGUgPSAocmVxOiBOZXh0QXBpUmVxdWVzdCkgPT4ge1xyXG4gIFNWR0Zvcm11bGEgPSByZXEuYm9keS5tYXRjaCgvPHN2ZyAoLio/KXN2Zz4vZ21zKVswXTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICBhd2FpdCByZWFkRmlsZShyZXEpO1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IFNWR0Zvcm11bGEgfSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiB0cnVlLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJTVkdGb3JtdWxhIiwicmVhZEZpbGUiLCJyZXEiLCJib2R5IiwibWF0Y2giLCJoYW5kbGVyIiwicmVzIiwic3RhdHVzIiwianNvbiIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/image.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/image.ts"));
module.exports = __webpack_exports__;

})();