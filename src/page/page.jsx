import "./page.css";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Container from "../Components/Container/container";
import { Sessioncard } from "../Components/Sessioncard/sessioncard";
import Header from "../Components/Header/header";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import Map from "../Components/map/map";

//AIzaSyDvkL52hVjmqVc8kIIE3yLMHC-sf9Lsw6w
export const Page = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <Container>
        <div className="page-content">
          <div className="image">
            <img className="background" src="https://picsum.photos/900/800" />
            <div className="content">
              <h1>Beauty</h1>
              <img className="logo" src="https://picsum.photos/900/900" />
            </div>
          </div>
          <div className="line" />
          <div className="details">
            <div className="content" style={{ height: "0" }}>
              <div className="phone">
                <FaPhoneVolume className="icon" />
                <span>078215555855</span>
              </div>
              <div className="eval">
                <FaStar style={{ color: "gold" }} />
                <p>
                  تقييم المركز: <b> 5.2</b>
                </p>
              </div>
            </div>
            <div className="description">
              <p>
                تموج بجمال العناية والتألق في مركزنا الفاخر للتجميل والعناية
                بالبشرة. نقدم تجربة فريدة ومخصصة لتحسين جمالك الطبيعي ورفع
                معنوياتك. يعكس مركزنا التزامًا بتقديم أعلى مستويات الخدمة، حيث
                يتميز بفريق متخصص من الخبراء وأحدث التقنيات
              </p>
            </div>

            <div className="content-center">
              <div className="work-time">
                <p className="title">الاحد الاثنين الثلاثاء الاربعاء</p>
                <div className="day">
                  <p>:أوقات دوام المركز</p>
                  <FaRegCalendarDays className="icon" />
                </div>
              </div>

              <Map />
              <div className="map-container">
                <p>موقع المركز</p>
                <FaMapMarkerAlt className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="line" />
        <Sessioncard />
      </Container>
    </div>
  );
};
