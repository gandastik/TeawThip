import "./app.css";
import History from "./components/History";
import Landscape from "./components/Landscape";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <History />
      <div className="bg-container">
        <Landscape />
      </div>
    </div>
  );
}

export default App;
