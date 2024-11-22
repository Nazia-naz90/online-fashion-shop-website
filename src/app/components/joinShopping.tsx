import Link from 'next/link'
import React from 'react'

const JoinShopping = () => {
  return (
    <div>
      <section className="max-w-7xl 
   mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto container">
        <div className=" bg-yellow-400 
             flex flex-col
             justify-center 
             items-center 
             max-w-7xl
             lg:h-[70vh] 
             p-16  md:px-10 sm:p-16 lg:p-20 md:text-justify
             mx-auto
             mt-0 lg:space-x-10 lg:gap-y-10 container">
         
        <div
          className="lg:flex flex-col items-center 
        justify-center m-auto"
        >
          <h1
            className="text-white lg:text-[7vmin]
           text-[20px] font-bold"
          >
            JOIN SHOPPING COMMUNITY TO{" "}
          </h1>
          <h1
            className="text-white lg:text-[7vmin] 
            text-[20px] font-bold"
          >
            GET MONTHLY PROMO
          </h1>
          <p
            className="text-white lg:text-[3vmin] 
           text-[17px] font-semibold"
          >
            Type your email down below and be young wild 
            generation
          </p>
        </div>
        <div
          className="lg:flex lg:w-[25%] lg:h-[60%]
        rounded-md"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Add your email here"
            className="lg:w-[600px] lg:h-[35px] p-2 
            rounded-md"
          />
          <a href={"mailto:example@email.com"}>
          <button
            className="lg:flex text-center items-center
           bg-black text-white lg:text-[18px] lg:font-bold 
           lg:w-[100%] w-[100px] lg:h-[36px] h-[45px] lg:p-4 
           rounded-md"
          >
            send
          </button>
          </a>
          
        </div>

        </div>
       
      </section>
                   {/* footer-panel-1 */}
                   <div
          className="max-w-7xl 
        mx-auto 
        items-center  justify-center  text-center
        height-[50px]  bg-slate-400 container"
        >
          <Link href={"/"} className="text-white">
            back to top
          </Link>
        </div>

    </div>
  )
}

export default JoinShopping
