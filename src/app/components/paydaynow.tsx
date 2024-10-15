import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Paydaynow = () => {
  return (
    <>
     <div className="lg:flex max-w-7xl lg:mx-auto lg:p-10 p-5
     items-center justify-center ">
        <div>
            <Image
            src={"/images/paydaynow.jpg"}
            alt='image'
            width={600}
            height={600}
            className='lg:w-[40vw] h-[80vh]'>

            </Image>
        </div>
        <div className="lg:w-[40vw] lg:h-[80vh] 
        bg-yellow-300">
            <div className='flex flex-col justify-center 
            items-center w-full h-full p-12'>
            <h1 className='text-[10vmin]
            font-extrabold drop-shadow-xl '>PAYDAY</h1>
            <h2 className='text-[10vmin]
            font-extrabold '>SALE NOW</h2>
            <p className='text-[20px]'>Spend minimal $100 get 30% off</p>
            <p className='text-[20px]'>voucher code for your next purchase</p>
            <h4 className='text-[20px] font-bold'>1 June - 10 June 2021</h4>
            <p className='text-[18px] '>*Terms & Conditions apply</p>
           <Link href={"./fashion"}>
           <button className='mt-10'>
                <Image
                src={"/images/button.png"}
                alt='button'
                width={150}
                height={60}>
                </Image>
            </button>
          </Link> 
            
        </div>
 
            </div>
                 
      </div>
    </>

  )
}

export default Paydaynow
