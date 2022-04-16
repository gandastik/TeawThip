import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl pt-12 pb-20 mx-auto">
      <div className="">
        <div className="">
          <h1 className="text-white text-3xl text-normal tracking-wide">
            ผู้จัดทำ
          </h1>
          <div className="ml-4 flex flex-col gap-2 tracking-wide">
            <h1 className="text-white text-2xl text-normal hover:text-zinc-200 cursor-default">
              63010035 กฤษฎาง แสวงศิริผล
            </h1>
            <h1 className="text-white text-2xl text-normal hover:text-zinc-200 cursor-default">
              63010320 ณัฐนันท์ เรืองพานิช
            </h1>
            <h1 className="text-white text-2xl text-normal hover:text-zinc-200 cursor-default">
              63010326 ณัฐพงศ์ นาคสามัคคี
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <h1 className="text-white text-3xl tracking-wide">อาจารย์ที่ปรึกษา</h1>
        <h1 className="text-white text-2xl ml-4 flex flex-col gap-2 tracking-wide">
          อ.วัลลภ รุจิขจร
        </h1>
      </div>
    </div>
  );
};

export default Footer;
