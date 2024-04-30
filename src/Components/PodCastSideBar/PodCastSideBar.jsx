import React from "react";
import "./PodCastSideBar.css";
import { CgCalendarDates } from "react-icons/cg";
import card_img from "../../assets/Rectangle 19.png";
import { Link } from "react-router-dom";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import audio from "../../assets/voice.mp3";

const PodCastSideBar = () => {
  const news = [
    {
      id: 1,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: card_img,
      audio_url: audio,
    },
    {
      id: 2,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: card_img,
      audio_url: audio,
    },
    {
      id: 3,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: card_img,
      audio_url: audio,
    },
    {
      id: 4,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: card_img,
      audio_url: audio,
    },
    {
      id: 4,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: card_img,
      audio_url: audio,
    },
    {
      id: 4,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير",
      date: "14 أبريل 2024",
      img_url: card_img,
      audio_url: audio,
    }
    
    
  ];
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="podcast-sidebar">
      <h1>الشائع</h1>
      <hr />
      <div className="row gy-3 gx-3">
        {news.map((current_news) => (
          <div className="col-md-6 col-xl-12  " key={current_news.id}>
            <div className="podcast-sidebar-main">
              <div className="row ">
                <Link
                  to={`/podcast/${current_news.id}`}
                  onClick={handleClick}
                  className="col-12 order-1 col-xl-8 order-xl-0"
                >
                  <p className="title">{current_news.title}</p>
                  <p className="descr">{current_news.descr}</p>
                  <p className="date">
                    {current_news.date}
                    <span className="calender-icon">
                      <CgCalendarDates />
                    </span>
                  </p>
                </Link>
                <Link to={`/podcast/${current_news.id}`}
                  onClick={handleClick} className="col-12 col-xl-4">
                  <div className="d-flex justify-content-end">
                    <img className="news-img" src={current_news.img_url} />
                  </div>
                </Link>
              </div>

              <AudioPlayer audioUrl={current_news.audio_url} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodCastSideBar;
