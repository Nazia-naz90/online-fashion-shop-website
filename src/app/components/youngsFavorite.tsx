import React from "react";
import Image from "next/image";

const YoungsFavorite = () => {
  return (
    <>
    <div>

    <div className="flex  mt-10 p-10 items-center sm:items-center md:items-center lg:items-center container mx-auto sm:mx-60 md:mx-80
      lg:mx-auto xl:mx-auto">
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
       items-center sm:items-center md:items-center lg:items-center
       xl:items-center  justify-center sm:justify-center md:justify-center
       lg:justify-center xl:justify-center
       lg:flex max-w-7xl sm:max-w-7xl md:max-w-7xl 
       lg:max-w-7xl xl:max-w-7xl 
       mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto
       space-x-10  md:space-x-20 lg:space-x-10 xl:space-x-10
       md:ml-64 container
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
