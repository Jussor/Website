import React from "react";
import PodCastSideBar from "../../../Components/PodCastSideBar/PodCastSideBar";
import AuthorPodCast from "../../../Components/AuthorPodCast/AuthorPodCast";
import "./PodCasts.css";
const PodCasts = () => {
  return (
    <div className="podcasts">
      <div className="container">
        <div className="row gx-3 gy-3">
          <div className="col-xl-4 order-1 order-xl-0">
            <PodCastSideBar />
          </div>
          <div className="col-xl-8">
            <AuthorPodCast />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodCasts;
