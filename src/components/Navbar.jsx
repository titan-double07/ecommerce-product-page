import React, { useEffect, useState } from 'react'
import logo from '/images/logo.svg'
import avatar from '/images/image-avatar.png'
import { GrClose, GrMenu, GrCart } from 'react-icons/gr'
import { useGlobalContext } from './Context';
import Cart from './Cart';

export default function Navbar() {
  const { state, dispatch, n } = useGlobalContext();
  function show(value) {
    dispatch({ type: value });
  }



  return (
    <header className='lg:flex lg:justify-center lg:mb-16 '>
      <div className="fixed top-0 left-0 right-0 z-10">

      <nav className='relative flex justify-between items-center bg-white px-5 py-6 lg:py-7 lg:border-b lg:w-11/12'>
        <button className={`text-2xl lg:hidden z-20 transition-all`} onClick={() => show("CLOSE-HAM")}>
          {
            state.hamOpen ? <GrClose /> : <GrMenu />
          }

        </button>
        <div className="logo w-full lg:w-[30%] pl-7 "><img src={logo} alt="" /></div>
        <ul className={` ham-menu absolute top-0 left-0 flex flex-col gap-5 bg-white w-1/2 h-screen z-10 pt-24 pl-6 ${state.hamOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition duration-100`} >
          <li> <a href="" className='active'>Collections</a> </li>
          <li> <a href="">Men</a> </li>
          <li> <a href="">Women</a> </li>
          <li> <a href="">About</a> </li>
          <li> <a href="">Contact</a> </li>
        </ul>
        <ul className="nav-links hidden lg:flex gap-5 w-full ">
          <li> <a href="" className='active'>Collections</a> </li>
          <li> <a href="">Men</a> </li>
          <li> <a href="">Women</a> </li>
          <li> <a href="">About</a> </li>
          <li> <a href="">Contact</a> </li>
        </ul>

        <div className="flex justify-end items-center space-x-5  ">
          <div className="relative">
            <div className='absolute -top-2 left-2 bg-orange-200 rounded-full text-white text-xs font-bold px-2 pointer-events-none'>{state.cartItems&&n}</div>
            <GrCart  className=" text-xl cursor-pointer " onClick={() => show("DISPLAY-CART")} />

          </div>
           

          <div className="avatar w-1/4 cursor-pointer rounded-full hover:outline hover:outline-orange-200 "><img src={avatar} alt="" /></div>
        </div>


        {
        state.cartOpen && <Cart />
        }
      </nav>
      </div>
    </header>
  )
}

