import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Img } from 'react-image'
import { useGlobalContext } from './Context'

export default function Cart() {
const [items, setItems]=useState()
    const { state, dispatch,n } = useGlobalContext()
        useEffect(() => {
            setItems(state.cartItems)
        }, [state.cartItems,items])
    return (
        <div className='flex flex-col bg-white w-11/12  h-64 absolute top-20 left-0 right-0 mx-auto rounded-lg  z-10 lg:w-5/12 lg:left-[580px] shadow-2xl'>
            <h1 className="font-bold border-b p-5">Cart</h1>

            {
                (items&&items.length) ? (
                    <div className="content mx-auto my-auto ">

                        {
                            state.cartItems.map((item, index,a) => {
                                const { id, image, name, noOfItems, price, total } = item
                            
                                return  (
                                    <div key={index} className="flex items-center gap-3 ">
                                        <Img src={image} className='w-14 rounded-lg cursor-pointer hover:opacity-60 ' />
                                        <div className="flex flex-col">
                                            <p className="capitalize">{name}</p>

                                            <p className='tracking-wide' >${price} x {noOfItems} <span className="font-bold">${total}</span> </p>
                                        </div>
                                        <FaTrash onClick={() =>dispatch({type:"REMOVE-ITEM",payload:id})
                                        } className='cursor-pointer hover:text-lg
                                        '/>
                                    </div>
                                )
                            })

                        }
                        {items.length  &&  <button className="bg-orange-200 text-white p-3 px-28 rounded-lg mt-5 ">
                            checkout
                        </button>}
                    </div>
                ) : (<div className="content mx-auto my-auto ">
                        <p className='font-bold text-gray-500 text-center'>Your cart is empty</p>
                </div>
                    )

            }


        </div>
    )
}
