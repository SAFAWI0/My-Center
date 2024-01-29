import "./page.css";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Container from "../Components/Container/container";
import { Sessioncard } from "../Components/Sessioncard/sessioncard";
import Header from "../Components/Header/header";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useEffect, useState } from "react";

export const Page = () => {
  const { id } = useParams();
  const [value, setValue] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://localhost:3000/api/v1/centers/getCentersById/${id}`,
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
      <Header />
      <Container>
        <div className="page-content">
          {value.map((el, i) => (
            <div key={i}>
              <div className="image">
                <img className="background" src={el.cover_img} />
                <div className="content">
                  <img className="logo" src={el.logo} />
                  <p>{el.center_name}</p>
                </div>
              </div>
              <div className="line" />
              <div className="details">
                <div className="content" style={{ height: "0" }}>
                  <div className="phone">
                    <FaPhoneVolume className="icon" />
                    <span>{el.phone}</span>
                  </div>
                  <div className="eval">
                    <FaStar style={{ color: "gold", marginBottom: "2px" }} />
                    <p>
                      تقييم المركز: <b> {el.evaluation}</b>
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p>{el.details}</p>
                </div>

                <div className="content-center">
                  <div className="map-container">
                    <p> {el.write_website}</p>
                    <FaMapMarkerAlt className="icon" />
                  </div>
                  <div className="work-time">
                    <div className="day">
                      <p>:أوقات دوام المركز</p>
                      <FaRegCalendarDays className="icon" />
                    </div>
                    <p className="title"> {el.work_time} </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="line" />
        <Sessioncard />
      </Container>
    </div>
  );
};
