import Container from "../Container/container";
import "./banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../fake";
const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // تفعيل التشغيل التلقائي
    autoplaySpeed: 5000, // فترة التأخير بين الصور بالميللي ثانية (هنا 3 ثوانٍ)
  };

  return (
    <Container>
      <div className="app-banner">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image}  />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default BannerSlider;
