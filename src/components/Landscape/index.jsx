import React from "react";

const Landscape = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <h1 className="text-5xl text-white font-medium text-center pt-7 tracking-wide">
        Landscape
      </h1>
      <div className="flex mt-8 gap-6">
        <img
          src="https://i.imgur.com/UupnNFg.jpg"
          alt="views over moutain of Chiangmai"
          className="w-[600px] h-[400px] shadow-md rounded-md cursor-pointer hover:scale-105 transition duration-200"
        />
        <div>
          <p className="text-white font-normal text-xl indent-8">
            พื้นที่โดยทั่วไปของจังหวัดเชียงใหม่มีสภาพพื้นที่เป็นภูเขาและป่าละเมาะ
            มีที่ราบอยู่
            ตอนกลางตามสองฟากฝั่งแม่น้ำปิงมีภูเขาสูงที่สุดในประเทศไทย คือ
            “ดอยอินทนนท์” มีความสูง จากระดับน้ำทะเลปานกลางประมาณ 2,565 เมตร
            นอกจากนี้ยังมีดอยอื่นๆที่มีความสูง รองลงมาอีกหลายแห่ง เช่น
            ดอยผ้าห่มปก (ความสูงจากระดับน้ำทะเลปานกลาง 2,285 เมตร)
            ดอยหลวงเชียงดาว (ความสูงจากระดับน้ำทะเลปานกลาง 2,170 เมตร) ดอยสุเทพ
            (ความสูง จากระดับน้ำทะเลปานกลาง 1,601 เมตร) สภาพพื้นที่แบ่งออกเป็น 2
            ลักษณะ คือ พื้นที่ภูเขา ส่วนใหญ่อยู่ทางทิศเหนือและ
            ทิศตะวันตะวันตกของจังหวัดคิดเป็นพื้นที่ประมาณ 80 % ของพื้นที่จังหวัด
            เป็นพื้นที่ป่าต้นน้ำ ลำธาร ไม่เหมาะต่อการเพาะปลูก
            พื้นที่ราบลุ่มน้ำและที่ราบเชิงเขากระจายอยู่ทั่วไประหว่าง
            หุบเขาทอดตัวในแนวเหนือ - ใต้ ได้แก่ ที่ราบลุ่มน้ำปิง ลุ่มน้ำฝาง
            และลุ่มน้ำแม่งัด เป็นพื้นที่ ที่มีความอุดมสมบูรณ์เหมาะสมต่อการเกษตร
          </p>
          <p className="text-white font-normal text-xl indent-8 mt-4">
            จังหวัดเชียงใหม่ตั้งอยู่ทางทิศเหนือของประเทศไทย เส้นรุ้งที่ 16
            องศาเหนือ และ เส้นแวงที่ 99 องศาตะวันออก สูงจากระดับน้ำทะเลประมาณ
            1,027 ฟุต (310 เมตร) ห่างจากกรุงเทพมหานคร 696 กิโลเมตร
            จังหวัดเชียงใหม่มีพื้นที่ 20,107.057 ตารางกิโลเมตรหรือประมาณ
            12,566,911 ไร่ มีพื้นที่กว้างใหญ่เป็นอันดับที่ 1 ของภาคเหนือ
            และเป็นอันดับที่ 2 ของประเทศ รองจากจังหวัด นครราชสีมา
            ลักษณะภูมิประเทศโดยทั่วไปมีสภาพพื้นที่เป็นภูเขาและป่าไม้มีที่ราบอยู่ตอนกลาง
            ตามสองฟากฝั่งแม่น้ำปิง มีภูเขาที่สูงที่สุดในประเทศไทยคือ
            ดอยอินทนนท์สูงประมาณ 2,565.3355 เมตร อยู่ในเขตอำเภอจอมทอง
            นอกจากนี้ยังมีดอยอื่นที่มีความสูงรองลงมาอีก 3 หลายแห่ง เช่น
            ดอยผ้าห่มปก สูง 2,285 เมตร ดอยหลวงเชียงดาว สูง 2,170 เมตร ดอยสุเทพ
            สูง 1,601 เมตร
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
