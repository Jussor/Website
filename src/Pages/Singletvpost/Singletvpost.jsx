import React from 'react';
import "./Singletvpost.css"
import { CgCalendarDates } from "react-icons/cg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailPost } from "../../redux/slice/postSlice";


const Singletvpost = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const { Success } = useSelector((state) => state.post);

  React.useEffect(() => {
    dispatch(DetailPost(id));
  }, []);
console.log(Success)
  return (
    <div>
      <div className="card rounded-0">
      <iframe src={`${Success.video}` } width="100%" height="400">
       </iframe>
        <div className="card-body">
          <div className="post-info">
            <p className="post-date" style={{textAlign: 'right'}}>
            {Success.createdAt}
              <span className="calender-icon">
                <CgCalendarDates />
              </span>
            </p>
          </div>
          <h6 className="descr" style={{textAlign: 'right'}}>
          {Success.title}
          </h6>
         <div dangerouslySetInnerHTML={{ __html: Success.description }} style={{textAlign: 'right'}}></div>
         </div>
      </div>
    </div>
  );
}

export default Singletvpost;
