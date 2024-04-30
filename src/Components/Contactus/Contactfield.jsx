import "./Contactfield.css";
import { React, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Field from "../Common/Field";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { withFormik } from "formik";
import * as Yup from "yup";

AOS.init();

function Contactfield(props) {

  const fields = {
    sections: [
      [
        {
          label:"بريدك الالكتروني",
          name: "name",
          elementName: "input",
          type: "text",
          placeholder: "nafeesurrehman5566@gmail,com",
        },
        {
          label:"اسمك",
          name: "email",
          elementName: "input",
          type: "email",
          placeholder: "طلحة تحير",
        },
        {
          label:"رقم الهاتف",
          name: "phone",
          elementName: "input",
          type: "text",
          placeholder: "+923092000816",
        },
        {
          label:"موضوع",
          name: "phone2",
          elementName: "input",
          type: "text",
          placeholder: "أخطاء في الصفحة",
        },
      ],
    ],
  };

  return (
    <div style={{backgroundColor:"#F5F6FA"}}>
    
      <div className="container  pt-5" >
        <div className="container contact-page">
          <div className="row calendly-card-responsive">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
              <form>
                <div
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  {fields.sections.map((section, sectionIndex) => {
                    return (
                      <div className="row p-0" key={sectionIndex}>
                        {section.map((field, fieldIndex) => (
                          <div className="col-md-6" key={fieldIndex}>
                            <Field
                              {...field}
                              name={field.name}
                              value={props.values[field.name]}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              touched={props.touched[field.name]}
                              errors={props.errors[field.name]}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })}

                  <div className="mb-3" style={{ position: "relative" }}>
                    <label className="label-textarea d-flex justify-content-end">رسالتك      </label>
                    <textarea
                      className="form-control contact-form-text"
                      placeholder="قم بوصف مشكلتك أو إذا كنت تريد أن تسأل عن أي تفاصيل"
                      rows="8"
                      cols="50"
                      required
                    ></textarea>
                
                    <button
                      type="submit"
                      className="btn  inside-textarea-button"
                      
                    >
                     Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
              <h1 className="right-contact-text">أي سؤال؟ لا تتردد في الاتصال بنا</h1>
             
              <p className="text-lead">
                هل لديك أسئلة؟ هل تحتاج إلى المساعدة بشأن منتجاتنا أو خدماتنا؟
                فريقنا ملتزم بضمان حصولك على كل الدعم الذي تحتاجه
              </p>
              <p className="text-lead">
                هل لديك أسئلة؟ هل تحتاج إلى المساعدة بشأن منتجاتنا أو خدماتنا؟
                فريقنا ملتزم بضمان حصولك على كل الدعم الذي تحتاجه.  سواء كانت
                تعليقات أو سؤال أو مشكلة تحتاج إلى مساعدة بشأنها، فنحن هنا
                للاستماع وتقديم الحلول. يلتزم فريق خدمة العملاء لدينا بالرد على
                جميع الاستفسارات في أسرع وقت ممكن.
              </p>
              <div className="social-media">
                  <div className="social-icon">
                    <FaFacebookF/>
                  </div>
                  <div className="social-icon">
                    <FaInstagram/>
                  </div>
                  <div className="social-icon">
                    <SlSocialTwitter/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
       
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    phone2: "",
    message: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Come on bro, your name is longer than that.")
      .required("You must give us your name"),
    email: Yup.string()
      .email("You need to give us a valid email.")
      .required("You need your email."),
    phone: Yup.string()
      .min(10, "Please provide your 10 digit phone number")
      .required("You need your phone number.")
      .max(15, "Your phone number is too long"),
    phone2: Yup.string()
      .min(10, "Please provide your 10 digit phone number")
      .required("You need your phone number.")
      .max(15, "Your phone number is too long"),
    message: Yup.string()
      .min(500, "Please provide at least 500 characters")
      .required("You need your phone number."),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    // Handle form submission here
    alert("Form submitted. Thank you very much!");
    // If using async actions, remember to call setSubmitting(false) when done
    setSubmitting(false);
  },
})(Contactfield);
