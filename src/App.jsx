import "./app.css";
import History from "./components/History";
import Landscape from "./components/Landscape";
import Navbar from "./components/Navbar";
import Belief from "./components/Belief";
import Food from "./components/Food";
import Tourists from "./components/Tourists";
import Climate from "./components/Climate";

function App() {
  return (
    <div className="">
      <Navbar />
      <History />
      <div className="bg-container">
        <Landscape />
        <Climate />
      </div>
      <Tourists />
      <Belief />
      <Food />
    </div>
  );
}

export default App;
