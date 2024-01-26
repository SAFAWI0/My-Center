import "./banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../fake";
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
    autoplay: true, // تفعيل التشغيل التلقائي
    autoplaySpeed: 5000, // فترة التأخير بين الصور بالميللي ثانية (هنا5 ثوانٍ)
  };

  const getData = () => {
    var requestOptions = {
      method: "GET",
    };

    fetch("http://localhost:3000/api/v1/advertisements/show", requestOptions)
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
