import { Link } from "react-router-dom";
import "./gridItems.css";
import { GoArrowLeft } from "react-icons/go";
import { SlActionUndo } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { products } from "../../fake";

export const GridItems = () => {
  return (
    <div>
      <div className="grid-more">
        <div className="grid-content">
          <Link>
            <GoArrowLeft /> <p>المزيد</p>
          </Link>
          <div className="grid-description">
            <span>مواد تجميل حديثة و مطورة</span>
            <p>المركز جميل ويحتوي ع جميع الاجهزة</p>
          </div>
        </div>
      </div>

      <div className="grid">
        <ul>
          {products.map((el, i) => (
            <li key={i}>
              <div className="grid-list-items">
                <a href={`${el.id}`}>
                  <div className="grid-imag-items">
                    <img className="backgrond" src={el.background} />
                  </div>
                  <div className="grid-title-items">
                    <span>{el.name}</span>
                    <div className="evaluation">
                      <p>{el.description} </p>
                      <SlActionUndo style={{ color: "#666", marginRight: "6px" }}/>
                    </div>
                    {/* <p className="evaluation">
                      <FaStar style={{ color: "gold" }} />
                      {el.evaluation}
                    </p> */}
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
