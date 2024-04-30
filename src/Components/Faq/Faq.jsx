import React, { useState, useRef } from "react";
import "./Faq.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import Faqimage from "../../assets/faq.png";
import Faqtwo from '../../assets/faqcircle.png'
const Faq = () => {
  const facts = [
    {
      question: "كيف تتأكد من دقة تقاريرك الإخبارية؟",
      answer:
        "نحن نبحث دائمًا عن قصص جديدة. إذا كان لديك نصيحة أو فكرة، يرجى التواصل معنا عبر صفحة ل بنا سيتم احترام خصوصيتك وسريتك.",
    },

    {
      question: "كيف تتأكد من دقة تقاريرك الإخبارية؟",
      answer:
        "نحن نبحث دائمًا عن قصص جديدة. إذا كان لديك نصيحة أو فكرة، يرجى التواصل معنا عبر صفحة ل بنا سيتم احترام خصوصيتك وسريتك.",
    },
    {
      question: "كيف تتأكد من دقة تقاريرك الإخبارية؟",
      answer:
        "نحن نبحث دائمًا عن قصص جديدة. إذا كان لديك نصيحة أو فكرة، يرجى التواصل معنا عبر صفحة ل بنا سيتم احترام خصوصيتك وسريتك.",
    },
    {
      question: "كيف تتأكد من دقة تقاريرك الإخبارية؟",
      answer:
        "نحن نبحث دائمًا عن قصص جديدة. إذا كان لديك نصيحة أو فكرة، يرجى التواصل معنا عبر صفحة ل بنا سيتم احترام خصوصيتك وسريتك.",
    },
  ];
  const faqRefs = useRef([]);
  const [selectedButton, setSelectedButton] = useState("App_btn");

  const [activeIndex, setActiveIndex] = useState(-1);
  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 mt-3 mb-3 d-flex align-items-center justify-content-center ">
          <img src={Faqimage} alt="" />
        </div>
       <div className="col-lg-6">
          <div className="faqs-section">
            <div className="">
              <div className="faqs-header">
                <p className="faqs-heading">أسئلة مكررة</p>
                <p className="faqs-overview">
                  ومن المهم أن يكون العميل ذكياً جداً، وأن يكون قادراً على تمويل
                  الاستثمار
                </p>
              </div>
              <div className="d-flex flex-column gap-2">

                {facts.map((fact, index) => (
                  <div
                    key={index}
                    className={`${activeIndex===index ? "faq-rounded-back text-white" : "faq"}`} >
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        ref={(el) => (faqRefs.current[index] = el)}
                         onClick={() => {
                          toggleFaq(index);
                          setSelectedButton("faqs");
                        }}
                      >
                        {index === activeIndex ? <FaMinus /> : <FaPlus />}
                      </button>
                      <p className="faq-question"> <span> {fact.question} <img src={Faqtwo} alt=""/> </span>  </p>
                    </div>
                    
                    <div className="faq-items d-flex align-items-center">
                    
                      <div className="faq-container">
                      
                        
                        <hr className={`${
                            index === activeIndex ? "d-block" : "d-none"
                          }`}/>
                        <p
                          className={`faq-answer ${
                            index === activeIndex ? "d-block" : "d-none"
                          }`}
                        >
                          {fact.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
