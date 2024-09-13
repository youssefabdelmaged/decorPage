import React from "react";

import { simples } from "../constants";
import { image } from "../assets/images";

const Simple = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-center items-center gap-10 max-container">
      <div className=" max-sm:w-60 flex flex-col sm:ml-4  md:flex-col    items-center justify-center   py-5    max-container    ">
        {simples.map((item) => (
          <div
            className="flex flex-row gap-4  max-sm:px-5 px-10 justify-center items-start max-sm:w-80   "
            key={item.label}
          >
            <div className="flex flex-col  w-16  ">
              <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-full  ">
                <img className="w-8 h-8  " src={item.imgURL} alt={item.label} />
              </div>
              <div className="w-32 h-px origin-top-left rotate-90   border border-secondary ml-8 mt-10 "></div>{" "}
            </div>
            <div className=" flex flex-col justify-center p-5  ">
              <h1 className="text-primary text-3xl font-bold font-Inter p-2 mb-2 ">
                {item.label}
              </h1>
              <p className=" w-96 max-sm:w-60 text-secondary max-sm:text-xl text-2xl font-medium font-Inter leading-10">
                {item.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="felx justify-center items-center">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Simple;
