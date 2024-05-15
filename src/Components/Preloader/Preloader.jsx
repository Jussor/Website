import React, { useEffect, useState } from "react";
import "./Preloader.css"; 
import img from "../../assets/logo.png";
const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Preloader;
