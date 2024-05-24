import React from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailPost } from "../../redux/slice/postSlice";
import { FaCalendarAlt, FaFacebook, FaTwitter } from "react-icons/fa";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { CgCalendarDates } from "react-icons/cg";
import YoutubePlayer from "../../Components/YoutubePlayer/YoutubePlayer";

const Singletvpost = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { Success, loading } = useSelector((state) => state.post);

  React.useEffect(() => {
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
  return (
    // <div className="my-5">
    //   <div className="card rounded-0">
    //     {Success?.video && (
    //       <iframe
    //       src={`${Success?.video}`}
    //       height="400px"
    //       className=""
    //       allowFullScreen  // Add allowFullScreen attribute here
    //     ></iframe>

    //     )}
    //     <div className="card-body">
    //       <div className="post-info">
    //         <p className="post-date d-flex align-items-center gap-2">
    //           <span className="calender-icon">
    //             <FaCalendarAlt />
    //           </span>
    //           {truncateText(Success?.updatedAt, 10)}
    //         </p>
    //         {Success?.title && <h6 className="descr">{Success?.title}</h6>}
    //         {Success?.description && (
    //           <div
    //             dangerouslySetInnerHTML={{ __html: Success?.description }}
    //           ></div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="main-podcast">
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
                  <div className="row">
                    {Success?.video && (
                      <div className="col-lg-7">
                        <YoutubePlayer videoSrc={Success?.video} />
                      </div>
                    )}
                  </div>
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

export default Singletvpost;
