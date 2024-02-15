import "./detiles.css";
import { useParams } from "react-router-dom";
import Container from "../Container/container";
import Header from "../Header/header";
import { Modal, message } from "antd";
import { useEffect, useState } from "react";

export const Detiles = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState([]);

  const handleOk = () => {
    if (!name || !phone) {
      messageApi.open({
        type: "warning",
        content: "ادخل اسمك و رقم الهاتف",
      });
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      items: { value },
      phone,
      name,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://my-center-api.onrender.com/api/v1/orders/add",
      requestOptions
    )
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

  const getData = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://my-center-api.onrender.com/api/v1/sessions/show/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setValue(result))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        {value.map((el, i) => (
          <div key={i} className="detiles">
            <div className="name-imag">
              <img src={el.img} className="cover" />
              <h3 className="name">{el.ses_name} </h3>
            </div>
            <div className="subdis">
              <div className="num">
                <p>{el.session_time}</p>
                <span>: الوقت الجلسة</span>
              </div>
              <div className="num">
                <p>{el.nu_ssession}</p>
                <span> : عدد الجلسات</span>
              </div>
              <div className="num">
                <p>{Number(el.price).toLocaleString("en")}</p>
                <span> : السعر</span>
              </div>
            </div>
            <p className="detils">{el.details}</p>
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
              placeholder=""
            />
            <p> رقم الهاتف</p>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder=" "
            />
          </div>
        </Modal>
        {contextHolder}
      </Container>
    </div>
  );
};
