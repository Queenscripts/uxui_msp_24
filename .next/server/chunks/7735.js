"use strict";
exports.id = 7735;
exports.ids = [7735,2194];
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


/***/ }),

/***/ 7735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7536);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8080);
// import { NextApiRequest, NextApiResponse } from 'next';


(0,_db__WEBPACK_IMPORTED_MODULE_0__["default"])();
async function handler(req, res) {
    req.body;
    const userId = req.query.id;
    if (req.method === "GET") {
        const userId1 = req.query.id;
        const { motivation , industry , prevIndustry , email , name , hobby  } = req.body;
        const studentInfo = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findById(userId1);
        try {
            return res.status(200).json({
                studentInfo
            });
        } catch (err) {
            const userId2 = req.query.id;
        }
        return res.status(405).end();
    }
    if (req.method === "PUT") {
        const userId3 = req.query.id;
        const { motivation: motivation1 , industry: industry1 , prevIndustry: prevIndustry1 , email: email1 , name: name1 , hobbies , portfolio  } = req.body;
        const studentInfo1 = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findById(userId3);
        try {
            const student = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(userId3, {
                name: name1 !== null ? name1 : studentInfo1.name,
                motivation: motivation1 !== null ? motivation1 : studentInfo1.motivation,
                industry: industry1 !== null ? industry1 : studentInfo1.industry,
                prevIndustry: prevIndustry1 !== null ? prevIndustry1 : studentInfo1.prevIndustry,
                email: email1 !== null ? email1 : studentInfo1.email,
                hobbies: hobbies !== null ? hobbies : studentInfo1.hobbies,
                portfolio: portfolio !== null ? portfolio : studentInfo1.portfolio
            });
            const updatedStudent = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findById(userId3);
            return res.status(200).json({
                updatedStudent
            });
        } catch (err1) {
            console.log("issue", err1);
        }
        return res.status(405).end();
    }
    if (res.status === 404) {
        console.log("whys");
    }
}


/***/ })

};
;