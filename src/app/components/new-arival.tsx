import React from 'react'
import Image from 'next/image'
const NewArival = () => {
  return (
    <>
     <header>
     <div className='flex  mt-10 p-10 items-center justify-center sm:items-center sm:justify-center md:items-center md:justify-center
     lg:items-start lg:justify-start mx-auto sm:mx-auto md:mx-auto
     lg:mx-auto xl:mx-auto 
     container'>
    
            <Image
            src={"/images/new-arival.jpg"}
            alt="heading"
            width={250}
            height={80}
            >
            </Image>
        </div>
     </header>

     <main>
    <div className='md:flex lg:flex 
    items-center sm:items-center md:items-center lg:items-center
    xl:items-center 
    justify-center sm:justify-center md:justify-center lg:justify-center
    xl:justify-center 
     max-w-7xl 
     mx-auto sm:mx-auto md:mx-60 lg:mx-auto xl:mx-auto
     md:space-x-10
     container
     '>

      <div className='flex flex-col justify-center
      items-center  '>
        <Image
        src={"/images/newarival-girl1.jpg"}
        alt="image"
        width={300}
        height={300}
        className='lg:w-[300px] lg:h-[435px] shadow-xl rounded-xl
        
        '
        >
       </Image>
            <h1 className='text-[4vmin] font-bold '>
              Hoodies & Sweet shirt</h1 >
            <p >Explore Now!</p>
        
      </div>

      <div className='flex flex-col justify-center
      items-center '>
      <Image
        src={"/images/na-girl2.jpg"}
        alt="image"
        width={300}
        height={300}
        className='lg:w-[300px] lg:h-[435px] rounded-xl shadow-xl
           '>
       </Image>
            <h1 className='text-[4vmin] font-bold'>
              Coats & Parkas</h1>
            <p>Explore Now!</p>
        
      </div>

      <div className='flex flex-col justify-center
      items-center '>
      <Image
        src={"/images/na-girl3.jpg"}
        alt="image"
        width={300}
        height={300}
        className='lg:w-[300px] lg:h-[435px] shadow-xl rounded-xl
        '>
       </Image>
            <h1 className='text-[4vmin] font-bold'>
              Tees & T-Shirt</h1>
            <p>Explore Now!</p>
      </div>
      </div>
     
    </main>

    
    </>
   
  )
}

export default NewArival
