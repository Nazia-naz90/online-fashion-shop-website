import React from "react";
import Btn from "./btn";
import Image from "next/image";
import Link from "next/link";
import styles from "./background.module.css";

const Hero = () => {
  return (
    <>
      <main className="flex max-w-7xl mx-auto">
        <div className="lg:flex  justify-between 
        lg:w-[80vw]  lg:h-[80vh] mx-auto 
        lg:m-auto mt-10 lg:px-40  bg-slate-200 rounded-2xl lg:pt-16
        p-10">
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
          <div className="lg:w-[40vw] lg:h-[160vh] pt-16">
            <Image 
            src={"/images/hero-girl.png"}
            alt="image"
            width={1500}
            height={1500}>
            </Image>
          </div>
        </div>
      </main>
      <div>
      {/* BOTTOM-SECTION */}
      <div
        className="lg:flex items-center justify-center
         max-w-7xl bg-yellow-300 lg:h-[20vh] m-auto mt-10
         p-10">
        <div className="lg:flex  lg:justify-between
        items-center justify-center w-full mx-auto p-16  
        lg:gap-x-24">
          <div >
            <h6 className="bottom">H.M</h6>
          </div>
          <div >
            <h6 className="obey">OBEY.</h6>
          </div>
          <div>
            <Image
              src={"/images/shopify-icon.png"}
              alt="icon"
              width={130}
              height={130}
            ></Image>
          </div>
          <div className="flex">
            <h6 className="text-[4vmin] text-black font-bold">LACOSTE</h6>
            <Image
              src={"/images/lacoste-icon.png"}
              alt="icon"
              width={50}
              height={30}>
              </Image>
          </div>
          <div >
            <h6 className="text-[5vmin] text-yellow-300 
            bg-red-600 w-[70px] h-[45px] p-2 rounded-br-3xl
              ">Levi's</h6>
          </div>
          <div >
          <Image
              src={"/images/amazone-icon.png"}
              alt="icon"
              width={130}
              height={120}>
              </Image>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};
export default Hero;
