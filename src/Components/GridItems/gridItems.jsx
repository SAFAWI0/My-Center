import "./gridItems.css";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useEffect, useState } from "react";

export const GridItems = () => {
  const [products, setProducts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
    };
    fetch(
      "https://my-center-api.onrender.com/api/v1/centers/show?limit=5",
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
      <div className="grid-more">
        <div className="grid-content">
          <Link to={"/centers"}>
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
                <div className="grid-imag-items">
                  <img className="backgrond" src={el.cover_img} />
                </div>
                <div className="grid-title-items">
                  <span>{el.center_name}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
