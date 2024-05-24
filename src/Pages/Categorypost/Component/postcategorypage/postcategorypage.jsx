import React, { useEffect } from "react";
import "./postcategorypage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_PATH } from "../../../../Utils/utils";
import { getPostsByCategory } from "../../../../redux/slice/categorySlice";
import { useParams } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet";

const PostCategoryPage = () => {
  const dispatch = useDispatch();
  const { postsByCategorySuccess, postsByCategoryLoading } = useSelector(
    (state) => state.category
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostsByCategory(id));
  }, [id, dispatch]);

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
      <Helmet>
        <title>Posts</title>
      </Helmet>
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
            postsByCategorySuccess.map((podcast, index) => (
              <div className="col-sm-6 col-lg-4" key={index}>
                {id === "662b85fb3455a992d8489da7" ? (
                  <div className="card rounded-0">
                    <Link
                      to={`/Singletvpost/${podcast._id}`}
                      style={{ color: "inherit" }}
                    >
                      <iframe
                          className="card-img rounded-0"
                          src={`${podcast.video}`}
                          title={podcast.title}
                        ></iframe>
                      <div className="card-body">
                        
                        <div className="">
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
                  </div>
                ) : podcast.category ? (
                  <div className="card rounded-0">
                    <Link
                      to={`/detailpost/${podcast._id}`}
                      style={{ color: "inherit" }}
                      onClick={handleClick}
                    >
                      <img
                        src={`${IMAGE_PATH}${podcast.primaryImage}`}
                        className="card-img rounded-0"
                        alt={podcast.title}
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
            ))
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

export default PostCategoryPage;
