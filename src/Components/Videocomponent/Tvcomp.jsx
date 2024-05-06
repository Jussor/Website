import React, { useState } from "react";
import pic from "../../assets/Tv-back.png";
import playButtonIcon from "../../assets/orange orange.png";
import { FaCalendarAlt } from "react-icons/fa";
import "./jusoortv.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

AOS.init();

const Tvcomp = () => {
  // const dispatch = useDispatch();
  const { JusoorTv } = useSelector((state) => state.home);

  return (
    <div className="tv-bg">
      <div className="container mt-5">
        <br />
        <h1 className="tv_header"> TV جسور  </h1>
        <div className="row gy-4">
          {JusoorTv &&
            JusoorTv.map((item, index) => (
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6" data-aos="fade-up" data-aos-duration="2000">
                <div class="wrapper">
                  <div class="box">
                    <iframe className="iframe-element" src={`${item.video}`}>
                    </iframe>
                    <div className="tv_img">
                      <Link to="Singletvpost" style={{ color: "inherit" }}>
                        <p>{item.title}</p><FaCalendarAlt />
                        <span> {item.createdAt} </span> 
                      </Link>
                    </div>
                  </div>
                  <div className="button-tv">
                    <button className="play-button" style={{cursor: "pointer"}}>{item.category.categoryName}</button>
                  </div>
                   </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tvcomp;
