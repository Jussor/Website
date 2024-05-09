import React from 'react';
import HeadLine from '../../Components/HeadLine/HeadLine';
import Hero from '../../Components/Hero/Hero';
import Gallerysaction from '../../Components/Gallerysaction/Gallerysaction';
import Categorysaction from '../../Components/categorysaction/categorysaction';
import Jusoortv from '../../Components/Videocomponent/Tvcomp';
import Offersaction from '../../Components/Offersaction/offersaction';

import Newsletter from '../../Components/Newsletter/Newsletter';
import OfferBanner from '../../Components/OfferBanner/OfferBanner';


const Home = () => {
  return (
    <div>
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
