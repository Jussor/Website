import React from "react";
import "./AuthorPodCast.css";
import { CgCalendarDates } from "react-icons/cg";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import audio from "../../assets/voice.mp3";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
const AuthorPodCast = () => {
  const podcasts = [
    {
      id: 5,
      imgurl: "/PodCast/Rectangle 31.png",
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
      audiourl: audio,
    },
    {
      id: 6,
      imgurl: "/PodCast/Rectangle 31.png",
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
      audiourl: audio,
    },
    {
      id: 7,
      imgurl: "/PodCast/Rectangle 31.png",
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
      audiourl: audio,
    },
    {
      id: 8,
      imgurl: "/PodCast/Rectangle 31.png",
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
      audiourl: audio,
    },
    {
      id: 12,
      imgurl: "/PodCast/Rectangle 31.png",
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
      audiourl: audio,
    },
    {
      id: 13,
      imgurl: "/PodCast/Rectangle 31.png",
      title: "التأمل الفني: مشاركة اللحظات في المعرض",
      descr:
        "يقف زوجان بالقرب من معرض فني، ومنغمسين في لحظة مشتركة من التقدير الثقافي والتأمل الصامت في العمل الفني المعروض أمامهما.",
      date: "14 أبريل 2024",
      audiourl: audio,
    },

  ];
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="author-podcast">
      <h1>اسم التصنيف</h1>
      <div className="row gy-3 gx-3">
        {podcasts.map((podcast) => (
          <div className="col-md-6 col-lg-4 col-xl-6">
            <div class="card border-0">
              <Link to={`/podcast/${podcast.id}`} onClick={handleClick}>
                <img src={podcast.imgurl} class="podcast-img" alt="..." />
              </Link>
              <div class="card-body">
                <Link to={`/podcast/${podcast.id}`} onClick={handleClick}>
                  <h5 class="title">{podcast.title}</h5>
                  <p class="descr">{podcast.descr}</p>
                  <p class="date">
                    {podcast.date}
                    <span className="calender-icon">
                      <CgCalendarDates />
                    </span>
                  </p>
                </Link>

                <AudioPlayer audioUrl={podcast.audiourl} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorPodCast;
