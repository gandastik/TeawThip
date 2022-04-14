import "./app.css";
import History from "./components/History";
import Landscape from "./components/Landscape";
import Navbar from "./components/Navbar";
import Belief from "./components/Belief";

function App() {
  return (
    <div className="">
      <Navbar />
      <History />
      <div className="bg-container">
        <Landscape />
      </div>
      <Belief />
    </div>
  );
}

export default App;
