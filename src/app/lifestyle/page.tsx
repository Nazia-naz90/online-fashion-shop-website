import Navbar from "../components/navbar"
import Image from "next/image";
const Lifestyle = () => {
    return(
        <>
<div>
      <Navbar/>
      <div className='lg:flex  items-center justify-center 
      hidden bg-black'>
      <h1 className='
      text-white text-[10vmin] font-serif
       font-extrabold lg:mt-10 drop-shadow-md'>
        LATEST LIFE STYLE FOR EASTERN</h1>
        </div>
      <section className='lg:flex max-w-7xl mx-auto p-10 
      bg-yellow-300'>
        <div className='flex lg:flex items-center 
        justify-center gap-y-16'>
        <h1 className=' lg:hidden
      text-white text-[5vmin] font-serif
       font-extrabold mt-16 mb-10 drop-shadow-md bg-black'>
        LATEST LIFE STYLE FOR EASTERN</h1>
        </div>

        <div className="lg:mt-10 lg:mx-auto lg:grid grid-cols-3 justify-items-center lg:gap-24 lg:text-2xl items-center lg:p-3 
        font-semibold text-center mx-auto ">
        <div className='flex flex-col w-[100%] h-[100%]'>
        <Image
        src={"/lifestyle/lifestyle1.jpg"}
        alt="image"
        width={1000}
        height={1000}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle2.jpg"}
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
        src={"/lifestyle/lifestyle10.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle3.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle4.jpg"}
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
        src={"/lifestyle/lifestyle5.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle7.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle11.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle14.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle15.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle17.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle18.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle19.jpg"}
        alt="image"
        width={500}
        height={500}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle20.jpg"}
        alt="image"
        width={1000}
        height={1000}>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div>
       <Image
        src={"/lifestyle/lifestyle21.jpg"}
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

export default Lifestyle
