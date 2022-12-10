"use strict";
exports.id = 861;
exports.ids = [861];
exports.modules = {

/***/ 4772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ItemCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2730);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7002);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_5__]);
uuid__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ItemCard({ item  }) {
    const [quantity, setQuantuity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    async function handleBuyItem(item, quantity) {
        try {
            (await (0,_connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)()).buy(item.id, quantity, {
                gasLimit: 3000000,
                value: item.price * quantity
            });
            console.log(item.price * quantity);
        } catch (error) {
            console.error(error);
        }
    }
    function handleAddItem() {
        setQuantuity((prev)=>prev + 1);
    }
    function handleReduceItem() {
        if (quantity > 0) setQuantuity((prev)=>prev - 1);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-1/3",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {
            raised: true,
            centered: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                    src: `data:image/svg+xml;base64,${item.img}`,
                    wrapped: true,
                    ui: false
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Content, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Header, {
                            children: item.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Meta, {
                            children: item.desc
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Description, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row items-center",
                                children: [
                                    ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.utils.formatEther(item.price) + "Ξ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: " text-stone-600 ml-[15px] mr-[5px] bg-stone-300 p-[5px] h-[25px] w-[25px] rounded hover:bg-[#666666] hover:text-cyan-50 text-center",
                                        onClick: handleReduceItem,
                                        children: "-"
                                    }),
                                    quantity,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: " text-stone-600 ml-[5px] bg-stone-300 p-[5px] h-[25px] w-[25px] rounded hover:bg-[#666666] hover:text-cyan-50 text-center",
                                        onClick: handleAddItem,
                                        children: "+"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: " text-stone-600 bg-stone-300 mx-[10px] px-[0.7em] h-[30px] w-[70px] rounded hover:bg-[#666666] hover:text-cyan-50 ",
                                        onClick: async ()=>await handleBuyItem(item, quantity),
                                        children: "Buy"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        }, (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)())
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ItemsRender)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2730);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ItemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4772);
/* harmony import */ var _OwnedCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6317);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ItemCard__WEBPACK_IMPORTED_MODULE_2__, _OwnedCard__WEBPACK_IMPORTED_MODULE_3__]);
([_ItemCard__WEBPACK_IMPORTED_MODULE_2__, _OwnedCard__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function ItemsRender({ items , amounts , onMoreClick , isLoading  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-row w-full h-auto flex-wrap justify-start",
            children: [
                items.map((item, index)=>{
                    if (amounts) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OwnedCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        item: item,
                        amount: amounts[index]
                    });
                    else return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ItemCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        item: item
                    }, index);
                }),
                items.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-1/3 flex justify-center items-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        size: "big",
                        onClick: async ()=>await onMoreClick(),
                        loading: isLoading,
                        children: "Load More"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Loader, {
                    size: "big",
                    active: true,
                    children: "Loading"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(2730);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Header.tsx





function Header() {
    const [searchRequest, setSearchRequest] = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)(); // for page navigation
    function keyDownHandler(e) {
        localStorage.setItem("req", searchRequest); // to pass request through pages
        if (e.key == "Enter") router.push("/search");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/main",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "font-black text-lg hover:underline",
                        children: "ζ"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/account",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "font-black text-lg hover:underline",
                        children: "Personal account"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                position: "right",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "ui input",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Search...",
                        value: searchRequest,
                        onChange: (e)=>setSearchRequest(e.target.value),
                        onKeyDown: (e)=>keyDownHandler(e)
                    })
                })
            })
        ]
    });
}


;// CONCATENATED MODULE: ./components/Layout.tsx




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            children
        ]
    });
}


/***/ }),

/***/ 9362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ LoadType)
/* harmony export */ });
var LoadType;
(function(LoadType) {
    LoadType["general"] = "general";
    LoadType["personal"] = "personal";
    LoadType["searched"] = "searched";
})(LoadType || (LoadType = {}));


/***/ }),

/***/ 6317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OwnedCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2730);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6555);
/* harmony import */ var _connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7002);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_4__]);
uuid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function OwnedCard({ item , amount  }) {
    const [fillAmount, setFillAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [isSeller, setIsSeller] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (async ()=>{
            const addr = await (await (0,_connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)()).signer.getAddress();
            if (item.seller === addr) setIsSeller(true);
        })();
    }, []);
    async function handleFillClick(id) {
        try {
            await (await (0,_connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)()).fillStock(id, fillAmount);
        } catch (error) {
            console.error(error);
        }
    }
    async function handleWithdrawClick(id) {
        try {
            await (await (0,_connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)()).withdrawFromSale(id);
        } catch (error) {
            console.error(error);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                src: `data:image/svg+xml;base64,${item.img}`,
                wrapped: true,
                ui: false
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Content, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Header, {
                        children: item.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Meta, {
                        children: ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.utils.formatEther(item.price) + "Ξ"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Description, {
                        children: [
                            "You have ",
                            amount,
                            " of those!"
                        ]
                    })
                ]
            }),
            isSeller && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Content, {
                extra: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                    columns: 2,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
                            stretched: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Popup, {
                                trigger: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    content: "Withdraw from sale",
                                    basic: true
                                }),
                                content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    color: "red",
                                    content: "Sure?",
                                    onClick: ()=>handleWithdrawClick(item.id)
                                }),
                                on: "click",
                                position: "top right"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
                            stretched: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Popup, {
                                trigger: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    content: "Fill stock",
                                    basic: true
                                }),
                                content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                    placeholder: "amount",
                                    type: "text",
                                    action: true,
                                    onChange: (e)=>setFillAmount(parseInt(e.target.value)),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                            onClick: ()=>handleFillClick(item.id),
                                            children: "Fill"
                                        })
                                    ]
                                }),
                                on: "click",
                                position: "top right"
                            })
                        })
                    ]
                })
            })
        ]
    }, (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)());
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLoadItems)
/* harmony export */ });
/* harmony import */ var _connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7002);
/* harmony import */ var _mainContr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2556);


async function useLoadItems(renderedAmount, type, search) {
    let items = [];
    let amounts = [];
    const contract = await (0,_connectProvider_contrWithSigner__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    switch(type){
        case "general":
            for(let i = renderedAmount; i < renderedAmount + 8; i++){
                try {
                    const itemInfo = await _mainContr__WEBPACK_IMPORTED_MODULE_1__/* ["default"].items */ .Z.items(i);
                    if (!(await _mainContr__WEBPACK_IMPORTED_MODULE_1__/* ["default"].balanceOf */ .Z.balanceOf(itemInfo[2], i)).toNumber()) continue; // check if still selling
                    const name = await _mainContr__WEBPACK_IMPORTED_MODULE_1__/* ["default"].names */ .Z.names(i);
                    const item = {
                        id: i,
                        name,
                        desc: itemInfo[0],
                        img: itemInfo[1],
                        seller: itemInfo[2],
                        price: itemInfo[3].toNumber()
                    };
                    items.push(item);
                } catch (err) {
                    break;
                }
            }
            break;
        case "personal":
            for(let i1 = renderedAmount; i1 < renderedAmount + 8; i1++){
                try {
                    const id = await contract.ownedItems(await contract.signer.getAddress(), i1, 0);
                    const amount = await contract.ownedItems(await contract.signer.getAddress(), i1, 1);
                    const itemInfo1 = await _mainContr__WEBPACK_IMPORTED_MODULE_1__/* ["default"].items */ .Z.items(id);
                    const name1 = await _mainContr__WEBPACK_IMPORTED_MODULE_1__/* ["default"].names */ .Z.names(id);
                    amounts.push(amount.toNumber());
                    const item1 = {
                        id: id.toNumber(),
                        name: name1,
                        desc: itemInfo1[0],
                        img: itemInfo1[1],
                        seller: itemInfo1[2],
                        price: itemInfo1[3].toNumber()
                    };
                    items.push(item1);
                } catch (err1) {
                    console.error(err1);
                    break;
                }
            }
            break;
        case "searched":
            for(let i2 = renderedAmount; i2 < renderedAmount + 8; i2++){
                try {
                    const name2 = await _mainContr__WEBPACK_IMPORTED_MODULE_1__/* ["default"].names */ .Z.names(i2);
                    if (!name2.toLowerCase().includes(search)) continue; //check if corresponds to a search request
                    const itemInfo2 = await _mainContr__WEBPACK_IMPORTED_MODULE_1__/* ["default"].items */ .Z.items(i2);
                    if (!(await _mainContr__WEBPACK_IMPORTED_MODULE_1__/* ["default"].balanceOf */ .Z.balanceOf(itemInfo2[2], i2)).toNumber()) continue; // check if still selling
                    const item2 = {
                        id: i2,
                        name: name2,
                        desc: itemInfo2[0],
                        img: itemInfo2[1],
                        seller: itemInfo2[2],
                        price: itemInfo2[3].toNumber()
                    };
                    items.push(item2);
                } catch (err2) {
                    break;
                }
            }
    }
    return [
        items,
        amounts
    ];
}


/***/ })

};
;