import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./background.module.css";

const Hero = () => {
  return (
    <>
      <main
      className="flex flex-col max-w-7xl 
      mx-auto my-auto container">
  
      <div className="lg:flex  justify-between items-center
      max-w-full sm:max-w-full md:max-w-full lg:max-w-7xl xl:max-w-7xl
      w-[80vw] sm:w-[80vw] md:w-[100vw]
      lg:w-[80vw] lg:h-[80vh]  mx-auto sm:mx-auto md:mx-32 lg:mx-auto xl:mx-auto
      mt-10 lg:px-40  bg-slate-200 rounded-2xl lg:pt-16
      p-10 container">
          {/* TEXT-SECTION */}
          <div className="  lg:w-[40vw] lg:h-[100%] lg:p-10
          p-5">
            <h1 className="text-black text-[6vmin] 
            font-bold">LET’S</h1>
            <h1 className="text-black text-[6vmin] 
            font-bold">
              EXPLORE</h1>
            <h1 className="bg-yellow-300 w-[170px] 
            row-auto text-black text-[6vmin] font-bold">
              UNIQUE
            </h1>
            <h1 className="text-black text-[6vmin] 
            font-bold">
              CLOTHES.</h1>
            <p className="p-2">Live for Influential and Innovative fashion!</p>
           <Link href={"./catalogue"}>
           <button>
            <Image src={"/images/button.png"}
            alt="button"width={100}height={45}>
            </Image>
           </button>
           </Link>
           </div>
           {/* IMAGE-SECTION */}
          <div>
            <Image 
            src={"/images/hero-girl.png"}
            alt="image"
            width={1500}
            height={1500}
            className="lg:w-[40vw] lg:h-[65vh]">
            </Image>
          </div>
        </div>
      </main>
      <div>
      {/* BOTTOM-SECTION */}
      <div
        className="lg:flex  items-center justify-center
        max-w-7xl sm:max-w-7xl md:max-w-7xl lg:max-w-7xl xl:max-w-7xl bg-yellow-300 h-[50vh] sm:h-[20vh] md:h-[50vh] lg:h-[20vh]
        xl:h-[20vh] 
        mx-auto sm:mx-auto md:mx-32 lg:mx-auto xl:mx-auto
        mt-10 p-10 pl-32 sm:pl-72 md:pl-72 lg:pl-10
        container"
        >
        <div className="lg:flex  lg:justify-between
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
    </div>
      
    </>
  );
};
export default Hero;
