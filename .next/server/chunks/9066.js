"use strict";
exports.id = 9066;
exports.ids = [9066];
exports.modules = {

/***/ 9066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1307);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_lab_TabList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(861);
/* harmony import */ var _mui_lab_TabList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_TabList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2071);
/* harmony import */ var _mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6741);
/* harmony import */ var _mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__);
// @ts-ignore
// ** React Imports


// ** MUI Imports








const CardNavigation = ({ video , videoLinks , moduleTitle , activitiesHeader , slidesLinks , slideURL , moduleChallenge , challengeDeliverables , moduleChallengeLink , day1Activities , day2Activities , day3Activities , resourceLink , activitiesLink , glossaryTerms , moreActivities  })=>{
    // ** State
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(day1Activities || day2Activities ? "1" : "2");
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                variant: "h5",
                sx: {
                    marginBottom: 2
                },
                children: moduleTitle
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_7___default()), {
                    value: value,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_lab_TabList__WEBPACK_IMPORTED_MODULE_4___default()), {
                            onChange: handleChange,
                            "aria-label": "card navigation example",
                            children: [
                                (day1Activities || day2Activities || day3Activities) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    value: "1",
                                    label: "Activities"
                                }),
                                slidesLinks && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    value: "2",
                                    label: "Slides"
                                }),
                                moduleChallengeLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    value: "3",
                                    label: "Module Challenge"
                                }),
                                glossaryTerms && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tab__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    value: "4",
                                    label: "Glossary"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9___default()), {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    value: "1",
                                    sx: {
                                        p: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            variant: "h6",
                                            sx: {
                                                marginBottom: 2
                                            },
                                            children: activitiesHeader
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            variant: "body2",
                                            sx: {
                                                marginBottom: 4
                                            },
                                            component: "span",
                                            children: [
                                                video && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    children: " Additional Learning Videos "
                                                }),
                                                video && videoLinks && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        children: videoLinks.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                                    width: "560",
                                                                    height: "315",
                                                                    src: item,
                                                                    title: "YouTube video player",
                                                                    frameBorder: "0",
                                                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                                                    referrerPolicy: "strict-origin-when-cross-origin",
                                                                    allowFullScreen: true
                                                                })
                                                            }, i))
                                                    })
                                                }),
                                                day1Activities && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            href: day1Activities && day1Activities[0],
                                                            children: [
                                                                " ",
                                                                "Day 1 Activities",
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                day1Activities && day1Activities.slice(1).map((act, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "default-checkbox",
                                                                type: "checkbox",
                                                                value: "",
                                                                className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "default-checkbox",
                                                                className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                                children: [
                                                                    " ",
                                                                    act
                                                                ]
                                                            })
                                                        ]
                                                    }, index)),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                day2Activities && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            href: day2Activities && day2Activities[0],
                                                            children: [
                                                                " ",
                                                                "Day 2 Activities",
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                day2Activities && day2Activities.slice(1).map((act, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "default-checkbox",
                                                                type: "checkbox",
                                                                value: "",
                                                                className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "default-checkbox",
                                                                className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                                children: [
                                                                    " ",
                                                                    act
                                                                ]
                                                            })
                                                        ]
                                                    }, index)),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                day3Activities && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            href: day3Activities && day3Activities[0],
                                                            children: [
                                                                " ",
                                                                "Day 3 Activities",
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                day3Activities && day3Activities.slice(1).map((act, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "default-checkbox",
                                                                type: "checkbox",
                                                                value: "",
                                                                className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "default-checkbox",
                                                                className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                                children: [
                                                                    " ",
                                                                    act
                                                                ]
                                                            })
                                                        ]
                                                    }, index)),
                                                moreActivities && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            href: moreActivities && moreActivities[0],
                                                            children: [
                                                                " ",
                                                                "Additional Activities",
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                moreActivities && moreActivities.slice(1).map((act, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "default-checkbox",
                                                                type: "checkbox",
                                                                value: "",
                                                                className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                htmlFor: "default-checkbox",
                                                                className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
                                                                children: [
                                                                    " ",
                                                                    act
                                                                ]
                                                            })
                                                        ]
                                                    }, index + 1))
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    value: "2",
                                    sx: {
                                        p: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            variant: "h6",
                                            sx: {
                                                marginBottom: 2
                                            },
                                            children: "This Week's Slides"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            onClick: ()=>window?.open(slideURL, "_blank").focus(),
                                            variant: "contained",
                                            children: "Go to Week's Slides"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            variant: "body2",
                                            sx: {
                                                marginBottom: 4
                                            },
                                            children: slidesLinks && slidesLinks.map((slide, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                    width: "50%",
                                                    height: "310px",
                                                    src: slide
                                                }, index))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    value: "3",
                                    sx: {
                                        p: 0
                                    },
                                    children: [
                                        moduleChallenge && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            variant: "body2",
                                            sx: {
                                                marginBottom: 4
                                            },
                                            children: moduleChallenge
                                        }),
                                        challengeDeliverables && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            variant: "body1",
                                            sx: {
                                                marginBottom: 4
                                            },
                                            children: challengeDeliverables
                                        }),
                                        moduleChallengeLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            href: moduleChallengeLink,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                variant: "contained",
                                                children: [
                                                    " ",
                                                    "Go to Module Challenge Document"
                                                ]
                                            })
                                        }),
                                        " "
                                    ]
                                }),
                                glossaryTerms && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_lab_TabPanel__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    value: "4",
                                    sx: {
                                        p: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            variant: "body2",
                                            sx: {
                                                marginBottom: 4
                                            },
                                            children: [
                                                moduleTitle,
                                                " Glossary"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            children: glossaryTerms?.map(({ term , definition  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            children: term
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: definition
                                                            })
                                                        })
                                                    ]
                                                }))
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardNavigation);


/***/ })

};
;