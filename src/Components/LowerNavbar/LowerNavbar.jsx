import React, { useState, useEffect } from "react";
import "./LowerNavbar.css";
import { Container, Offcanvas, Spinner } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import logo from "../../../public/Home/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { category } from "../../redux/slice/categorySlice";

const LowerNavbar = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //GET DATA FROM REDUX
  const { categorySuccess } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      dispatch(category());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searchPost");
  };

  return (
    <div className="lower-navbar">
      <Container>
        <nav className="d-flex justify-content-between align-items-center">
          <div className="right-lower-nav d-flex align-items-center gap-2">
            <span className="toggle-btn d-lg-none" onClick={handleShow}>
              <IoIosMenu />
            </span>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="middle-lower-nav d-none d-lg-flex gap-4">
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              categorySuccess &&
              categorySuccess.map((item, index) => (
                <li className="dropdown dropdown-5 p-0" key={index}>
                  <ul className="dropdown_menu dropdown_menu-5 p-0">
                    {item.categoryName === "سياسة" &&
                      item.childCategories.map((item2, index2) => (
                        <Link to={`/podcast/${item2._id}`} key={index2}>
                          <li className="dropdown_item-1">
                            {item2.categoryName}
                          </li>
                        </Link>
                      ))}
                    {item.categoryName === "نبض المجتمع" &&
                      item.childCategories.map((item2, index2) => (
                        <Link to={`/podcast/${item2._id}`} key={index2}>
                          <li className="dropdown_item-1">
                            {item2.categoryName}
                          </li>
                        </Link>
                      ))}
                  </ul>
                  <div className="iconDrop">
                    <div className="dropText">
                      <Link to={`/podcast/${item._id}`}>
                        {item.categoryName}
                      </Link>
                    </div>
                  </div>
                </li>
              ))
            )}
          </div>
          <form className="left-lower-nav" onSubmit={handleSubmit}>
            {/* <div className="d-flex gap-2">
              <button
                type="submit"
                style={{
                  border: "none",
                  background: "transparent",
                  color: "white",
                }}
              >
                <CiSearch />
              </button>
            </div> */}
          </form>

          <Offcanvas
            show={show}
            className="h-100"
            onHide={handleClose}
            placement="top"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              {loading ? (
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <div className="offcanvas-links">
                  {categorySuccess &&
                    categorySuccess.map((item, index) => (
                      <li className="dropdown dropdown-5 p-0" key={index}>
                        <div className="iconDrop">
                          <div className="dropText">
                            <Link
                              to={`/podcast/${item._id}`}
                              onClick={handleClose}
                            >
                              {item.categoryName}
                            </Link>
                          </div>
                        </div>
                        <ul className="dropdown_menu dropdown_menu-5 p-0">
                          {item.categoryName === "سياسة" &&
                            item.childCategories.map((item2, index2) => (
                              <Link
                                to={`/podcast/${item2._id}`}
                                key={index2}
                                onClick={handleClose}
                              >
                                <li className="dropdown_item-1">
                                  {item2.categoryName}
                                </li>
                              </Link>
                            ))}
                          {item.categoryName === "نبض المجتمع" &&
                            item.childCategories.map((item2, index2) => (
                              <Link
                                to={`/podcast/${item2._id}`}
                                key={index2}
                                onClick={handleClose}
                              >
                                <li className="dropdown_item-1">
                                  {item2.categoryName}
                                </li>
                              </Link>
                            ))}
                        </ul>
                      </li>
                    ))}
                </div>
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
      </Container>
    </div>
  );
};

export default LowerNavbar;
