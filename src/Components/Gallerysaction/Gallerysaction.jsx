import React, { useEffect } from "react";
import "./Gallerysaction.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_PATH } from "../../Utils/utils";
import { Home } from "../../redux/slice/homeSlice";

AOS.init();
const Gallerysaction = () => {
  const dispatch = useDispatch();
  const { Main } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(Home());
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="row gy-4">
          <div className="col-lg-3">
            <div className="row gy-4">
              {Main &&
                Main.filter((post, index) => index == 0).map((item, index) => (
                  <div
                    className="col-lg-12 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    key={index}
                  >
                    <Link to={`/detailpost/${item._id}`} onClick={handleClick}>
                      <div className="blog_card">
                        <div className="blog_card_img">
                          <img
                            src={`${IMAGE_PATH}${item.primaryImage}`}
                            className="blog_img"
                            alt=""
                            loading="lazy"
                            style={{ width: "100%", objectFit: "cover" }}
                          />
                          <div className="button-div">
                            <button>{item.category.categoryName}</button>
                          </div>
                        </div>
                        <div className="bottom_img">{item.title}</div>
                      </div>
                    </Link>
                  </div>
                ))}

              {Main &&
                Main.filter((post, index) => index == 1).map((item, index) => (
                  <div
                    className="col-lg-12 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    key={index}
                  >
                    <Link to={`/detailpost/${item._id}`} onClick={handleClick}>
                      <div className="blog_card">
                        <div className="blog_card_img">
                          <img
                            src={`${IMAGE_PATH}${item.primaryImage}`}
                            className="blog_img"
                            alt=""
                            loading="lazy"
                            style={{ width: "100%", objectFit: "cover" }}
                          />
                          <div className="button-div">
                            <button>{item.category.categoryName}</button>
                          </div>
                        </div>
                        <div className="bottom_img">{item.title}</div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          {Main &&
            Main.filter((post, index) => index == 2).map((item, index) => (
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-duration="2000"
                key={index}
              >
                <Link to={`/detailpost/${item._id}`} onClick={handleClick}>
                  <div className="blog_card">
                    <div className="blog_card_img">
                      <img
                        src={`${IMAGE_PATH}${item.primaryImage}`}
                        className="center_img"
                        alt=""
                        loading="lazy"
                        style={{ width: "100%", objectFit: "cover" }}
                      />
                      <div className="button-div">
                        <button>{item.category.categoryName}</button>
                      </div>
                    </div>
                    <div className="bottom_img">{item.title}</div>
                  </div>
                </Link>
              </div>
            ))}
          <div className="col-lg-3">
            <div className="row gy-4">
              {Main &&
                Main.filter((post, index) => index == 3).map((item, index) => (
                  <div
                    className="col-lg-12 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    key={index}
                  >
                    <Link to={`/detailpost/${item._id}`} onClick={handleClick}>
                      <div className="blog_card">
                        <div className="blog_card_img">
                          <img
                            src={`${IMAGE_PATH}${item.primaryImage}`}
                            className="blog_img"
                            alt=""
                            loading="lazy"
                            style={{ width: "100%", objectFit: "cover" }}
                          />
                          <div className="button-div">
                            <button>{item.category.categoryName}</button>
                          </div>
                        </div>
                        <div className="bottom_img">{item.title}</div>
                      </div>
                    </Link>
                  </div>
                ))}

              {Main &&
                Main.filter((post, index) => index === 4).map((item, index) => (
                  <div
                    className="col-lg-12 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    key={index}
                  >
                    <Link to={`/detailpost/${item._id}`} onClick={handleClick}>
                      <div className="blog_card">
                        <div className="blog_card_img">
                          <img
                            src={`${IMAGE_PATH}${item.primaryImage}`}
                            className="img-fluid blog_img"
                            alt=""
                            loading="lazy"
                            style={{ width: "100%", objectFit: "cover" }}
                          />
                          <div className="button-div">
                            <button>{item.category.categoryName}</button>
                          </div>
                        </div>
                        <div className="bottom_img">{item.title}</div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallerysaction;
