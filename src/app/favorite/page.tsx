import Navbar from "../components/navbar"
import Image from "next/image";
const Favorite = () => {
    return(
        <>
<div>
      <Navbar/>
      <div className='lg:flex  items-center justify-center 
      hidden bg-pink-400'>
      <h1 className='
      text-purple-600 text-[10vmin] font-serif
       font-extrabold lg:mt-10 drop-shadow-md'>
        EMBROIDERY SHIRTS</h1>
        </div>
      <section className='lg:flex max-w-7xl mx-auto p-10 
      bg-yellow-300'>
        <div className='flex lg:flex items-center 
        justify-center gap-y-16'>
        <h1 className=' lg:hidden
      text-purple-600 text-[5vmin] font-serif
       font-extrabold mt-16 mb-10 drop-shadow-md bg-pink-400'>
        EMBROIDERY SHIRTS</h1>
        </div>

        <div className="lg:mt-10 lg:mx-auto lg:grid grid-cols-3 justify-items-center lg:gap-24 lg:text-2xl items-center lg:p-3 
        font-semibold text-center mx-auto ">
        <div className='flex flex-col w-[100%] h-[100%]'>
        <Image
        src={"/favorite/favorite1.jpg"}
        alt="image"
        width={1000}
        height={1000}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite2.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black 
        space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite3.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite4.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite5.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs
        </del> <ins>2500/=Rs</ins >ONLY</h6>
        </div>
        <div>
       <Image
        src={"/favorite/favorite6.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite7.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite8.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite9.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite15.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite10.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite11.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite12.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite13.jpg"}
        alt="image"
        width={1000}
        height={1000}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/favorite/favorite16.jpg"}
        alt="image"
        width={300}
        height={200}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
        </div>
             </section>
      
    </div>
        </>
                
            )
}

export default Favorite