import "./sessioncard.css";
import covere from "../../assets/barbie.jpg";
import { FaStar } from "react-icons/fa";
import LikeButton from "../Likebutton/Like";
import { Link } from "react-router-dom";
import { Detiles } from "../Detiles/detiles";

export const Sessioncard = () => {
  return (
    <div className="Sessioncard">
      <div className="card">
        <div className="cover">
          <img src={covere} />
        </div>

        <Link to={`/Detiles/${1}`}>
          <div className="detile">
            <span>!</span>
            <p>تفاصيل أو الحجز </p>
          </div>
        </Link>

        <div className="title">
          <div className="titleNa">
            <div className="eval">
              <FaStar style={{ color: "gold" }} />
              <span>2.5</span>
            </div>
            <h2>اسم الجلسة المباركه</h2>
          </div>

          <div className="price">
            <span>10,000$</span>
            <p>: السعر </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="cover">
          <img src={covere} />
        </div>

        <Link to={`/Detiles/${1}`}>
          <div className="detile">
            <span>!</span>
            <p>تفاصيل أو الحجز </p>
          </div>
        </Link>

        <div className="title">
          <div className="titleNa">
            <div className="eval">
              <FaStar style={{ color: "gold" }} />
              <span>2.5</span>
            </div>
            <h2>اسم الجلسة المباركه</h2>
          </div>

          <div className="price">
            <span>10,000$</span>
            <p>: السعر </p>
          </div>
        </div>
      </div>
    </div>
  );
};
