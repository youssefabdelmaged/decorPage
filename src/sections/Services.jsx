import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-start  max-sm:items-center max-container  ">
      <div className="flex flex-row ml-16 max-sm:ml-0 items-center justify-center gap-1 ">
        <div className=" w-10 h-0.5 bg-primary " />
        <h1 className="font-inter font-bold text-primary text-lg  ">
          Our Services
        </h1>
      </div>

      <div className=" flex flex-row max-sm:flex-col items-center justify-center p-5 lg:gap-6 lg:p-2  max-sm:w-60  ">
        {services.map((item) => (
          <div
            className="flex flex-1 flex-row max-lg:flex-col max-sm:flex-col w-1/4 mx-10 justify-between gap-12 p-2 lg:mx-16  max-sm:justify-center max-sm:items-center  "
            key={item.label}
          >
            <img src={item.imgURL} className="mr-1 w-60 h-60 md:h-24 md:w-24  sm:w-16 sm:h-16 max-sm:w-16 max-sm:h-12     " alt="" />
            <div className="  flex flex-col items-center justify-center max-sm:w-60">
              <h1 className="text-center font-inter font-bold text-lg mb-2 text-primary max-sm:w-60 " >{item.label}</h1>
              <p className="text-center text-secondary max-sm:w-60">{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
