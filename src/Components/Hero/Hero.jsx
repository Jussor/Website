import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { banner } from "../../redux/slice/bannerSlice";
import { IMAGE_PATH } from "../../Utils/utils";
import "./Hero.css"
const SimpleSlider = ({ settings, sliderRef }) => {
  const dispatch = useDispatch();
  const { bannerSuccess, bannerError } = useSelector((state) => state.banner);
  useEffect(() => {
    dispatch(banner());
  }, [dispatch]);
  if (bannerError) {
    return <div>Error: {bannerError}</div>;
  }
  return (
      <Slider {...settings} ref={sliderRef}>
      {bannerSuccess.map((banner, index) => (
        <div key={index} className="hero">
          {banner.image ? (
              <img src={`${IMAGE_PATH}${banner.image}`} alt="Banner Image" className="w-100" style={{height : "500px"}}/>
          ) : (
            <video controls>
              <source src={banner.video} type="video/mp4" />
            </video>
            )}
          <div className="container">
            <div className="row">
              <div className="col-md-12 home-hero-main">
                <h2 className="title">{banner.title}</h2>
                <p className="descr">{banner.description}</p>
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
  const sliderRef = useRef(null);
  let b = window.innerWidth;
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidetoshow,
    slidesToScroll: 1,
    arrows: false,
    autoplay : true
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
  }, []);
  return (
    <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
      <SimpleSlider settings={{ ...settings }} sliderRef={sliderRef} />
    </div>
  );
};
export default Parent;