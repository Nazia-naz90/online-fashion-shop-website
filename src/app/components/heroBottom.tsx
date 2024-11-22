import React from 'react'
import Image from "next/image";
const HeroBottom = () => {
  return (
    <div>

              {/* BOTTOM-SECTION */}
      <section>

<div
  className="lg:flex  items-center justify-around
  max-w-7xl  bg-yellow-300 h-[60vh] sm:h-[60vh] md:h-[60vh] lg:h-[20vh]
  xl:h-[20vh] xl2:h-[20vh]
  mx-auto sm:mx-auto md:mx-60 lg:mx-auto xl:mx-auto
  mt-10 p-10  pl-32 sm:pl-72 md:pl-72 lg:pl-10
  container"
  >
  <div className="lg:flex  lg:justify-around lg:flex-nowrap md:flex-wrap
  items-center justify-center max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full
  mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 
  lg:p-16  
  lg:gap-x-24
  container ">
    <div className="flex container">
      <h6 className="italic text-red-600 text-[5vmin] sm:text-[2vmin]
      md:text-[5vmin] lg:text-[5vmin] 
      font-extrabold">H.M</h6>
    </div>
    <div >
      <h6 className="italic text-black text-[4vmin] font-extrabold ">OBEY.</h6>
    </div>
    <div className="flex container">
    <h6 className="italic text-black text-[5vmin] font-extrabold">
    shopify</h6>
      <Image
        src={"/images/shopify_icon-new.png"}
        alt="icon"
        width={50}
        height={45}
        className="w-[50px] h-[35px]"
      ></Image>

    </div>
    <div className="flex container">
      <h6 className="text-[4vmin] text-black font-bold
      ">LACOSTE</h6>
      <Image
        src={"/images/lacoste-icon.png"}
        alt="icon"
        width={50}
        height={30}>
        </Image>
    </div>
    <div className="flex container">
      <h6 className="text-[5vmin] text-yellow-300 
      bg-red-600 w-[70px] h-[40px] p-2 rounded-br-3xl
        ">Levi&apos;s</h6>


    </div>
    <div className="flex container">
    <Image
        src={"/images/amazone-icon.png"}
        alt="icon"
        width={130}
        height={100}
        className="  w-[150px] h-[75px] ">
        </Image>
    </div>
  </div>
</div>

</section>
      
    </div>
  )
}

export default HeroBottom
