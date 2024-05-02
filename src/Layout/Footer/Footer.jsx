import React, { useState } from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../../public/Home/logo.png";
const Footer = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const handleform = (e) => {
    e.preventDefault();
    setState(true);
  };
  const showmessage = () => {
    setState(false);
  };
  return (
    <footer className="footer">
    <div className="container">
      <div className="d-flex flex-column gap-3 flex-lg-row justify-content-lg-between align-items-lg-center">
        <div className="left-footer">
          <div className="float-end float-lg-none border-bottom pb-1">
            <p>إشترك في رسائلنا الإخبارية الأسبوعية</p>
            <form onSubmit={handleform}>
              <div className="d-flex">
                <button className="p-0 border-0" type="submit" onClick={showmessage}>
                  <span>
                    <IoIosArrowBack />
                  </span>
                </button>
                <input
                  type="email"
                  placeholder="أدخل عنوان البريد الإلكتروني"
                />
              </div>
            </form>
          </div>
          {state && (
            <small className="text-success float-end">تم الاشتراك بنجاح</small>
          )}
        </div>
        <div className="right-footer">
          <div className="d-flex flex-column justify-content-end flex-md-row gap-3">
            <div>
              <p>
                تواصل معنا من خلال ملفاتنا الصوتية المتنوعة، وانغمس في عالم من
                الحوار الثقافي. ابق على اطلاع بأحدث حلقاتنا وقصصنا المميزة من
                خلال الاشتراك في النشرة الإخبارية لدينا.
              </p>
            </div>
            <div className="footer-logo">
              <Link className="logo" to={"/"}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="d-flex flex-column gap-3 flex-sm-row justify-content-sm-end align-items-sm-center gap-sm-5 ">
            <Link to={"/contactus"} onClick={handleClick}>
              تواصل معنا
            </Link>
            <Link to={"/privacypolicy/"} onClick={handleClick}>
              إشعار الخصوصية
            </Link>
          
            <Link to={"/aboutus"} onClick={handleClick}>
              من نحن
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  );
};
export default Footer;