import "./categories.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Categories = () => {
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
              <Link to={`/categoriesPage/${el.cat_id}`}>
                <div className="category-item">
                  <img src={el.img} />
                  <p>{el.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="line" />
      </div>
    </div>
  );
};
