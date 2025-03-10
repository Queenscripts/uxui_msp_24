"use strict";
(() => {
var exports = {};
exports.id = 4994;
exports.ids = [4994,2575];
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

/***/ 7629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7536);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8080);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);




(0,_db__WEBPACK_IMPORTED_MODULE_0__["default"])();
async function handler(req, res) {
    if (req.method === "POST") {
        const { email , password  } = req.body;
        try {
            // Check if user exists
            const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
                email
            });
            if (!user) {
                return res.status(404).json({
                    error: "User not found"
                });
            }
            // Compare passwords
            const passwordMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({
                    error: "Invalid password"
                });
            }
            // Generate a JWT token
            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({
                userId: user._id
            }, process.env.JWT_SECRET, {
                expiresIn: "1h"
            });
            return res.status(200).json({
                user,
                token
            });
        } catch (error) {
            console.error("Error logging in user:", error);
            return res.status(500).json({
                error: "Internal server error"
            });
        }
    }
// return res.status(405).end();
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2194], () => (__webpack_exec__(7629)));
module.exports = __webpack_exports__;

})();