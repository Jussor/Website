import React, { useEffect, useState } from "react";
import pic from "../../assets/Tv-back.png";
import playButtonIcon from "../../assets/orange orange.png";
import { FaCalendarAlt } from "react-icons/fa";
import "./jusoortv.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Home } from "../../redux/slice/homeSlice";
import { Spinner } from 'react-bootstrap'; // Import Spinner from React Bootstrap

AOS.init();

const Tvcomp = () => {
  const dispatch = useDispatch();
  const { JusoorTv } = useSelector((state) => state.home);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(Home());
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData();
  }, [dispatch]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  };

  const truncateWords = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="tv-bg" id="Tvjusoor">
      <div className="container mt-5">
        <br />
        <Link to={"/podcast/662b85fb3455a992d8489da7"} className="tv_header">
          {" "}
          TV جسور{" "}
        </Link>
        <div className="row gy-4">
          {loading ? (
            <div className="spinner-container">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            JusoorTv &&
            JusoorTv.map((item) => (
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="2000"
                key={item._id}
              >
                <div className="video-box">
                  <iframe
                    className="iframe-element"
                    src={`${item.video}`}
                    title={item.title}
                    allowFullScreen
                  ></iframe>
                  <div className="tv_img">
                    <Link
                      to={`/Singletvpost/${item._id}`}
                      style={{ color: "inherit" }}
                    >
                      <p>{item?.title}</p>
                      <FaCalendarAlt />
                      <span> {truncateText(item?.updatedAt, 10)} </span>
                    </Link>
                  </div>
                </div>
                <div className="button-tv">
                  <button className="play-button">
                    {item.category.categoryName}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Tvcomp;
