import "./categories.css";
import { cate } from "../../fake";
import { useState } from "react";
import { useEffect } from "react";
import { useAppStore } from "../../store";

export const Categories = () => {
  const [value, setValue] = useState([]);
  const {s, setS} = useAppStore();
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

 console.log("safaa",s)
  return (
    <div>
      <div className="categories">
        <ul>
          {value.map((el, i) => (
            <li key={i}>
              <div className="category-item"
               onClick={()=>setS(el.cat_id)}
              >
                <img src={el.img} />
                <h1>{el.name}</h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
