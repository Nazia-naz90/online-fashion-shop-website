import React from 'react'
import Image from 'next/image';
const Downloadapp = () => {
  return (
   <>
   <main className='flex  max-w-7xl mx-auto container'>

    <div className='lg:flex max-w-7xl sm:max-w-7xl md:max-w-7xl lg:max-w-7xl
     xl:max-w-7xl 
     mx:auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto
     justify-center items-center lg:gap-x-40 lg:p-10 pl-10 pr-10
     md:ml-96 md:mt-10  '>

   <div className='flex flex-col justify-start 
            items-start leading-relaxed'>
                <h1 className='text-[6vmin] 
                font-bold font-sans'>DOWNLOAD APP &</h1>
                <h1 className='text-[6vmin]
                font-bold font-sans'>GET THE VOUCHER!</h1>
                <p className='text-17px mt-10
                font-sans'>Get 30% off for first transaction using</p>
                <p className='text-17px 
                font-sans'>Rondovision mobile app for now.</p>
                <div className='flex gap-2 my-10'>
                    <button>
                    <Image src={"/images/appdownload.jpg"}
                    alt="image"
                    width={204}
                    height={71}></Image>
                    </button>
                    <button>
                    <Image src={"/images/google-play.jpg"}
                    alt="image"
                    width={204}
                    height={71}></Image>
                    </button>
                </div>
            </div>
            {/* MOBILEAPP-SECTION */}
            
            <div>
                <Image src={"/images/mobileapp.png"}
                alt="mobile-image"
                width={327.89}
                height={710}>
                </Image>
            </div>

    </div>

   </main>
   </>
  )
}

export default Downloadapp
