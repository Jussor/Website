import React, { useEffect} from "react";
import "./SinglePodCast.css";
import { CgCalendarDates } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailPost } from "../../redux/slice/postSlice";
import { IMAGE_PATH, } from "../../Utils/utils";
const index = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const { Success } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(DetailPost(id));
  }, []);
  console.log(Success)
  return (
    <div className="main-podcast">
      <div className="container mt-5">
        <div className="row gy-3 gx-3">
          <div className="col-lg-12">
            <div className="single-post">
          <div className="card rounded-0" >
            <img src={`${IMAGE_PATH}${Success.primaryImage}`} style={{marginLeft:"auto",height:"00px"}} className="post-img" alt="..." />
                <div className="card-body">
                  <div className="post-info">
                    <p className="post-date">
                      {Success.createdAt}
                      <span className="calender-icon">
                        <CgCalendarDates />
                      </span>
                    </p>
                    <p className="post-category">
                      اض
                      <span className="category-icon">
                        <BiCategory />
                      </span>
                    </p>
                  </div>
                  <h5 className="title">{Success.title}</h5>
                  <div className="descr" dangerouslySetInnerHTML={{ __html: Success.description }} style={{textAlign: 'right'}}></div>
                  <div className="row gy-3 gx-3">
                    {Success.galleryImages?.map((item) => (
                      <div className="col-md-6">
                        <img className="descr-img" src={`${IMAGE_PATH}${item}`} />
                      </div>
                    ))}
                  </div>
             
                    <div className="mt-5" >
                    <iframe src={Success.video} style={{width:"100%",height:"500px"}} >
                    </iframe>
              
                  </div>
             
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
