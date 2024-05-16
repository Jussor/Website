import "./Contactfield.css";
import { React, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormGroup } from "react-bootstrap";
import { contactus } from "../../redux/slice/contactusSlice";
import { useDispatch, useSelector } from "react-redux";

AOS.init();

function Contactfield() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      query: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required("يجب أن تعطينا اسمك"),
      email: Yup.string().required("يجب عليك تقديم البريد الإلكتروني الخاص بك"),
      phoneNumber: Yup.string()
        .min(11, "يرجى تقديم رقم هاتفك المكون من 11 رقمًا")
        .required("يجب عليك تقديم رقم هاتفك")
        .max(15, "رقم هاتفك طويل جدًا"),
      subject: Yup.string().required("يرجى تقديم الموضوع"),
      query: Yup.string()
        .min(100, "يرجى تقديم 100 حرف على الأقل")
        .required("أدرج رسالتك من فضلك"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(contactus(values));
    },
  });

  return (
    <div style={{ backgroundColor: "#F5F6FA" }}>
      <div className="container  py-5">
        <div className="container contact-page">
          <div className="row calendly-card-responsive gy-4">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <h1 className="right-contact-text">
                أي سؤال؟ لا تتردد في الاتصال بنا
              </h1>

              <p className="text-lead">
                هل لديك أسئلة؟ هل تحتاج إلى المساعدة بشأن منتجاتنا أو خدماتنا؟
                فريقنا ملتزم بضمان حصولك على كل الدعم الذي تحتاجه
              </p>
              <p className="text-lead">
                هل لديك أسئلة؟ هل تحتاج إلى المساعدة بشأن منتجاتنا أو خدماتنا؟
                فريقنا ملتزم بضمان حصولك على كل الدعم الذي تحتاجه. سواء كانت
                تعليقات أو سؤال أو مشكلة تحتاج إلى مساعدة بشأنها، فنحن هنا
                للاستماع وتقديم الحلول. يلتزم فريق خدمة العملاء لدينا بالرد على
                جميع الاستفسارات في أسرع وقت ممكن.
              </p>
              <div className="social-media">
                <div className="social-icon">
                  <FaFacebookF />
                </div>
                <div className="social-icon">
                  <FaInstagram />
                </div>
                <div className="social-icon">
                  <SlSocialTwitter />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 ">
              <form onSubmit={formik.handleSubmit}>
                <div
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <div className="row">
                    
                    <div className="col-md-6">
                      <FormGroup>
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="mb-2 fw-bold"
                        >
                          اسمك
                        </label>
                        <input
                          className="form-control rounded-0 mb-2"
                          name="fullName"
                          type="text"
                          placeholder="طلحة تحير"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.fullName}
                        />
                        <small style={{ color: "red" }} className="float-end">
                          {" "}
                          {formik.touched.fullName && formik.errors.fullName}
                        </small>
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <label
                          htmlFor="exampleFormControlInput1"
                          className=" mb-2 fw-bold"
                        >
                          بريدك الالكتروني
                        </label>
                        <input
                          className="form-control rounded-0 text-start mb-2"
                          
                          name="email"
                          type="email"
                          placeholder="talhatahir@gmail.com"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />
                        <small style={{ color: "red" }}>
                          {" "}
                          {formik.touched.email && formik.errors.email}
                        </small>
                      </FormGroup>
                    </div>

                    
                    <div className="col-md-6">
                      <FormGroup>
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="mb-2 fw-bold"
                        >
                          رقم الهاتف
                        </label>
                        <input
                          className="form-control rounded-0 mb-2"
                          name="phoneNumber"
                          type="text"
                          placeholder="+40 737 136 767"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.phoneNumber}
                        />
                        <small style={{ color: "red" }}>
                          {" "}
                          {formik.touched.phoneNumber &&
                            formik.errors.phoneNumber}
                        </small>
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="mb-2 fw-bold"
                        >
                          موضوع
                        </label>
                        <input
                          className="form-control rounded-0mb-2"
                          name="subject"
                          type="text"
                          placeholder="أخطاء في الصفحة"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.subject}
                        />
                        <small style={{ color: "red" }}>
                          {" "}
                          {formik.touched.subject && formik.errors.subject}
                        </small>
                      </FormGroup>
                    </div>
                    <div className="col">
                      <FormGroup>
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="mb-2 fw-bold"
                        >
                          رسالتك
                        </label>
                        <textarea
                          name="query"
                          id="message"
                          placeholder="قم بوصف مشكلتك أو إذا كنت تريد أن تسأل عن أي تفاصيل"
                          rows={5}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.query}
                          className="form-control rounded-0 mb-3"
                        ></textarea>
                        <small style={{ color: "red" }}>
                          {" "}
                          {formik.touched.query && formik.errors.query}
                        </small>
                      </FormGroup>
                      <button type="submit" className="btn btn-dark mb-3 float-start">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactfield;


