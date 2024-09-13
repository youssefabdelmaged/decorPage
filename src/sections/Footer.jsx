import React from "react";
import Button from "../components/Button";
import { facebook, instagram, linkedin, Logo2, twitter } from "../assets/icons";

const Footer = () => {
  return (
    <section className=" lg:h-[full]   flex max-sm:mt-20 max-sm:flex-col max-sm:items-start     sm:flex-col lg:flex-row max-lg:flex-row max-lg:items-center sm:items-start justify-center   items-center gap-28   ">
      <div className="flex flex-col w-[10%] max-sm:w-28  mx-8  gap-10 ">
        <img src={Logo2}  alt="" />
        <p className="w-52 text-secondary text-xl font-medium font-Inter leading-loose ">
          VivaDecor your premier destination for luxury and modern interior
          design
        </p>
        <div className=" flex flex-row gap-5">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>

      <div className="flex flex-col w-[10%]  mx-8 gap-10 ">
        <h1 className="text-white text-2xl font-semibold font-Inter">Our Services</h1>

        <p className=" text-secondary text-xl  font-medium font-Inter">
          Interior design
        </p>
        <p className=" text-secondary text-xl font-medium font-Inter">
          Outdoor design
        </p>
        <p className=" text-secondary text-xl font-medium font-Inter">
          Lightning design
        </p>
        <p className=" text-secondary text-xl font-medium font-Inter">
          Office design
        </p>
      </div>
      <div className="flex flex-col w-[10%] mx-8 gap-10 ">
        <h1 className="text-white text-2xl font-semibold font-Inter">Our Services</h1>

        <p className="w-60 text-secondary text-xl font-medium font-Inter">
        Reviews
        </p>
        <p className="w-60 text-secondary text-xl font-medium font-Inter">
        Careers
        </p>
        <p className="w-60 text-secondary text-xl font-medium font-Inter">
        Pricing
        </p>
        <p className="w-60 text-secondary text-xl font-medium font-Inter">
        Press inquires
        </p>
      </div>
      <div className="flex flex-col w-[10%] mx-8 gap-10 ">
        <h1 className="text-white text-2xl font-semibold font-Inter">Our Services</h1>

        <p className="w-60 text-secondary text-xl font-medium font-Inter">
        info@vivadecor.com
        </p>
        <p className="w-60 text-secondary text-xl font-medium font-Inter">
        Design Avenue Cityville, CA 90210 United States
        </p>
     
      </div>
    
   
    </section>
  );
};

export default Footer;
