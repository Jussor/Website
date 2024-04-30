import React from 'react';
import "./postcategorypage.css"
import { CgCalendarDates } from "react-icons/cg";
import Podcastpost from "../../Component/../../../assets/Rectangle 31.png";
import { Link } from "react-router-dom";




const postcategorypage = () => {
    const podcasts = [
        {
          id: 5,
          imgurl: Podcastpost,
          title: "التأمل الفني: مشاركة اللحظات في المعرض",
          descr:
            "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
          date: "14 أبريل 2024",
        },
        {
          id: 6,
          imgurl: Podcastpost,
          title: "التأمل الفني: مشاركة اللحظات في المعرض",
          descr:
            "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
          date: "14 أبريل 2024",
        },
        {
          id: 7,
          imgurl: Podcastpost,
          title: "التأمل الفني: مشاركة اللحظات في المعرض",
          descr:
            "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
          date: "14 أبريل 2024",
        },
        {
          id: 8,
          imgurl: Podcastpost,
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
    <div className="container mt-5 mb-5">
    <div className="row gy-3 gx-3">
      {podcasts.map((podcast) => (
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div class="card border-0">
            <Link to={`/podcast/${podcast.id}`}  onClick={handleClick}>
              <img src={podcast.imgurl} class="podcast-img" alt="..." />
            </Link>
            <div class="card-body">
              <Link to={`/podcast/${podcast.id}`}  style={{color:"inherit"}} onClick={handleClick}>
                <h6 class="post-title">{podcast.title}</h6>
                <p class="post-descr">{podcast.descr}</p>
                <p class="post-date">
                  {podcast.date}
                  <span className="calender-icon">
                    <CgCalendarDates />
                  </span>
                </p>
              </Link>

            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default postcategorypage;
