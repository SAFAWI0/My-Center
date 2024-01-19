import React from "react";
import "./sessioncard.css";
import covere from "../../assets/facebook.png";
import { FaStar } from "react-icons/fa";
import LikeButton from "../Likebutton/Like";
import Container from "../Container/container";
import { Link } from "react-router-dom";
import { HomeScreen } from "../../screens/HomeScreen/homeScreen";
//import { Link } from "react-router-dom";
//import detiles from "../Detiles/detiles";
//import { HomeScreen } from "../../screens/HomeScreen/homeScreen";

export const Sessioncard = () => {
  return (
    <div>
      <Container>
        <div className="content">
          <div className="coverblock">
            <Link to={HomeScreen}> hhhhh</Link>
          
             <img src={covere} className="cover" />
          </div>
          <div className="like">
            <LikeButton />
          </div>
          <div className="foot">
            <div className="left">
              <h2>اسم الجلسة المباركه</h2>
              <div className="reting">
                <FaStar style={{ color: "gold" }} />

                <span>2.5</span>
              </div>
            </div>
            <div className="right">
              <h2>السعر</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
