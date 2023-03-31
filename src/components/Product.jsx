import React from 'react'
import ProductContent from './ProductContent'
import ProductImages from './ProductImages'

export default function Product() {
  return (
    <div className='max-w-screen-lg lg:grid grid-cols-2 mx-auto items-center mt-20 '>
      <ProductImages />
      <ProductContent/>
    </div>
  )
}
