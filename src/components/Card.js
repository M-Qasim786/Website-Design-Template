import React from "react";
import "./Card.css";
import image1 from "../image/s.jpg";
import image2 from "../image/t.jpg";
import image3 from "../image/j.jpg";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <img className="images_style" src={image1} alt="" />
          <h3>Men's Shose</h3>
          <h1>Rs.1500</h1>
        </div>
        <div className="card">
          <img className="images_style" src={image2} alt="" />
          <h3>Men's T-Shirt</h3>
          <h1>Rs.1500</h1>
        </div>
        <div className="card">
          <img className="images_style" src={image3} alt="" />
          <h3>Men's Jacket</h3>
          <h1>Rs.1500</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
