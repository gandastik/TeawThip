import React from 'react';
import { GiKnifeFork,GiCupcake } from 'react-icons/gi';
import './food.css';

const Food = () => {
    return (
        <div>
            <div className='food_head'>
                <div className='food_title'>อาหาร</div>
                <div className='food_describe_zone'>
                    <div className='food_describe_box'>
                        ในอดีตบริเวณภาคเหนือของไทยเคยเป็นส่วนหนึ่งของอาณาจักรล้านนามาก่อน ช่วงที่อาณาจักรแห่งนี้เรืองอำนาจ ได้แผ่ขยายอาณาเขตเข้าไปยังประเทศเพื่อนบ้าน
                        เช่น พม่า ลาว และมีผู้คนจากดินแดน ต่าง ๆ อพยพเข้ามาตั้งถิ่นฐานในดินแดนแห่งนี้ จึงได้รับวัฒนธรรมหลากหลายจากชนชาติต่าง ๆ เข้ามา ในชีวิตประจำวันรวมทั้งอาหารการกินด้วย
                        อาหารของภาคเหนือประกอบด้วยข้าวเหนียวเป็นอาหารหลัก มีน้ำพริกชนิดต่าง ๆ เช่น น้ำพริกหนุ่ม น้ำพริกอ่อง มีแกงหลายชนิด เช่น แกงโฮะ แกงแค นอกจากนั้นยังมีแหนม ไส้อั่ว แคบหมู และผักต่าง ๆ สภาพอากาศ
                        ก็มีส่วนสำคัญที่ทำให้อาหารพื้นบ้านภาคเหนือแตกต่างจากภาคอื่น นั่นคือ การที่อากาศหนาวเย็นเป็นเหตุผลให้อาหารส่วนใหญ่มีไขมันมาก เช่น น้ำพริกอ่อง แกงฮังเล ไส้อั่ว
                        เพื่อช่วยให้ร่างกายอบอุ่น อีกทั้งการที่อาศัยอยู่ในหุบเขาและบนที่สูงอยู่ใกล้กับป่า จึงนิยมนำพืชพันธุ์ในป่ามาปรุงเป็นอาหาร เช่น ผักแค บอน หยวกกล้วย ผักหวาน ทำให้เกิดอาหารพื้นบ้านชื่อต่าง ๆ เช่น แกงแค แกงหยวกกล้วย แกงบอน
                    </div>
                </div>
            </div>
            <div className='food_type_zone'>
                <div className='food_type_box'>
                    <div className='food_type_element'><GiKnifeFork size="45%" /></div>
                    <div className='text-center mt-3 text-[30px]'>อาหารหลัก</div>
                </div>
                <div className='food_type_box'>
                    <div className='food_type_element'><GiCupcake size="50%" /></div>
                    <div className='text-center mt-3 text-[30px]'>อาหารทานเล่น</div>
                </div>
            </div>
        </div>
    );
};

export default Food;