import "./categoriesPage.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Container from "../Container/container";
import Header from "../Header/header";

export const CategoriesPage = () => {
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://my-center-api.onrender.com/api/v1/centers/getCentersByCat?cat=${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setValue(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <div className="categoriesPage">
          {value.map((el, i) => (
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
      </Container>
    </div>
  );
};
