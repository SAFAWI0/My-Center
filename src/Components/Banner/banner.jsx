import "./banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";

const BannerSlider = () => {
  const [value, setValue] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const getData = () => {
    var requestOptions = {
      method: "GET",
    };

    fetch(
      "https://my-center-api.onrender.com/api/v1/advertisements/show",
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
    <div className="app-banner">
      <Slider {...settings}>
        {value.map((el, index) => (
          <div key={index}>
            <img src={el.img} alt="bannar-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
