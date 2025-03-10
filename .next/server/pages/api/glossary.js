"use strict";
(() => {
var exports = {};
exports.id = 4194;
exports.ids = [4194,2675,5798,2575];
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

/***/ 1813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7536);
/* harmony import */ var _models_Glossary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6973);
// import { NextApiRequest, NextApiResponse } from 'next';


(0,_db__WEBPACK_IMPORTED_MODULE_0__["default"])();
async function handler(req, res) {
    if (req.method === "GET") {
        // const userId = req.query.id
        // console.log(userId, 'USER')
        // const { motivation, industry, prevIndustry, email, name, hobby}=req.body;
        const glossaryItems = await _models_Glossary__WEBPACK_IMPORTED_MODULE_1__["default"].find();
        try {
            return res.status(200).json({
                glossaryItems
            });
        } catch (err) {
            //   const userId = req.query.id
            //   console.log(userId, 'USER')
            console.log("issue", err);
        }
        return res.status(405).end();
    }
    if (req.method === "POST") {
        const { name , topic , description , tag , resource  } = req.body;
        try {
            const glossary = await _models_Glossary__WEBPACK_IMPORTED_MODULE_1__["default"].create({
                name,
                topic,
                description,
                tag,
                resource
            });
            // Check if user already exists
            //   const existingUser:any = await User.findOne({ email });
            //   if (existingUser) {
            //     return res.status(400).json({ error: 'User already exists' });
            //   }
            if (await glossary) {
                return res.status(200).json(glossary);
            }
            return res.status(400).json({
                error: "Issue with glossary"
            });
        } catch (error) {
            console.error("Error signing up user:", error);
            return res.status(500).json({
                error: "Internal server error"
            });
        }
    }
}


/***/ }),

/***/ 6973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const GlossarySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        require: false
    },
    topic: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    tag: {
        type: String,
        required: false
    },
    resource: {
        type: String,
        required: false
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Glossary) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Glossary", GlossarySchema));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1813));
module.exports = __webpack_exports__;

})();