import React from "react";
import "./SidePodCasts.css";
import { CgCalendarDates } from "react-icons/cg";
import banner_img from "../../assets/image 6.png";
import card_img from "../../assets/Rectangle 19.png"
import { Link } from "react-router-dom";
const SidePodCasts = () => {
  const podcasts = [
    {
      id : 9,
      imgurl: card_img,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات.",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
    {
      id : 10,
      imgurl: card_img,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات.",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
    {
      id : 11,
      imgurl: card_img,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات.",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
    {
      id : 12,
      imgurl: card_img,
      title: "أصوات مرفوعة: نسيج من الاحتجاجات.",
      descr:
        "يتجمع حشد متنوع، توحدهم قضية مشتركة، وعلاماتهم الفردية تنسج معًا سردًا أكبر للدعوة والتغيير.",
      date: "14 أبريل 2024",
      audiourl: "",
    },
  ];
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  return (
    <div className="side-podcasts">
      <h1>منشور مشهور</h1>
      <hr />
      <div className="row gy-3 gx-3">
        {podcasts.map((podcast) => (
          <div className="col-sm-6 col-lg-12">
            <Link to={`/podcast/${podcast.id}`} class="card border-0" onClick={handleClick}>
              <img src={podcast.imgurl} class="podcast-img" alt="..." />
              <div class="card-body px-0">
                <h5 class="title">{podcast.title}</h5>
                <p class="descr">{podcast.descr}</p>
                <p class="date">
                  {podcast.date}
                  <span className="calender-icon">
                    <CgCalendarDates />
                  </span>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
        {/* <div className="">
        <img src={banner_img} className="side-banner-img"/>
        </div> */}
      
    </div>
  );
};

export default SidePodCasts;
