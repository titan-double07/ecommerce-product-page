import { useEffect } from "react";

export const initialState = {
    hamOpen: false,
    cartOpen: false,
    noOfItems: 0,
    cartItems: null
};
export function reducer(state, action) {

    switch (action.type) {
        case "CLOSE-HAM":
            return { ...state, hamOpen: !state.hamOpen };
        case "DISPLAY-CART":
            return { ...state, cartOpen: !state.cartOpen };
        case "ADD":
            return { ...state, noOfItems: state.noOfItems + 1 };
        case "MINUS":
            let n = state.noOfItems
            return { ...state, noOfItems: (n <= 0) ? n = 0 : n - 1 };
        case "ADD-TO-CART":
            return { ...state, cartItems: [action.payload], noOfItems: 0 };
        case "REMOVE-ITEM":
            let id = action.payload
            return { ...state, cartItems: state.cartItems.filter((item) => item.id !== id) };
        default:
            throw new Error();
    }
}