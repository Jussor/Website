import React from 'react';
import Singletvpost from '../Singletvpost/Singletvpost';

const index = () => {
  return (
    <div>
     <div className="podcasts">
      <div className="container">
        <div className="row gx-3 gy-3">
          <div className="col-xl-12">
            <Singletvpost/>
          </div>
        </div>
      </div>
    </div> 
    </div>
  );
}

export default index;
