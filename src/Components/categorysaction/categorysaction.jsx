import React from "react";
import { Link } from "react-router-dom";
import Galleryimage from "../../assets/Rectangle 19.png";
import { FaCalendarAlt } from "react-icons/fa";
import cakeimage from "../../assets/cakes.png";
import "./categorysaction.css";
import AOS from "aos";
import "aos/dist/aos.css";
import categorydata from "../data/Categorydata";

AOS.init();

const CategoryAction = () => {
  return (
    <div>
      <div className="container p-0">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="container">
              <h1 className="category-header">الأكثر شعبية</h1>
              <div className="row">
                {categorydata.category.map((categoryItem) => (
                  <div className="col-md-4" data-aos="fade-up" data-aos-duration="2000" key={`podcast-${categoryItem.id}`}>
                   
                      <div className="blog_card">
                        <div className="blog_card_img">
                        <Link to={`/podcast/${categoryItem.id}`}>
                          <img
                            src={categoryItem.image}
                            className="img-fluid blog_img"
                            alt={categoryItem.title}
                            loading="lazy"
                          />
                          </Link>
                        </div>
                        <div className="button_img">
                          <div className="category-image">
                            <button>{categoryItem.category}</button>
                          </div>
                        </div>
                        <div className="blog_card_desk">{categoryItem.title}</div>
                        <p className="blog_card_para">{categoryItem.paragraph}</p>
                        <div className="blog_card_date">
                          <span>14 أبريل 2024</span>{" "}
                          <FaCalendarAlt className="blog-icon" />
                        </div>
                      </div>
                    
                  </div>
                ))}
              </div>

            </div>
          </div>
          {/* <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img src={cakeimage} alt="" style={{ width: "100%" }} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryAction;
