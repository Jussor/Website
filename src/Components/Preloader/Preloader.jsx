import React from 'react';
import './Preloader.css'; // Import CSS for styling
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
