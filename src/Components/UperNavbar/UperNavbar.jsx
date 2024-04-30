import React from "react";
import "./UperNavbar.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { FaTiktok } from "react-icons/fa";
const UperNavbar = () => {
  const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const arabicDate = currentDate.toLocaleDateString('ar', options);
console.log(arabicDate);

const daysInArabic = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
const monthsInArabic = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
 const dayIndex = currentDate.getDay();
const dayName = daysInArabic[dayIndex];
const date = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const monthName = monthsInArabic[monthIndex];

const formattedDate = `${dayName} ${date} ${monthName}`;

  return (
    <div className="uper-navbar">
      <Container>
        <nav>
          <div className="left-uper-nav ">
            <button className="uper-nav-btn bg-blue">{formattedDate}</button>
            <Link to="https://www.facebook.com/JusoorNews/">
              <FaFacebookF />
            </Link>
            <Link to="https://twitter.com/JusoorNews">
              <FaXTwitter />
            </Link>
            <Link to="https://www.instagram.com/jusoornews/">
              <FaInstagram />
            </Link>
            <Link to="https://whatsapp.com/channel/0029VaZx00405MUcm4lcWG1Q" >
              <FaWhatsapp />
            </Link>
            <Link to="https://www.youtube.com/@Jusoor_News">
              <TbBrandYoutube />
            </Link >
            {/* <Link to="#">
              <FaTiktok />
            </Link> */}
          </div>
          <div className="right-uper-nav">
            <div className="right-links">
              <Link 
              to="tel:+923026469153" target="_blank">اتصل بنا</Link>
            </div>

            <div className="d-flex align-items-center gap-2"><img src="/Home/image1.png"></img>28.5° دبي</div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default UperNavbar;
