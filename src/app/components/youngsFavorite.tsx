import React from "react";
import Image from "next/image";

const YoungsFavorite = () => {
  return (
    <>
      <div className="lg:flex mt-10 p-10">
        <Image
          src={"/images/youngfavorite.jpg"}
          alt="heading"
          width={330}
          height={150}
        ></Image>
      </div>
      <main
        className="lg:flex max-w-7xl mx-auto  
        justify-center items-center lg:gap-x-10 p-10 "
      >
        <div className="lg:flex mb-8">
          <Image
            src={"/images/young1.jpg"}
            alt="image"
            width={500}
            height={575}
          ></Image>
          <div className="lg:hidden flex flex-col 
          items-center">
          <h1 className="text-[4vmin] font-bold">
            Trending on instagram</h1>
          <p>Explore Now!</p>
        </div>
        </div>
        <div className="lg:flex mb-8">
          <Image
            src={"/images/young2.jpg"}
            alt="image"
            width={500}
            height={575}
          ></Image>
          <div className="lg:hidden flex flex-col items-center">
          <h1 className="text-[4vmin] font-bold">
            All Under $40</h1>
          <p>Explore Now!</p>
        </div>

        </div>
      </main>
      <section
        className="lg:flex max-w-5xl mx-auto  
    justify-evenly items-center gap-x-1 p-3 hidden"
      >
        <div className="flex flex-col flex-grow">
          <h1 className="text-[4vmin] font-bold">
            Trending on instagram</h1>
          <p>Explore Now!</p>
        </div>
        <div className="flex flex-col flex-grow">
          <h1 className="text-[4vmin] font-bold">
            All Under $40</h1>
          <p>Explore Now!</p>
        </div>
      </section>
    </>
  );
};

export default YoungsFavorite;
