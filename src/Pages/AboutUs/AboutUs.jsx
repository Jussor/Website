import React from 'react'
import ContactUscomp from '../../Components/Contactus/Contactfield'
import Header from "../../Components/Common/Header/Header";
import Contactmage from '../../assets/contactus.png'
import Faqsaction from "../../Components/Faq/Faq";
import Mainsection from './Mainsection';
import OurTeam from './OurTeam';


const AboutUs = () => {
  return (
    <>
        <Header
        title=" من هي جسور"
        paragraph="أبرمت شركة نيوم للهيدروجين الأخضر (NGHC) مؤخرًا اتفاقيات مالية مع 23 بنكًا وشركة استثمارية محلية وإقليمية ودولية، مما يمثل علامة بارزة في المشروع."
        buttontext="للصحافة والإعلام"
        // showButton={true}
         image ={Contactmage}
        />
      <Mainsection/>
      <OurTeam/>
      {/* <Faqsaction/> */}
    </>
  )
}

export default AboutUs