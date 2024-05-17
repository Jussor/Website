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
          <div className="row gy-4">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="newsletter-right">
                <div className="container">
                  <h4>انضم إلى مجتمع جسور في تلغرام</h4>
                  <p>اقرأ أخبارنا يوميًا من خلال إشعار البريد الإلكتروني </p>

                  <Link
                    to="https://t.me/jusoornewsTelegram"
                    target="_blank"
                    className="whatsapp-icon"
                    rel="nofollow noopener"
                  >
                    <button className="newsletter-right-button">
                      <FaTelegramPlane />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="newsletter">
                <div className="container">
                  <h1>انضم إلى مجتمع جسور في تلغرام </h1>
                  <p>اقرأ أخبارنا يوميًا من خلال إشعار البريد الإلكتروني </p>
                  <Link
                    to="https://whatsapp.com/channel/0029VaZx00405MUcm4lcWG1Q"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <button>
                      <IoLogoWhatsapp /> افتح الرابط
                    </button>
                  </Link>
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
