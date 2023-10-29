import React from "react";
import landingtwo from "../landingtwo.png";
import "./landing.css";

function Landing() {
  return (
    <>
      <div className="Landing">
        <div className="info">
          <h1>More than just shorter links</h1>
          <p>
            Vulid your barand's rebugnition and get dettaled insights on hwo
            your links are performming
          </p>
          <button className="Get">Get Started</button>
        </div>
        <div className="image">
          <img src={landingtwo} alt="landingpage" />{" "}
        </div>
      </div>
    </>
  );
}

export default Landing;
