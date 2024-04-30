import React from "react";
import "./JusoorTv.css";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
const JusoorTV = () => {
  return (
    <div className="jusoortv">
      <div className="container">
        <div>
          <p>جسور TV</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="news">
              <div>
                <button className="news-btn bg-blue">نبض المجتمع</button>
              </div>
              <div>
                <button>نبض المجتمع</button>
              </div>
              <div>
                <p>التحالفات الاستراتيجية: القادة السياسيون وتوازن القوى</p>
                <p>
                  14 أبريل 2024 <span></span>
                </p>
              </div>
              <VideoPlayer/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="news">
              <div>
                <button className="news-btn bg-blue">نبض المجتمع</button>
              </div>
              <div>
                <button>نبض المجتمع</button>
              </div>
              <div>
                <p>التحالفات الاستراتيجية: القادة السياسيون وتوازن القوى</p>
                <p>
                  14 أبريل 2024 <span></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JusoorTV;
