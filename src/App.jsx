import "./app.css";
import { useRef } from "react";
import History from "./components/History";
import Landscape from "./components/Landscape";
import Navbar from "./components/Navbar";
import Belief from "./components/Belief";
import Food from "./components/Food";
import Tourists from "./components/Tourists";
import Climate from "./components/Climate";
import Architecture from "./components/Architecture";
import Footer from "./components/Footer";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const historyRef = useRef(null);
  const landscapeRef = useRef(null);
  const climateRef = useRef(null);
  const touristsRef = useRef(null);
  const artRef = useRef(null);
  const footerRef = useRef(null);

  const executeScroll = (pos) => {
    if (pos === 0) scrollToRef(historyRef);
    else if (pos === 1) scrollToRef(landscapeRef);
    else if (pos === 2) scrollToRef(climateRef);
    else if (pos === 3) scrollToRef(touristsRef);
    else if (pos === 4) scrollToRef(artRef);
    else if (pos === 5) scrollToRef(footerRef);
  };

  return (
    <div className="">
      <Navbar executeScroll={executeScroll} />
      <div ref={historyRef}>
        <History />
      </div>
      <div className="bg-container">
        <div ref={landscapeRef}>
          <Landscape />
        </div>
        <div ref={climateRef}>
          <Climate />
        </div>
      </div>
      <div ref={touristsRef}>
        <Tourists />
      </div>
      <div ref={artRef} className="art-container ">
        <Architecture />
        <Belief />
        <Food />
      </div>
      <div ref={footerRef} className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
