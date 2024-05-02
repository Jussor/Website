import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img from "../../assets/person.jpg"
import img1 from "../../assets/person1.jpeg"
import img2 from "../../assets/person2.jpeg"
import img3 from "../../assets/person3.jpeg"
import img4 from "../../assets/person4.jpeg"
import { Link } from "react-router-dom";
import "./OurTeam.css"
import { useDispatch, useSelector } from "react-redux";
import {team} from "../../redux/slice/teamSlice";
import { IMAGE_PATH } from "../../Utils/utils"; 

const OurTeam = () => {
  const dispatch = useDispatch();
  // const  Team  = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(team());
  }, []);
  console.log(team)
  // const team = [
  //   {
  //     imgurl:img1,
  //     name: "هديل عويس ",
  //     status: "رئيس التحرير",
  //     icon: "/https://twitter.com/hadeelOueiss",
  //     socialicon:<FaXTwitter/>
  //   },
  //   {
  //       imgurl:img2,
  //       name: "رئيس التحرير",
  //       status: "كاتب ومحلل سياسي",
  //       icon: "/",
  //     },
  //     {
  //       imgurl:img3,
  //       name: "حمادة عبدالوهاب ",
  //       status: "محرر وصحفي ",
  //       icon: "/",
  //     },
  //     {
  //       imgurl:img4,
  //       name: "أبانوب نبيل فكري حبيب",
  //       status: "محرر فيديو",
  //       icon: "/",
        

  //     }
  // ];
  return (
    <div className="our-team">
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5 mb-3">
            <h1 className="m-0 py-3">فريقنا</h1>
        </div>
        <div className="container pb-5 pt-3">
      <div className="row gy-4">
        {team?.map((person) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card className="p-3 d-flex justify-content-center align-items-center">
              <Card.Img variant="top" src={person.imgurl}  className="rounded-circle" style={{height:"200px", width: "200px"}}/>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>{person.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{person.status}</Card.Subtitle>
                
                <Link to={person.icon} className="text-dark">
             {person.socialicon}
            </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OurTeam;
