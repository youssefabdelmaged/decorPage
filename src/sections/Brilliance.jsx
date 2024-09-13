import React from "react";
import { mask2 } from "../assets/images";
import { cross } from "../assets/icons";
import Button from "../components/Button";

const Brilliance = () => {
  return (
    <div className=" flex flex-col sm:flex-col md:flex-col lg:flex-row gap-24 ">
      <div className="w-50  ">
        <img className=" w-full h-full md:p-10 lg:w-70 lg:p-0   " src={mask2} alt="" />
      </div>

      <div className=" flex flex-col gap-24  h-full">
        <h1 className=" text-primary text-5xl font-semibold font-Inter">
          Designing Your Dream With Brilliance
        </h1>
        <p className=" text-secondary  font-medium font-inter leading-10 ">
          Elevate your spaces with bespoke interior designs that reflect your
          unique style and aspirations, crafted with precision and brilliance
          for an unforgettable living experience
        </p>

        <div className="flex flex-col gap-6 ">
          <div className=" flex justify-center items-center flex-col">
            <div className="flex justify-between relative w-full  items-center mb-3 ">
              <h1 className="  text-primary text-xl p-2 font-semibold font-Inter">
                Living Room Interior Design
              </h1>
              <img className="w-4 h-4 " src={cross} alt="cross" />
            </div>

            <div className=" w-full h-[0.3px]  bg-secondary" />
          </div>
          <div className=" flex justify-center items-center flex-col">
            <div className="flex justify-between relative w-full  items-center mb-3 ">
              <h1 className="  text-primary text-xl p-2 font-semibold font-Inter">
                Commercial Office Room Interior Design{" "}
              </h1>
              <img className="w-4 h-4 " src={cross} alt="cross" />
            </div>

            <div className=" w-full h-[0.5px]  bg-secondary" />
          </div>
        </div>

        <Button value={"Learn More"} className={"text-white w-72"} />
      </div>
    </div>
  );
};

export default Brilliance;
