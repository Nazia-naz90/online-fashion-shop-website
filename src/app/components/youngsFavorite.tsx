import React from "react";
import Image from "next/image";

const YoungsFavorite = () => {
  return (
    <>
    <div>

    <div className="flex  mt-10 p-10 items-center sm:items-center md:items-center lg:items-center mx-auto container ">
        <Image
          src={"/images/youngfavorite.jpg"}
          alt="heading"
          width={330}
          height={150}
        ></Image>
      </div>
      <main

      >
       <div className="flex md:flex 
       items-center justify-center
       lg:flex max-w-7xl 
       mx-auto 
       space-x-10  md:space-x-20 lg:space-x-10 xl:space-x-10
       container
       ">

       <div className="flex flex-col items-center justify-center ">
          <Image
            src={"/images/young1.jpg"}
            alt="image"
            width={500}
            height={340}
            className="
            lg:w-[500px] lg:h-[340px] shadow-lg"
            >
          </Image>
          <h1 className="text-[4vmin] font-bold">
            Trending on instagram</h1>
          <p>Explore Now!</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/images/young2.jpg"}
            alt="image"
            width={500}
            height={340}
            className="lg:w[500px] lg:h-[340px] shadow-lg"
          ></Image>

          <h1 className="text-[4vmin] font-bold">
            All Under $40</h1>
          <p>Explore Now!</p>
        </div>

       </div>

      </main>

    </div>
      
    </>
  );
};

export default YoungsFavorite;
