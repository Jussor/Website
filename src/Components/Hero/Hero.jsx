import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { banner } from "../../redux/slice/bannerSlice";
import { IMAGE_PATH, VIDEO_PATH } from "../../Utils/utils";
import "./Hero.css";
import { Link } from "react-router-dom";

const SimpleSlider = ({ settings, sliderRef }) => {
  const dispatch = useDispatch();
  const { bannerSuccess, bannerError } = useSelector((state) => state.banner);
  useEffect(() => {
    dispatch(banner());
  }, [dispatch]);
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  };
  
  return (
    <Slider {...settings} ref={sliderRef}>
      {bannerSuccess.map((banner, index) => (
        <div key={index} className="hero">
          {banner.image ? (
            <img
              src={`${IMAGE_PATH}${banner.image}`}
              alt="Banner Image"
              className="banner-img"/>
          ) : (
            <video
              muted
              autoPlay
              className="bg-video"
              style={{ height: "500px" }}
            >
              <source src={`${VIDEO_PATH}${banner.video}`} type="video/mp4" />
            </video>
          )}
          <div className="container">
            <div className="row">
              <div className="col-md-12 home-hero-main">
              <Link to={banner.post_id === "66390f559823b367336bb913" ? `/Singletvpost/${banner.post_id}` : `/detailpost/${banner.post_id}`} style={{color: "inherit"}}>
               <h2 className="title">{banner.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: banner.description }}
                  ></div>
                   
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
const Parent = () => {
  const [slidetoshow, setslidetoshow] = useState(2);
  const { bannerSuccess } = useSelector((state) => state.banner);
  const sliderRef = useRef(null);
  let b = window.innerWidth;
  const settings = {
    dots: false,
    infinite: bannerSuccess.length > 1 ? true : false,
    speed: 1000,
    slidesToShow: bannerSuccess.length > 1 ? slidetoshow : 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  useEffect(() => {
    if (window.innerWidth > 700) {
      setslidetoshow(1);
    } else {
      setslidetoshow(1);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        setslidetoshow(1);
      } else {
        setslidetoshow(1);
      }
    });
  }, [slidetoshow]);
  return (
    <div className="container-fluid p-0">
      <SimpleSlider settings={{ ...settings }} sliderRef={sliderRef} />
    </div>
  );
};
export default Parent;
