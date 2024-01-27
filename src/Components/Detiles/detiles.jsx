import "./detiles.css";
import { FaStar } from "react-icons/fa";
import cover from "../../assets/barbie.jpg";
import { useParams } from "react-router-dom";
import Container from "../Container/container";
import Header from "../Header/header";
import { detiles } from "../../fake";

export const Detiles = () => {
  const { id } = useParams();

  const handleConfirm = async () => {
    console.log(detiles)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      items: {detiles},
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/v1/orders/add", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Header />
      <Container>
        {detiles.map((el, i) => (
          <div key={i} className="detiles">
            <img src={el.img} className="cover" />
            <h3 className="name">ابتسامة هوليود</h3>

            <div className="subdis">
              <div className="num">
                <p>{el.time}</p>
                <span>: الوقت الجلسة</span>
              </div>
              <div className="num">
                <p>{el.numSs}</p>
                <span> : عدد الجلسات</span>
              </div>
              <div className="num">
                <p>{Number(el.price).toLocaleString("en")}</p>
                <span> : السعر</span>
              </div>
            </div>

            <p className="detils">{el.description}</p>
            <div className="videobox">
              <iframe src={el.video} title="YouTube video player"></iframe>
            </div>
            <button className="butt" onClick={handleConfirm}>
              حجز الجلسة
            </button>
          </div>
        ))}
      </Container>
    </div>
  );
};
