import React from 'react'
import Image from 'next/image'
const NewArival = () => {
  return (
    <>
     <header className='flex  max-w-7xl mx-auto container'>
     <div className='flex  mt-10 p-10 items-center justify-center sm:items-center sm:justify-center md:items-center md:justify-center
     lg:items-start lg:justify-start mx-auto sm:mx-auto md:mx-auto
     lg:mx-auto xl:mx-auto 
     md:ml-60
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
     <main className='flex  max-w-7xl mx-auto container '>

      <div className='lg:flex  justify-center items-center 
       max-w-7xl sm:max-w-7xl md:w-7xl lg:max-w-7xl
     mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto
     md:ml-80 lg:space-x-10
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
