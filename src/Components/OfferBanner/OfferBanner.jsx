import React from "react";
import offerimage  from '../../assets/offerimage.png'
const OfferBanner = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div
            className="col-md-12  offer-image"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img src={offerimage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
