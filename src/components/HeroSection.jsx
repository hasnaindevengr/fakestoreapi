import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row g-4">
          <div className="col">
            <img
              src="./banner.png"
              className="img-fluid"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
