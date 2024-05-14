import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Layout from "../Layout/Layout/Layout";
import Singletvpost from "../Pages/Singletv/index";
import Aboutus from "../Pages/AboutUs/AboutUs";
import Postcategorypage from "../Pages/Categorypost/Component/postcategorypage/postcategorypage";
import SearchPost from "../Pages/SearchPost/SearchPost";
import DeatailPost from "../Pages/Detail/index.jsx";
import Loader from "../Components/Preloader/Preloader.jsx";

const Index = () => {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="contactus" element={<ContactUs />} />
              <Route path="Singletvpost/:id" element={<Singletvpost />}></Route>
              <Route path="/detailpost/:id" element={<DeatailPost />} />
              <Route path="privacypolicy" element={<PrivacyPolicy />} />
              <Route path="Aboutus" element={<Aboutus />} />
              <Route path="searchPost" element={<SearchPost />} />
              <Route path="podcast/:id" element={<Postcategorypage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default Index;
