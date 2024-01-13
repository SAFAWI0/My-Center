import { Link } from "react-router-dom";
import "./gridProducts.css";
import { GoArrowLeft } from "react-icons/go";
import { SlActionUndo } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { products } from "../../fake";

export const GridProducts = () => {
  return (
    <div style={{ marginBottom: "12px" }}>
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
        <ul>
          {products.map((el, i) => (
            <li key={i}>
              <div className="grid-list-products">
                <div className="grid-imag-product">
                  <img className="backgrond" src={el.background} />
                </div>
                <div className="grid-title-product">
                  <span>{el.name}</span>
                  <p className="evaluation">
                    {el.description}
                    <SlActionUndo
                      style={{ color: "#666", marginRight: "6px" }}
                    />
                  </p>
                  <p className="evaluation">
                    <FaStar style={{ color: "gold" }} />
                    {el.evaluation}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
