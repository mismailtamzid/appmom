import React from 'react';
import "./Banner.css";
import img from "./../../../images/2.png";

const Banner = () => {
    return (
      <div className="banner">
        <div className="banner1">
          <h1>A Showcase For</h1>
          <h1>YOUR AWESOME APP</h1>
          <i class="far fa-clock"></i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipising elit. Pellentesque
            vel volutpat felis, eu condimtum ma Pellentesque mollis eros vel.
          </p>
          <button>Download</button>
          <button>Learn More</button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    );
};

export default Banner;