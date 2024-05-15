import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { banner } from "../../redux/slice/bannerSlice";
import { IMAGE_PATH, VIDEO_PATH } from "../../Utils/utils";
import "./Hero.css";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner"; // Importing Spinner

const SimpleSlider = ({ settings, sliderRef, isLoading }) => {
  const { bannerSuccess } = useSelector((state) => state.banner);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Slider {...settings} ref={sliderRef}>
      {bannerSuccess.map((banner, index) => (
        <div key={index} className="hero">
          {banner.image ? (
            <img
              src={`${IMAGE_PATH}${banner.image}`}
              alt="Banner Image"
              className="banner-img"
            />
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
                <Link to={`/detailpost/${banner.post_id}`} style={{ color: "inherit" }}>
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
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const { bannerSuccess } = useSelector((state) => state.banner);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

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
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(banner());
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setslidetoshow(1);
      } else {
        setslidetoshow(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0">
      <SimpleSlider settings={{ ...settings }} sliderRef={sliderRef} isLoading={isLoading} />
    </div>
  );
};

export default Parent;
