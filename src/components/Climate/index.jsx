import React from "react";
import { ReactComponent as TemperatureLogo } from "../../assets/temperature.svg";
import { ReactComponent as RainLogo } from "../../assets/rain.svg";
import { ReactComponent as StormLogo } from "../../assets/storm.svg";

const Climate = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-10 pb-10">
      <h1 className="text-5xl text-white font-medium text-center pt-7 tracking-wide">
        Climate
      </h1>
      <div className="flex justify-center mt-8 gap-16">
        <div className="w-[400px]">
          <div className=" h-[400px] bg-[#C4C4C4] rounded-full shadow-lg flex justify-center items-center cursor-pointer hover:scale-105 transition duration-200">
            <TemperatureLogo />
          </div>
          <p className="mt-4 text-normal text-lg text-white text-center">
            เชียงใหม่เป็นจังหวัดที่มีสภาพอากาศค่อนข้างเย็นเกือบตลอดทั้งปี
            มีอุณหภูมิเฉลี่ยทั้งปี 25.4 องศาเซลเซียส
            โดยมีค่าอุณหภูมิสูงสุดเฉลี่ย 31.8 องศาเซลเซียส อุณหภูมิต่ำสุดเฉลี่ย
            20.1 องศาเซลเซียส
          </p>
        </div>
        <div className="w-[400px]">
          <div className=" h-[400px] bg-[#C4C4C4] rounded-full shadow-lg flex justify-center items-center cursor-pointer hover:scale-105 transition duration-200">
            <RainLogo />
          </div>
          <p className="mt-4 text-normal text-lg text-white text-center">
            มีปริมาณน้ำฝนเฉลี่ย 1,100-1,200 มิลลิเมตร
          </p>
        </div>
        <div className="w-[400px]">
          <div className=" h-[400px] bg-[#C4C4C4] rounded-full shadow-lg flex justify-center items-center cursor-pointer hover:scale-105 transition duration-200">
            <StormLogo />
          </div>
          <p className="mt-4 text-normal text-lg text-white text-center">
            สภาพภูมิอากาศจังหวัดเชียงใหม่ อยู่ภายใต้อิทธิพลมรสุม 2 ชนิด คือ
            ลมมรสุมตะวันตกเฉียงใต้ ลมมรสุมตะวันออกเฉียงเหนือ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Climate;
