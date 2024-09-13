import React from "react";
import Button from "../components/Button";
import { statistics } from "../constants";
import { image1, image2 } from "../assets/images";
import { arrow } from "../assets/icons";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full max-container flex-col gap-10 max-sm:gap-[10px] lg:flex-row py-12   ">
      <div className="flex flex-col w-3/5 gap-16 max-sm:gap-36   lg:gap-52  h-screen  max-sm:w-full ">
        <h1 className="text-primary font-inter  sm:text-7xl mt-10 w-full text-4xl">
          Interior Design
        </h1>
        <p className="text-secondary font-inter text-[24px ] max-w-lg max-sm:leading-9">
          Step into a world where the art of Interior Design is meticulously
          crafted to bring together timeless elegance and cutting-edge modern
          Innovation, Allowing you to transform your living spaces into the
          epitome of luxury and sophistication
        </p>
        <Button
          className={"text-white px-12 py-4  w-full lg:w-[50%] max-sm:w-60"}
          value={"Start Project"}
        />
        <div className="flex flex-row mb-10 m   ">
          {statistics.map((statistic) => (
            <div
              className="mx-10 max-sm:mx-5 flex items-center justify-center flex-col gap-3   "
              key={statistic.value}
            >
              <p className="text-5xl text-secondary font-[400] leading-7 max-sm:text-3xl ">
                {statistic.value}
              </p>
              <p className="text-sm  text-secondary leading-7 max-sm:leading-4 max-sm:w-12">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative  flex justify-start items-end flex-col max-sm:mt-20 ">
        <img className=" " src={image1} alt="" />

        <div
          className="relative mr-20 mt-20 lg:mt-64 max-sm:mx-0
        "
        >
          <img src={image2} className=" relative z-10" alt="" />
          <div className="absolute top-[-2rem] left-[-2rem] border-2 border-primary w-52 h-48 max-sm:w-32 max-sm:h-24  z-0 max-sm:top-[-1rem] max-sm:left-[-1rem]" />
        </div>

        <div className=" bg-primary w-32 h-32 flex items-center justify-center absolute bottom-0 right-0 z-10 max-sm:w-24 max-sm:h-24  ">
          <img src={arrow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
