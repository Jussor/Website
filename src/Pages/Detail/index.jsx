import React, { useEffect, useState } from "react";

import "./SinglePodCast.css";
import { CgCalendarDates } from "react-icons/cg";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailPost } from "../../redux/slice/postSlice";
import { IMAGE_PATH } from "../../Utils/utils";

import { FaFacebook, FaShare, FaTwitter } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";

import YoutubePlayer from "../../Components/YoutubePlayer/YoutubePlayer";
import { Spinner } from "react-bootstrap";

const Index = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { Success } = useSelector((state) => state.post);
  console.log("data", Success);

  // Add loading state to manage initial loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch new data
    dispatch(DetailPost(id))
      .then(() => {
        // After data is fetched, set loading to false
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [id]); // Include id in dependency array to refetch data when id changes

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
    <div className="main-podcast">
      <div className="container mt-5">
        <div className="row gy-3 gx-3">
          <div className="col-lg-12">
            <div className="single-post">
              {loading ? (
                <div className="d-flex justify-content-center">
                  <Spinner />
                </div>
              ) : (
                <div className="card rounded-0">
                  {Success?.primaryImage && (
                    <img
                      src={`${IMAGE_PATH}${Success?.primaryImage}`}
                      className="primary-img"
                      alt="..."
                    />
                  )}
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3">
                      <FacebookShareButton
                        url={`https://jusoornews.com/detailpost/${Success?._id}`}
                        hashtag="#JusoorNews"
                      >
                        <span>
                          {" "}
                          <FaFacebook />
                        </span>
                      </FacebookShareButton>

                      <TwitterShareButton
                        url={`https://jusoornews.com/detailpost/${Success?._id}`}
                        hashtag="#JusoorNews"
                      >
                        <span>
                          {" "}
                          <FaTwitter />
                        </span>
                      </TwitterShareButton>
                      <p className="post-date mb-0">
                        <span className="">
                          <CgCalendarDates />
                        </span>
                        {truncateText(Success?.updatedAt, 10)}
                      </p>
                    </div>
                    {Success?.title && (
                      <h5 className="title">{Success?.title}</h5>
                    )}
                    {Success?.description && (
                      <div
                        className="descr"
                        dangerouslySetInnerHTML={{
                          __html: Success?.description,
                        }}
                      ></div>
                    )}
                    {Success?.galleryImages && (
                      <div className="row gy-3 gx-3">
                        {Success?.galleryImages?.map((item) => (
                          <div className="col-lg-6">
                            <img
                              className="descr-img"
                              src={`${IMAGE_PATH}${item}`}
                              alt="gallery"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    {Success?.video && (
                      <div className="row mt-5">
                        <div className="col-lg-6">
                          <YoutubePlayer videoSrc={Success?.video} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
