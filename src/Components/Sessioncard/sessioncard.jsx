import "./sessioncard.css";
import covere from "../../assets/facebook.png";
import { CiStar } from "react-icons/ci";
import LikeButton from "../Likebutton/Like";
import Container from "../Container/container";
import { Link } from "react-router-dom";
import { Detiles } from "../Detiles/detiles";

export const Sessioncard = () => {
  
  return (
    <div>
      <Container>
        <div className="contentt">
        <Link to={'/Detiles'}> 
          <div className="coverblock">
         <img src={covere} className="cover"/>
          
          </div>
          </Link>
          <div className="like">
            <LikeButton />
          </div>
          <div className="foot">
            <div className="left">
              <h2>اسم الجلسة المباركه</h2>
              <div className="reting">
                <CiStar className="star" />
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
