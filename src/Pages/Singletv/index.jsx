import React from 'react';
import PodCastSideBar from "../../Components/PodCastSideBar/PodCastSideBar";
import Singletvpost from '../Singletvpost/Singletvpost';

const index = () => {
  return (
    <div>
     <div className="podcasts">
      <div className="container">
        <div className="row gx-3 gy-3">
          <div className="col-xl-4 order-1 order-xl-0">
            <PodCastSideBar />
          </div>
          <div className="col-xl-8">
            <Singletvpost/>
          </div>
        </div>
      </div>
    </div> 
    </div>
  );
}

export default index;
