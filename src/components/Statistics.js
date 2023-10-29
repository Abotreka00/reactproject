import React from "react";
import "./statistics.css";
import wiz from "../wiz.jpg";
import dog from "../dog.jpeg";
import purny from "../purny.avif";

function Statistics() {
  return (
    <>
      <div className="Statistics">
        <div className="formation">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Shorten a link here"
              type="text"
              minLength={10}
              maxLength={20}
            />
            <input type="submit" value="Shorten it!" />
          </form>
        </div>
        <div className="info">
          <h3>Advanced Statistics</h3>
          <p>
            Vulid your barand's rebugnition and get dettaled insights on hwo
            your links are performming
          </p>
        </div>
        <div className="content">
          <div className="box">
            <img src={wiz} alt="1" />
            <h4>Brand Recognition</h4>
            <p>
              Vulid your barand's rebugnition and get dettaled insights on hwo
              your links are performming
            </p>
          </div>
          <div className="box box2">
            <img src={purny} alt="2" />
            <h4>Brand Recognition 2</h4>
            <p>
              Vulid your barand's rebugnition and get dettaled insights on hwo
              your links are performming
            </p>
          </div>
          <div className="box box3">
            <img src={dog} alt="3" />
            <h4>Brand Recognition 3</h4>
            <p>
              Vulid your barand's rebugnition and get dettaled insights on hwo
              your links are performming
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
