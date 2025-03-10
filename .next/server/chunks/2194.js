"use strict";
exports.id = 2194;
exports.ids = [2194];
exports.modules = {

/***/ 7536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};
async function connectDb() {
    if (connection?.isConnected) {
        return;
    }
    try {
        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {
        });
        connection.isConnected = db.connections[0].readyState;
        console.log("MongoDB Connected!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);


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