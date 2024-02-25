import "./support.css";
import Header from "../Header/header";
import Container from "../Container/container";
import { useState } from "react";
import { message } from "antd";
import { Link } from "react-router-dom";

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
      messages,
      name,
      email,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:3000/api/v1/support/add", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
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
