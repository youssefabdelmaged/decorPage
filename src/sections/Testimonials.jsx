import React from "react";
import { mask1, maskface } from "../assets/images";
import { section } from "framer-motion/client";
import { vector } from "../assets/icons";
import Button from "../components/Button";

const testimonials = () => {
  return (
    <>
    <section className="relativ">

   
      <section
        className="lg:flex hidden justify-center items-start
      max-container  "
      >
        <div className="flex gap-10 ">
          <div className="relative h-[30rem] w-[30rem] flex gap-3    ">
            <img className="w-[30rem] h-[30rem] " src={mask1} alt="" />
            <div className="absolute right-[-32rem] bottom-[-4rem] flex flex-row max-sm:flex-col max-sm:right-[-5rem]  max-sm:bottom-[-30rem]  gap-10">
              <div className=" w-96 h-96  bg-primary rounded flex flex-col items-center ">
                <div className=" h-16   text-white text-9xl font-medium font-Inter mt-5 mb-5  mr-52  ">
                  “
                </div>
                <p className=" w-80  text-white font-Inter leading-10">
                  Working with your design team was an absolute pleasure. The
                  attention to detail and creativity exceeded my expectations.
                  Thank you for making my home beautiful!
                </p>

                <div className="w-80 flex items-center text-white p-4 rounded-lg shadow-lg">
                  <div className="w-12 h-12">
                    <img
                      src={maskface}
                      alt="Profile Picture"
                      className="rounded-full border-2 "
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold">James Bennett</p>
                    <p className="text-sm text-gray-400">Toronto, Canada</p>
                  </div>
                </div>
              </div>
              <div className=" w-96 h-96  bg-primary rounded flex flex-col items-center ">
                <div className=" h-16   text-white text-9xl font-medium font-Inter mt-5 mb-5  mr-52  ">
                  “
                </div>
                <p className=" w-80  text-white font-Inter leading-10">
                  Working with your design team was an absolute pleasure. The
                  attention to detail and creativity exceeded my expectations.
                  Thank you for making my home beautiful!
                </p>

                <div className="w-80 flex items-center text-white p-4 rounded-lg shadow-lg">
                  <div className="w-12 h-12">
                    <img
                      src={maskface}
                      alt="Profile Picture"
                      className="rounded-full border-2 "
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold">James Bennett</p>
                    <p className="text-sm text-gray-400">Toronto, Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="  w-96  text-primary ml-10  text-4xl font-semibold font-Inter">
          What Our Customers Say About Us
        </h1>






        
      </section>

      <section className="flex  justify-center items-center flex-col lg:hidden gap-10 ">
        <h1 className="  w-96  text-center text-primary ml-10  text-4xl font-semibold font-Inter">
          What Our Customers Say About Us
        </h1>

        <div className="flex gap-4 max-md:flex-wrap max-sm:flex-wrap justify-center items-center ">
          <div className=" w-96 h-96  bg-primary rounded flex flex-col items-center ">
            <div className=" h-16   text-white text-9xl font-medium font-Inter mt-5 mb-5  mr-52  ">
              “
            </div>
            <p className=" w-80  text-white font-Inter leading-10">
              Working with your design team was an absolute pleasure. The
              attention to detail and creativity exceeded my expectations. Thank
              you for making my home beautiful!
            </p>

            <div className="w-80 flex items-center text-white p-4 rounded-lg shadow-lg">
              <div className="w-12 h-12">
                <img
                  src={maskface}
                  alt="Profile Picture"
                  className="rounded-full border-2 "
                />
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold">James Bennett</p>
                <p className="text-sm text-gray-400">Toronto, Canada</p>
              </div>
            </div>
          </div>
          <div className=" w-96 h-96  bg-primary rounded flex flex-col items-center ">
            <div className=" h-16   text-white text-9xl font-medium font-Inter mt-5 mb-5  mr-52  ">
              “
            </div>
            <p className=" w-80  text-white font-Inter leading-10">
              Working with your design team was an absolute pleasure. The
              attention to detail and creativity exceeded my expectations. Thank
              you for making my home beautiful!
            </p>

            <div className="w-80 flex items-center text-white p-4 rounded-lg shadow-lg">
              <div className="w-12 h-12">
                <img
                  src={maskface}
                  alt="Profile Picture"
                  className="rounded-full border-2 "
                />
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold">James Bennett</p>
                <p className="text-sm text-gray-400">Toronto, Canada</p>
              </div>
            </div>
          </div>
        </div>



    

      

      </section>

 
 </section>
    </>
  );
};

export default testimonials;

{
  /* <div className=" w-96 h-96  bg-primary rounded flex flex-col items-center ">
        <div className=" h-16   text-white text-9xl font-medium font-Inter mt-5 mb-5  mr-52  ">
          “
        </div>
        <p className=" w-80  text-white font-Inter leading-10">
          Working with your design team was an absolute pleasure. The attention
          to detail and creativity exceeded my expectations. Thank you for
          making my home beautiful!
        </p>

        <div className="w-80 flex items-center text-white p-4 rounded-lg shadow-lg">
          <div className="w-12 h-12">
            <img
              src={maskface}
              alt="Profile Picture"
              className="rounded-full border-2 "
            />
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold">James Bennett</p>
            <p className="text-sm text-gray-400">Toronto, Canada</p>
          </div>
        </div>
      </div> */
}
