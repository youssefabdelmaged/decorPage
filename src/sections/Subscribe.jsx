import React from "react";
import Button from "../components/Button";
import { vector } from "../assets/icons";

const Subscribe = () => {
  return (
    <section className="relative h-72 flex justify-center items-center ">
      <div className="bg-white lg:w-[979px] lg:h-[490px] p-5  sm:w-[500px] sm:h-[600px]  absolute bottom-[-120px]  ">
        <div className=" flex flex-col justify-center items-center gap-20">
          <h1 className="   text-center text-primary text-6xl font-semibold font-Inter">
            Subscribe to Our Newsletter for Design Insights
          </h1>
          <p className=" text-center text-secondary  text-2xl font-medium font-Inter leading-10">
            Be the first to discover trends, inspirations, and special offers as
            we bring the world of design directly to your inbox
          </p>

          <div className="w-full h-16 absolute  bottom-0   border-0   bg-white rounded shadow  flex items-center justify-center   gap-10">
            <input
              className="w-full   h-full border-0  py-2 px-10 focus:outline-none shadow "
              placeholder="Enter your email address"
              type="email"
            />
            <img className="absolute w-3 h-3 left-2 " src={vector} alt="icon" />
            <Button
              className="text-white  h-12 px-4 bg-primary  rounded absolute right-1"
              value="Subscribe"
            />
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Subscribe;
