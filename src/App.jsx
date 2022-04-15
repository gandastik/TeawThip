import "./app.css";
import History from "./components/History";
import Landscape from "./components/Landscape";
import Navbar from "./components/Navbar";
import Belief from "./components/Belief";
import Food from "./components/Food"


function App() {
  return (
    <div className="">
      <Navbar />
      <History />
      <div className="bg-container">
        <Landscape />
      </div>
      <Belief />
      <Food/>
    </div>
  );
}

export default App;
