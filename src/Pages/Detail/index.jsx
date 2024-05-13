import React, { useEffect } from "react";
import "./SinglePodCast.css";
import { CgCalendarDates } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailPost } from "../../redux/slice/postSlice";
import { IMAGE_PATH } from "../../Utils/utils";
import { IoMdShare } from "react-icons/io";
import { FaFacebook, FaShare, FaTwitter } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const Index = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { Success } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(DetailPost(id));
  }, []);

  const truncateText = (text, maxLength) => {
    if (typeof text !== "string" || text.length === 0) {
      return "";
    }

    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }

    return text;
  };

  const handleTwitterShare = () => {
    // Construct the Twitter share URL with your post content
    const tweetContent = `${Success.title} - ${truncateText(
      Success.description,
      100
    )}\n\nRead more: your_website_link_here`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetContent
    )}`;
    window.open(twitterShareUrl, "_blank");
  };

  const handleFacebookShare = () => {
    // Construct the Facebook share URL with your post content
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=your_website_link_here`;
    window.open(facebookShareUrl, "_blank");
  };

  return (
    <div className="main-podcast">
      <div className="container mt-5">
        <div className="row gy-3 gx-3">
          <div className="col-lg-12">
            <div className="single-post">
              <div className="card rounded-0">
                
                <img
                  src={`${IMAGE_PATH}${Success.primaryImage}`}
                  className="primary-img"
                  alt="..."
                />
               
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3">
                    <FacebookShareButton
                      url={`https://jusoornews.com/detailpost/${Success._id}`}
                    >
                      <span>
                        {" "}
                        <FaFacebook />
                      </span>
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={`https://jusoornews.com/detailpost/${Success._id}`}
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
                      {truncateText(Success.updatedAt, 10)}
                    </p>
                  </div>
                  <h5 className="title">{Success.title}</h5>
                  <div
                    className="descr"
                    dangerouslySetInnerHTML={{ __html: Success.description }}
                  ></div>
                  <div className="row gy-3 gx-3">
                    {Success.galleryImages?.map((item) => (
                      <div className="col-md-6">
                        <img
                          className="descr-img"
                          src={`${IMAGE_PATH}${item}`}
                          alt="gallery"
                        />
                      </div>
                    ))}
                  </div>
                  {Success.video && (
                    <div className="mt-5">
                      <iframe
                        title="video"
                        src={Success.video}
                        style={{ width: "100%", height: "500px" }}
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
