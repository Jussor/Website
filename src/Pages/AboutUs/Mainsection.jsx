import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { about } from "../../redux/slice/aboutSlice";
import { IMAGE_PATH } from "../../Utils/utils";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Mainsection = () => {
  const dispatch = useDispatch();
  const { aboutJusoor, aboutLoading } = useSelector((state) => state.about);
  

  useEffect(() => {
    const fetchData = async () => {
      dispatch(about());
      
    };
    fetchData();
  }, [dispatch]);

  if (aboutLoading) {
    return (
      <div className="container pt-5">
        <div className="row justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }

  const title = aboutJusoor.length > 0 ? aboutJusoor[0].title : "";
  const description = aboutJusoor.length > 0 ? aboutJusoor[0].description : "";
  const image =
    aboutJusoor.length > 0 ? `${IMAGE_PATH}${aboutJusoor[0].image}` : "";

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={image} alt="Jusoor" className="w-100" />
        </div>
        <div className="col-md-6">
          <h1 className="text-end" style={{ fontFamily: "Cairo, sans-serif" }}>
            {title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
