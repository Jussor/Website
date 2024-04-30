import React from "react";
import "./Podcathero.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoIosArrowDropleft } from "react-icons/io";

const Podcathero = () => {
  return (
    <div className="podcast-hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <div className="date">
          </div>
          <div className="content">
            <h1>استمع إلى التحول – البودكاست الرسمي لجسور</h1>
            <p>
              أبرمت شركة نيوم للهيدروجين الأخضر (NGHC) مؤخرًا اتفاقيات مالية مع
              23 بنكًا وشركة استثمارية محلية وإقليمية ودولية، مما يمثل علامة
              بارزة في المشروع.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcathero;
