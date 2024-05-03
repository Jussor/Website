import React, { useEffect } from "react";
import "./Privacycontent.css";
import { useDispatch, useSelector } from "react-redux";
import { privacy } from "../../redux/slice/privacySlice";
import { IMAGE_PATH } from "../../Utils/utils";

const Privacycontent = () => {
  const dispatch = useDispatch();
  const { privacyJusoor } = useSelector((state) => state.privacy);

  useEffect(() => {
    dispatch(privacy());
  }, []);

  
  const title = privacyJusoor.length > 0 ? privacyJusoor[0].title : '';
  const description = privacyJusoor.length > 0 ? privacyJusoor[0].description : '';
  const image = privacyJusoor.length > 0 ? `${IMAGE_PATH}${privacyJusoor[0].image}` : '';
  
  return (
    <div>
      <div className="privacy-policy">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-1 order-lg-0">
            <h3 className="heading">{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
            <div className="col-lg-6">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacycontent;
