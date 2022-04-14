import React from "react";
import "./belief.css";
const Belief = () => {
  return (
    <div className="belief-container">
      <div className="belief-content">
        <div className="belief-animal">
          <div className="animal-content"></div>
          <div className="animal-image"></div>
        </div>
        <div className="belief-place">
          <div className="place-img1"></div>
          <div className="place-img2"></div>
          <div className="place-content"></div>
        </div>
        <div className="belief-ghost">
          <div className="ghost-content"></div>
          <div className="ghost-image"></div>
        </div>
      </div>
    </div>
  );
};
export default Belief;
