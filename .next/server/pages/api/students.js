"use strict";
(() => {
var exports = {};
exports.id = 9567;
exports.ids = [9567,2675,6344,1338,2575,2194];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

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


/***/ }),

/***/ 5239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7536);
/* harmony import */ var _models_Students__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2680);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8080);
// import { NextApiRequest, NextApiResponse } from 'next';



(0,_db__WEBPACK_IMPORTED_MODULE_0__["default"])();
async function handler(req, res) {
    if (req.method === "POST") {
        req.body;
        try {
            const students = await _models_Students__WEBPACK_IMPORTED_MODULE_1__["default"].insertMany(req.body);
            return res.status(200).json({
                students
            });
        } catch (error) {
            console.error("Error logging in user:", error);
            return res.status(500).json({
                error: "Internal server error"
            });
        }
    }
    if (req.method === "GET") {
        req.body;
        try {
            const students1 = await _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].find({});
            return res.status(200).json({
                students: students1
            });
        } catch (error1) {
            console.error("Error logging in user:", error1);
            return res.status(500).json({
                error: "Internal server error"
            });
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5239));
module.exports = __webpack_exports__;

})();