import React, { useState, useEffect, useContext, useReducer } from 'react'
import { reducer, initialState } from "./reducer";
import { productImage } from '../data'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const imageURL = productImage[0].image
    const [state, dispatch] = useReducer(reducer, initialState);
    const [n, setN] = useState()
    function addToCart() {
        
        if (state.noOfItems > 0) {
            setN(state.noOfItems)
            return dispatch({
                type: "ADD-TO-CART",
                payload: {
                    id: 1,
                    name: 'fall limited edition snekers ',
                    price: 125,
                    image: imageURL,
                    noOfItems: state.noOfItems,
                    total: 125 * state.noOfItems
                }
            })
        }

       
    }
    useEffect(() => { 
        if (state.cartItems && state.cartItems.length===0 ){setN(null)}
    },[state.cartItems])

    return (
        <AppContext.Provider value={{state,dispatch,n,addToCart}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}