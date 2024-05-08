import React, { useEffect } from "react";


import "./offersaction.css";
import { CgCalendarDates } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Home } from "../../redux/slice/homeSlice";
import { IMAGE_PATH } from "../../Utils/utils";
import img from "../../assets/gallery-3.png"
AOS.init();

const Offersaction = () => {
  const dispatch = useDispatch();
  const { MonthlyPosts } = useSelector((state) => state.home);


  useEffect(() => {
    dispatch(Home());
  }, []);
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  };
  const truncateWords = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ")+"...";
    }
    return text;
  };
  
  const handleClick = () => {
    window.scrollTo(0, 0); 
  };
  return (
    <div className="offer-saction">
      <div className="container">
        <div className="row">
          {MonthlyPosts && MonthlyPosts?.map((post) => (
            <div
              className=" col-xs-12 col-sm-12 col-md-4  offer-podcast"
              data-aos="fade-up"
              data-aos-duration="2000"
              key={post?._id}
            >
              <h6 className="offer-header">{post?.category?.categoryName}</h6>
              <Link  class="card" onClick={handleClick}>
                <img src={post?.primaryImage? `${IMAGE_PATH}${post?.primaryImage}` : `${img}`} class="podcast-img" alt="..." />
                <div class="card-body">
                  <h5 class="title">{post.title}</h5>
                  <div dangerouslySetInnerHTML={{ __html: post?.description }}></div>
                  <p class="date">
                  
                  <span className="calender-icon">
                      <CgCalendarDates />
                    </span>
                    {truncateText(post?.updatedAt, 10)}
                    
                  </p>
                </div>
              </Link>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Offersaction;
