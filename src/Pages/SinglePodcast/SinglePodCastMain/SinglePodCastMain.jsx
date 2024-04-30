import React from "react";
import "./SinglePodCastMain.css";
import SidePodCasts from "../../../Components/SidePodCasts/SidePodCasts";
import SinglePodCast from "../../../Components/SinglePodCast/SinglePodCast";
const SinglePodCastMain = () => {
  return (
    <div className="main-podcast">
      <div className="container">
        <div className="row gy-3 gx-3">
          <div className="col-lg-3 order-1 order-lg-0">
            <SidePodCasts />
          </div>
          <div className="col-lg-9">
            <SinglePodCast />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePodCastMain;
