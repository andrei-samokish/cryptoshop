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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet SVGFormula;\nconst readFile = (req)=>{\n    SVGFormula = req.body //.match(/<svg (.*?)><\\/svg>/g)[0]\n    ;\n    console.log(\"body: \\n\\n\", SVGFormula);\n};\nasync function handler(req, res) {\n    await readFile(req);\n    return res.status(200).json({\n        done: \"ok\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\nconst config = {\n    api: {\n        bodyParser: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW1hZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFJQTtBQUNKLE1BQU1DLFdBQVcsQ0FBQ0MsTUFBd0I7SUFDdENGLGFBQWNFLElBQUlDLElBQUksbUNBQWtDOztJQUN4REMsUUFBUUMsR0FBRyxDQUFDLGNBQWNMO0FBQzlCO0FBRUEsZUFBZU0sUUFBUUosR0FBbUIsRUFBRUssR0FBb0IsRUFBaUI7SUFDOUUsTUFBTU4sU0FBU0M7SUFDZixPQUFPSyxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUNDLE1BQU07SUFBTTtBQUM1QztBQUNBLGlFQUFlSixPQUFPQSxFQUFDO0FBRWhCLE1BQU1LLFNBQVM7SUFDbEJDLEtBQUs7UUFDSEMsWUFBWSxJQUFJO0lBQ2xCO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXB0b3Nob3AvLi9wYWdlcy9hcGkvaW1hZ2UudHM/YjQ1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmxldCBTVkdGb3JtdWxhOnN0cmluZztcclxuY29uc3QgcmVhZEZpbGUgPSAocmVxOiBOZXh0QXBpUmVxdWVzdCkgPT4ge1xyXG4gICAgU1ZHRm9ybXVsYSA9ICByZXEuYm9keS8vLm1hdGNoKC88c3ZnICguKj8pPjxcXC9zdmc+L2cpWzBdXHJcbiAgICBjb25zb2xlLmxvZygnYm9keTogXFxuXFxuJywgU1ZHRm9ybXVsYSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICBhd2FpdCByZWFkRmlsZShyZXEpO1xyXG4gICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe2RvbmU6IFwib2tcIiwgfSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6IHtcclxuICAgICAgYm9keVBhcnNlcjogdHJ1ZSxcclxuICAgIH0sXHJcbn07Il0sIm5hbWVzIjpbIlNWR0Zvcm11bGEiLCJyZWFkRmlsZSIsInJlcSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlciIsInJlcyIsInN0YXR1cyIsImpzb24iLCJkb25lIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/image.ts\n");

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