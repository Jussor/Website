import React, { useEffect } from "react";
import "./SearchPost.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slice/allPostsSlice";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { IMAGE_PATH } from "../../Utils/utils";
import { CgCalendarDates } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const SearchPost = () => {
  const { Content, loading, error } = useSelector((state) => state.allposts);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const queryParams = new URLSearchParams(location.search);
  const titleQuery = queryParams.get("title")?.toLowerCase() || "";

  const filteredContent = Content.filter((post) =>
    post.title.toLowerCase().includes(titleQuery)
  );

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength);
    }
    return text;
  };

  return (
    <div className="searchPost">
      <div className="container">
        <Row className="gy-4 my-5">
          {filteredContent.length > 0 ? (
            filteredContent.map((post) => (
              <Col sm={4} key={post._id}>
                {post?.primaryImage ? (
                  <Link to={`/detailpost/${post._id}`}>
                    <Card className="rounded-0">
                      <Card.Img
                        variant="top"
                        src={`${IMAGE_PATH}${post?.primaryImage}`}
                        className="card-img rounded-0"
                      />
                      <Card.Body>
                        <Card.Title>{post?.title}</Card.Title>
                        <Card.Text>
                          <div className="d-flex align-items-center">
                            <span className="calendar-icon">
                              <CgCalendarDates />
                            </span>
                            {truncateText(post?.updatedAt, 10)}
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                ) :
                (
                  <Link to={`/singleTvPost/${post?._id}`}>
                    <Card className="rounded-0">
                      <iframe
                        className="card-img rounded-0"
                        src={`${post?.video}`}
                      ></iframe>
                      <Card.Body>
                        <Card.Title>{post?.title}</Card.Title>
                        <Card.Text>
                          <div className="d-flex align-items-center">
                            <span className="calendar-icon">
                              <CgCalendarDates />
                            </span>
                            {truncateText(post?.updatedAt, 10)}
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                )}
              </Col>
            ))
          ) : (
            <h1>Post Not found</h1>
          )}
        </Row>
      </div>
    </div>
  );
};

export default SearchPost;
