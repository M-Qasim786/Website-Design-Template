import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Card from "./components/Card";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Card />
      <Product />
      <Footer />
    </>
  );
}

export default App;
