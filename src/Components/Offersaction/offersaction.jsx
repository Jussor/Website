import React from "react";

import offercard from "../../assets/Rectangle 37.png";
import offercard1 from "../../assets/Rectangle 36.png";
import offercard2 from "../../assets/Rectangle 35.png";
import "./offersaction.css";
import { CgCalendarDates } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init();

const Offersaction = () => {
  const posts = [
    {
      id: 3,
      category: "الفنون",
      img_url: offercard,
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
    },
    {
      id: 4,
      category: "سياسة",
      img_url: offercard,
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
    },
    {
      id: 5,
      category: "أخبار مميزة",
      img_url: offercard2,
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
    },
  ];
  const handleClick = () => {
    window.scrollTo(0, 0); 
  };
  return (
    <div className="offer-saction">
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div
              className=" col-xs-12 col-sm-12 col-md-4  offer-podcast"
              data-aos="fade-up"
              data-aos-duration="2000"
              key={post.id}
            >
              <h6 className="offer-header">{post.category}</h6>
              <Link to={`/podcast/${post.id}`} class="card" onClick={handleClick}>
                <img src={post.img_url} class="podcast-img" alt="..." />
                <div class="card-body">
                  <h5 class="title">{post.title}</h5>
                  <p class="descr">{post.descr}</p>
                  <p class="date">
                  
                  <span className="calender-icon">
                      <CgCalendarDates />
                    </span>
                    {post.date}
                    
                  </p>
                </div>
              </Link>
            </div>
          ))}
          {/* <div className=" col-xs-12 col-sm-12 col-md-4 offer-podcast" data-aos="fade-up" data-aos-duration="2000" >
            <h6 className='offer-header'>أخبار مميزة</h6>
            <div class="card">
              <img src={offercard} class="podcast-img" alt="..." />
              <div class="card-body">
                <h5 class="title">أصوات مرفوعة: نسيج من الاحتجاجات</h5>
                <p class="descr">شارك شخصان في تسجيل بودكاست مفعم بالحيوية، يتبادلان
                      الأفكار في مكان تلتقي</p>
                <p class="date">
                14 أبريل 2024
                  <span className="calender-icon">
                    <CgCalendarDates />
                  </span>
                </p>
           
              </div>
            </div>

            </div>
            <div className=" col-xs-12 col-sm-12 col-md-4 offer-podcast" data-aos="fade-up" data-aos-duration="2000" >
            <h6 className='offer-header'>أخبار مميزة</h6>
            <div class="card ">
              <img src={offercard} class="podcast-img" alt="..." />
              <div class="card-body">
                <h5 class="title">أصوات مرفوعة: نسيج من الاحتجاجات</h5>
                <p class="descr">شارك شخصان في تسجيل بودكاست مفعم بالحيوية، يتبادلان
                      الأفكار في مكان تلتقي</p>
                <p class="date">
                14 أبريل 2024
                  <span className="calender-icon">
                    <CgCalendarDates />
                  </span>
                </p>
           
              </div>
            </div>

            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Offersaction;
