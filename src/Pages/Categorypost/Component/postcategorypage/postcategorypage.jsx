import React, { useEffect } from "react";
import "./postcategorypage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_PATH } from "../../../../Utils/utils";
import { getPostsByCategory } from "../../../../redux/slice/categorySlice";
import { useParams } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import { CgCalendarDates } from "react-icons/cg";

const postcategorypage = () => {
  const dispatch = useDispatch();
  const { postsByCategorySuccess, postsByCategoryLoading } = useSelector(
    (state) => state.category
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostsByCategory(id));
  }, [id]);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  };
  return (
    <div className="container my-5 posts">
      {postsByCategoryLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <div className="row gy-3 gx-3">
          
          {postsByCategorySuccess && postsByCategorySuccess.length > 0 ? (
            
            postsByCategorySuccess.map((podcast, index) => {
              return (
                <div className="col-sm-6 col-lg-4" key={index}>
                  {id === "662b85fb3455a992d8489da7" ? (
                    <Link
                      to={`/Singletvpost/${podcast._id}`}
                      style={{ color: "inherit" }}
                    >
                      <div className="video-box">
                        <iframe
                          className="iframe-element-post"
                          src={`${podcast.video}`}
                        ></iframe>
                        <div className="tv_img">
                          <div className="title">{podcast.title}</div>
                          <div className="d-flex align-items-center">
                            <span className="calender-icon">
                              <CgCalendarDates />
                            </span>
                            {truncateText(podcast.updatedAt, 10)}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : podcast.category ? (
                    <div className="card">
                      <Link
                        to={`/detailpost/${podcast._id}`}
                        style={{ color: "inherit" }}
                        onClick={handleClick}
                      >
                        <img
                          src={`${IMAGE_PATH}${podcast.primaryImage}`}
                          className="card-img"
                          alt="..."
                        />
                        <div className="card-body">
                          <h6 className="title">{podcast.title}</h6>
                          <div className="d-flex align-items-center">
                            <span className="calender-icon">
                              <CgCalendarDates />
                            </span>
                            {truncateText(podcast.updatedAt, 10)}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ) : null}
                </div>
              );
            })
          ) : (
            
            <div className="card p-2">
              <h6 className="not-found-message m-auto">
                لم يتم العثور على آخر
              </h6>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default postcategorypage;
