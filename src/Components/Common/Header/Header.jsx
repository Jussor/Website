import React from "react";
import "./Header.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoIosArrowDropleft } from "react-icons/io";

const Header = (props) => {
  return (
    <div className="podcast-hero" style={{ backgroundImage: `url(${props.image})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="date">
              <span className="">{props.date}</span>
            </div>
            <div className="content">
              <h1>{props.title}</h1>
              <p>{props.paragraph}</p>
              {props.showButton && (
                <div className="podcast-hero-btns">
                  <button className="btn-1">
                    <span className="">
                      <IoIosArrowDropleft />
                    </span>
                    التالي
                  </button>

                  <button className="btn-2">
                    العب الان
                    <span className="">
                      <AiOutlinePlayCircle />
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
