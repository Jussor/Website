import React, { useEffect } from "react";
import "./postcategorypage.css";
import { CgCalendarDates } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_PATH } from "../../../../Utils/utils";
import { getPostsByCategory } from "../../../../redux/slice/categorySlice";
import { useParams } from 'react-router-dom';

const postcategorypage = () => {
  const dispatch = useDispatch();
  const { postsByCategorySuccess } = useSelector((state) => state.category);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostsByCategory(id));
  }, [id]);

  console.log(postsByCategorySuccess, "hdkashdjsa")
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  
  const truncateWords = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return "..." + words.slice(0, maxWords).join(" ");
    }
    return text;
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="row gy-3 gx-3 justify-content-end">
        {postsByCategorySuccess.map((podcast) => (
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div class="card ">
              <Link to={`/podcast/${podcast._id}`} onClick={handleClick}>
                <img
                  src={`${IMAGE_PATH}${podcast.primaryImage}`}
                  class="card-img"
                  alt="..."
                  
                />
              </Link>
              <div class="card-body">
                <Link
                  to={`/podcast/${podcast._id}`}
                  style={{ color: "inherit" }}
                  onClick={handleClick}
                >
                  <h6 class="post-title">{truncateWords(podcast.title, 4)}</h6>
                  
                  <p class="post-date">
                  {truncateText(podcast.updatedAt, 10)}
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
};

export default postcategorypage;
