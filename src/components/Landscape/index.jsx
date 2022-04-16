import React from "react";

const Landscape = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <h1 className="text-5xl text-white font-medium text-center pt-7">
        Landscape
      </h1>
      <div className="flex mt-8 gap-4">
        <img
          src="https://i.imgur.com/UupnNFg.jpg"
          alt="views over moutain of Chiangmai"
          className="w-[600px] h-[400px] shadow-md rounded-md cursor-pointer hover:scale-105 transition duration-200"
        />
        <div>
          <p className="text-white font-normal text-xl indent-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sit
            quia natus, unde optio numquam, deserunt voluptas dolor illo nihil
            dignissimos autem eveniet, voluptatem corporis voluptatibus! Quidem
            ea suscipit dolorum, voluptatibus culpa pariatur earum delectus quia
            deserunt magnam animi et libero alias velit facere consequatur
            voluptatem voluptas rem? Voluptatem molestiae quas, perferendis
            obcaecati id animi blanditiis sint qui impedit ipsum possimus nisi
            expedita odit ex voluptate facere eaque incidunt facilis similique
            tempora? A, provident delectus laboriosam ea saepe reiciendis ad.
          </p>
          <p className="text-white font-normal text-xl indent-8 mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sit
            quia natus, unde optio numquam, deserunt voluptas dolor illo nihil
            dignissimos autem eveniet, voluptatem corporis voluptatibus! Quidem
            ea suscipit dolorum, voluptatibus culpa pariatur earum delectus quia
            deserunt magnam animi et libero alias velit facere consequatur
            voluptatem voluptas rem? Voluptatem molestiae quas, perferendis
            obcaecati id animi blanditiis sint qui impedit ipsum possimus nisi
            expedita odit ex voluptate facere eaque incidunt facilis similique
            tempora? A, provident delectus laboriosam ea saepe reiciendis ad.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 mt-6">
        <img
          src="https://i.imgur.com/UupnNFg.jpg"
          alt="views over moutain of Chiangmai"
          className="w-[400px] h-[300px] shadow-md rounded-md cursor-pointer hover:scale-105 transition duration-200"
        />
        <img
          src="https://i.imgur.com/UupnNFg.jpg"
          alt="views over moutain of Chiangmai"
          className="w-[400px] h-[300px] shadow-md rounded-md cursor-pointer hover:scale-105 transition duration-200"
        />
        <img
          src="https://i.imgur.com/UupnNFg.jpg"
          alt="views over moutain of Chiangmai"
          className="w-[400px] h-[300px] shadow-md rounded-md cursor-pointer hover:scale-105 transition duration-200"
        />
      </div>
    </div>
  );
};

export default Landscape;
