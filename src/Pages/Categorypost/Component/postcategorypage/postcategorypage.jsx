import React, { useEffect } from "react";
import "./postcategorypage.css";
import { CgCalendarDates } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_PATH } from "../../../../Utils/utils";
import { getPostsByCategory } from "../../../../redux/slice/categorySlice";
import { useParams } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
const postcategorypage = () => {
  const dispatch = useDispatch();
  const { postsByCategorySuccess, postsByCategoryLoading } = useSelector((state) => state.category);
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

      {postsByCategoryLoading ?
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spinner />
        </div>
        :
        <div className="row gy-3 gx-3 justify-content-end">
          {postsByCategorySuccess?.map((podcast) => (

            <div className="col-sm-6 col-lg-4 col-xl-3">
              {id == '662b85fb3455a992d8489da7' ?
                <div class="wrapper">
                  <div class="box">
                    <iframe className="iframe-element-post" src={`${podcast.video}`}>
                    </iframe>
                    <div className="tv_img_post">
                      <Link to={`/Singletvpost/${podcast._id}` } style={{ color: "inherit" }}>
                        <p>{truncateWords(podcast.title, 2)}</p>
                        <span> {truncateText(podcast.updatedAt, 10)}</span> <FaCalendarAlt />
                      </Link>
                    </div>
                  </div>
             
                </div>
                :
                <div class="card ">
                  <Link to={ `/detailpost/${podcast._id}`}
                  style={{color:"inherit"}}
                  onClick={handleClick}>
                    <img
                      src={`${IMAGE_PATH}${podcast.primaryImage}`}
                      class="card-img"
                      alt="..." />
                         <div class="card-body">
                 
                      <h6 class="post-title">{truncateWords(podcast.title, 4)}</h6>

                      <p class="post-date">
                        {truncateText(podcast.updatedAt, 10)}
                        <span className="calender-icon">
                          <CgCalendarDates />
                        </span>
                      </p>
                   
                  </div>
                  </Link>
                </div>
              }

            </div>

          ))}
        </div>
      }
    </div>
  );
};

export default postcategorypage;
