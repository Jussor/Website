import React from "react";
import ContactUscomp from "../../Components/Contactus/Contactfield";
import Header from "../../Components/Common/Header/Header";
import Contactmage from "../../assets/contactus.png";

const ContactUs = () => {
  return (
    <>
      {/* <Header
        date="ابقى على تواصل"
        title="تواصل مع جسور"
        paragraph="هل لديك أسئلة؟ هل تحتاج إلى المساعدة بشأن
        منتجاتنا أو خدماتنا؟ فريقنا ملتزم بضمان حصولك على كل الدعم الذي تحتاجه"
        image={Contactmage}
      /> */}
      <ContactUscomp />
      {/* <Faqsaction/> */}
    </>
  );
};

export default ContactUs;
