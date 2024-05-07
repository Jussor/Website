import React from "react";
import "./Singletvpost.css";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailPost } from "../../redux/slice/postSlice";
import { FaCalendarAlt } from "react-icons/fa";

const Singletvpost = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { Success } = useSelector((state) => state.post);

  React.useEffect(() => {
    dispatch(DetailPost(id));
  }, []);
  console.log(Success);
  const truncateText = (text, maxLength) => {
    if (typeof text !== "string" || text.length === 0) {
      return "";
    }

    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }

    return text;
  };
  return (
    <div>
      <div className="card rounded-0">
        <iframe src={`${Success.video}`} width="100%" height="400px"></iframe>
        <div className="card-body">
          <div className="post-info">
            <p className="post-date d-flex align-items-center gap-2">
              <span className="calender-icon">
                <FaCalendarAlt />
              </span>
              {truncateText(Success.updatedAt, 10)}
            </p>
            <h6 className="descr">{Success.title}</h6>
            <div
              dangerouslySetInnerHTML={{ __html: Success.description }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singletvpost;
