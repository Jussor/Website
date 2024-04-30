import React from 'react'
import ContactUscomp from '../../Components/Contactus/Contactfield'
import Header from "../../Components/Common/Header/Header";
import Contactmage from '../../assets/contactus.png'



const ContactUs = () => {
  return (
    <>
        <Header
        date = "ابقى على تواصل"
        title="تواصل مع جسور"
        paragraph="أبرمت شركة نيوم للهيدروجين الأخضر (NGHC) مؤخرًا اتفاقيات مالية مع 23 بنكًا وشركة استثمارية محلية وإقليمية ودولية، مما يمثل علامة بارزة في المشروع."
        buttontext="للصحافة والإعلام"
         image ={Contactmage}
        />
      <ContactUscomp/>  
      {/* <Faqsaction/> */}
    </>
  )
}

export default ContactUs