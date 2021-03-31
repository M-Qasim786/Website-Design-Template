import React from "react";
import "./Herosection.css";
import img from "../image/Shirt.jpg";
const Herosection = () => {
  return (
    <>
      <div className="hero_section">
        <div className="images-div">
          <img className="image_style" src={img} alt="" />
        </div>
        <div className="text_div">
          <h1>Cowhide Standard Crew</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, hic
            autem laborum corporis velit eum. Dolor autem vel nostrum libero.
            Lorem ipsum dolor sit amet.
          </p>
          <button>Shope Now</button>
        </div>
      </div>
    </>
  );
};

export default Herosection;
