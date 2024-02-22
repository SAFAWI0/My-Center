import "./centerPage.css";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Container from "../Container/container";
import { Sessioncard } from "../Sessioncard/sessioncard";
import Header from "../Header/header";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { ButtSave } from "../ButtSave/buttSave";

export const CenterPage = () => {
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);

  const customMarkerIcon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
  });

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://my-center-api.onrender.com/api/v1/centers/getCentersById/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setValue(result);

        if (result.length > 0) {
          setLat(result[0].lat);
          setLng(result[0].lng);
        }
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
                    <FaPhoneVolume className="iconPh" />
                    <span>{el.phone}</span>
                  </div>
                  <ButtSave center={el} />
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
                <div className="map">
                  <MapContainer
                    style={{ width: "100%", height: "200px" }}
                    center={[lat, lng]}
                    zoom={15}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[lat, lng]} icon={customMarkerIcon} />
                  </MapContainer>
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
              <div className="line" />
              <Sessioncard id={el.center_id} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
