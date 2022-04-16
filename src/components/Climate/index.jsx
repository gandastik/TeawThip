import React from "react";
import { ReactComponent as TemperatureLogo } from "../../assets/temperature.svg";
import { ReactComponent as RainLogo } from "../../assets/rain.svg";
import { ReactComponent as StormLogo } from "../../assets/storm.svg";

const Climate = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-10 pb-10">
      <h1 className="text-5xl text-white font-medium text-center pt-7">
        Climate
      </h1>
      <div className="flex justify-center mt-8 gap-16">
        <div className="w-[400px]">
          <div className=" h-[400px] bg-[#C4C4C4] rounded-full shadow-lg flex justify-center items-center cursor-pointer hover:scale-105 transition duration-200">
            <TemperatureLogo />
          </div>
          <p className="mt-4 text-normal text-lg text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            itaque deserunt cumque dicta error facilis cum blanditiis hic
            consectetur consequatur?
          </p>
        </div>
        <div className="w-[400px]">
          <div className=" h-[400px] bg-[#C4C4C4] rounded-full shadow-lg flex justify-center items-center cursor-pointer hover:scale-105 transition duration-200">
            <RainLogo />
          </div>
          <p className="mt-4 text-normal text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque
            id hic mollitia sunt incidunt doloribus commodi architecto fugiat
            quod!
          </p>
        </div>
        <div className="w-[400px]">
          <div className=" h-[400px] bg-[#C4C4C4] rounded-full shadow-lg flex justify-center items-center cursor-pointer hover:scale-105 transition duration-200">
            <StormLogo />
          </div>
          <p className="mt-4 text-normal text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            doloremque ratione eos nulla enim deleniti? Perferendis a quisquam
            minima incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Climate;
