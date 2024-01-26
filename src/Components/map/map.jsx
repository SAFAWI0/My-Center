import "./map.css";
import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = React.useRef(null);
  // const [coordinates, setCoordinates] = useState({ lat: 33.31525, lng: 44.37535 });
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyDvkL52hVjmqVc8kIIE3yLMHC-sf9Lsw6w", // قم بتعيين مفتاح API الخاص بك هنا
        version: "weekly", // يمكنك تحديد إصدار محدد إذا كنت ترغب
      });

      loader.load().then(() => {
        // إعداد الخريطة بعد تحميل ال API
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 33.31525, lng: 44.37535 }, // تحديد الموقع الابتدائي للخريطة
          zoom: 12, // تحديد التكبير الابتدائي
          disableDefaultUI: true,
          
            // يمكنك إضافة المزيد من الأنماط حسب احتياجاتك
            styles: [
              {
                featureType: "all",
                elementType: "all",
                stylers: [
                  { saturation: -100 },
                  { lightness: 100 },
                ],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                  { color: "red" },
                ],
              },
              {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [
                  { color: "#111" },
                ],
              },
            ],
          });

       
      });
    };

    initMap();
  }, []);

  return <div className="map" ref={mapRef}></div>;
};

export default Map;
