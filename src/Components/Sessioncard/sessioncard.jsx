import "./sessioncard.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Sessioncard = ({ id }) => {
  const [value, setValue] = useState([]);
  const getData = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://my-center-api.onrender.com/api/v1/sessions/show/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setValue(result))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Sessioncard">
      {value.map((el, i) => (
        <div key={i} className="card">
          <div className="cover">
            <img src={el.img} />
          </div>
          <Link to={`/Detiles/${el.center_id}`}>
            <div className="detile">
              <span>!</span>
              <p>تفاصيل أو الحجز </p>
            </div>
          </Link>
          <div className="title">
            <div className="titleNa">
              <div className="eval">
                <FaStar style={{ color: "gold" }} />
                <span>{el.evaluation}</span>
              </div>
              <h2>{el.ses_name}</h2>
            </div>
            <div className="price">
              <span>{Number(el.price).toLocaleString("en")}</span>
              <p>: السعر </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
