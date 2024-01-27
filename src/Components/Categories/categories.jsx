import "./categories.css";
import { cate } from "../../fake";
import { useState } from "react";
import { useEffect } from "react";

export const Categories = ({ onCategoryClick }) => {
  const [value, setValue] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://my-center-api.onrender.com/api/v1/categories/show",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setValue(result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="categories">
        <ul>
          {value.map((el, i) => (
            <li key={i}>
              <div
                className="category-item"
                onClick={() => onCategoryClick(el.cat_id)}
              >
                <img src={el.img} />
                <p>{el.name}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="line" />
      </div>
    </div>
  );
};
