import "./detiles.css";
import { FaStar } from "react-icons/fa";
import cover from "../../assets/barbie.jpg";
import { useParams } from "react-router-dom";
import Container from "../Container/container";
import Header from "../Header/header";

export const Detiles = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <Container>
        <div className="detiles">
          <img src={cover} className="cover" />
          <h3 className="name">ابتسامة هوليود</h3>

          <div className="subdis">
            <div className="num">
              <p>1 h</p>
              <span>: الوقت الجلسة</span>
            </div>
            <div className="num">
              <p>5</p>
              <span> : عدد الجلسات</span>
            </div>
            <div className="num">
              <p>10,000</p>
              <span> : السعر</span>
            </div>
          </div>

          <p className="detils">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            labore neque ipsa est, officia modi dicta quidem itaque distinctio
            animi voluptas veniam, nobis vero corrupti sapiente dolorem
            perspiciatis? Voluptate,
          </p>
          <div className="videobox">
            <iframe
              src="https://www.youtube.com/embed/xNRJwmlRBNU?si=LADecAmprD-IGUch"
              title="YouTube video player"
            ></iframe>
          </div>
          <button className="butt">حجز الجلسة</button>
        </div>
      </Container>
    </div>
  );
};
