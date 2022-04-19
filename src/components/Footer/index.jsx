import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl pt-12 pb-20 mx-auto">
      <div className="flex justify-around">
        <div className="">
          <h1 className="text-white text-3xl font-semibold tracking-wide">
            ผู้จัดทำ
          </h1>
          <div className="flex flex-col gap-2 tracking-wide">
            <h1 className="mt-1 text-white text-2xl font-normal hover:text-zinc-200 cursor-default">
              63010035 กฤษฎาง แสวงศิริผล
            </h1>
            <h1 className="text-white text-2xl font-normal hover:text-zinc-200 cursor-default">
              63010320 ณัฐนันท์ เรืองพานิช
            </h1>
            <h1 className="text-white text-2xl font-normal hover:text-zinc-200 cursor-default">
              63010326 ณัฐพงษ์ นาคสามัคคี
            </h1>
          </div>
        </div>
        <div className="">
          <h1 className="text-white text-3xl font-semibold tracking-wide">
            อาจารย์ที่ปรึกษา
          </h1>
          <h1 className="mt-1 text-white text-2xl tracking-wide">
            อ.วัลลภ รุจิขจร
          </h1>
          <h2 className="text-white text-xl mt-4">
            รายวิชา ศิลปะและวัฒนธรรมไทย (90403013) <br />
            สำนักวิชาศึกษาทั่วไป สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
