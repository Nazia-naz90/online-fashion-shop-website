import React from 'react'
import Image from 'next/image';
const Downloadapp = () => {
  return (
   <>
   <main>

   <div className="
    flex lg:flex md:flex 
    max-w-7xl 
    mx-auto 
    justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center
    items-center sm:items-center md:items-center lg:items-center xl:items-center
    lg:gap-x-40 md:gap-x-20
    lg:p-10 md:p-8 sm:p-6 p-4
    md:mt-10 mt-5 container
  "
>
  {/* Your content here */}



   <div className='flex flex-col justify-start 
            items-start leading-relaxed'>
                <h1 className='text-[6vmin] 
                font-bold font-sans'>DOWNLOAD APP &</h1>
                <h1 className='text-[6vmin]
                font-bold font-sans'>GET THE VOUCHER!</h1>
                <p className='text-[3vmin] mt-10
                font-sans'>Get 30% off for first transaction using</p>
                <p className='text-[3vmin] 
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
                height={710}
                className='w-[327.89px] 
                h-[full] '>
                </Image>
            </div>

    </div>
   </main>
   </>
  )
}

export default Downloadapp
