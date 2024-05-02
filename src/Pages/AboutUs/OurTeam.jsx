import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./OurTeam.css";
import { useDispatch, useSelector } from "react-redux";
import { team } from "../../redux/slice/teamSlice";
import { IMAGE_PATH } from "../../Utils/utils";
import { FaXTwitter } from "react-icons/fa6";

const OurTeam = () => {
  const dispatch = useDispatch();
  const { totalTeam } = useSelector((state) => state.team);

  useEffect(() => {
   
    dispatch(team());
  }, []);
  // console.log(totalTeam, "team");
  return (
    <div className="our-team">
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5 mb-3">
        <h1 className="m-0 py-3">فريقنا</h1>
      </div>
      <div className="container pb-5 pt-3">
        <div className="row gy-4">
          {totalTeam?.map((person) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Card className="p-3 d-flex justify-content-center align-items-center">
                <Card.Img
                  variant="top"
                  src={`${IMAGE_PATH}${person.profilePic}`}
                  className="rounded-circle"
                  style={{ height: "200px", width: "200px" }}
                />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title>{person.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {person?.designation}
                  </Card.Subtitle>

                  {person.twitter_url && <Link to={person?.twitter_url} className="text-dark">
                  <FaXTwitter />
                  </Link>}
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
