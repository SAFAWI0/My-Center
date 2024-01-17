
import "./sessioncard.css";
import covere from "../../assets/1.png";
import { CiStar } from "react-icons/ci";
import LikeButton from "../Likebutton/Like";
import Container from "../Container/container";

export const Sessioncard = () => {
  return (
    <div>
      <Container>
        <div className="contentt">
          <div className="coverblock"> <img src={covere} className="cover"></img></div>
         
          <div className="like">
            <LikeButton />
          </div>
          <div className="foot">
            <div className="left">
              <h2>اسم الجلسة المباركه</h2>
              <div className="reting">
              <CiStar className="star" /><span>2.5</span>
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
