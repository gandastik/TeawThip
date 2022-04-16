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
                        อาหารของภาคเหนือประกอบด้วยข้าวเหนียวเป็นอาหารหลัก มีน้ำพริกชนิดต่าง ๆ เช่น น้ำพริกหนุ่ม น้ำพริกอ่อง มีแกงหลายชนิด เช่น แกงโฮะ แกงแค นอกจากนั้นยังมีแหนม ไส้อั่ว แคบหมู และผักต่าง ๆ
                        สภาพอากาศก็มีส่วนสำคัญที่ทำให้อาหารพื้นบ้านภาคเหนือแตกต่างจากภาคอื่น นั่นคือ การที่อากาศหนาวเย็นเป็นเหตุผลให้อาหารส่วนใหญ่มีไขมันมาก เช่น น้ำพริกอ่อง แกงฮังเล ไส้อั่ว
                        เพื่อช่วยให้ร่างกายอบอุ่น อีกทั้งการที่อาศัยอยู่ในหุบเขาและบนที่สูงอยู่ใกล้กับป่า จึงนิยมนำพืชพันธุ์ในป่ามาปรุงเป็นอาหาร เช่น ผักแค บอน หยวกกล้วย ผักหวาน ทำให้เกิดอาหารพื้นบ้านชื่อต่าง ๆ
                        เช่น แกงแค แกงหยวกกล้วย แกงบอน
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
            <div className='food_present_bg'>
                <div className='food_present_boxl'>
                    <div className='food_present_boxl1'>
                        <div className="bg-[url('https://cdn.discordapp.com/attachments/960162734220120114/964597565226119208/8a72aadc3c344afa8720f9a84cc71779.png')] 
                        bg-cover rounded-[20px] h-[80%] w-[80%] ml-10 hover:scale-105 transtiion duration-200"></div>
                    </div>
                    <div className='food_present_boxl2'>
                        <div className='text-[100px] text-[#ffffff]'>ข้าวซอย</div>
                        <div className='w-[35%] h-2 bg-[#ffffff]'></div>
                    </div>
                    <div className='food_present_box3'>
                        <div className='text-[#ffffff] text-[20px] px-20'>
                        ข้าวซอย คืออาหารพื้นเมืองทางภาคเหนือของประเทศไทย เดิมเรียกว่า "ก๋วยเตี๋ยวฮ่อ"
                        เป็นอาหารที่ได้รับอิทธิพลมาจากชาวจีนยูนนานหรือฮ่อ มีลักษณะคล้ายเส้นบะหมี่ ในน้ำซุปที่ใส่เครื่องแกง รสจัดจ้าน มีเครื่องเคียง
                        ได้แก่ ผักกาดดอง หอมหัวแดง ยำกะหล่ำปลีและมีเครื่องปรุงรส เช่น พริกผัดน้ำมัน น้ำมะนาว น้ำปลา น้ำตาล ในตำรับดั้งเดิมเนื้อที่ใช้เป็นเนื้อไก่หรือเนื้อวัว
                        แต่ในปัจจุบันร้านอาหารหลายแห่งได้มีการใช้เนื้อหมูแทน บางแห่งอาจเพิ่มอาหารทะเลหรือเต้าหู้เป็นส่วนประกอบ โดยข้าวซอยมีต้นกำเนิดจากชาวจีนมุสลิม
                        ที่อพยพมาจาก มณฑลยูนนาน ประเทศจีน มาอยู่อยู่ทางภาคเหนือของประเทศไทย ประเทศพม่า และประเทศลาว แต่เดิมข้าวซอยไม่มีกะทิเป็นส่วนประกอบ
                        เรียกว่า “ข้าวซอยน้ำใส” ต่อมาได้มีการเพิ่มกะทิเข้าไปจนเป็นที่นิยมอย่างมากและกลายมาเป็นลักษณะข้าวซอยที่รู้จักกันในปัจจุบัน
                        ข้าวซอยจึงเป็นผลลัพธ์ของการผสมผสานระหว่างอาหารจีน อาหารตะวันออกกลางและอาหารเอเชียอาคเนย์</div>
                        <div className='flex justify-end pr-20'>
                            <a href="https://www.wongnai.com/recipes/northern-thai-curried-noodles-soup" target="_blank" className="text-[15px] text-[#ffffff] hover:text-blue-400">
                            more info →
                        </a></div>
                    </div>
                </div>
                <div className='food_present_boxr'>
                    <div className='food_present_boxr1'>
                        <div className="bg-[url('https://media.discordapp.net/attachments/960162734220120114/964774037060472852/main-header.png?width=780&height=676')] 
                        bg-cover rounded-[20px] h-[80%] w-[80%] ml-10 hover:scale-105 transtiion duration-200"></div>
                    </div>
                    <div className='food_present_boxr2'>
                        <div className='text-[100px] text-[#ffffff]'>แกงฮังเล</div>
                        <div className='w-[40%] h-2 bg-[#ffffff]'></div>
                    </div>
                    <div className='food_present_box3'>
                        <div className='text-[#ffffff] text-[20px] px-20'>
                            แกงฮังเลเป็นอาหารที่ได้รับอิทธิพลมาจากพม่าในสมัยอดีต แกงที่ชาวพม่าเรียกว่า “ฮินแล” หรือ “ฮังแล” เป็นแกงอย่างเดียวกับที่ชาวล้านนาเรียกว่า “แกงโฮะ”
                            และแกงอย่างที่ชาวล้านนาเรียก “ฮินแล” หรือ “ฮังแล” ชาวพม่าเรียก “แวะตาฮีน” แปลว่าแกงหมู ซึ่งแกงฮังเลม่านจะจะเนื้อสัตว์ที่ใช้จะเป็นเนื้อหมูสามชั้นติดมัน
                            หรือกระดูกซี่โครงบ้างปนกัน ทำให้เป็นแกงที่มีไขมันสูง และมีเครื่องแกงต่างๆ มากมาย  โดยแกงฮังเลสามารถจําแนกได 2 ประเภท คือ แกงฮังเลมานและ แกงฮังเลเชียงแสน
                            แกงฮังเลเชียงแสน แตกต่างจากแกงฮังเลม่านตรงที่ใส่ถั่วฝักยาว มะเขือยาว พริกสด หน่อไม้ส้ม งาขาวคั่ว เพิ่มเข้ามา มีขั้นตอนการปรุงเช่นเดียวกับแกงฮังเลม่าน
                            เครื่องแกงฮังเลบางแห่งนิยมใส่เม็ดผักชีหรือรากผักชี กระชาย ด้วย</div>
                            <div className='flex justify-end pr-20'>
                            <a href="https://www.wongnai.com/recipes/hunglay-curry" target="_blank" className="text-[15px] text-[#ffffff] hover:text-blue-400">
                            more info →
                            </a></div>
                    </div>
                </div>
                <div className='food_present_boxl'>
                    <div className='food_present_boxl1'>
                        <div className="bg-[url('https://cdn.discordapp.com/attachments/960162734220120114/964767358726066216/1324348838.jpg')] 
                        bg-cover rounded-[20px] h-[80%] w-[80%] ml-10 hover:scale-105 transtiion duration-200"></div>
                    </div>
                    <div className='food_present_boxl2'>
                        <div className='text-[100px] text-[#ffffff]'>ขนมจีนน้ำเงี้ยว</div>
                        <div className='w-[60%] h-2 bg-[#ffffff]'></div>
                    </div>
                    <div className='food_present_box3'>
                        <div className='text-[#ffffff] text-[20px] px-20'>
                            น้ำเงี้ยว หรือ น้ำงิ้ว เป็นอาหารภาคเหนือของประเทศไทยเป็นน้ำแกงที่รับประทานกับขนมจีนหรือเส้นก๋วยเตี๋ยว ถ้าเป็นก๋วยเตี๋ยว
                            เรียกก๋วยเตี๋ยวน้ำเงี้ยว บางสูตรใช้ถั่วเน่าแข็บย่างไฟ โขลกลงในเครื่องแกง บางสูตรใส่เต้าเจี้ยว ชาวไทใหญ่ เรียกอาหารชนิดนี้ว่า
                            มีส่วนประกอบหลักคือดอกงิ้ว เลือดหมู และหมูสับ ดัดแปลงมาจากน้ำพริกอ่อง พริกแกงจะคล้ายพริกแกงส้มของทางภาคกลางแต่ไม่ใส่กระชาย
                            น้ำเงี้ยวเป็นอาหารมงคลของภาคเหนือ นิยมทำในงานบุญต่างๆ มักจะใช้รับประทานกับขนมจีนหรือเส้นก๋วยเตี๋ยว ซึ่งน้ำเงี้ยวแต่ละที่ก็จะมีลักษณะไม่เหมือนกันแตกต่างกันไปแต่ละท้องถิ่น
                            โดยน้ำเงี้ยวถือเป็นอาหารขึ้นชื่อของจังหวัดเชียงใหม่
                            น้ำเงี้ยวมีรสชาติเค็มเผ็ดเปรี้ยว ซึ่งรสเปรี้ยวได้มาจากมะเขือเทศ
                            ซึ่งชาวไทใหญ่มักจะเรียกน้ำเงี้ยวว่า น้ำหมากเขือส้ม ซึ่งถ้าใส่ขนมจีนก็เรียกว่า ข้าวเส้นน้ำหมากเขือส้ม น้ำเงี้ยวเป็นอาหารที่ได้รับความนิยมในหมู่ชาวล้านนามาแต่อดีตจวบจนถึงปัจจุบัน</div>
                            <div className='flex justify-end pr-20'>
                            <a href="https://www.wongnai.com/recipes/kanom-jeen-nam-ngeaw" target="_blank" className="text-[15px] text-[#ffffff] hover:text-blue-400">
                            more info →
                            </a></div>
                    </div>
                </div>
                <div className='food_present_boxr'>
                    <div className='food_present_boxr1'>
                        <div className="bg-[url('https://media.discordapp.net/attachments/960162734220120114/964885544599425044/44d114c7-c768-4752-9759-f0bf62d769b7.jpg')] 
                        bg-cover rounded-[20px] h-[80%] w-[80%] ml-10 hover:scale-105 transtiion duration-200"></div>
                    </div>
                    <div className='food_present_boxr2'>
                        <div className='text-[100px] text-[#ffffff]'>แคปหมูน้ำพริกหนุ่ม</div>
                        <div className='w-[80%] h-2 bg-[#ffffff]'></div>
                    </div>
                    <div className='food_present_box3'>
                        <div className='text-[#ffffff] text-[20px] px-20'>
                            หนึ่งในเมนูขึ้นชื่อของเมืองล้านนาทางภาคเหนือของไทย คือ น้ำพริกหนุ่ม อาหารพื้นบ้านที่ไม่มีใครไม่รู้จัก เป็นน้ำพริกที่มีส่วนผสมแตกต่างจากน้ำพริกของภาคอื่น
                            โดยใช้พริกหนุ่ม หรือพริกมันเป็นส่วนผสมหลัก ผสมผสานกับส่วนผสมอื่น ๆ เพิ่มรสชาติ โดยสามารถปรุงได้หลายรูปแบบตามความชอบของแต่ละคน บางสูตรมีการใส่ปลาร้า
                            หรือกะปิลงไปด้วยเพื่อเพิ่มเติมเสริมความอร่อย และในบทความนี้เราก็มีข้อมูล และสูตรวิธีการทำมาให้ทุกคนได้รู้จักอาหารเหนือเมนูนี้กันมากขึ้น
                            ในอดีตนั้นทางภาคเหนือเคยเป็นอาณาจักรล้านนาที่เจริญรุ่งเรืองมาก่อน โดยเป็นอาณาจักรที่มีคนหลากหลายเชื้อชาติอาศัยอยู่ จึงมีการผสมผสานวัฒนธรรมที่หลากหลาย
                            รวมถึง วัฒนธรรมด้านอาหารด้วย ถือเป็นภาคที่มีอาหารเป็นเอกลักษณ์ด้านรสชาติ คือ มีรสอ่อน เผ็ด เค็ม เปรี้ยว แต่ไม่หวาน เนื่องจาก อาหารพื้นบ้านล้านนา ส่วนใหญ่จะไม่นิยมใส่น้ำตาล
                            จะแทนที่ด้วยความหวานจากผัก และปลา ดังนั้น น้ำพริกหนุ่ม ก็เป็นอีกหนึ่งเมนูที่แสดงเอกลักษณ์ของอาหารภาคเหนือออกมาได้เป็นอย่างดี</div>
                            <div className='flex justify-end pr-20'>
                            <a href="https://howtocookhub.com/2022/01/02/" target="_blank" className="text-[15px] text-[#ffffff] hover:text-blue-400">
                            more info →
                            </a></div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Food;