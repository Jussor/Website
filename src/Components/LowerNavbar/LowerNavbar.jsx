import React, { useState, useEffect } from "react";
import "./LowerNavbar.css";
import { Container, Offcanvas } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import logo from "../../../public/Home/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { category } from "../../redux/slice/categorySlice";
const LowerNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //GET DATA FROM REDUX
  const { categorySuccess, categoryError } = useSelector(
    (state) => state.category
  );
  //VARIABLE
  const dispatch = useDispatch();
  //useEffect
  useEffect(() => {
    dispatch(category());
  }, []);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searchPost")
  };


  return (
    <div className="lower-navbar">
      <Container>
        <nav className="d-flex justify-content-between align-items-center">
          

          <div className="right-lower-nav d-flex align-items-center gap-2">
            <Link to="/">
              <img src={logo}></img>
            </Link>
            <span className="toggle-btn d-lg-none" onClick={handleShow}>
              <IoIosMenu />
            </span>
          </div>
          <div className="middle-lower-nav d-none d-lg-flex gap-4">
            {categorySuccess &&
              categorySuccess.map((item, index) => (
                <li className="dropdown dropdown-5 p-0" key={index}>
                  <ul className="dropdown_menu dropdown_menu-5 p-0">
                    {item.categoryName === "سياسة" &&
                      item.childCategories.map((item2, index2) => (
                        <Link
                          to={`/podcast/${item2._id}`}
                          key={index2} >
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
                        >
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
              ))}
          </div>
          <form className="left-lower-nav" onSubmit={handleSubmit}>
            <div className="d-flex gap-2 ">

              <input type="text" placeholder="أخبار البحث" required />
              <button type="submit" onClick={() => handleSubmit} style={{ border: "none", background: "transparent", color: "white" }}>
                <CiSearch />
              </button>
            </div>
          </form>

          <Offcanvas
            show={show}
            className="h-100"
            onHide={handleClose}
            placement="top"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <div className="offcanvas-links">
                {categorySuccess &&
                  categorySuccess.map((item, index) => (
                    <li className="dropdown dropdown-5 p-0" key={index}>
                      <div className="iconDrop">
                        <div className="dropText">
                          <Link to={`/podcast/${item._id}`} onClick={handleClose}>
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
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
      </Container>
    </div>
  );
};
export default LowerNavbar;
