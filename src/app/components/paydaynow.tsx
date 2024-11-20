import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Paydaynow = () => {
  return (
    <>
    <div>
     <div className="lg:flex md:flex max-w-7xl  mx-auto sm:mx-auto md:mx-60 lg:mx-auto xl:mx-auto 
     lg:p-10 p-5 
     items-center justify-center container">
        <div>
            <Image
            src={"/images/paydaynow.jpg"}
            alt='image'
            width={600}
            height={600}
            className='w-[100%] sm:w-[100%] md:w-[100%] 
            lg:w-[100%] xl:w-[100%]
            h-[80vh] sm:h-[80vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh]'>

            </Image>
        </div>
        <div className=" 
        lg:w-[40vw] h-[80vh] sm:h-[100%] md:h-[80vh] lg:h-[80vh] 
        bg-yellow-300">
            <div className='flex flex-col justify-center 
            items-center w-full h-full p-12'>
           
            <h2 className='text-[10vmin]
            font-extrabold text-center'>PAYDAY SALE NOW</h2>
            <p className='text-[20px] text-center'>Spend minimal $100 get 30% off</p>
            <p className='text-[20px] text-center'>voucher code for your next purchase</p>
            <h4 className='text-[20px] font-bold text-center'>1 June - 10 June 2021</h4>
            <p className='text-[18px] text-center '>*Terms & Conditions apply</p>
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
    </div>

    </>

  )
}

export default Paydaynow
