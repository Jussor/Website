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
      phoneNumber: 0,
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
                          type="number"
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

// export default withFormik({
//   mapPropsToValues: () => ({
//     name: "",
//     email: "",
//     phone: "",
//     phone2: "",
//     message: "",
//   }),
//   validationSchema: Yup.object().shape({
//     name: Yup.string()
//       .min(3, "Come on bro, your name is longer than that.")
//       .required("You must give us your name"),
//     email: Yup.string()
//       .email("You need to give us a valid email.")
//       .required("You need your email."),
//     phone: Yup.string()
//       .min(10, "Please provide your 10 digit phone number")
//       .required("You need your phone number.")
//       .max(15, "Your phone number is too long"),
//     phone2: Yup.string()
//       .min(10, "Please provide your 10 digit phone number")
//       .required("You need your phone number.")
//       .max(15, "Your phone number is too long"),
//     message: Yup.string()
//       .min(500, "Please provide at least 500 characters")
//       .required("You need your phone number."),
//   }),

//   onSubmit: (values, { setSubmitting }) => {
//     e.preventDefault();

//     console.log("values",values);
//     alert("Form submitted. Thank you very much!");

//     setSubmitting(false);
//   },
// })(Contactfield);

// import React, { Fragment, useEffect } from "react";
// import {
//   Row,
//   Col,
//   Card,
//   CardBody,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Spinner,
//   CardHeader,
//   CardFooter,
// } from "reactstrap";
// import { ToastContainer, toast } from "react-toastify";
// import { useSelector, useDispatch } from "react-redux";
// import { useFormik } from "formik";
// import Switch from "react-switch";
// import * as yup from "yup";
// import CustomCKEditor from '../../../Constant/CustomCKEditor';
// import { Btn, H5 } from "../../../AbstractElements";
// import { AddBanner } from "../../../features/bannerSlice";
// const BasicFormControlClass = () => {
//   const { loading, success } = useSelector(state => state.banner);
//   const [isToggled, setIsToggled] = React.useState(false);
//   const handleToggle = (checked) => {
//     setIsToggled(checked);
//   };
//   const dispatch = useDispatch();
//   const handleFileChange = (event) => {
//     const file = event.currentTarget.files[0];
//     formik.setFieldValue(isToggled ? "video" : "image", file);
//   };
//   React.useEffect(() => {
//     if (success) { formik.resetForm(); }
//   }, [success]);
//   /**********************************   Formik Validation   ****************************************************** */
//   const validationSchema = yup.object({
//     title: yup.string().required("Title is required"),
//     description: yup.string().required("Description is required"),
//     video: yup.mixed().required("Video is required"),
//   });
//   const validationSchemaImage = yup.object({
//     title: yup.string().required("Title is required"),
//     description: yup.string().required("Description is required"),
//     image: yup.mixed().required("Image is required"),
//   });
//   const formik = useFormik({
//     initialValues: { title: "", description: "", image: null, video: null },
//     validationSchema: isToggled ? validationSchema : validationSchemaImage,
//     onSubmit: async (values, { resetForm }) => {
//       console.log("values__________", values);
//       const formData = new FormData();
//       for (let value in values) {
//           if (values[value] !== null) {
//             formData.append(value, values[value]);
//           }
//       }
//       dispatch(AddBanner(formData));
//     },
//   });
//   return (
//     <Fragment>
//       <Card>
//         <CardHeader>
//           {" "}
//           <H5> Add Banner</H5>{" "}
//         </CardHeader>
//         <Form className="form theme-form" onSubmit={formik.handleSubmit}>
//           <CardBody>
//             <Row className="mb-3">
//               <Col md="12" className="">
//                 <div className="d-flex align-items-center gap-2 mb-3">
//                   <Switch
//                     onChange={handleToggle}
//                     checked={isToggled}
//                     onColor="#000"
//                     onHandleColor="#fff"
//                     uncheckedIcon={false}
//                     checkedIcon={false}
//                     height={24}
//                     width={48}
//                   />
//                   <span>{isToggled ? "" : "Are you want to add a video?"}</span>
//                 </div>
//               </Col>
//               <Col md="6">
//                 <FormGroup>
//                   <Label htmlFor="exampleFormControlInput1">Title*</Label>
//                   <Input
//                     className="form-control"
//                     name="title"
//                     type="text"
//                     placeholder="Enter your title "
//                     onBlur={formik.handleBlur}
//                     onChange={formik.handleChange}
//                     value={formik.values.title}
//                   />
//                   <small style={{ color: "red" }}>
//                     {" "}
//                     {formik.touched.title && formik.errors.title}
//                   </small>
//                 </FormGroup>
//               </Col>
//               <Col md="6">
//                 <FormGroup>
//                   <Label htmlFor="exampleFormControlInput1">
//                     {isToggled ? "Video" : "Image*"}
//                   </Label>
//                   <Input
//                     type="file"
//                     id="fileInput"
//                     name={isToggled ? "video" : "image"}
//                     accept={isToggled ? "video/*" : "image/*"}
//                     onChange={handleFileChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   <small style={{ color: "red" }}>
//                     {" "}
//                     {isToggled
//                       ? formik.touched.video && formik.errors.video
//                       : formik.touched.image && formik.errors.image}
//                   </small>
//                 </FormGroup>
//               </Col>
//               <Col md="12" className="">
//                 <Label htmlFor="exampleFormControlInput1">Description*</Label>
//                 <CustomCKEditor
//                   value={formik.values.description}
//                   onChange={(newValue) => formik.setFieldValue("description", newValue)}
//                 />
//               </Col>
//               <small style={{ color: "red" }}>
//                 {" "}
//                 {formik.touched.description && formik.errors.description}
//               </small>
//             </Row>
//           </CardBody>
//           <CardFooter className="text-end">
//             <Btn attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >
//               {loading ? <Spinner animation="border" size="sm" /> : ' Submit'}</Btn>
//           </CardFooter>
//         </Form>
//       </Card>
//       <ToastContainer />
//     </Fragment>
//   );
// };
// export default BasicFormControlClass;
