"use strict";
(() => {
var exports = {};
exports.id = 6344;
exports.ids = [6344,2575];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const StudentSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true
    },
    github: {
        type: String,
        require: false
    },
    motivation: {
        type: String,
        require: false
    },
    location: {
        type: String,
        require: false
    },
    portfolio: {
        type: String,
        require: false
    },
    os: {
        type: String,
        require: false
    },
    hobbies: {
        type: String,
        require: false
    },
    industry: {
        type: String,
        require: false
    },
    prevIndustry: {
        type: String,
        require: false
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Student) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Student", StudentSchema));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2680));
module.exports = __webpack_exports__;

})();