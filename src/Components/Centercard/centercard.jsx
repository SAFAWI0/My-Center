import "./centercard.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { products } from "../../fake";

const Centercard = () => {
  return (
    <div>
      <div className="centercard">
        {products.map((el, i) => (
          <div key={i} className="card">
            <Link to={`${el.id}`}>
              <img src={el.background} className="card__image" alt="" />
            </Link>
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src={el.logo} alt="" />
                <div className="card__headertext">
                  <h3 className="card__title">{el.name}</h3>
                  <span className="card__status">Baghdad</span>
                </div>
              </div>
              <p className="card__description">{el.description}</p>
              <p className="evaluation">
                <FaStar style={{ color: "gold" }} />
                <span className="evl">{el.evaluation}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Centercard;
