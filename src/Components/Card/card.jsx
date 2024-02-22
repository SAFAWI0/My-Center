import "./card.css";
import { FaStar } from "react-icons/fa";
import { HiMiniScissors } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";

export const Card = () => {
  const [products, setProducts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
    };
    fetch(
      "https://my-center-api.onrender.com/api/v1/centers/show?limit=4",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="list-item">
        <div className="content">
          <Link to={"/centers"}>
            <div className="more">
              <HiArrowLeft />
              <span>المزيد</span>
            </div>
          </Link>
          <div className="title">
            <HiMiniScissors style={{ marginBottom: "12px" }} />
            <p> ... المراكز</p>
          </div>
        </div>
        {products.map((el, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <Link to={`/page/${el.center_id}`}>
              <div className="imag-item">
                <img className="backgrond" src={el.cover_img} />
                <img className="logo" src={el.logo} />
              </div>
              <div className="details-item">
                <span>{el.center_name}</span>
                <p> {el.details}</p>
                <div className="evaluation">
                  <p>{el.evaluation}</p>
                  <FaStar style={{ color: "gold" }} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: "100px" }} />
    </div>
  );
};
