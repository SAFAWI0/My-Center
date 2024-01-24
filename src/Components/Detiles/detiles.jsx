import "./detiles.css";
import { FaStar } from "react-icons/fa";
import cover from "../../assets/barbie.jpg";


import Container from "../Container/container";
import Header from "../Header/header";



export const Detiles = () => {
  const url ="https://www.youtube.com/watch?v=5gO0xpY_Y3E&ab_channel=dhePerissann";
  return (
    <div>
      <Header />
      <Container>
        <div className="contentes">
          <img src={cover} className="cover" />
          <h1 className="name">ابتسامة هوليود rly</h1>
          <div className="discrept">
            <div className="reting">
              <FaStar style={{ color: "gold" }} />
              <span>2.5</span>
            </div>
            <div className="subdis">
              <h5 className="time">
                وقت الجلسه: <span>1 ساعة</span>
              </h5>
              <h5 className="num">
                عدد الجلسات: <span>1</span>
              </h5>
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
              width="100%"
              height="100%"
              src="https://www.youtube.com/watch?v=5gO0xpY_Y3E&ab_channel=dhePerissann"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <button className="button-8">حجز الجلسه</button>
        </div>
      </Container>
    </div>
  );
};
