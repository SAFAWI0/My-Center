import "./card.css";
import { FaStar } from "react-icons/fa";
import { SlActionUndo } from "react-icons/sl";
import { products } from "../../fake";

export const Card = () => {
  return (
    <div>
      <div className="list-item">
        {products.map((el, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <a href={`${el.id}`}>
              <div className="imag-item">
                <img className="backgrond" src={el.background} />
                <img className="logo" src={el.logo} />
              </div>
              <div className="title-item">
                <span>{el.name}</span>
                <p className="evaluation">
                  {el.description}
                  <SlActionUndo style={{ color: "#666", marginRight: "6px" }} />
                </p>
                <p className="evaluation">
                  <FaStar style={{ color: "gold" }} />
                  {el.evaluation}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
