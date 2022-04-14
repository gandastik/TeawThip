import "./app.css";
import Landscape from "./components/Landscape";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="top"></div>
      <div className="bg-container">
        <Landscape />
      </div>
    </div>
  );
}

export default App;
