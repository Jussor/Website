import React, { useEffect } from "react";
import "./postcategorypage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_PATH } from "../../../../Utils/utils";
import { getPostsByCategory } from "../../../../redux/slice/categorySlice";
import { useParams } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import { CgCalendarDates } from "react-icons/cg";

const postcategorypage = () => {
  const dispatch = useDispatch();
  const { postsByCategorySuccess, postsByCategoryLoading } = useSelector((state) => state.category);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostsByCategory(id));
  }, [id]);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const truncateWords = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ")+"...";
    }
    return text;
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  };
  return (
    <div className="container mt-5 mb-5">
      {postsByCategoryLoading ?
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spinner />
        </div>
        :
    <div className="row gy-3 gx-3">
{/* Check if posts exist */}
{postsByCategorySuccess && postsByCategorySuccess.length > 0 ? (
    // If posts exist, map through them
    postsByCategorySuccess.map((podcast,index) => {
        return (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={index}>
                {id === '662b85fb3455a992d8489da7' ? (
                    <Link to={`/Singletvpost/${podcast._id}`} style={{ color: "inherit" }}>
                        <div  className="box">
                            <iframe className="iframe-element-post" src={`${podcast.video}`}></iframe>
                            <div className="tv_img_post">
                                <p className="mb-0">{truncateWords(podcast.title, 4)}</p>
                                  <span className="d-flex align-items-center gap-2"><FaCalendarAlt />{truncateText(podcast.updatedAt, 10)}</span> 
                                 </div>
                                   </div>                    
                                    </Link>
                ) : podcast.category ? ( 
                    <div className="card">
                        <Link to={`/detailpost/${podcast._id}`} style={{ color: "inherit" }} onClick={handleClick}>
                            <img src={`${IMAGE_PATH}${podcast.primaryImage}`} className="card-img" alt="..." />
                            <div class="card-body">
                                <h6 className="post-title">{truncateWords(podcast.title, 4)}</h6>
                                <p className="post-date">
                                <span className="calender-icon"><CgCalendarDates /></span>
                                    {truncateText(podcast.updatedAt, 10)}
                                   </p>
                            </div>
                        </Link>
                    </div>
                ) : (
                  null
                )}
            </div>
        );
    })
) : (
    // If no posts exist, display "Post not found" message
    <div className="card p-2">
        <h6 className="not-found-message m-auto">لم يتم العثور على آخر</h6>
    </div>
)}
 </div>
}
    </div>
  );
};

export default postcategorypage;
