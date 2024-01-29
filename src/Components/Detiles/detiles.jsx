import "./detiles.css";
import { FaStar } from "react-icons/fa";
import cover from "../../assets/barbie.jpg";
import { useParams } from "react-router-dom";
import Container from "../Container/container";
import Header from "../Header/header";
import { detiles } from "../../fake";
import { Modal, message } from "antd";
import { useState } from "react";

export const Detiles = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleOk = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      items: { detiles },
      phone,
      name,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/v1/orders/add", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        //success
        messageApi.open({
          type: "success",
          content: "تم الحجز",
        });
        setIsModalOpen(false);
      })
      .catch((error) => console.log("error", error));
  };
  const handleConfirm = () => {
    setIsModalOpen(true);
    setName("");
    setPhone("");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="modal">
            <p>الاسم الكامل</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="الاسم الثلاثي الكامل"
            />
            <p> رقم الهاتف</p>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="رقم الهاتف"
            />
          </div>
        </Modal>
        {contextHolder}
      </Container>
    </div>
  );
};
