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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet SVGFormula;\nconst readFile = (req)=>{\n    SVGFormula = req.body.match(/<svg (.*?)><\\/svg>/g)[0];\n    console.log(\"body: \\n\\n\", SVGFormula);\n};\nasync function handler(req, res) {\n    await readFile(req);\n    return res.status(200).json({\n        done: \"ok\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\nconst config = {\n    api: {\n        bodyParser: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW1hZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFJQTtBQUNKLE1BQU1DLFdBQVcsQ0FBQ0MsTUFBd0I7SUFDdENGLGFBQWNFLElBQUlDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLHNCQUFzQixDQUFDLEVBQUU7SUFDdERDLFFBQVFDLEdBQUcsQ0FBQyxjQUFjTjtBQUM5QjtBQUVBLGVBQWVPLFFBQVFMLEdBQW1CLEVBQUVNLEdBQW9CLEVBQWlCO0lBQzlFLE1BQU1QLFNBQVNDO0lBQ2YsT0FBT00sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDQyxNQUFNO0lBQU07QUFDNUM7QUFDQSxpRUFBZUosT0FBT0EsRUFBQztBQUVoQixNQUFNSyxTQUFTO0lBQ2xCQyxLQUFLO1FBQ0hDLFlBQVksSUFBSTtJQUNsQjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnlwdG9zaG9wLy4vcGFnZXMvYXBpL2ltYWdlLnRzP2I0NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5sZXQgU1ZHRm9ybXVsYTpzdHJpbmc7XHJcbmNvbnN0IHJlYWRGaWxlID0gKHJlcTogTmV4dEFwaVJlcXVlc3QpID0+IHtcclxuICAgIFNWR0Zvcm11bGEgPSAgcmVxLmJvZHkubWF0Y2goLzxzdmcgKC4qPyk+PFxcL3N2Zz4vZylbMF1cclxuICAgIGNvbnNvbGUubG9nKCdib2R5OiBcXG5cXG4nLCBTVkdGb3JtdWxhKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgIGF3YWl0IHJlYWRGaWxlKHJlcSk7XHJcbiAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7ZG9uZTogXCJva1wiLCB9KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGFwaToge1xyXG4gICAgICBib2R5UGFyc2VyOiB0cnVlLFxyXG4gICAgfSxcclxufTsiXSwibmFtZXMiOlsiU1ZHRm9ybXVsYSIsInJlYWRGaWxlIiwicmVxIiwiYm9keSIsIm1hdGNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZXIiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZG9uZSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/image.ts\n");

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