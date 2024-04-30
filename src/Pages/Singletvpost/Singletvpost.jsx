import React from 'react';
import "./Singletvpost.css"
import pic from "../../assets/Tv-back.png";
import { CgCalendarDates } from "react-icons/cg";
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';


const Singletvpost = () => {
  return (
    <div>
      <div className="card rounded-0">
        <VideoPlayer />
        <div className="card-body">
          <div className="post-info">
            <p className="post-date" style={{textAlign: 'right'}}>
              14 أبريل 2024
              <span className="calender-icon">
                <CgCalendarDates />
              </span>
            </p>
          </div>
          <h6 className="descr" style={{textAlign: 'right'}}>
            التحالفات الاستراتيجية: القادة السياسيون وتوازن القوى
          </h6>
          <p className="sub-descr" style={{textAlign: 'right'}}>
            لقد كان لوريم إيبسوم هو النص الوهمي القياسي في هذه الصناعة منذ القرن السادس عشر، عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لصناعة نموذج كتاب.
            <br />
            لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد.
            <br />
            لقد كان لوريم إيبسوم هو النص الوهمي القياسي في هذه الصناعة منذ القرن السادس عشر، عندما أخذت طابعة غير معروفة لوح الكتابة وخلطته لصناعة نموذج كتاب.
            <br />
            لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد.
            <br />
            وهكذا
          </p>
          <div className="row gy-3 gx-3">
            <div className="col-md-6">
              <img className="descr-img" src={pic} alt="Image Description" />
            </div>
            <div className="col-md-6">
              <img className="descr-img" src={pic} alt="Image Description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singletvpost;
