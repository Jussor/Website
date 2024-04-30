import React from "react";
import "./Newsletter.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";



AOS.init();

const Newsletter = () => {
  return (
    <div>
      <div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div
              className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"
              data-aos="fade-up"
              data-aos-duration="2000" >
              <div className=" newsletter">
                <div className="container">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h1>انضم إلى مجتمع جسور في واتساب </h1>
                    <p>اقرأ أخبارنا يوميًا من خلال إشعار البريد الإلكتروني </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-auto">
                  <div>
                    {/* <div className="newsletter-field">
                      <input
                        type="text"
                        class="custom-search-input"
                        placeholder="انضم إلى قناة الواتساب"
                      />
                    </div> */}
                    <Link 
                    to="https://whatsapp.com/channel/0029VaZx00405MUcm4lcWG1Q" 
                    target="_blank" class="whatsapp-icon" rel="nofollow noopener">
                    <button>
                      <IoLogoWhatsapp /> افتح الرابط{" "}
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="2000" >
                <div className="newsletter-right">
                <div className="container">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h4 className="text-end">انضم إلى مجتمع جسور في واتساب</h4>
                    <p>اقرأ أخبارنا يوميًا من خلال إشعار البريد الإلكتروني </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-auto">
                  <div>
                    <div className="newsletter-field">
                      {/* <input
                        type="text"
                        class="custom-search-input" 
                        placeholder="انضم إلى قناة الواتساب"
                      /> */}
                    </div>
                    <button className="newsletter-right-button">
                      <FaTelegramPlane/> 
                    </button>
                  </div>
                </div>
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
