import "./card.css";
import { FaStar } from "react-icons/fa";
import { SlActionUndo } from "react-icons/sl";
import { products } from "../../fake";
import { HiMiniScissors } from "react-icons/hi2";
import Centercard from "../Centercard/centercard";
export const Card = () => {
  return (
    <div>
      <div className="list-item">
        <div className="title">
          <HiMiniScissors style={{ marginBottom: "12px" }} />
          <p> ... المراكز</p>
          </div> 
          <Centercard/>
       
        {/* {products.map((el, i) => (
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
        ))} */}
        
      </div>
    </div>
  );
};
