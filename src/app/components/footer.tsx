import Link from "next/link";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <section>
        <div className=" bg-yellow-400 
             lg:flex flex-col 
             justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center
             items-center sm:items-center md:items-center lg:items-center
             xl:items-center
             max-w-full sm:max-w-7xl md:max-w-7xl lg:max-w-7xl xl:max-w-7xl
             lg:h-[70vh] md:w-[1240px]
             p-16  md:px-96 sm:p-16 lg:p-20 md:text-justify
             mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto
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

      <footer>
        
             {/* footer-panel-1 */}
             <div
          className="flex justify-center items-center 
          content-center mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto
          md:w-[1240px]
          height-[50px]  bg-slate-400"
        >
          <Link href={"/"} className="text-white">
            back to top
          </Link>
        </div>

      <div  className="lg:flex md:flex justify-between 
        max-w-7xl sm:max-w-7xl md:max-w-7xl lg:max-w-7xl xl:max-w-7xl
        mx-auto sm:mx-7xl md:mx-7xl lg:mx-7xl xl:mx-7xl md:w-[1240px]
        mt-0 bg-black p-10 md:pl-24 container">

              
        {/* footer-logo-icons*/}
        <div className="lg:flex md:flex items-center mt-10 lg:gap-x-10 
        lg:mx-auto">
          <div className="flex justify-center items-center 
          py-10 lg:mr-64">
            <div className="lg:flex flex-col lg:flex-grow 
            leading-8 ">
              <h1
                className=" text-[4vmin] font-bold
                 text-white text-balance">
                FASHION
              </h1>
              <p className="text-gray-400 ">
                Complete your style with awesome </p>
              <p className="text-gray-400">
                clothes from us</p>
              {/* social-media-icons */}
              <div className="flex justify-center 
              items-center gap-x-4 mt-10">
                <div>
                  <a href={"https://www.facebook.com/naheedsupermarket?mibextid=ZbWKwL"}>
                  <Image
                    src={"/images/fb-icon.png"}
                    alt="facebook"
                    width={40}
                    height={40}>
                    </Image>
                  </a> 
                </div>
                <div>
                  <a href={"https://www.instagram.com/naheedsupermarket?igsh=NG5id25kMG9meThl"}>
                  <Image 
                    src={"/images/insta-icon.png"}
                    alt="facebook"
                    width={40}
                    height={40}>
                    </Image>
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/fcmagpakistan">
                  <Image
                    src={"/images/tweeter-icon.png"}
                    alt="facebook"
                    width={40}
                    height={40}>
                    </Image>
                  </a>
                
                </div>
                <div>
                  <a href={"https://www.linkedin.com/company/naheed-pk/"}>
                  <Image
                    src={"/images/in-icon.png"}
                    alt="facebook"
                    width={40}
                    height={40}>
                    </Image>
                  </a>
               
                </div>
              </div>
            </div>
          </div>
          {/* footer-pannel-2 */}
          {/* Company */}
          <div className="lg:flex md:flex
          flex-grow lg:justify-between md:justify-between
          space-x-20 sm:space-x-10 md:space-x-24 lg:space-x-20 xl:space-x-20 mx-aut0 sm:mx-auto md:mx-32 lg:mx-auto xl:mx-auto">
          <div className="flex flex-col items-center 
          height-[300px] text-white mt-10 ">
            <ul className="flex flex-col text-gray-400 
            gap-3">
              <h6 className="text-white">Company</h6>
              <a>About</a>
              <a>contact us</a>
              <a>Support</a>
              <a>Careers</a>
            </ul>
          </div>
          {/*====== Quic-Link ========*/}
          <div
            className="flex flex-col height-[300px]
            text-white mt-10  md:items-center md:justify-center">
            <ul className="flex flex-col text-gray-400 gap-3">
              <h6 className="text-white">Quick Link</h6>
              <a>Share Location</a>
              <a>Orders Tracking</a>
              <a>Size Guide</a>
              <a>FAQs</a>
            </ul>
          </div>
          {/* =====Legal====== */}
          <div
            className="flex flex-col  height-[300px]
             text-white mb-10 md:items-center md:justify-center">
            <ul className="flex flex-col text-gray-400 gap-3">
              <h6 className="text-white">Legal</h6>
              <a>Terms & conditions</a>
              <a>Privacy Policy</a>
            </ul>
          </div>

          </div>
          
          {/* © 2024 shope, Inc. */}
        </div>


      </div>
      <section
          className="flex max-w-7xl sm:max-w-7xl md:max-w-7xl lg:max-w-7xl
          justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center
          items-center sm:items-center md:items-center lg:items-center 
          xl:items-center mx-auto bg-black 
          h-[50px] md:w-[1240px] ">
          <div>
            <h6 className="text-gray-400">
              © 2024 Fashion Shope Karachi Pakistan.</h6>
          </div>
        </section>

      </footer>
    </>
  );
};

export default Footer;
