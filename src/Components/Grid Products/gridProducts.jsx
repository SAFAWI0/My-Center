import { Link } from "react-router-dom";
import "./gridProducts.css";
import { GoArrowLeft } from "react-icons/go";
import { SlActionUndo } from "react-icons/sl";
import { FaStar } from "react-icons/fa";

export const GridProducts = () => {
  return (
    <div>
      <div className="grid-more">
        <div className="grid-content">
          <Link>
            <GoArrowLeft /> <p>المزيد</p>
          </Link>
          <div className="grid-description">
            <span>
              <p>مواد تجميل حديثة و مطورة</p>
            </span>
            <p>المركز جميل ويحتوي ع جميع الاجهزة</p>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="grid-list-products">
          <div className="grid-imag-product">
            <img className="backgrond" src="https://picsum.photos/907/908" />
          </div>
          <div className="grid-title-product">
            <span>Beauty</span>
            <p className="evaluation">
              center is good
              <SlActionUndo style={{ color: "#666", marginRight: "6px" }} />
            </p>
            <p className="evaluation">
              <FaStar style={{ color: "gold" }} />
              4.5
            </p>
          </div>
        </div>

        <div className="grid-list-products">
          <div className="grid-imag-product">
            <img className="backgrond" src="https://picsum.photos/907/908" />
          </div>
          <div className="grid-title-product">
            <span>Beauty</span>
            <p className="evaluation">
              center is good
              <SlActionUndo style={{ color: "#666", marginRight: "6px" }} />
            </p>
            <p className="evaluation">
              <FaStar style={{ color: "gold" }} />
              4.5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
