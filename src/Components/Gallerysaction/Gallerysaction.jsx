import React, {useEffect} from "react";
import "./Gallerysaction.css";
import Gallerydata from "../Gallerydata/Gallerydata";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_PATH } from "../../Utils/utils";
import  { Home } from "../../redux/slice/homeSlice";


AOS.init();

const Gallerysaction = () => {
  const dispatch = useDispatch();
  const {Main} = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(Home());
  }, []);
  

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          {Main &&
            Main.map((item, index) => (
              index === 1 ? (
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 m-auto feature-image" data-aos="fade-up" data-aos-duration="2000">
                  <Link to={`/podcast/${item.id}`}>
                    <div className="blog_card mb-4" key={index}>
                      <div className="blog_card_img"> 
                        <img
                          src={`${IMAGE_PATH}${item.primaryImage}`} 
                          className="img-fluid blog_img"
                          alt=""
                          loading="lazy"
                        />
                        <div className="button-div">
                          <button>{item.category.categoryName}</button>
                        </div>
                      </div>
                      <div className="bottom_img">{item.title}</div>
                    </div>
                  </Link>
                </div>
              ) : (

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3" data-aos="fade-up" data-aos-duration="2000">
                  <Link to={`/podcast/${item.id}`}>
                    <div className="blog_card mb-4" key={index}>
                      <div className="blog_card_img"> 
                        <img
                          src={`${IMAGE_PATH}${item.primaryImage}`} 
                          className="img-fluid blog_img"
                          alt=""
                          loading="lazy"
                        />
                        <div className="button-div">
                          <button>{item.category.categoryName}</button>
                        </div>
                      </div>
                      <div className="bottom_img">{item.title}</div>
                    </div>
                  </Link>
                </div>

                
              )
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Gallerysaction;
