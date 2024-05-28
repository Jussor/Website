import React, { useEffect, useState } from "react";
import { CgCalendarDates } from "react-icons/cg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailPost } from "../../redux/slice/postSlice";
import { IMAGE_PATH } from "../../Utils/utils";
import { FaFacebook } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import YoutubePlayer from "../../Components/YoutubePlayer/YoutubePlayer";
import { Spinner } from "react-bootstrap";
import "./SinglePodCast.css";
import { Helmet } from "react-helmet";
import { FaXTwitter } from "react-icons/fa6";
const Index = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { Success } = useSelector((state) => state.post);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(DetailPost(id))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (Success?.primaryImage) {
      // Set og:image meta tag dynamically
      document
        .getElementById("ogImage")
        .setAttribute("content", `${IMAGE_PATH}${Success?.primaryImage}`);
    }
  }, [Success?.primaryImage]);

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
      <Helmet>
        <title>Post Details</title>
        <meta property="og:title" content="Jusoor News" />
        <meta
          property="og:description"
          content="Latest news and updates from Jusoor News."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          id="ogImage"
          content="https://res.cloudinary.com/dx3oigwug/image/upload/v1691515895/jusoor/c0jwu83tzlsk6lbwutjt"
        />
        <meta property="og:image:alt" content="Jusoor News Image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Jusoor News" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="Jusoor News" />
        <meta
          name="twitter:description"
          content="Latest news and updates from Jusoor News."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dx3oigwug/image/upload/v1691515895/jusoor/c0jwu83tzlsk6lbwutjt"
        />
        <meta name="twitter:image:alt" content="Jusoor News Image" />
      </Helmet>
      <div className="container my-5">
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
                          <FaXTwitter />
                        </span>
                      </TwitterShareButton>
                      <div className="post-date">
                        <span className="">
                          <CgCalendarDates />
                        </span>
                        {truncateText(Success?.updatedAt, 10)}
                      </div>
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
