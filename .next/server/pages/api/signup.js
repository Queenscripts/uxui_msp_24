"use strict";
(() => {
var exports = {};
exports.id = 2964;
exports.ids = [2964,6344,2575];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

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


/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7536);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8080);
/* harmony import */ var _models_Students__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2680);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
// import { NextApiRequest, NextApiResponse } from 'next';





(0,_db__WEBPACK_IMPORTED_MODULE_0__["default"])();
async function handler(req, res) {
    if (req.method === "PUT") {
        const { email , password , github , name , motivation , location , portfolio , os , hobbies , industry , prevIndustry  } = req.body;
        const isStudent = async (email)=>{
            const students = await _models_Students__WEBPACK_IMPORTED_MODULE_2__["default"].find({});
            const arr = students.filter((learner)=>learner.email == email);
            if (arr.length > 0) {
                return true;
            }
            return false;
        };
        try {
            // Hash the password
            const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().hash(password, 10);
            // Create the user in the database
            const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].create({
                email,
                password: hashedPassword,
                github,
                name,
                motivation,
                location,
                portfolio,
                os,
                hobbies,
                industry,
                prevIndustry
            });
            // Generate a JWT token
            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({
                userId: user._id
            }, process.env.JWT_SECRET, {
                expiresIn: "1h"
            });
            // Check if user already exists
            //   const existingUser:any = await User.findOne({ email });
            //   if (existingUser) {
            //     return res.status(400).json({ error: 'User already exists' });
            //   }
            if (await isStudent(email)) {
                return res.status(200).json({
                    token,
                    user
                });
            }
            return res.status(400).json({
                error: "Your email is not in the list of emails registered for course"
            });
        } catch (error) {
            console.error("Error signing up user:", error);
            return res.status(500).json({
                error: "Internal server error"
            });
        }
    }
    return res.status(200).end();
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2194], () => (__webpack_exec__(34)));
module.exports = __webpack_exports__;

})();