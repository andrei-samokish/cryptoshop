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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SVGFormula\": () => (/* binding */ SVGFormula),\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet SVGFormula;\nconst readFile = (req)=>{\n    SVGFormula = req.body.match(/<svg (.*?)><\\/svg>/g)[0];\n    console.log(\"body: \\n\\n\", SVGFormula);\n};\nasync function handler(req, res) {\n    await readFile(req);\n    return res.status(200).json({\n        done: \"ok\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\nconst config = {\n    api: {\n        bodyParser: true\n    }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW1hZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBSUE7QUFDSixNQUFNQyxXQUFXLENBQUNDLE1BQXdCO0lBQ3RDRixhQUFjRSxJQUFJQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO0lBQ3REQyxRQUFRQyxHQUFHLENBQUMsY0FBY047QUFDOUI7QUFFQSxlQUFlTyxRQUFRTCxHQUFtQixFQUFFTSxHQUFvQixFQUFpQjtJQUM5RSxNQUFNUCxTQUFTQztJQUNmLE9BQU9NLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0MsTUFBTTtJQUFNO0FBQzVDO0FBQ0EsaUVBQWVKLE9BQU9BLEVBQUM7QUFFaEIsTUFBTUssU0FBUztJQUNsQkMsS0FBSztRQUNIQyxZQUFZLElBQUk7SUFDbEI7QUFDSixFQUFFO0FBQ2lCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J5cHRvc2hvcC8uL3BhZ2VzL2FwaS9pbWFnZS50cz9iNDVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxubGV0IFNWR0Zvcm11bGE6c3RyaW5nO1xyXG5jb25zdCByZWFkRmlsZSA9IChyZXE6IE5leHRBcGlSZXF1ZXN0KSA9PiB7XHJcbiAgICBTVkdGb3JtdWxhID0gIHJlcS5ib2R5Lm1hdGNoKC88c3ZnICguKj8pPjxcXC9zdmc+L2cpWzBdXHJcbiAgICBjb25zb2xlLmxvZygnYm9keTogXFxuXFxuJywgU1ZHRm9ybXVsYSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICBhd2FpdCByZWFkRmlsZShyZXEpO1xyXG4gICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe2RvbmU6IFwib2tcIiwgfSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6IHtcclxuICAgICAgYm9keVBhcnNlcjogdHJ1ZSxcclxuICAgIH0sXHJcbn07XHJcbmV4cG9ydCB7U1ZHRm9ybXVsYX0iXSwibmFtZXMiOlsiU1ZHRm9ybXVsYSIsInJlYWRGaWxlIiwicmVxIiwiYm9keSIsIm1hdGNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZXIiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZG9uZSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/image.ts\n");

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