import "./support.css";
import Header from "../Header/header";
import Container from "../Container/container";
import { useState } from "react";
import { message } from "antd";
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";

export const Support = () => {
  const [messages, setMessages] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = () => {
    if (!message || !name || !email) {
      messageApi.open({
        type: "warning",
        content: "Please fill in all fields",
      });
      return;
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      message: messages,
      name,
      email,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(
      "https://my-center-api.onrender.com/api/v1/support/add",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        //success
        messageApi.open({
          type: "success",
          content: "سيتم التواصل معك في اقرب وقت",
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Header />
      <div className="support">
        <Container>
          <div className="message">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                placeholder="الاسم المستخدم"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                placeholder=" الايميل المسختدم"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                placeholder="ما المشكلة التي تواجها ؟"
                id="message"
                name="message"
                value={messages}
                onChange={(e) => setMessages(e.target.value)}
              />
            </div>

            <button type="submit" className="buttSubmit" onClick={handleSubmit}>
              Send
            </button>
          </div>

          <div className="call">
            <div className="contentCall">
              <span>أتصل على الرقم </span>
              <div className="number">
                <MdAddIcCall className="icon" />
                <Link to="tel:07828847962">07828847962</Link>
              </div>
            </div>
          </div>

          {contextHolder}
        </Container>
      </div>
    </div>
  );
};
