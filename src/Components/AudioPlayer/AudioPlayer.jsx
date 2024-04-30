import React, { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";
import WaveSurfer from "wavesurfer.js";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";

const AudioPlayer = ({ audioUrl }) => {
  const containerRef = useRef();
  const waveSurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create(
      {
        container: containerRef.current,
        waveColor: "#4095C6",
        progressColor: "#000",
        cursorWidth: 0,
        barWidth: 2,
        barHeight: 3,
        barRadius: 3,
        height: 20,
        responsive: true,
      },
      []
    );

    waveSurferRef.current = wavesurfer;

    wavesurfer.load(audioUrl);

    wavesurfer.on("ready", () => {
      if (isPlaying) {
        wavesurfer.play();
      }
    });

    wavesurfer.on("audioprocess", () => {
      setCurrentTime(wavesurfer.getCurrentTime());
    });

    wavesurfer.on("finish", () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });

    return () => {
      wavesurfer.destroy();
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (waveSurferRef.current) {
      if (!isPlaying) {
        waveSurferRef.current.play();
      } else {
        waveSurferRef.current.pause();
      }

      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="audio-player">
      <div className="audio-play">
        <div className="audio-info">
          <span>{formatTime(currentTime)}</span>
        </div>
        <div ref={containerRef} className="wave-form" />
      </div>

      <button onClick={togglePlay} className="play-btn text-blue">
        <span className="">
          {isPlaying ? <FaCirclePause /> : <FaCirclePlay />}
        </span>
      </button>
    </div>
  );
};

export default AudioPlayer;
