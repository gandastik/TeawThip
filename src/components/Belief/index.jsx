import React from "react";
import "./belief.css";
const Belief = () => {
  return (
    <div className="belief-container">
      <div className="header-belief">ความเชื่อ</div>
      <div className="belief-content">
        <div className="belief-animal">
          <div className="animal-content">
            <div className="content-header p-2">1. ความเชื่อเกี่ยวกับสัตว์</div>
            <hr />
            <div className="hinghoi indent-8 p-4">
              1.หิ่งห้อย เชื่อว่า ถ้าเด็กหรือผู้ใหญ่คนใดจับหิ่งห้อยมาเล่น
              ต่อไปภาคหน้าหรือเมื่อแก่ตัวจะทำให้เป็นโรคมือสั่น
            </div>
            <div className="hoibear indent-8 p-4">
              2. หอยเบี้ย เชื่อว่าเมื่อผูกตัวหอยเบี้ยไว้กับแขนของเด็ก ๆ
              จะสามารถป้องกันภูตผีปีศาจได้ และยังทำให้เด็กคนนั้นเป็นคนเลี้ยงง่าย
            </div>
          </div>
          <div className="animal-image"></div>
        </div>
        <div className="belief-place">
          <div className="place-img1"></div>
          <div className="place-img2"></div>
          <div className="place-content">
            <div className="content-header p-2">
              2. ความเชื่อเกี่ยวกับสถานที่
            </div>
            <hr />
            <div className="place-pond indent-8 p-4">
              1. น้ำบ่อหรือบ่อน้ำ คนล้านนานับถือน้ำบ่อว่าเป็นสถานที่ศักดิ์สิทธิ์
              ก่อนจะขุดบ่อน้ำจะให้หมอประจำหมู่บ้านมาช่วยดูชัยภูมิและกำหนดทิศทางว่าควรจะขุดตรงจุดไหนของบ้านจึงจะ
              มีน้ำมากสามารถใช้ได้ตลอดปี
            </div>
          </div>
        </div>
        <div className="belief-ghost">
          <div className="ghost-content ">
            <div className="content-header p-2">3. ความเชื่อเกี่ยวกับผี</div>
            <hr />
            <div className="ghostga indent-8 p-4">
              1. ผีกะ ผีชนิดหนึ่งที่สืบต่อกันมาทางสายตระกูล
              คนสมัยก่อนมักเลี้ยงผีกะไว้เพื่อคุ้มครองคนในครัวเรือน
            </div>
            <div className="ghostpooya indent-8 p-4">
              2. ผีปู่ย่า เป็นผีบรรพบุรุษของคนล้านนา
              มีหน้าที่คอยดูแลปกปักษ์รักษาลูกหลาน
            </div>
            <div className="ghosthideseek indent-8 p-4">
              3. ผีเอาเด็กซ่อน ในสมัยก่อน คนโบราณจะห้ามเด็กเล่นซ่อนหา
              หรือแอบลี้กันในเวลาพลบค่ำและเวลากลางคืน โดยเฉพาะในที่ลับตาคน
              ถ้าลูกไม่เชื่อฟังก็จะถูกดุและทำโทษ
            </div>
          </div>
          <div className="ghost-image"></div>
        </div>

        <div className="belief-things">
          <div className="content-header">
            4.ความเชื่อเกี่ยวกับเครื่องใช้เครื่องเรือน
          </div>
          <div className="things-content">
            <div className="things-content1">
              <div className="img-things1"></div>
              <div className="things-text indent-8 p-2">
                1. สตางค์แดง
                หากคนที่กินมะเขือลำโพงหรือมะเขือบ้าเข้าไปแล้วเกิดอาการเมา
                ให้ฝนสตางค์แดงกับน้ำสะอาดแล้วเอาให้ดื่ม
                เชื่อว่าอาการเมาจะทุเลาลง
              </div>
            </div>
            <div className="things-content2">
              <div className="img-things2"></div>
              <div className="things-text indent-8 p-2 ">
                2. ไม้ยูหรือยูในสมัยโบราณเชื่อกันว่า
                ถ้าใช้ไม้กวาดวางพาดบนปากเปลเด็ก
                จะช่วยป้องกันภูตผีปีศาจมารบกวนเด็ก
              </div>
            </div>
            <div className="things-content3">
              <div className="img-things3"></div>
              <div className="things-text indent-8 p-2">
                3. ครกหิน,ครกดิน การตำน้ำพริกด้วยครกหินหรือครกดิน ต้องค่อยๆตำ
                อย่าตำแรงจนเกินไปถ้าตำแรงจนครกแตกถือว่าขึดหรืออัปมงคล
              </div>
            </div>
          </div>
        </div>
        <div className="belief-culture">
          <div className="culture-img"></div>
          <div className="culture-content">
            <div className="content-header-culture p-2">
              5. ความเชื่อเกี่ยวกับพิธีกรรมและไสยศาสตร์
            </div>
            <hr />
            <div className="culture1 indent-8 p-2">
              1. แกว่งข้าว ถ้าเรือนใดมีเด็กทารกที่เลี้ยงยาก
              มักร้องไห้งอแงอยู่เสมอ
              ในสมัยก่อนพ่อแม่จะเอาผ้าอ้อมของเด็กไปให้คนทำพิธีแกว่งข้าว
              ชาวล้านนาเชื่อว่าถ้าได้ทำพิธีนี้แล้ว
              เด็กทารกนั้นจะกลายเป็นคนเลี้ยงง่ายและโตวันโตคืน
            </div>
            <div className="culture1 indent-8 p-2">
              2. จกคอละอ่อน
              คือการที่หมอทำคลอดใช้นิ้วมือล้วงเข้าไปในลำคอของทารกแรกคลอด
              เพื่อล้วงเอาเสลดหรือเลือดที่ติดค้างในลำคอออกมาเชื่อว่าถ้าไม่ทำเช่นนี้
              เมื่อโตขึ้นเด็กคนนั้นจะป่วยเป็นโรคหืดหอบได้
            </div>

            <div className="culture1 indent-8 p-2">
              3. เม่า เป็นโรคที่เกิดขึ้นกับเด็กทารกในช่วงที่ยังกินนม อาการคือ
              บริเวณรอบริมฝีปากและลิ้นของเด็กจะมีลักษณะคล้ายกับถูกน้ำร้อนลวกจนสุก
              ทำให้เด็กรู้สึกแสบแล้วร้องไห้
            </div>
            <div className="culture1 indent-8 p-2">
              4. สายแห่ หรือสายรก เถ้าเด็กที่คลอดออกมาเป็นชาย
              มีสายแห่พันรอบคอได้ 2
              รอบเชื่อว่าโตขึ้นเขาจะได้บวชเป็นสามเณรหรือพระภิกษุ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Belief;
