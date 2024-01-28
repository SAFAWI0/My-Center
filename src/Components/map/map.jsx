import "./map.css";
import { useState } from "react";

const Map = () => {
  // قيم الإحداثيات يتم تعيينها يدويًا
  const [coordinates] = useState({ lat: 33.123, lng: 44.567 });

  return (
    <div className="map">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!...&ll=${coordinates.lat},${coordinates.lng}`}
        width="100%"
        height="250px"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
