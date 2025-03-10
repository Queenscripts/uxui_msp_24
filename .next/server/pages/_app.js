"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 6950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/utils/create-emotion-cache.ts

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css"
    });
};


/***/ }),

/***/ 7187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ** MUI Imports
const themeConfig = {
    // ** Layout Configs
    templateName: "UX-UI Bootcamp" /* App Name */ ,
    mode: "light" /* light | dark */ ,
    contentWidth: "boxed" /* full | boxed */ ,
    // ** Routing Configs
    routingLoader: true,
    // ** Navigation (Menu) Configs
    menuTextTruncate: true,
    navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */ ,
    // ** Other Configs
    responsiveFontSizes: true,
    disableRipple: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeConfig);


/***/ }),

/***/ 9543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/configs/themeConfig.ts
var themeConfig = __webpack_require__(7187);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "mdi-material-ui/ArrowUp"
const ArrowUp_namespaceObject = require("mdi-material-ui/ArrowUp");
var ArrowUp_default = /*#__PURE__*/__webpack_require__.n(ArrowUp_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/appBar/index.tsx
// ** React Imports

// ** MUI Imports



const AppBar = (0,styles_.styled)((AppBar_default()))(({ theme  })=>({
        transition: "none",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(0, 6),
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
        minHeight: theme.mixins.toolbar.minHeight,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    }));
const Toolbar = (0,styles_.styled)((Toolbar_default()))(({ theme  })=>({
        width: "100%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: `${theme.spacing(0)} !important`,
        minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
        transition: "padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out"
    }));
const LayoutAppBar = (props)=>{
    // ** Props
    const { settings , verticalAppBarContent: userVerticalAppBarContent  } = props;
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    // ** Vars
    const { contentWidth  } = settings;
    return /*#__PURE__*/ jsx_runtime_.jsx(AppBar, {
        elevation: 0,
        color: "default",
        className: "layout-navbar",
        position: "static",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Toolbar, {
            className: "navbar-content-container",
            sx: {
                ...contentWidth === "boxed" && {
                    "@media (min-width:1440px)": {
                        maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)`
                    }
                }
            },
            children: userVerticalAppBarContent && userVerticalAppBarContent(props) || null
        })
    });
};
/* harmony default export */ const appBar = (LayoutAppBar);

;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "react-perfect-scrollbar"
const external_react_perfect_scrollbar_namespaceObject = require("react-perfect-scrollbar");
var external_react_perfect_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_react_perfect_scrollbar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/SwipeableDrawer"
const SwipeableDrawer_namespaceObject = require("@mui/material/SwipeableDrawer");
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/Drawer.tsx
// ** React Imports

// ** MUI Imports


const SwipeableDrawer = (0,styles_.styled)((SwipeableDrawer_default()))({
    overflowX: "hidden",
    transition: "width .25s ease-in-out",
    "& ul": {
        listStyle: "none"
    },
    "& .MuiListItem-gutters": {
        paddingLeft: 4,
        paddingRight: 4
    },
    "& .MuiDrawer-paper": {
        left: "unset",
        right: "unset",
        overflowX: "hidden",
        transition: "width .25s ease-in-out, box-shadow .25s ease-in-out"
    }
});
const Drawer = (props)=>{
    // ** Props
    const { hidden , children , navWidth , navVisible , setNavVisible  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    // Drawer Props for Mobile & Tablet screens
    const MobileDrawerProps = {
        open: navVisible,
        onOpen: ()=>setNavVisible(true),
        onClose: ()=>setNavVisible(false),
        ModalProps: {
            keepMounted: true // Better open performance on mobile.
        }
    };
    // Drawer Props for Desktop screens
    const DesktopDrawerProps = {
        open: true,
        onOpen: ()=>null,
        onClose: ()=>null
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(SwipeableDrawer, {
        className: "layout-vertical-nav",
        variant: hidden ? "temporary" : "permanent",
        ...hidden ? {
            ...MobileDrawerProps
        } : {
            ...DesktopDrawerProps
        },
        PaperProps: {
            sx: {
                width: navWidth
            }
        },
        sx: {
            width: navWidth,
            "& .MuiDrawer-paper": {
                borderRight: 0,
                backgroundColor: theme.palette.background.default
            }
        },
        children: children
    });
};
/* harmony default export */ const navigation_Drawer = (Drawer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@mui/material/Chip"
const Chip_namespaceObject = require("@mui/material/Chip");
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItem"
const ListItem_namespaceObject = require("@mui/material/ListItem");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/ListItemIcon"
const ListItemIcon_namespaceObject = require("@mui/material/ListItemIcon");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemButton"
const ListItemButton_namespaceObject = require("@mui/material/ListItemButton");
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_namespaceObject);
;// CONCATENATED MODULE: ./src/layouts/components/UserIcon.tsx
// ** React Imports

const UserIcon = (props)=>{
    // ** Props
    const { icon , iconProps  } = props;
    const IconTag = icon;
    let styles;
    /* styles = {
    color: 'red',
    fontSize: '2rem'
  } */ // @ts-ignore
    return /*#__PURE__*/ jsx_runtime_.jsx(IconTag, {
        ...iconProps,
        style: {
            ...styles
        }
    });
};
/* harmony default export */ const components_UserIcon = (UserIcon);

;// CONCATENATED MODULE: ./src/@core/layouts/utils.ts
// ** Types
/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */ const handleURLQueries = (router, path)=>{
    if (Object.keys(router.query).length && path) {
        const arr = Object.keys(router.query);
        return router.asPath.includes(path) && router.asPath.includes(router.query[arr[0]]) && path !== "/";
    }
    return false;
};

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavLink.tsx
// ** React Imports

// ** Next Imports


// ** MUI Imports







// ** Configs Import

// ** Custom Components Imports

// ** Utils

// ** Styled Components
const MenuNavLink = (0,styles_.styled)((ListItemButton_default()))(({ theme  })=>({
        width: "100%",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        color: theme.palette.text.primary,
        padding: theme.spacing(2.25, 3.5),
        transition: "opacity .25s ease-in-out",
        "&.active, &.active:hover": {
            boxShadow: theme.shadows[3],
            backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`
        },
        "&.active .MuiTypography-root, &.active .MuiSvgIcon-root": {
            color: `${theme.palette.common.white} !important`
        }
    }));
const MenuItemTextMetaWrapper = (0,styles_.styled)((Box_default()))({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "opacity .25s ease-in-out",
    ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
        overflow: "hidden"
    }
});
const VerticalNavLink = ({ item , navVisible , toggleNavVisibility  })=>{
    // ** Hooks
    const router = (0,router_.useRouter)();
    const IconTag = item.icon;
    const isNavLinkActive = ()=>{
        if (router.pathname === item.path || handleURLQueries(router, item.path)) {
            return true;
        } else {
            return false;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
        disablePadding: true,
        className: "nav-link",
        // disabled={it@mui/icons-material/VideoCameraFrontem.disabled || false}
        sx: {
            mt: 1.5,
            px: "0 !important"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            passHref: true,
            href: item.path === undefined ? "/" : `${item.path}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuNavLink, {
                component: "a",
                className: isNavLinkActive() ? "active" : "",
                ...item.openInNewTab ? {
                    target: "_blank"
                } : null,
                onClick: (e)=>{
                    if (item.path === undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    if (navVisible) {
                        toggleNavVisibility();
                    }
                },
                sx: {
                    pl: 5.5,
                    ...item.disabled ? {
                        pointerEvents: "none"
                    } : {
                        cursor: "pointer"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                        sx: {
                            mr: 2.5,
                            color: "text.primary",
                            transition: "margin .25s ease-in-out"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_UserIcon, {
                            icon: IconTag
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItemTextMetaWrapper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                ...themeConfig/* default.menuTextTruncate */.Z.menuTextTruncate && {
                                    noWrap: true
                                },
                                children: item.title
                            }),
                            item.badgeContent ? /*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                                label: item.badgeContent,
                                color: item.badgeColor || "primary",
                                sx: {
                                    height: 20,
                                    fontWeight: 500,
                                    marginLeft: 1.25,
                                    "& .MuiChip-label": {
                                        px: 1.5,
                                        textTransform: "capitalize"
                                    }
                                }
                            }) : null
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const navigation_VerticalNavLink = (VerticalNavLink);

// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
;// CONCATENATED MODULE: external "@mui/material/ListSubheader"
const ListSubheader_namespaceObject = require("@mui/material/ListSubheader");
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavSectionTitle.tsx
// ** MUI Imports





// ** Styled Components
const ListSubheader = (0,styles_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
        component: "li",
        ...props
    }))(({ theme  })=>({
        lineHeight: 1,
        display: "flex",
        position: "relative",
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(2),
        backgroundColor: "transparent",
        transition: "padding-left .25s ease-in-out"
    }));
const TypographyHeaderText = (0,styles_.styled)((Typography_default()))(({ theme  })=>({
        fontSize: "0.75rem",
        lineHeight: "normal",
        letterSpacing: "0.21px",
        textTransform: "uppercase",
        color: theme.palette.text.disabled,
        fontWeight: theme.typography.fontWeightMedium
    }));
const VerticalNavSectionTitle = (props)=>{
    // ** Props
    const { item  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(ListSubheader, {
        className: "nav-section-title",
        sx: {
            px: 0,
            py: 1.75,
            color: theme.palette.text.disabled,
            "& .MuiDivider-root:before, & .MuiDivider-root:after, & hr": {
                borderColor: `rgba(${theme.palette.customColors.main}, 0.12)`
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
            textAlign: "left",
            sx: {
                m: 0,
                width: "100%",
                lineHeight: "normal",
                textTransform: "uppercase",
                "&:before, &:after": {
                    top: 7,
                    transform: "none"
                },
                "& .MuiDivider-wrapper": {
                    px: 2.5,
                    fontSize: "0.75rem",
                    letterSpacing: "0.21px"
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(TypographyHeaderText, {
                noWrap: true,
                children: item.sectionTitle
            })
        })
    });
};
/* harmony default export */ const navigation_VerticalNavSectionTitle = (VerticalNavSectionTitle);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavItems.tsx
// ** Types Import


// ** Custom Menu Components


const resolveNavItemComponent = (item)=>{
    if (item.sectionTitle) return navigation_VerticalNavSectionTitle;
    return navigation_VerticalNavLink;
};
const VerticalNavItems = (props)=>{
    // ** Props
    const { verticalNavItems  } = props;
    const RenderMenuItems = verticalNavItems?.map((item, index)=>{
        const TagName = resolveNavItemComponent(item);
        return /*#__PURE__*/ (0,external_react_.createElement)(TagName, {
            ...props,
            key: index,
            item: item
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: RenderMenuItems
    });
};
/* harmony default export */ const navigation_VerticalNavItems = (VerticalNavItems);

;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/VerticalNavHeader.tsx
// ** React Import

// ** Next Import

// ** MUI Imports



// ** Configs

// ** Styled Components
const MenuHeaderWrapper = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: theme.spacing(4.5),
        transition: "padding .25s ease-in-out",
        minHeight: theme.mixins.toolbar.minHeight
    }));
const HeaderTitle = (0,styles_.styled)((Typography_default()))(({ theme  })=>({
        fontWeight: 600,
        lineHeight: "normal",
        textTransform: "uppercase",
        color: theme.palette.text.primary,
        transition: "opacity .25s ease-in-out, margin .25s ease-in-out"
    }));
const StyledLink = (0,styles_.styled)("a")({
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
});
const VerticalNavHeader = (props)=>{
    // ** Props
    const { verticalNavMenuBranding: userVerticalNavMenuBranding  } = props;
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(MenuHeaderWrapper, {
        className: "nav-header",
        sx: {
            pl: 6
        },
        children: userVerticalNavMenuBranding ? userVerticalNavMenuBranding(props) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(HeaderTitle, {
                    variant: "h6",
                    sx: {
                        ml: 3
                    },
                    children: themeConfig/* default.templateName */.Z.templateName
                })
            })
        })
    });
};
/* harmony default export */ const navigation_VerticalNavHeader = (VerticalNavHeader);

// EXTERNAL MODULE: ./src/@core/utils/hex-to-rgba.ts
var hex_to_rgba = __webpack_require__(969);
;// CONCATENATED MODULE: ./src/@core/layouts/components/vertical/navigation/index.tsx
// ** React Import


// ** MUI Import



// ** Third Party Components

// ** Component Imports



// ** Util Import

const StyledBoxForShadow = (0,styles_.styled)((Box_default()))({
    top: 50,
    left: -8,
    zIndex: 2,
    height: 75,
    display: "none",
    position: "absolute",
    pointerEvents: "none",
    width: "calc(100% + 15px)",
    "&.d-block": {
        display: "block"
    }
});
const Navigation = (props)=>{
    // ** Props
    const { hidden , afterVerticalNavMenuContent , beforeVerticalNavMenuContent , verticalNavMenuContent: userVerticalNavMenuContent  } = props;
    // ** States
    const { 0: groupActive , 1: setGroupActive  } = (0,external_react_.useState)([]);
    const { 0: currentActiveGroup , 1: setCurrentActiveGroup  } = (0,external_react_.useState)([]);
    // ** Ref
    const shadowRef = (0,external_react_.useRef)(null);
    // ** Hooks
    const theme = (0,styles_.useTheme)();
    // ** Fixes Navigation InfiniteScroll
    const handleInfiniteScroll = (ref)=>{
        if (ref) {
            // @ts-ignore
            ref._getBoundingClientRect = ref.getBoundingClientRect;
            ref.getBoundingClientRect = ()=>{
                // @ts-ignore
                const original = ref._getBoundingClientRect();
                return {
                    ...original,
                    height: Math.floor(original.height)
                };
            };
        }
    };
    // ** Scroll Menu
    const scrollMenu = (container)=>{
        container = hidden ? container.target : container;
        if (shadowRef && container.scrollTop > 0) {
            // @ts-ignore
            if (!shadowRef.current.classList.contains("d-block")) {
                // @ts-ignore
                shadowRef.current.classList.add("d-block");
            }
        } else {
            // @ts-ignore
            shadowRef.current.classList.remove("d-block");
        }
    };
    const ScrollWrapper = hidden ? (Box_default()) : (external_react_perfect_scrollbar_default());
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(navigation_Drawer, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavHeader, {
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledBoxForShadow, {
                ref: shadowRef,
                sx: {
                    background: `linear-gradient(${theme.palette.background.default} 40%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.1)} 95%,${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.05)})`
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    height: "100%",
                    position: "relative",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ScrollWrapper, {
                    containerRef: (ref)=>handleInfiniteScroll(ref),
                    ...hidden ? {
                        onScroll: (container)=>scrollMenu(container),
                        sx: {
                            height: "100%",
                            overflowY: "auto",
                            overflowX: "hidden"
                        }
                    } : {
                        options: {
                            wheelPropagation: false
                        },
                        onScrollY: (container)=>scrollMenu(container)
                    },
                    children: [
                        beforeVerticalNavMenuContent ? beforeVerticalNavMenuContent(props) : null,
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            },
                            children: userVerticalNavMenuContent ? userVerticalNavMenuContent(props) : /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                className: "nav-items",
                                sx: {
                                    transition: "padding .25s ease",
                                    pr: 4.5
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(navigation_VerticalNavItems, {
                                    groupActive: groupActive,
                                    setGroupActive: setGroupActive,
                                    currentActiveGroup: currentActiveGroup,
                                    setCurrentActiveGroup: setCurrentActiveGroup,
                                    ...props
                                })
                            })
                        })
                    ]
                })
            }),
            afterVerticalNavMenuContent ? afterVerticalNavMenuContent(props) : null
        ]
    });
};
/* harmony default export */ const navigation = (Navigation);

;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/footer/FooterContent.tsx
// ** MUI Imports



const FooterContent = ()=>{
    // ** Var
    const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down("md"));
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between"
        }
    });
};
/* harmony default export */ const footer_FooterContent = (FooterContent);

;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/footer/index.tsx
// ** React Imports

// ** MUI Imports


// ** Footer Content Component

const Footer = (props)=>{
    // ** Props
    const { settings , footerContent: userFooterContent  } = props;
    // ** Hook
    const theme = (0,styles_.useTheme)();
    // ** Vars
    const { contentWidth  } = settings;
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        component: "footer",
        className: "layout-footer",
        sx: {
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            className: "footer-content-container",
            sx: {
                width: "100%",
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                padding: theme.spacing(4, 6),
                ...contentWidth === "boxed" && {
                    "@media (min-width:1440px)": {
                        maxWidth: 1440
                    }
                }
            },
            children: userFooterContent ? userFooterContent(props) : /*#__PURE__*/ jsx_runtime_.jsx(footer_FooterContent, {})
        })
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: external "@mui/material/Zoom"
const Zoom_namespaceObject = require("@mui/material/Zoom");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/useScrollTrigger"
const useScrollTrigger_namespaceObject = require("@mui/material/useScrollTrigger");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/components/scroll-to-top/index.tsx
// ** React Imports

// ** MUI Imports



const ScrollToTopStyled = (0,styles_.styled)("div")(({ theme  })=>({
        zIndex: 11,
        position: "fixed",
        right: theme.spacing(6),
        bottom: theme.spacing(10)
    }));
const ScrollToTop = (props)=>{
    // ** Props
    const { children , className  } = props;
    // ** init trigger
    const trigger = useScrollTrigger_default()({
        threshold: 400,
        disableHysteresis: true
    });
    const handleClick = ()=>{
        const anchor = document.querySelector("body");
        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Zoom_default()), {
        in: trigger,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTopStyled, {
            className: className,
            onClick: handleClick,
            role: "presentation",
            children: children
        })
    });
};
/* harmony default export */ const scroll_to_top = (ScrollToTop);

// EXTERNAL MODULE: ./src/@core/styles/libs/react-datepicker/index.ts
var react_datepicker = __webpack_require__(5463);
;// CONCATENATED MODULE: ./src/@core/layouts/VerticalLayout.tsx
// ** React Imports


// ** MUI Imports



// ** Icons Imports

// ** Theme Config Import

// ** Components




// ** Styled Component

const VerticalLayoutWrapper = (0,styles_.styled)("div")({
    height: "100%",
    display: "flex"
});
const MainContentWrapper = (0,styles_.styled)((Box_default()))({
    flexGrow: 1,
    minWidth: 0,
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
});
const ContentWrapper = (0,styles_.styled)("main")(({ theme  })=>({
        flexGrow: 1,
        width: "100%",
        padding: theme.spacing(6),
        transition: "padding .25s ease-in-out",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        }
    }));
const VerticalLayout = (props)=>{
    // ** Props
    const { settings , children , scrollToTop  } = props;
    // ** Vars
    const { contentWidth  } = settings;
    const navWidth = themeConfig/* default.navigationSize */.Z.navigationSize;
    // ** States
    const { 0: navVisible , 1: setNavVisible  } = (0,external_react_.useState)(false);
    // ** Toggle Functions
    const toggleNavVisibility = ()=>setNavVisible(!navVisible);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(VerticalLayoutWrapper, {
                className: "layout-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navigation, {
                        navWidth: navWidth,
                        navVisible: navVisible,
                        setNavVisible: setNavVisible,
                        toggleNavVisibility: toggleNavVisibility,
                        ...props
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainContentWrapper, {
                        className: "layout-content-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(appBar, {
                                toggleNavVisibility: toggleNavVisibility,
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ContentWrapper, {
                                className: "layout-page-content",
                                sx: {
                                    ...contentWidth === "boxed" && {
                                        mx: "auto",
                                        "@media (min-width:1440px)": {
                                            maxWidth: 1440
                                        },
                                        "@media (min-width:1200px)": {
                                            maxWidth: "100%"
                                        }
                                    }
                                },
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(footer, {
                                ...props
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_datepicker/* default */.Z, {
                                sx: {
                                    zIndex: 11
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    id: "react-datepicker-portal"
                                })
                            })
                        ]
                    })
                ]
            }),
            scrollToTop ? scrollToTop(props) : /*#__PURE__*/ jsx_runtime_.jsx(scroll_to_top, {
                className: "mui-fixed",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                    color: "primary",
                    size: "small",
                    "aria-label": "scroll back to top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowUp_default()), {})
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_VerticalLayout = (VerticalLayout);

;// CONCATENATED MODULE: external "mdi-material-ui/Login"
const Login_namespaceObject = require("mdi-material-ui/Login");
var Login_default = /*#__PURE__*/__webpack_require__.n(Login_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/AccountBox"
var AccountBox_ = __webpack_require__(9170);
var AccountBox_default = /*#__PURE__*/__webpack_require__.n(AccountBox_);
// EXTERNAL MODULE: external "@mui/icons-material/VideoCameraFront"
var VideoCameraFront_ = __webpack_require__(913);
var VideoCameraFront_default = /*#__PURE__*/__webpack_require__.n(VideoCameraFront_);
;// CONCATENATED MODULE: external "@mui/icons-material/School"
const School_namespaceObject = require("@mui/icons-material/School");
var School_default = /*#__PURE__*/__webpack_require__.n(School_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/LocalLibrary"
const LocalLibrary_namespaceObject = require("@mui/icons-material/LocalLibrary");
var LocalLibrary_default = /*#__PURE__*/__webpack_require__.n(LocalLibrary_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/HomeOutline"
const HomeOutline_namespaceObject = require("mdi-material-ui/HomeOutline");
var HomeOutline_default = /*#__PURE__*/__webpack_require__.n(HomeOutline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/People"
const People_namespaceObject = require("@mui/icons-material/People");
var People_default = /*#__PURE__*/__webpack_require__.n(People_namespaceObject);
// EXTERNAL MODULE: external "mdi-material-ui/AccountCogOutline"
var AccountCogOutline_ = __webpack_require__(2542);
var AccountCogOutline_default = /*#__PURE__*/__webpack_require__.n(AccountCogOutline_);
;// CONCATENATED MODULE: ./src/navigation/vertical/index.ts
// ** Icon imports





// import Table from 'mdi-material-ui/Table'
// import CubeOutline from 'mdi-material-ui/CubeOutline'



// import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
// import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
// import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
// import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
// ** Type import
// import { VerticalNavItemsType } from 'src/@core/layouts/types'
const vertical_navigation = ()=>{
    return [
        {
            title: "Dashboard",
            icon: (HomeOutline_default()),
            path: "/"
        },
        {
            title: "Week 22-24:Final Group Project",
            subject: "11",
            icon: (School_default()),
            path: "/week/22-24",
            openInNewTab: false
        },
        {
            sectionTitle: "Previous Weeks"
        },
        {
            title: "Week 21:Interview Prep",
            subject: "11",
            icon: (School_default()),
            path: "/week/21",
            openInNewTab: false
        },
        {
            title: "Week 20:Finalize Case Studies & Code",
            subject: "11",
            icon: (School_default()),
            path: "/week/20",
            openInNewTab: false
        },
        {
            title: "Week 19:Publish Your Portfolios",
            subject: "11",
            icon: (School_default()),
            path: "/week/19",
            openInNewTab: false
        },
        {
            title: "Week 18: Portfolios",
            subject: "11",
            icon: (School_default()),
            path: "/week/18",
            openInNewTab: false
        },
        // {
        //   title: 'Week 17: Intro to Front End Development',
        //   subject:"11",
        //   icon: SchoolIcon,
        //   path: '/week/17',
        //   openInNewTab: false
        // },
        // {
        //   title: 'Week 16: Portfolio & Case Studies',
        //   subject:"11",
        //   icon: SchoolIcon,
        //   path: '/week/16',
        //   openInNewTab: false
        // },
        {
            title: "Week 13-17: Nonprofit Group Project",
            subject: "11",
            icon: (School_default()),
            path: "/week/13-17",
            openInNewTab: false
        },
        {
            title: "Week 12: Advanced UI",
            subject: "11",
            icon: (School_default()),
            path: "/week/12",
            openInNewTab: false
        },
        {
            title: "Week 11: Responsive Web Design",
            subject: "11",
            icon: (School_default()),
            path: "/week/11",
            openInNewTab: false
        },
        {
            title: "Week 10: Responsive Design",
            subject: "11",
            icon: (School_default()),
            path: "/week/10",
            openInNewTab: false
        },
        {
            title: "Week 9: Web Dev Intro",
            subject: "11",
            icon: (School_default()),
            path: "/week/9",
            openInNewTab: false
        },
        {
            title: "Week 8: UI Design",
            subject: "11",
            icon: (School_default()),
            path: "/week/8",
            openInNewTab: false
        },
        {
            title: "Week 4-7: Group Project",
            subject: "11",
            icon: (School_default()),
            path: "/week/4-7",
            openInNewTab: false
        },
        {
            title: "Week 3: Low-Fi Prototyping",
            subject: "11",
            icon: (School_default()),
            path: "/week/3",
            openInNewTab: false
        },
        {
            title: "Week 2: UX + Design Thinking: Definition, Ideation, UX Storytelling",
            subject: "11",
            icon: (School_default()),
            path: "/week/2",
            openInNewTab: false
        },
        {
            title: "Week 1: Introduction to UX Design: Empathy Phase",
            subject: "11",
            icon: (School_default()),
            path: "/week/1",
            openInNewTab: false
        },
        {
            sectionTitle: "Profile"
        },
        {
            title: "Account Settings",
            icon: (AccountCogOutline_default()),
            path: "/account-settings"
        },
        {
            title: "Meet your peers",
            icon: (People_default()),
            path: "/peers"
        },
        {
            sectionTitle: "Important Links"
        },
        {
            title: "BCS",
            icon: (School_default()),
            path: "https://courses.bootcampspot.com/courses/4019",
            openInNewTab: true
        },
        {
            title: "Career Services",
            icon: (Login_default()),
            path: "https://sites.google.com/2u.com/careerservices-uxui/home",
            openInNewTab: true
        },
        {
            title: "Request a Tutor",
            icon: (AccountBox_default()),
            path: "https://bootcampspot.instructure.com/courses/6348/external_tools/429",
            openInNewTab: true
        },
        {
            title: "Zoom Meetings & Recordings",
            icon: (VideoCameraFront_default()),
            path: "https://bootcampspot.instructure.com/courses/6348/external_tools/249",
            openInNewTab: true
        },
        {
            sectionTitle: "Instructional Staff"
        },
        // {
        //   title: 'SSM: Kevin',
        //   icon: PrivacyTipIcon,
        //   path: 'mailto: ksun@bootcampspot.com',
        //   openInNewTab: true
        // },
        {
            title: "Instructor: Queen",
            icon: (LocalLibrary_default()),
            path: "https://linkedin.com/in/queenshabazz",
            openInNewTab: true,
            subject: "teacher"
        },
        {
            title: "TA: Omotola",
            icon: (LocalLibrary_default()),
            path: "https://www.linkedin.com/in/omotola-a-8a8762228",
            openInNewTab: true,
            subject: "TA"
        }, 
    ];
};
/* harmony default export */ const vertical = (vertical_navigation);

// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "mdi-material-ui/Menu"
const Menu_namespaceObject = require("mdi-material-ui/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/WeatherNight"
const WeatherNight_namespaceObject = require("mdi-material-ui/WeatherNight");
var WeatherNight_default = /*#__PURE__*/__webpack_require__.n(WeatherNight_namespaceObject);
;// CONCATENATED MODULE: external "mdi-material-ui/WeatherSunny"
const WeatherSunny_namespaceObject = require("mdi-material-ui/WeatherSunny");
var WeatherSunny_default = /*#__PURE__*/__webpack_require__.n(WeatherSunny_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/layouts/components/shared-components/ModeToggler.tsx
// ** MUI Imports


// ** Icons Imports


const ModeToggler = (props)=>{
    // ** Props
    const { settings , saveSettings  } = props;
    const handleModeChange = (mode)=>{
        saveSettings({
            ...settings,
            mode
        });
    };
    const handleModeToggle = ()=>{
        if (settings.mode === "light") {
            handleModeChange("dark");
        } else {
            handleModeChange("light");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        color: "inherit",
        "aria-haspopup": "true",
        onClick: handleModeToggle,
        children: settings.mode === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx((WeatherSunny_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((WeatherNight_default()), {})
    });
};
/* harmony default export */ const shared_components_ModeToggler = (ModeToggler);

;// CONCATENATED MODULE: ./src/layouts/components/vertical/AppBarContent.tsx
// ** MUI Imports




// ** Icons Imports

// ** Components

const AppBarContent = (props)=>{
    // ** Props
    const { hidden , settings , saveSettings , toggleNavVisibility  } = props;
    // ** Hook
    const hiddenSm = useMediaQuery_default()((theme)=>theme.breakpoints.down("sm"));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                className: "actions-left",
                sx: {
                    mr: 2,
                    display: "flex",
                    alignItems: "center"
                },
                children: hidden ? /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    color: "inherit",
                    onClick: toggleNavVisibility,
                    sx: {
                        ml: -2.75,
                        ...hiddenSm ? {} : {
                            mr: 3.5
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                }) : null
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                className: "actions-right",
                sx: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    hiddenSm ? null : /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        component: "a",
                        target: "_blank",
                        rel: "noreferrer",
                        sx: {
                            mr: 4,
                            display: "flex"
                        },
                        href: "https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(shared_components_ModeToggler, {
                        settings: settings,
                        saveSettings: saveSettings
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const vertical_AppBarContent = (AppBarContent);

;// CONCATENATED MODULE: ./src/@core/context/settingsContext.tsx
// ** React Imports


// ** ThemeConfig Import

const initialSettings = {
    themeColor: "primary",
    mode: themeConfig/* default.mode */.Z.mode,
    contentWidth: themeConfig/* default.contentWidth */.Z.contentWidth
};
// ** Create Context
const SettingsContext = /*#__PURE__*/ (0,external_react_.createContext)({
    saveSettings: ()=>null,
    settings: initialSettings
});
const SettingsProvider = ({ children  })=>{
    // ** State
    const { 0: settings , 1: setSettings  } = (0,external_react_.useState)({
        ...initialSettings
    });
    const saveSettings = (updatedSettings)=>{
        setSettings(updatedSettings);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(SettingsContext.Provider, {
        value: {
            settings,
            saveSettings
        },
        children: children
    });
};
const SettingsConsumer = SettingsContext.Consumer;

;// CONCATENATED MODULE: ./src/@core/hooks/useSettings.ts


const useSettings = ()=>(0,external_react_.useContext)(SettingsContext);

;// CONCATENATED MODULE: ./src/layouts/UserLayout.tsx
// ** React Imports

// ** MUI Imports


// ** Layout Imports
// !Do not remove this Layout import

// ** Navigation Imports

// ** Component Import
// import UpgradeToProButton from './components/UpgradeToProButton'

// ** Hook Import

const UserLayout = ({ children  })=>{
    // ** Hooks
    const { settings , saveSettings  } = useSettings();
    /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */ const hidden = useMediaQuery_default()((theme)=>theme.breakpoints.down("lg"));
    const UpgradeToProImg = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                mx: "auto"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://themeselection.com/products/materio-mui-react-nextjs-admin-template/"
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(layouts_VerticalLayout, {
        hidden: hidden,
        settings: settings,
        saveSettings: saveSettings,
        verticalNavItems: vertical(),
        afterVerticalNavMenuContent: UpgradeToProImg,
        verticalAppBarContent: (props // AppBar Content
        )=>/*#__PURE__*/ jsx_runtime_.jsx(vertical_AppBarContent, {
                hidden: hidden,
                settings: settings,
                saveSettings: saveSettings,
                toggleNavVisibility: props.toggleNavVisibility
            }),
        children: children
    });
};
/* harmony default export */ const layouts_UserLayout = (UserLayout);

;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/GlobalStyles"
const GlobalStyles_namespaceObject = require("@mui/material/GlobalStyles");
var GlobalStyles_default = /*#__PURE__*/__webpack_require__.n(GlobalStyles_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/theme/overrides/card.ts
// ** MUI Imports
const Card = (theme)=>{
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[6],
                    "& .card-more-options": {
                        marginTop: theme.spacing(-1),
                        marginRight: theme.spacing(-3)
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root": {
                        paddingTop: 0
                    },
                    "& .MuiCardHeader-subheader": {
                        fontSize: "0.875rem"
                    }
                },
                title: {
                    lineHeight: 1,
                    fontWeight: 500,
                    fontSize: "1.25rem",
                    letterSpacing: "0.0125em"
                },
                action: {
                    marginTop: 0,
                    marginRight: 0
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiCardContent-root": {
                        paddingTop: 0
                    },
                    "&:last-of-type": {
                        paddingBottom: theme.spacing(5)
                    },
                    "& + .MuiCardActions-root": {
                        paddingTop: 0
                    }
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "&.card-action-dense": {
                        padding: theme.spacing(0, 2.5, 2.5),
                        ".MuiCard-root .MuiCardMedia-root + &": {
                            paddingTop: theme.spacing(2.5)
                        },
                        ".MuiCard-root &:first-of-type": {
                            paddingTop: theme.spacing(5),
                            paddingBottom: theme.spacing(5),
                            "& + .MuiCardContent-root": {
                                paddingTop: 0
                            },
                            "& + .MuiCardHeader-root": {
                                paddingTop: 0
                            }
                        }
                    },
                    "& .MuiButton-text": {
                        paddingLeft: theme.spacing(2.5),
                        paddingRight: theme.spacing(2.5)
                    }
                }
            }
        }
    };
};
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/chip.ts
// ** MUI Imports
const Chip = (theme)=>{
    return {
        MuiChip: {
            styleOverrides: {
                outlined: {
                    "&.MuiChip-colorDefault": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    }
                },
                deleteIcon: {
                    width: 18,
                    height: 18
                }
            }
        }
    };
};
/* harmony default export */ const overrides_chip = (Chip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/link.ts
/* harmony default export */ const overrides_link = ({
    MuiLink: {
        styleOverrides: {
            root: {
                textDecoration: "none"
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/list.ts
// ** MUI Imports
const List = (theme)=>{
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(2.25),
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(4)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                dense: {
                    "& .MuiListItemText-primary": {
                        color: theme.palette.text.primary
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: theme.palette.text.primary
                }
            }
        }
    };
};
/* harmony default export */ const overrides_list = (List);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/menu.ts
// ** MUI Imports
const Menu = (theme)=>{
    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                    "& .MuiMenu-paper": {
                        borderRadius: 5,
                        boxShadow: theme.palette.mode === "light" ? theme.shadows[8] : theme.shadows[9]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_menu = (Menu);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tabs.ts
// ** MUI Imports
const Tabs = (theme)=>{
    return {
        MuiTabs: {
            styleOverrides: {
                vertical: {
                    minWidth: 130,
                    marginRight: theme.spacing(4),
                    borderRight: `1px solid ${theme.palette.divider}`,
                    "& .MuiTab-root": {
                        minWidth: 130
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                textColorSecondary: {
                    "&.Mui-selected": {
                        color: theme.palette.text.secondary
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tabs = (Tabs);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/input.ts
// ** MUI Imports
const input = (theme)=>{
    return {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    "&:before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    "&.Mui-disabled:before": {
                        borderBottom: `1px solid ${theme.palette.text.disabled}`
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
                    "&:hover:not(.Mui-disabled)": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
                    },
                    "&:before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.error.main
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.text.disabled
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_input = (input);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/paper.ts
/* harmony default export */ const paper = ({
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: "none"
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/table.ts
// ** MUI Imports
const Table = (theme)=>{
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[0],
                    borderTopColor: theme.palette.divider
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    textTransform: "uppercase",
                    "& .MuiTableCell-head": {
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.13px"
                    }
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-body": {
                        letterSpacing: "0.25px",
                        color: theme.palette.text.secondary,
                        "&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)": {
                            paddingTop: theme.spacing(3.5),
                            paddingBottom: theme.spacing(3.5)
                        }
                    }
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-head:first-child, & .MuiTableCell-root:first-child ": {
                        paddingLeft: theme.spacing(5)
                    },
                    "& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child": {
                        paddingRight: theme.spacing(5)
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    "& .MuiButton-root": {
                        textTransform: "uppercase",
                        color: theme.palette.text.secondary
                    }
                },
                stickyHeader: {
                    backgroundColor: theme.palette.customColors.tableHeaderBg
                }
            }
        }
    };
};
/* harmony default export */ const table = (Table);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/alerts.ts
// ** MUI Imports

// ** Util Import

const Alert = (theme)=>{
    const getColor = theme.palette.mode === "light" ? styles_.darken : styles_.lighten;
    return {
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 5,
                    "& .MuiAlertTitle-root": {
                        marginBottom: theme.spacing(1.6)
                    },
                    "& a": {
                        color: "inherit",
                        fontWeight: 500
                    }
                },
                standardSuccess: {
                    color: getColor(theme.palette.success.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.success.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.success.main, 0.12)
                    }
                },
                standardInfo: {
                    color: getColor(theme.palette.info.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.info.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.info.main, 0.12)
                    }
                },
                standardWarning: {
                    color: getColor(theme.palette.warning.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.warning.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.warning.main, 0.12)
                    }
                },
                standardError: {
                    color: getColor(theme.palette.error.main, 0.12),
                    backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.error.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.error.main, 0.12)
                    }
                },
                outlinedSuccess: {
                    borderColor: theme.palette.success.main,
                    color: getColor(theme.palette.success.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.success.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.success.main, 0.12)
                    }
                },
                outlinedInfo: {
                    borderColor: theme.palette.info.main,
                    color: getColor(theme.palette.info.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.info.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.info.main, 0.12)
                    }
                },
                outlinedWarning: {
                    borderColor: theme.palette.warning.main,
                    color: getColor(theme.palette.warning.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.warning.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.warning.main, 0.12)
                    }
                },
                outlinedError: {
                    borderColor: theme.palette.error.main,
                    color: getColor(theme.palette.error.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.error.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.error.main, 0.12)
                    }
                },
                filled: {
                    fontWeight: 400
                }
            }
        }
    };
};
/* harmony default export */ const overrides_alerts = (Alert);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/button.ts
// ** MUI Imports
// ** Theme Config Imports

const Button = (theme)=>{
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: 5,
                    lineHeight: 1.71,
                    letterSpacing: "0.3px",
                    padding: `${theme.spacing(1.875, 3)}`
                },
                contained: {
                    boxShadow: theme.shadows[3],
                    padding: `${theme.spacing(1.875, 5.5)}`
                },
                outlined: {
                    padding: `${theme.spacing(1.625, 5.25)}`
                },
                sizeSmall: {
                    padding: `${theme.spacing(1, 2.25)}`,
                    "&.MuiButton-contained": {
                        padding: `${theme.spacing(1, 3.5)}`
                    },
                    "&.MuiButton-outlined": {
                        padding: `${theme.spacing(0.75, 3.25)}`
                    }
                },
                sizeLarge: {
                    padding: `${theme.spacing(2.125, 5.5)}`,
                    "&.MuiButton-contained": {
                        padding: `${theme.spacing(2.125, 6.5)}`
                    },
                    "&.MuiButton-outlined": {
                        padding: `${theme.spacing(1.875, 6.25)}`
                    }
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: themeConfig/* default.disableRipple */.Z.disableRipple
            }
        }
    };
};
/* harmony default export */ const overrides_button = (Button);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dialog.ts
// ** MUI Imports
// ** Util Import

const Dialog = (theme)=>{
    return {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.shadows[6],
                    "&:not(.MuiDialog-paperFullScreen)": {
                        "@media (max-width:599px)": {
                            margin: theme.spacing(4),
                            width: `calc(100% - ${theme.spacing(8)})`,
                            maxWidth: `calc(100% - ${theme.spacing(8)}) !important`
                        }
                    },
                    "& > .MuiList-root": {
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(1)
                    }
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiDialogContent-root": {
                        paddingTop: 0
                    },
                    "& + .MuiDialogActions-root": {
                        paddingTop: 0
                    },
                    // Styling for Mobile Date Picker starts
                    "& .PrivatePickersToolbar-root": {
                        padding: theme.spacing(4, 5),
                        color: theme.palette.primary.contrastText,
                        backgroundColor: theme.palette.primary.main,
                        "& .MuiTypography-root": {
                            color: theme.palette.primary.contrastText
                        },
                        "& span.MuiTypography-overline": {
                            fontSize: "1rem",
                            lineHeight: "24px",
                            letterSpacing: "0.15px"
                        },
                        '& ~ div[class^="css-"] > div[class^="css-"]': {
                            marginTop: theme.spacing(6),
                            marginBottom: theme.spacing(6),
                            '& > div[class^="css-"]': {
                                backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default,
                                "& ~ .MuiIconButton-root span.MuiTypography-caption": {
                                    color: "inherit"
                                }
                            }
                        },
                        "& .PrivateTimePickerToolbar-hourMinuteLabel": {
                            alignItems: "center",
                            "& > .MuiButton-root span.MuiTypography-root": {
                                fontWeight: 300,
                                lineHeight: "72px",
                                fontSize: "3.75rem",
                                letterSpacing: "-0.5px"
                            },
                            "& > .MuiTypography-root": {
                                color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54),
                                "& + .MuiButton-root > span.MuiTypography-root": {
                                    color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54)
                                }
                            }
                        },
                        "& .PrivateTimePickerToolbar-ampmSelection span.MuiTypography-root:not(.Mui-selected)": {
                            color: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.contrastText, 0.54)
                        }
                    }
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "&.dialog-actions-dense": {
                        padding: theme.spacing(2.5),
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dialog = (Dialog);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/rating.ts
// ** MUI Imports
const Rating = (theme)=>{
    return {
        MuiRating: {
            styleOverrides: {
                root: {
                    color: theme.palette.warning.main
                }
            }
        }
    };
};
/* harmony default export */ const overrides_rating = (Rating);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/select.ts
/* harmony default export */ const overrides_select = ({
    MuiSelect: {
        styleOverrides: {
            select: {
                minWidth: "6rem !important",
                "&.MuiTablePagination-select": {
                    minWidth: "1rem !important"
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/avatars.ts
// ** MUI Imports
const Avatar = (theme)=>{
    return {
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[700]
                },
                rounded: {
                    borderRadius: 5
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    justifyContent: "flex-end",
                    ".MuiCard-root & .MuiAvatar-root": {
                        borderColor: theme.palette.background.paper
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_avatars = (Avatar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/divider.ts
// ** MUI Imports
const Divider = (theme)=>{
    return {
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: `${theme.spacing(2)} 0`
                }
            }
        }
    };
};
/* harmony default export */ const overrides_divider = (Divider);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/popover.ts
// ** MUI Imports
const Popover = (theme)=>{
    return {
        MuiPopover: {
            styleOverrides: {
                root: {
                    "& .MuiPopover-paper": {
                        boxShadow: theme.shadows[6]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_popover = (Popover);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tooltip.ts
// ** MUI Imports
// ** Util Import

const Tooltip = (theme)=>{
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.mode === "light" ? (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[900], 0.9) : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[700], 0.9)
                },
                arrow: {
                    color: theme.palette.mode === "light" ? (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[900], 0.9) : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[700], 0.9)
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tooltip = (Tooltip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/backdrop.ts
// ** MUI Imports
// ** Util Import

const Backdrop = (theme)=>{
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === "light" ? `rgba(${theme.palette.customColors.main}, 0.7)` : (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.background.default, 0.7)
                },
                invisible: {
                    backgroundColor: "transparent"
                }
            }
        }
    };
};
/* harmony default export */ const overrides_backdrop = (Backdrop);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/snackbar.ts
// ** MUI Imports
const Snackbar = (theme)=>{
    return {
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[900] : theme.palette.grey[100]
                }
            }
        }
    };
};
/* harmony default export */ const overrides_snackbar = (Snackbar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/switches.ts
// ** MUI Imports
const Switch = (theme)=>{
    return {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    "& .MuiSwitch-track": {
                        backgroundColor: `rgb(${theme.palette.customColors.main})`
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_switches = (Switch);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/timeline.ts
// ** MUI Imports
// ** Util Import

const Timeline = (theme)=>{
    return {
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    "&:not(:last-of-type)": {
                        "& .MuiTimelineContent-root": {
                            marginBottom: theme.spacing(4)
                        }
                    }
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        },
        MuiTimelineContent: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(0.5)
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                filledPrimary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12)}`
                },
                filledSecondary: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.12)}`
                },
                filledSuccess: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.success.main, 0.12)}`
                },
                filledError: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.error.main, 0.12)}`
                },
                filledWarning: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.warning.main, 0.12)}`
                },
                filledInfo: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.info.main, 0.12)}`
                },
                filledGrey: {
                    boxShadow: `0 0 0 3px ${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.grey[400], 0.12)}`
                },
                outlinedPrimary: {
                    "& svg": {
                        color: theme.palette.primary.main
                    }
                },
                outlinedSecondary: {
                    "& svg": {
                        color: theme.palette.secondary.main
                    }
                },
                outlinedSuccess: {
                    "& svg": {
                        color: theme.palette.success.main
                    }
                },
                outlinedError: {
                    "& svg": {
                        color: theme.palette.error.main
                    }
                },
                outlinedWarning: {
                    "& svg": {
                        color: theme.palette.warning.main
                    }
                },
                outlinedInfo: {
                    "& svg": {
                        color: theme.palette.info.main
                    }
                },
                outlinedGrey: {
                    "& svg": {
                        color: theme.palette.grey[500]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_timeline = (Timeline);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/accordion.ts
// ** MUI Imports
const Accordion = (theme)=>{
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    },
                    "&.Mui-expanded": {
                        boxShadow: theme.shadows[3]
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    padding: `0 ${theme.spacing(5)}`,
                    "& + .MuiCollapse-root": {
                        "& .MuiAccordionDetails-root:first-child": {
                            paddingTop: 0
                        }
                    }
                },
                content: {
                    margin: `${theme.spacing(2.5)} 0`
                },
                expandIconWrapper: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiAccordionDetails-root": {
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_accordion = (Accordion);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/pagination.ts
// ** MUI Imports
// ** Util Import

const Pagination = (theme)=>{
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    }
                },
                outlined: {
                    borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                },
                outlinedPrimary: {
                    "&.Mui-selected": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.12),
                        "&:hover": {
                            backgroundColor: `${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.primary.main, 0.2)} !important`
                        }
                    }
                },
                outlinedSecondary: {
                    "&.Mui-selected": {
                        backgroundColor: (0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.12),
                        "&:hover": {
                            backgroundColor: `${(0,hex_to_rgba/* hexToRGBA */.E)(theme.palette.secondary.main, 0.2)} !important`
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_pagination = (Pagination);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/typography.ts
// ** MUI Imports
const Typography = (theme)=>{
    return {
        MuiTypography: {
            styleOverrides: {
                gutterBottom: {
                    marginBottom: theme.spacing(2)
                }
            }
        }
    };
};
/* harmony default export */ const typography = (Typography);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/toggleButton.ts
/* harmony default export */ const toggleButton = ({
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    },
    MuiToggleButton: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dateTimePicker.ts
// ** MUI Imports
const DateTimePicker = (theme)=>{
    return {
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    '& [role="presentation"]': {
                        fontWeight: 400,
                        "& .PrivatePickersFadeTransitionGroup-root + .PrivatePickersFadeTransitionGroup-root > div": {
                            marginRight: 0
                        },
                        "& .MuiIconButton-sizeSmall": {
                            padding: theme.spacing(0.5)
                        },
                        "& + div .MuiIconButton-root:not(.Mui-disabled)": {
                            color: theme.palette.text.secondary
                        }
                    },
                    "& .PrivatePickersSlideTransition-root": {
                        minHeight: 240
                    }
                }
            }
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    fontSize: "0.875rem"
                }
            }
        },
        MuiClockPicker: {
            styleOverrides: {
                arrowSwitcher: {
                    "& .MuiIconButton-root:not(.Mui-disabled)": {
                        color: theme.palette.text.secondary
                    },
                    "& + div": {
                        "& > div": {
                            backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default,
                            "& ~ .MuiIconButton-root span.MuiTypography-caption": {
                                color: "inherit"
                            }
                        }
                    }
                }
            }
        },
        MuiMonthPicker: {
            styleOverrides: {
                root: {
                    "& > .MuiTypography-root.Mui-selected": {
                        fontSize: "1rem"
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dateTimePicker = (DateTimePicker);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/index.ts
// ** MUI Imports
// ** Overrides Imports



























const Overrides = (theme)=>{
    const chip = overrides_chip(theme);
    const list = overrides_list(theme);
    const menu = overrides_menu(theme);
    const tabs = overrides_tabs(theme);
    const cards = card(theme);
    const input = overrides_input(theme);
    const tables = table(theme);
    const alerts = overrides_alerts(theme);
    const button = overrides_button(theme);
    const rating = overrides_rating(theme);
    const avatars = overrides_avatars(theme);
    const divider = overrides_divider(theme);
    const dialog = overrides_dialog(theme);
    const popover = overrides_popover(theme);
    const tooltip = overrides_tooltip(theme);
    const backdrop = overrides_backdrop(theme);
    const snackbar = overrides_snackbar(theme);
    const switches = overrides_switches(theme);
    const timeline = overrides_timeline(theme);
    const accordion = overrides_accordion(theme);
    const pagination = overrides_pagination(theme);
    const dateTimePicker = overrides_dateTimePicker(theme);
    return Object.assign(chip, list, menu, tabs, cards, input, alerts, button, dialog, rating, tables, avatars, divider, overrides_link, popover, tooltip, backdrop, paper, snackbar, switches, timeline, accordion, overrides_select, pagination, typography, dateTimePicker, toggleButton);
};
/* harmony default export */ const overrides = (Overrides);

;// CONCATENATED MODULE: ./src/@core/theme/typography/index.ts
// ** Theme Type Import
const typography_Typography = (theme)=>{
    return {
        h1: {
            fontWeight: 500,
            letterSpacing: "-1.5px",
            color: theme.palette.text.primary
        },
        h2: {
            fontWeight: 500,
            letterSpacing: "-0.5px",
            color: theme.palette.text.primary
        },
        h3: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h4: {
            fontWeight: 500,
            letterSpacing: "0.25px",
            color: theme.palette.text.primary
        },
        h5: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h6: {
            letterSpacing: "0.15px",
            color: theme.palette.text.primary
        },
        subtitle1: {
            letterSpacing: "0.15px",
            color: theme.palette.text.primary
        },
        subtitle2: {
            letterSpacing: "0.1px",
            color: theme.palette.text.secondary
        },
        body1: {
            letterSpacing: "0.15px",
            color: theme.palette.text.primary
        },
        body2: {
            lineHeight: 1.5,
            letterSpacing: "0.15px",
            color: theme.palette.text.secondary
        },
        button: {
            letterSpacing: "0.3px",
            color: theme.palette.text.primary
        },
        caption: {
            letterSpacing: "0.4px",
            color: theme.palette.text.secondary
        },
        overline: {
            letterSpacing: "1px",
            color: theme.palette.text.secondary
        }
    };
};
/* harmony default export */ const theme_typography = (typography_Typography);

;// CONCATENATED MODULE: external "@mui/utils"
const external_mui_utils_namespaceObject = require("@mui/utils");
;// CONCATENATED MODULE: ./src/@core/theme/palette/index.ts
// ** Type Imports
const DefaultPalette = (mode, themeColor)=>{
    // ** Vars
    const lightColor = "58, 53, 65";
    const darkColor = "231, 227, 252";
    const mainColor = mode === "light" ? lightColor : darkColor;
    const primaryGradient = ()=>{
        if (themeColor === "primary") {
            return "#C6A7FE";
        } else if (themeColor === "secondary") {
            return "#9C9FA4";
        } else if (themeColor === "success") {
            return "#93DD5C";
        } else if (themeColor === "error") {
            return "#FF8C90";
        } else if (themeColor === "warning") {
            return "#FFCF5C";
        } else {
            return "#6ACDFF";
        }
    };
    return {
        customColors: {
            main: mainColor,
            primaryGradient: primaryGradient(),
            tableHeaderBg: mode === "light" ? "#F9FAFC" : "#3D3759"
        },
        common: {
            black: "#000",
            white: "#FFF"
        },
        mode: mode,
        primary: {
            light: "#9E69FD",
            main: "#0063A6",
            dark: "#002fa6",
            contrastText: "#FFF"
        },
        secondary: {
            light: "#9C9FA4",
            main: "#8A8D93",
            dark: "#777B82",
            contrastText: "#FFF"
        },
        success: {
            light: "#6AD01F",
            main: "#56CA00",
            dark: "#4CB200",
            contrastText: "#FFF"
        },
        error: {
            light: "#FF6166",
            main: "#FF4C51",
            dark: "#E04347",
            contrastText: "#FFF"
        },
        warning: {
            light: "#FFCA64",
            main: "#FFB400",
            dark: "#E09E00",
            contrastText: "#FFF"
        },
        info: {
            light: "#32BAFF",
            main: "#16B1FF",
            dark: "#139CE0",
            contrastText: "#FFF"
        },
        grey: {
            50: "#FAFAFA",
            100: "#F5F5F5",
            200: "#EEEEEE",
            300: "#E0E0E0",
            400: "#BDBDBD",
            500: "#9E9E9E",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            A100: "#D5D5D5",
            A200: "#AAAAAA",
            A400: "#616161",
            A700: "#303030"
        },
        text: {
            primary: `rgba(${mainColor}, 0.87)`,
            secondary: `rgba(${mainColor}, 0.68)`,
            disabled: `rgba(${mainColor}, 0.38)`
        },
        divider: `rgba(${mainColor}, 0.12)`,
        background: {
            paper: mode === "light" ? "#FFF" : "#13223e",
            default: mode === "light" ? "#F4F5FA" : "#141225"
        },
        action: {
            active: `rgba(${mainColor}, 0.54)`,
            hover: `rgba(${mainColor}, 0.04)`,
            selected: `rgba(${mainColor}, 0.08)`,
            disabled: `rgba(${mainColor}, 0.3)`,
            disabledBackground: `rgba(${mainColor}, 0.18)`,
            focus: `rgba(${mainColor}, 0.12)`
        }
    };
};
/* harmony default export */ const palette = (DefaultPalette);

;// CONCATENATED MODULE: ./src/@core/theme/spacing/index.ts
/* harmony default export */ const spacing = ({
    spacing: (factor)=>`${0.25 * factor}rem`
});

;// CONCATENATED MODULE: ./src/@core/theme/shadows/index.ts
// ** Theme Type Import
const Shadows = (mode)=>{
    if (mode === "light") {
        return [
            "none",
            "0px 2px 1px -1px rgba(58, 53, 65, 0.2), 0px 1px 1px 0px rgba(58, 53, 65, 0.14), 0px 1px 3px 0px rgba(58, 53, 65, 0.12)",
            "0px 3px 1px -2px rgba(58, 53, 65, 0.2), 0px 2px 2px 0px rgba(58, 53, 65, 0.14), 0px 1px 5px 0px rgba(58, 53, 65, 0.12)",
            "0px 4px 8px -4px rgba(58, 53, 65, 0.42)",
            "0px 6px 18px -8px rgba(58, 53, 65, 0.56)",
            "0px 3px 5px -1px rgba(58, 53, 65, 0.2), 0px 5px 8px 0px rgba(58, 53, 65, 0.14), 0px 1px 14px 0px rgba(58, 53, 65, 0.12)",
            "0px 2px 10px 0px rgba(58, 53, 65, 0.1)",
            "0px 4px 5px -2px rgba(58, 53, 65, 0.2), 0px 7px 10px 1px rgba(58, 53, 65, 0.14), 0px 2px 16px 1px rgba(58, 53, 65, 0.12)",
            "0px 5px 5px -3px rgba(58, 53, 65, 0.2), 0px 8px 10px 1px rgba(58, 53, 65, 0.14), 0px 3px 14px 2px rgba(58, 53, 65, 0.12)",
            "0px 5px 6px -3px rgba(58, 53, 65, 0.2), 0px 9px 12px 1px rgba(58, 53, 65, 0.14), 0px 3px 16px 2px rgba(58, 53, 65, 0.12)",
            "0px 6px 6px -3px rgba(58, 53, 65, 0.2), 0px 10px 14px 1px rgba(58, 53, 65, 0.14), 0px 4px 18px 3px rgba(58, 53, 65, 0.12)",
            "0px 6px 7px -4px rgba(58, 53, 65, 0.2), 0px 11px 15px 1px rgba(58, 53, 65, 0.14), 0px 4px 20px 3px rgba(58, 53, 65, 0.12)",
            "0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 12px 17px 2px rgba(58, 53, 65, 0.14), 0px 5px 22px 4px rgba(58, 53, 65, 0.12)",
            "0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 13px 19px 2px rgba(58, 53, 65, 0.14), 0px 5px 24px 4px rgba(58, 53, 65, 0.12)",
            "0px 7px 9px -4px rgba(58, 53, 65, 0.2), 0px 14px 21px 2px rgba(58, 53, 65, 0.14), 0px 5px 26px 4px rgba(58, 53, 65, 0.12)",
            "0px 8px 9px -5px rgba(58, 53, 65, 0.2), 0px 15px 22px 2px rgba(58, 53, 65, 0.14), 0px 6px 28px 5px rgba(58, 53, 65, 0.12)",
            "0px 8px 10px -5px rgba(58, 53, 65, 0.2), 0px 16px 24px 2px rgba(58, 53, 65, 0.14), 0px 6px 30px 5px rgba(58, 53, 65, 0.12)",
            "0px 8px 11px -5px rgba(58, 53, 65, 0.2), 0px 17px 26px 2px rgba(58, 53, 65, 0.14), 0px 6px 32px 5px rgba(58, 53, 65, 0.12)",
            "0px 9px 11px -5px rgba(58, 53, 65, 0.2), 0px 18px 28px 2px rgba(58, 53, 65, 0.14), 0px 7px 34px 6px rgba(58, 53, 65, 0.12)",
            "0px 9px 12px -6px rgba(58, 53, 65, 0.2), 0px 19px 29px 2px rgba(58, 53, 65, 0.14), 0px 7px 36px 6px rgba(58, 53, 65, 0.12)",
            "0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 20px 31px 3px rgba(58, 53, 65, 0.14), 0px 8px 38px 7px rgba(58, 53, 65, 0.12)",
            "0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 21px 33px 3px rgba(58, 53, 65, 0.14), 0px 8px 40px 7px rgba(58, 53, 65, 0.12)",
            "0px 10px 14px -6px rgba(58, 53, 65, 0.2), 0px 22px 35px 3px rgba(58, 53, 65, 0.14), 0px 8px 42px 7px rgba(58, 53, 65, 0.12)",
            "0px 11px 14px -7px rgba(58, 53, 65, 0.2), 0px 23px 36px 3px rgba(58, 53, 65, 0.14), 0px 9px 44px 8px rgba(58, 53, 65, 0.12)",
            "0px 11px 15px -7px rgba(58, 53, 65, 0.2), 0px 24px 38px 3px rgba(58, 53, 65, 0.14), 0px 9px 46px 8px rgba(58, 53, 65, 0.12)"
        ];
    } else {
        return [
            "none",
            "0px 2px 1px -1px rgba(19, 17, 32, 0.2), 0px 1px 1px 0px rgba(19, 17, 32, 0.14), 0px 1px 3px 0px rgba(19, 17, 32, 0.12)",
            "0px 3px 1px -2px rgba(19, 17, 32, 0.2), 0px 2px 2px 0px rgba(19, 17, 32, 0.14), 0px 1px 5px 0px rgba(19, 17, 32, 0.12)",
            "0px 4px 8px -4px rgba(19, 17, 32, 0.42)",
            "0px 6px 18px -8px rgba(19, 17, 32, 0.56)",
            "0px 3px 5px -1px rgba(19, 17, 32, 0.2), 0px 5px 8px rgba(19, 17, 32, 0.14), 0px 1px 14px rgba(19, 17, 32, 0.12)",
            "0px 2px 10px 0px rgba(19, 17, 32, 0.1)",
            "0px 4px 5px -2px rgba(19, 17, 32, 0.2), 0px 7px 10px 1px rgba(19, 17, 32, 0.14), 0px 2px 16px 1px rgba(19, 17, 32, 0.12)",
            "0px 5px 5px -3px rgba(19, 17, 32, 0.2), 0px 8px 10px 1px rgba(19, 17, 32, 0.14), 0px 3px 14px 2px rgba(19, 17, 32, 0.12)",
            "0px 5px 6px -3px rgba(19, 17, 32, 0.2), 0px 9px 12px 1px rgba(19, 17, 32, 0.14), 0px 3px 16px 2px rgba(19, 17, 32, 0.12)",
            "0px 6px 6px -3px rgba(19, 17, 32, 0.2), 0px 10px 14px 1px rgba(19, 17, 32, 0.14), 0px 4px 18px 3px rgba(19, 17, 32, 0.12)",
            "0px 6px 7px -4px rgba(19, 17, 32, 0.2), 0px 11px 15px 1px rgba(19, 17, 32, 0.14), 0px 4px 20px 3px rgba(19, 17, 32, 0.12)",
            "0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 12px 17px 2px rgba(19, 17, 32, 0.14), 0px 5px 22px 4px rgba(19, 17, 32, 0.12)",
            "0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 13px 19px 2px rgba(19, 17, 32, 0.14), 0px 5px 24px 4px rgba(19, 17, 32, 0.12)",
            "0px 7px 9px -4px rgba(19, 17, 32, 0.2), 0px 14px 21px 2px rgba(19, 17, 32, 0.14), 0px 5px 26px 4px rgba(19, 17, 32, 0.12)",
            "0px 8px 9px -5px rgba(19, 17, 32, 0.2), 0px 15px 22px 2px rgba(19, 17, 32, 0.14), 0px 6px 28px 5px rgba(19, 17, 32, 0.12)",
            "0px 8px 10px -5px rgba(19, 17, 32, 0.2), 0px 16px 24px 2px rgba(19, 17, 32, 0.14), 0px 6px 30px 5px rgba(19, 17, 32, 0.12)",
            "0px 8px 11px -5px rgba(19, 17, 32, 0.2), 0px 17px 26px 2px rgba(19, 17, 32, 0.14), 0px 6px 32px 5px rgba(19, 17, 32, 0.12)",
            "0px 9px 11px -5px rgba(19, 17, 32, 0.2), 0px 18px 28px 2px rgba(19, 17, 32, 0.14), 0px 7px 34px 6px rgba(19, 17, 32, 0.12)",
            "0px 9px 12px -6px rgba(19, 17, 32, 0.2), 0px 19px 29px 2px rgba(19, 17, 32, 0.14), 0px 7px 36px 6px rgba(19, 17, 32, 0.12)",
            "0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 20px 31px 3px rgba(19, 17, 32, 0.14), 0px 8px 38px 7px rgba(19, 17, 32, 0.12)",
            "0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 21px 33px 3px rgba(19, 17, 32, 0.14), 0px 8px 40px 7px rgba(19, 17, 32, 0.12)",
            "0px 10px 14px -6px rgba(19, 17, 32, 0.2), 0px 22px 35px 3px rgba(19, 17, 32, 0.14), 0px 8px 42px 7px rgba(19, 17, 32, 0.12)",
            "0px 11px 14px -7px rgba(19, 17, 32, 0.2), 0px 23px 36px 3px rgba(19, 17, 32, 0.14), 0px 9px 44px 8px rgba(19, 17, 32, 0.12)",
            "0px 11px 15px -7px rgba(19, 17, 32, 0.2), 0px 24px 38px 3px rgba(19, 17, 32, 0.14), 0px 9px 46px 8px rgba(19, 17, 32, 0.12)"
        ];
    }
};
/* harmony default export */ const shadows = (Shadows);

;// CONCATENATED MODULE: ./src/@core/theme/breakpoints/index.ts
const breakpoints = ()=>({
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    });
/* harmony default export */ const theme_breakpoints = (breakpoints);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeOptions.ts
// ** MUI Theme Provider

// ** Theme Override Imports




const themeOptions = (settings)=>{
    // ** Vars
    const { mode , themeColor  } = settings;
    const themeConfig = {
        palette: palette(mode, themeColor),
        typography: {
            fontFamily: [
                "Inter",
                "sans-serif",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(",")
        },
        shadows: shadows(mode),
        ...spacing,
        breakpoints: theme_breakpoints(),
        shape: {
            borderRadius: 6
        },
        mixins: {
            toolbar: {
                minHeight: 64
            }
        }
    };
    return (0,external_mui_utils_namespaceObject.deepmerge)(themeConfig, {
        palette: {
            primary: {
                ...themeConfig.palette[themeColor]
            }
        }
    });
};
/* harmony default export */ const ThemeOptions = (themeOptions);

;// CONCATENATED MODULE: ./src/@core/theme/globalStyles.ts
// ** MUI Imports
const GlobalStyles = (theme)=>{
    return {
        ".ps__rail-y": {
            zIndex: 1,
            right: "0 !important",
            left: "auto !important",
            "&:hover, &:focus, &.ps--clicking": {
                backgroundColor: theme.palette.mode === "light" ? "#E4E5EB !important" : "#423D5D !important"
            },
            "& .ps__thumb-y": {
                right: "3px !important",
                left: "auto !important",
                backgroundColor: theme.palette.mode === "light" ? "#C2C4D1 !important" : "#504B6D !important"
            },
            ".layout-vertical-nav &": {
                "& .ps__thumb-y": {
                    width: 4,
                    backgroundColor: theme.palette.mode === "light" ? "#C2C4D1 !important" : "#504B6D !important"
                },
                "&:hover, &:focus, &.ps--clicking": {
                    backgroundColor: "transparent !important",
                    "& .ps__thumb-y": {
                        width: 6
                    }
                }
            }
        },
        "#nprogress": {
            pointerEvents: "none",
            "& .bar": {
                left: 0,
                top: 0,
                height: 3,
                width: "100%",
                zIndex: 2000,
                position: "fixed",
                backgroundColor: theme.palette.primary.main
            }
        }
    };
};
/* harmony default export */ const globalStyles = (GlobalStyles);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeComponent.tsx
// ** React Imports

// ** MUI Imports



// ** Theme Config

// ** Theme Override Imports


// ** Theme

// ** Global Styles

const ThemeComponent = (props)=>{
    // ** Props
    const { settings , children  } = props;
    // ** Merged ThemeOptions of Core and User
    const coreThemeConfig = ThemeOptions(settings);
    // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
    let theme = (0,styles_.createTheme)(coreThemeConfig);
    // ** Continue theme creation and pass merged component overrides to CreateTheme function
    theme = (0,styles_.createTheme)(theme, {
        components: {
            ...overrides(theme)
        },
        typography: {
            ...theme_typography(theme)
        }
    });
    // ** Set responsive font sizes to true
    if (themeConfig/* default.responsiveFontSizes */.Z.responsiveFontSizes) {
        theme = (0,styles_.responsiveFontSizes)(theme);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx((GlobalStyles_default()), {
                styles: ()=>globalStyles(theme)
            }),
            children
        ]
    });
};
/* harmony default export */ const theme_ThemeComponent = (ThemeComponent);

// EXTERNAL MODULE: ./src/@core/utils/create-emotion-cache.ts + 1 modules
var create_emotion_cache = __webpack_require__(6950);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
// ** Next Imports



// ** Loader Import

// ** Emotion Imports

// ** Config Imports

// ** Component Imports


// ** Contexts

// ** Utils Imports

// ** React Perfect Scrollbar Style

// ** Global css styles

const clientSideEmotionCache = (0,create_emotion_cache/* createEmotionCache */.S)();
// ** Pace Loader
if (themeConfig/* default.routingLoader */.Z.routingLoader) {
    router_.Router.events.on("routeChangeStart", ()=>{
        external_nprogress_default().start();
    });
    router_.Router.events.on("routeChangeError", ()=>{
        external_nprogress_default().done();
    });
    router_.Router.events.on("routeChangeComplete", ()=>{
        external_nprogress_default().done();
    });
}
// ** Configure JSS & ClassName
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    // Variables
    const getLayout = Component.getLayout ?? ((page)=>/*#__PURE__*/ jsx_runtime_.jsx(layouts_UserLayout, {
            children: page
        }));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: `${themeConfig/* default.templateName */.Z.templateName} - Queenscript`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `${themeConfig/* default.templateName */.Z.templateName} - Queenscript`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "- UX UI Bootcamp"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SettingsProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(SettingsConsumer, {
                    children: ({ settings  })=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(theme_ThemeComponent, {
                            settings: settings,
                            children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            }))
                        });
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 913:
/***/ ((module) => {

module.exports = require("@mui/icons-material/VideoCameraFront");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 9170:
/***/ ((module) => {

module.exports = require("mdi-material-ui/AccountBox");

/***/ }),

/***/ 2542:
/***/ ((module) => {

module.exports = require("mdi-material-ui/AccountCogOutline");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5463], () => (__webpack_exec__(9543)));
module.exports = __webpack_exports__;

})();