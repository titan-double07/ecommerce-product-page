import React, { useEffect, useState } from 'react'
import { FaCarAlt, FaCartArrowDown, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
import { useGlobalContext } from './Context'
export default function ProductContent() {
    const { state, dispatch,addToCart } = useGlobalContext()

    return (
        <section className="p-5 leading-relaxed lg:p-0 lg:px-5">
           
            <h4 className="text-orange-200 font-bold uppercase pb-2 ">Sneaker Company</h4>
            <h1 className='font-bold capitalize text-3xl pb-5 lg:pr-32'>Fall Limited Edition Sneakers</h1>
            <p className='text-gray-500 pb-6 '> These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="price flex justify-between items-center pb-6 lg:flex-col lg:items-start lg:space-y-3">
                <div className='flex space-x-4 items-center '>
                    <h3 className='font-bold text-3xl'> $125.00</h3>

                    <p className="percent bg-orange-100 text-orange-200 font-bold rounded-md px-2 ">50%</p>
                </div>
                <p className="canceled text-gray-300 font-bold text-xl line-through ">$250</p>
            </div>
            <div className="flex flex-col lg:flex-row  gap-6">

                <div className="no-of-items flex justify-between items-center w-full rounded-lg bg-gray-100 font-bold p-3 lg:w-3/6 ">

                    <FaMinus onClick={() => dispatch({ type: 'MINUS' })} className='text-orange-200 cursor-pointer hover:opacity-70 hover:scale-150' />
                  
                    <p className='font-bold'>{state.noOfItems}</p>
                    <FaPlus onClick={()=>dispatch({type:'ADD'})} className='text-orange-200 cursor-pointer hover:opacity-70 hover:scale-150' />
                </div>

                <button onClick={addToCart} className="bg-orange-200 w-full rounded-lg text-white text-sm font-bold p-4 shadow-lg shadow-orange-200/50 hover:opacity-70">
                    <p className='flex justify-center items-center gap-3 '>
                        <FaShoppingCart />
                        Add to cart
                    </p>
                </button>
            </div>
        </section>
    )
}
