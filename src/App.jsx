import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'

export default function App() {
    return (
        <div className='container mx-auto pb-14 lg:max-w-screen-xl sm:max-w-[480px] '>
            <Navbar  />
            <Product  />
        </div>
    )
}
