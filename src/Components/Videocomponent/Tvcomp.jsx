import React, { useEffect, useState } from "react";
import pic from "../../assets/Tv-back.png";
import playButtonIcon from "../../assets/orange orange.png";
import { FaCalendarAlt } from "react-icons/fa";
import "./jusoortv.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Home } from "../../redux/slice/homeSlice";

AOS.init();

const Tvcomp = () => {
  const dispatch = useDispatch();
  const { JusoorTv } = useSelector((state) => state.home);


  useEffect(() => {
    dispatch(Home());
  }, []);
  
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  };
  const truncateWords = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ")+"...";
    }
    return text;
  };
  return (
    <div className="tv-bg" id="Tvjusoor">
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
                      <Link to={`/Singletvpost/${item._id}`} style={{ color: "inherit" }}>
                        <p>{truncateWords(item?.title, 6)}</p><FaCalendarAlt />
                        <span> {truncateText(item?.updatedAt, 10)} </span> 
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
