import React, { useEffect, useState } from "react";
import "./UperNavbar.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { FaTiktok } from "react-icons/fa";
import axios from "axios";
const UperNavbar = () => {
  const currentDate = new Date();

  const daysInArabic = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  const monthsInArabic = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  const dayIndex = currentDate.getDay();
  const dayName = daysInArabic[dayIndex];
  const date = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const monthName = monthsInArabic[monthIndex];

  const formattedDate = `${dayName} ${date} ${monthName}`;

  // const [lat, setLat] = useState(0);
  // const [long, setLong] = useState(0);
  // const [temp, setTemp] = useState(0);
  // const [city, setCity] = useState("");

  // const getWeather = async () => {
  //   try {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });
  //     const response = await axios.get(
  //       `http://api.weatherapi.com/v1/current.json?key=6e6263afb84f44279f731543222510&q=${lat},${long}&aqi=no`
  //     );

  //     setCity(response.data.location.name);
  //     setTemp(response.data.current.temp_c);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   getWeather();
  // }, [lat, long, city, temp]);

  return (
    <div className="uper-navbar">
      <Container>
        <nav>
          <div className="right-uper-nav">
            <div className="d-flex align-items-center gap-2">
              {/* <span>{city}</span> <span>{`${Math.round(temp)}°`}</span> */}
              {/* <img src="/Home/image1.png"></img> */}
            </div>
            <div className="right-links">
              <Link to="contactus" >
                اتصل بنا
              </Link>
            </div>
          </div>
          <div className="left-uper-nav ">
            <Link to="https://www.tiktok.com/@jusoornews">
              <FaTiktok />
            </Link>

            <Link to="https://twitter.com/JusoorNews">
              <FaXTwitter />
            </Link>
            <Link to="https://www.instagram.com/jusoornews/">
              <FaInstagram />
            </Link>
            <Link to="https://whatsapp.com/channel/0029VaZx00405MUcm4lcWG1Q">
              <FaWhatsapp />
            </Link>
            <Link to="https://www.youtube.com/@Jusoor_News">
              <TbBrandYoutube />
            </Link>
            <Link to="https://www.facebook.com/JusoorNews/">
              <FaFacebookF />
            </Link>
            <button className="uper-nav-btn bg-blue">{formattedDate}</button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default UperNavbar;
