import React from "react";

const Navbar = () => {
  return (
    <div className="h-[60px] bg-white opacity-80 fixed w-full">
      <div className="max-w-screen-2xl mx-auto h-full flex items-center justify-between">
        <div className="font-semibold text-2xl text-black hover:cursor-pointer">
          TeawThip
        </div>
        <div className="flex justify-between items-center gap-7 text-md">
          <button className="font-medium hover:text-sky-600">History</button>
          <button className=" font-medium hover:text-sky-600">Landscape</button>
          <button className=" font-medium hover:text-sky-600">Climate</button>
          <button className=" font-medium hover:text-sky-600">
            Tourists Attractions
          </button>
          <button className=" font-medium hover:text-sky-600">
            Arts and Culturals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
