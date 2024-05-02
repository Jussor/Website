import React, { useEffect } from "react";
import "./Privacycontent.css";
import { useDispatch, useSelector } from "react-redux";
import { about } from "../../redux/slice/privacySlice";
import { IMAGE_PATH } from "../../Utils/utils";

const Privacycontent = () => {
  const dispatch = useDispatch();
  const { aboutJusoor } = useSelector((state) => state.about);

  useEffect(() => {
    dispatch(about());
  }, []);

  
  const title = aboutJusoor.length > 0 ? aboutJusoor[0].title : '';
  const description = aboutJusoor.length > 0 ? aboutJusoor[0].description : '';
  const image = aboutJusoor.length > 0 ? `${IMAGE_PATH}${aboutJusoor[0].image}` : '';
  
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
