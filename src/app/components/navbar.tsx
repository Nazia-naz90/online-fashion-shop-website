"use client";

import navItem from "../constant";
import Link from "next/link";
import Image from "next/image";
import useToggle from "../hooks/hooks";

export default function Navbar() {
  
  const  {toggle, handleMenuClick } = useToggle();
  
  return (
    <header className="h-[75px] sm:h-[64px] md:h-[64px] lg:h-[74px]  bg-white 
   drop-shadow-[0_0px_3px_rgba(117,195,16,0.5)] max-w-7xl sm:max-w-7xl
   md:max-w-7xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl
   mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto fixed container lg:relative">

  <div className="flex items-center justify-between gap-20 h-full px-4 sm:px-6 md:px-8 lg:mx-auto xl:px-4 max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full
  xl2:max-w-full container">
        <div className="flex 
        items-center justify-center
        sm:flex-row gap-2  ml-5">
          <Image
            src={"/images/logo.jpg"}
            alt="logo-icon"
            width={35}
            height={25}
            className="w-[35px]
            h-[25px]">
            </Image>
          <Image
            src={"/images/FASHION.jpg"}
            alt="Logo name"
            width={150}
            height={60}
            className="w-[100%]
            h-[100%]"
          ></Image>
        </div>

        <nav className="lg:h-[44.54px] ">
          <ul
            className="hidden lg:flex h-full w-full items-center 
          justify-between gap-[46px] text-black 
          text-[17px] font-medium">
            {navItem.map((item, id) => (
              <Link href={item.link} 
              key={id}
          className="transition transform hover:-translate-y-1 
          motion-reduce:transition-none 
          motion-reduce:hover:transform-none">
                <li key={id}>{item.title}</li>
              </Link>
              
            ))}
            
        <button
          className="bg-black shadow-md text-[17px]
         hidden lg:flex justify-center items-center
         text-white w-[100px] h-[35px] rounded-md
         transition transform hover:-translate-y-1 
         motion-reduce:transition-none 
         motion-reduce:hover:transform-none"
        >
          <Link href={""}>SIGN UP</Link>
        </button>
          </ul>
        </nav>

        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className="lg:hidden">
          <div className="flex flex-col justify-between  
           mx-4 gap-y-1  " onClick = {handleMenuClick}>
            <div className="w-[25px] bg-black 
            h-[4px] mt-5px mb-5px ml-3px mr-3px"></div>
            <div className="w-[25px] bg-black
            h-[4px] mt-5px mb-5px ml-3px mr-3px"></div>
            <div className="w-[25px] bg-black 
            h-[4px] mt-5px mb-5px ml-3px mr-3px"></div>
          </div>
          {/* media query on navbar */}
          {toggle && (
            <div className="absolute right-0 w-48 h-[65vh] bg-slate-400 mt-5 p-4 
            rounded-md ">
            <div className="flex flex-col justify-center items-center">
            <nav className="h-[44.54px]">
                  <ul
                    className=" flex flex-col h-full w-full items-center 
         justify-between space-y-4 text-white 
         text-[20px] font-medium"
                  >
                    {navItem.map((item, id) => (
                      <Link href={item.link}
                      key={id}
                      className="transition transform hover:-translate-y-1 
                      motion-reduce:transition-none 
                      motion-reduce:hover:transform-none"
                       >
                        <li key={id}>{item.title}</li>
                      </Link>
                    ))}
                  </ul>
                </nav>
                <div className="flex flex-col mt-48 
                space-y-2">
                  <button
                    className="bg-black shadow-md 
        flex justify-center items-center
        text-white w-[100px] h-[40px] rounded-md
        transition transform hover:-translate-y-1 
        motion-reduce:transition-none 
        motion-reduce:hover:transform-none">
                      <Link href={""}>SIGN UP</Link>                  
                      </button>
                </div>
              </div>
            </div>
          )}
          {/* toggle-end */}
        </div>
      </div>
    </header>
  );
}
