import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PodCast from "../Pages/PodCast/PodCast";
import SinglePost from "../Pages/SinglePodcast/SinglePost";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Layout from "../Layout/Layout/Layout";
import Singletvpost from "../Pages/Singletv/index";
import Aboutus from "../Pages/AboutUs/AboutUs"
import Tvjussor from "../Pages/Tvjussor/Tvjussor";
import Geetkpage from "../Pages/geetkpage/geetkpage";
import Funoonpage from "../Pages/Funoonpage/Funoonpage";
import Postcategorypage from "../Pages/Categorypost/Component/postcategorypage/postcategorypage"


const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="podcast" element={<PodCast />}> </Route>
            <Route path="Singletvpost" element={<Singletvpost />}></Route>
            <Route path="podcast/:id" element={<SinglePost />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="Aboutus" element={<Aboutus />} />
            <Route path="Tvjussor" element={<Tvjussor />} />
            <Route path="geetkpage" element={<Geetkpage />} />
            <Route path="Funoonpage" element={< Funoonpage />} />
            <Route path="Postcategorypage" element={< Postcategorypage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
