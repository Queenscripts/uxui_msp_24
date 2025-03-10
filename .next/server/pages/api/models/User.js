"use strict";
(() => {
var exports = {};
exports.id = 1338;
exports.ids = [1338,2575];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    motivation: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    portfolio: {
        type: String,
        required: false
    },
    os: {
        type: String,
        required: false
    },
    hobbies: {
        type: String,
        required: false
    },
    industry: {
        type: String,
        required: false
    },
    prevIndustry: {
        type: String,
        required: false
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", UserSchema));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8080));
module.exports = __webpack_exports__;

})();