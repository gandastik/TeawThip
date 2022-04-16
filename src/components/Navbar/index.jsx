import React from "react";

const Navbar = ({ executeScroll }) => {
  return (
    <div className="h-[60px] bg-white opacity-80 fixed w-full z-10">
      <div className="max-w-screen-2xl mx-auto h-full flex items-center justify-between select-none">
        <div
          className="font-semibold text-2xl text-black hover:cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          TeawThip
        </div>
        <div className="flex justify-between items-center gap-7 text-md">
          <button
            className="font-medium hover:text-zinc-300"
            onClick={() => executeScroll(0)}
          >
            History
          </button>
          <button
            className=" font-medium hover:text-zinc-300"
            onClick={() => executeScroll(1)}
          >
            Landscape
          </button>
          <button
            className=" font-medium hover:text-zinc-300"
            onClick={() => executeScroll(2)}
          >
            Climate
          </button>
          <button
            className=" font-medium hover:text-zinc-300"
            onClick={() => executeScroll(3)}
          >
            Tourists Attractions
          </button>
          <button
            className=" font-medium hover:text-zinc-300"
            onClick={() => executeScroll(4)}
          >
            Arts and Culturals
          </button>
          <button
            className=" font-medium hover:text-zinc-300"
            onClick={() => executeScroll(5)}
          >
            Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
