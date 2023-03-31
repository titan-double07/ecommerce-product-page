import React, { useEffect, useState } from 'react'
import { Img } from 'react-image'
import { productImage } from '../data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
export default function ProductImages() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    function handlePrevClick() {
        const prevIndex = currentImageIndex === 0 ? productImage.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(prevIndex);
    }

    function handleNextClick() {
        const nextIndex = currentImageIndex === productImage.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(nextIndex);
    }

 
    return (
        <section className='relative lg:mx-5 lg:grid justify-center gap-5' >
            <div onClick={handlePrevClick} className="bg-white absolute bottom-1/2 rounded-full p-2.5 mx-4 lg:hidden hover:p-3">
                <FaChevronLeft />
            </div>
            <div onClick={handleNextClick} className="bg-white absolute right-0 bottom-1/2 rounded-full p-2.5 mx-4 lg:hidden hover:p-3">
                <FaChevronRight />
            </div>

            <Img className='w-full h-80 lg:rounded-3xl  lg:h-96' src={productImage[currentImageIndex].image} />
            <div className="hidden lg:flex space-x-7 ">

                {productImage.map((product, index) => {
                    const { thumbnail } = product
                    return <Img key={index} src={thumbnail} className={`w-20 rounded-xl cursor-pointer hover:opacity-60 ${(index===currentImageIndex)&& 'border-4 border-orange-200'} `}
                        onClick={() => setCurrentImageIndex(index)} />

                })}
            </div>
        </section>
    )
}
