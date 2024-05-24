import React from "react";

import Mainsection from "./Mainsection";
import OurTeam from "./OurTeam";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Mainsection />
      <OurTeam />
      
    </>
  );
};

export default AboutUs;
