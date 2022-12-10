"use strict";
(() => {
var exports = {};
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 2398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let SVGFormula;
const readFile = (req)=>{
    SVGFormula = req.body.match(/<svg (.*?)svg>/gms)[0];
};
async function handler(req, res) {
    await readFile(req);
    return res.status(200).json({
        SVGFormula
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);
const config = {
    api: {
        bodyParser: true
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2398));
module.exports = __webpack_exports__;

})();