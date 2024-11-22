import React from "react";
import Image from "next/image";
import Link from "next/link";


const Hero = () => {
  return (
    <>
    <main
    className="
    flex flex-col 
    max-w-7xl mx-auto 
    sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 
  

  "
>
  <div
    className="flex lg:flex flex-col  lg:flex-row justify-between items-center
      w-[80vw] 
      mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 
      mt-10 md:mt-20 lg:mt-10 lg:px-40 bg-slate-200 rounded-2xl lg:pt-16
      p-5 sm:p-32 md:p-10 container
    "
  >
    {/* Your content here */}
  
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
          <div  className="w-full sm:w-full md:w-full lg:w-[40vw] xl:w-[40vw] xl2:w-[40vw]
            sm:h-[65vh] md:h-[65vh] lg:h-[65vh] xl:h-[65vh] xl2:h-[65vh]">
            <Image 
            src={"/images/hero-girl.png"}
            alt="image"
            width={1500}
            height={1500}
            className="w-full sm:w-full md:w-full lg:w-[40vw] xl:w-[40vw] xl2:w-[40vw]
            sm:h-[65vh] md:h-[65vh] lg:h-[65vh] xl:h-[65vh] xl2:h-[65vh]">
            </Image>
          </div>
        </div>
      </main>
      
    </>
  );
};
export default Hero;
