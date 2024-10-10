import React from 'react'
import Image from 'next/image'
const NewArival = () => {
  return (
    <>
     <header>
     <div className='flex  mt-10 p-10'>
            <Image
            src={"/images/new-arival.jpg"}
            alt="heading"
            width={250}
            height={80}>

            </Image>
        </div>
     </header>
     <main className='lg:flex max-w-7xl mx-auto  
     justify-center items-center lg:gap-x-10 
     lg:p-10'>
     <div className='lg:flex  justify-center  ml-8
      items-center rounded-3xl drop-shadow-xl mb-5 '>
        <Image
        src={"/images/newarival-girl1.jpg"}
        alt="image"
        width={300}
        height={300}>
       </Image>
       <div className=' lg:hidden flex flex-col 
       items-center'>
            <h1 className='text-[4vmin] font-bold'>
              Hoodies & Sweet shirt</h1 >
            <p>Explore Now!</p>
        </div>
      </div>
      <div className='lg:flex justify-center ml-8
      items-center rounded-3xl drop-shadow-xl mb-5'>
      <Image
        src={"/images/na-girl2.jpg"}
        alt="image"
        width={300}
        height={300}>
       </Image>
       <div className=' lg:hidden flex flex-col 
       items-center'>
            <h1 className='text-[4vmin] font-bold'>
              Coats & Parkas</h1>
            <p>Explore Now!</p>
        </div>

      </div>
      <div className='lg:flex justify-center ml-8
      items-center rounded-3xl drop-shadow-xl mb-5'>
      <Image
        src={"/images/na-girl3.jpg"}
        alt="image"
        width={300}
        height={300}>
       </Image>
       <div className='lg:hidden flex flex-col items-center'>
            <h1 className='text-[4vmin] font-bold'>
              Tees & T-Shirt</h1>
            <p>Explore Now!</p>
        </div>
      </div>
    </main>
    <section className='lg:flex max-w-5xl mx-auto  
    justify-evenly items-center gap-x-1 p-3 hidden ml-32'>
        <div className='lg:flex lg:flex-col lg:flex-grow '>
            <h1 className='text-[4vmin] font-bold'>
              Hoodies & Sweet shirt</h1>
            <p>Explore Now!</p>
        </div>
        <div className='flex flex-col flex-grow'>
            <h1 className='text-[4vmin] font-bold'>
              Coats & Parkas</h1>
            <p>Explore Now!</p>
        </div>
        <div className='flex flex-col flex-grow'>
            <h1 className='text-[4vmin] font-bold'>
              Tees & T-Shirt</h1>
            <p>Explore Now!</p>
        </div>
    </section>
    
    </>
   
  )
}

export default NewArival
