import React, { useState, useRef, useEffect } from 'react';
import { RiFullscreenLine, RiFullscreenExitLine } from 'react-icons/ri';
import './VideoPlayer.css'; // Create a CSS file for styling
import postvideo from "../../../public/Home/sample_1920x1080.mp4"

const VideoPlayer = ({ src }) => {
  

  return (
    <div className="video-player">
       <video autoPlay muted loop >
        <source src={postvideo} type="video/mp4" />
      </video>

    </div>
  );
};



export default VideoPlayer;
