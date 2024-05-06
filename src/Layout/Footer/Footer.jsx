import React, { useState } from "react";
import "./Footer.css";
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
        
        <div className="right-footer">
          <div className="d-flex flex-column justify-content-end flex-md-row gap-3">
            
            <div className="footer-logo">
              <Link className="logo" to={"/"} onClick={handleClick}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div>
              <p>
                تواصل معنا من خلال ملفاتنا الصوتية المتنوعة، وانغمس في عالم من
                الحوار الثقافي. ابق على اطلاع بأحدث حلقاتنا وقصصنا المميزة من
                خلال الاشتراك في النشرة الإخبارية لدينا.
              </p>
            </div>
          </div>
          <div className="d-flex flex-column gap-3 flex-sm-row align-items-sm-center gap-sm-5 ">
          <Link to={"/aboutus"} onClick={handleClick}>
              من نحن
            </Link>
            <Link to={"/privacypolicy/"} onClick={handleClick}>
              إشعار الخصوصية
            </Link>
          
            
            <Link to={"/contactus"} onClick={handleClick}>
              تواصل معنا
            </Link>
          </div>
        </div>
        <div className="left-footer">
          <div className=" border-bottom pb-1">
            <p>إشترك في رسائلنا الإخبارية الأسبوعية</p>
            <form onSubmit={handleform}>
              <div className="d-flex">
                
                <input
                  type="email"
                  placeholder="أدخل عنوان البريد الإلكتروني"
                  required
                />
                <button className="p-0 border-0" type="submit" onClick={showmessage}>
                  <span>
                    <IoIosArrowBack />
                  </span>
                </button>
              </div>
            </form>
          </div>
          {state && (
            <small className="text-success float-end">تم الاشتراك بنجاح</small>
          )}
        </div>
      </div>
    </div>
  </footer>
  
  );
};
export default Footer;