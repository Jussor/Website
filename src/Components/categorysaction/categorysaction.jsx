import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./categorysaction.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/gallery-3.png"
import { CgCalendarDates } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Home } from "../../redux/slice/homeSlice";
import { IMAGE_PATH } from "../../Utils/utils";

AOS.init();

const CategoryAction = () => {
  const dispatch = useDispatch();
  const { WeeklyPosts } = useSelector((state) => state.home);


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
  return (

    <div className="my-5">
      <div className="container p-0">

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="container">
              <h1 className="category-header">الأكثر شعبية</h1>
              <div className="row">
                {WeeklyPosts && WeeklyPosts?.map((post) => (
                  <div className="col-md-4" data-aos="fade-up" data-aos-duration="2000" key={post?._id}>
                   
                      <div className="blog_card">
                        <div className="blog_card_img">
                        <Link to={`/detailpost/${post?._id}`}>
                          <img
                            src={post.primaryImage? `${IMAGE_PATH}${post?.primaryImage}` : `${img}`}
                            className="img-fluid blog_img"
                            alt={post.title}
                            loading="lazy"/>
                          </Link>
                        </div>
                        <div className="button_img">
                          
                            <button>{post?.category?.categoryName}</button>
                          
                        </div>
                        <div className="blog_card_desk">{truncateWords(post?.title, 4)}</div>
                        <div dangerouslySetInnerHTML={{ __html: post?.description }}></div>
                        <div className="blog_card_date">
                        <span><CgCalendarDates className="blog-icon" /></span>
                          <span>{truncateText(post.updatedAt, 10)}</span>{" "}
                         
                        </div>
                      </div>
                    
                  </div>
                ))}
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CategoryAction;
