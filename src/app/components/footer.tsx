import Link from "next/link";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer>
        


      <div  className=" lg:flex justify-between 
        max-w-7xl mx-auto  
        mt-0 bg-black p-10 md:pl-24 container">

              
        {/* footer-logo-icons*/}
        <div className="max-w-7xl 
         mx-auto  container
         lg:flex  items-center mt-10 lg:gap-x-10 
        ">
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
          <div className="lg:flex
          flex-grow  lg:justify-between md:justify-between
          space-x-20 sm:space-x-10 md:space-x-24 lg:space-x-20 xl:space-x-20 mx-aut0 ">
          <div className="flex flex-col md:items-center md:justify-center
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
             text-white mt-10 md:mt-10 lg:mb-20 md:items-center md:justify-center">
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
      </footer>
    </>
  );
};

export default Footer;
