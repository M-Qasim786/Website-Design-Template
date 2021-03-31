import React from "react";
import "./Product.css";
import img1 from "../image/heel.jpg";
import img2 from "../image/beg.jpg";
import img3 from "../image/short.jpg";
import img4 from "../image/tees.jpg";
import img5 from "../image/clutch.jpg";
import img6 from "../image/red.jpg";

const Product = () => {
  return (
    <>
      <div className="heading">
        <h1>Featured Product's</h1>
      </div>
      <div className="card_box">
        <div className="card_style">
          <img src={img1} alt="" />
          <h3>Kitten Heels</h3>
          <h1>Rs 1200</h1>
        </div>
        <div className="card_style">
          <img src={img2} alt="" />
          <h3>Women's Bag</h3>
          <h1>Rs 900</h1>
        </div>
        <div className="card_style">
          <img src={img3} alt="" />
          <h3>Bermuda shorts</h3>
          <h1>Rs 100</h1>
        </div>
      </div>
      <div className="card_box">
        <div className="card_style">
          <img src={img4} alt="" />
          <h3>Men's Polo</h3>
          <h1>Rs 1500</h1>
        </div>
        <div className="card_style">
          <img src={img5} alt="" />
          <h3> Women's Clutch</h3>
          <h1>Rs 1800</h1>
        </div>
        <div className="card_style">
          <img src={img6} alt="" />
          <h3>men's Hoodie</h3>
          <h1>Rs 1700</h1>
        </div>
      </div>
    </>
  );
};

export default Product;
