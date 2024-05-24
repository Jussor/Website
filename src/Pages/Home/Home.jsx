import React from 'react';

import Hero from '../../Components/Hero/Hero';
import Gallerysaction from '../../Components/Gallerysaction/Gallerysaction';

import Jusoortv from '../../Components/Videocomponent/Tvcomp';


import Newsletter from '../../Components/Newsletter/Newsletter';

import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Jusoor News</title>
      </Helmet>
      <Hero />
      <Gallerysaction />
      {/* <Categorysaction /> */}
      <Jusoortv />
      {/* <Offersaction /> */}
      <Newsletter />
    </div>
  );
};

export default Home;
