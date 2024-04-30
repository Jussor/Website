import React from "react";
import "./Herovideo.css";
import videoimage from "../../../../public/Home/sample_1920x1080.mp4";
import Homehero from "../../../Components/Saction/Homehero"

const Herovideo = () => {

  return (
    <div className="hero">
      <video autoPlay muted loop className="background-clip">
        <source src={videoimage} type="video/mp4" />
      </video>
      <Homehero/>
   </div>
    
  );
};

export default Herovideo;
