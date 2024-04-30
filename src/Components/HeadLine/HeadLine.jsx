import React, { useState } from "react";
import "./HeadLine.css";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosFlash } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeadLine = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [forwardClicked, setForwardClicked] = useState(false);
  const [backwardClicked, setBackwardClicked] = useState(false);
  const headlines = [
    {
      title: " لوريم إيبسوم",
      news: " خلافاَ خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، ليس ليس ليس ليس ليس",
    },
    {
      title: " لوريم إيبسوم",
      news: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل",
    },
    {
      title: " لوريم إيبسوم",
      news: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل",
    },
    {
      title: " لوريم إيبسوم",
      news: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل",
    },
    {
      title: " لوريم إيبسوم",
      news: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل",
    },
  ];
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    speed: 800,
    pauseOnHover: true,
    arrows: false,
  };
  const goNext = () => {
    setForwardClicked(true);
    setBackwardClicked(false);
    sliderRef.slickNext();
    console.log(forwardClicked);
    console.log(sliderRef);
  };
  const goPrev = () => {
    setForwardClicked(false);
    setBackwardClicked(true);
    sliderRef.slickPrev();
    console.log(backwardClicked);
  };
  return (
    <div className="headlines">
      <Container>
        <div className="headline-area">
          <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
            {headlines.map((headline, index) => (
              <div className="d-flex flex-column gap-3 flex-lg-row justify-content-lg-between align-items-lg-center" key={index}>
                <div className="d-flex justify-content-center gap-2 order-1 order-lg-0">
                  <button
                    className={`btn-arrow-left d-flex justify-content-center align-items-center backward ${
                      backwardClicked ? "clicked" : ""
                    }`}
                    onClick={goPrev}
                  >
                    <IoIosArrowBack />
                  </button>
                  <button
                    className={`btn-arrow-right d-flex justify-content-center align-items-center forward ${
                      forwardClicked ? "clicked" : ""
                    }`}
                    onClick={goNext}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>

                <div className="headline d-flex flex-column align-items-end flex-lg-row gap-lg-4">
                  <div  className="news-section order-1 order-lg-0">
                    <p className="font-bold mb-0">{headline.news}</p>
                  </div>
                  <div className="title-section">
                    <p className="text-blue mb-0">:{headline.title} <IoIosFlash/></p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default HeadLine;
