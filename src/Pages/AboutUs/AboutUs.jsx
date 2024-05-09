import React from "react";
import ContactUscomp from "../../Components/Contactus/Contactfield";
import Header from "../../Components/Common/Header/Header";
import Contactmage from "../../assets/AboutPic.png";
import Faqsaction from "../../Components/Faq/Faq";
import Mainsection from "./Mainsection";
import OurTeam from "./OurTeam";

const AboutUs = () => {
  return (
    <>
      {/* <Header
        title=" من هي جسور"
        paragraph="هي منصة جسور
        إعلامية مستقلة، تبحث عن القصص الفريدة والمتميزة، التي تثري عقل القارئ، وتعبر عن نبض جميع
المجتمعات والشعوب"
        image={Contactmage}
      /> */}
      <Mainsection />
      <OurTeam />
      {/* <Faqsaction/> */}
    </>
  );
};

export default AboutUs;
