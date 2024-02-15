import "./loginScreen.css";
import { useState } from "react";
import Container from "../../Components/Container/container";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { useAppStore } from "../../store";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFieldEmpty, setPasswordFieldEmpty] = useState(true);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const { inf, setInf } = useAppStore();
  const handleLogin = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: inputValue,
      password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      " https://my-center-api.onrender.com/api/v1/user/login",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          localStorage.setItem("Token", result.token);
          navigate("/");
          setLoading(false);
        } else {
          //waring
          messageApi.open({
            type: "warning",
            content: result.msg,
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        //error
        messageApi.open({
          type: "error",
          content: "something wrong...",
        });
        setLoading(false);
        console.log("error", error);
      });

    var myHeadersD = new Headers();
    myHeadersD.append("Content-Type", "application/json");

    var rawD = JSON.stringify({
      email: inputValue,
    });

    var requestOptionsD = {
      method: "POST",
      headers: myHeadersD,
      body: rawD,
    };

    fetch(
      "https://my-center-api.onrender.com/api/v1/user/filter",
      requestOptionsD
    )
      .then((response) => response.json())
      .then((result) => {
        setInf(result);
        console.log(inf);
      })
      .catch((error) => console.log("error", error));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordInputChange = (e) => {
    setPasswordFieldEmpty(e.target.value === "");
    setPassword(e.target.value);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="loginScreen">
      <Container>
        <div
          className="loginPart"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        >
          <div className={`loginScreen ${loading ? "loading-screen" : ""}`}>
            {loading && (
              <div className="loading-indicator">
                <span className="loader"></span>
              </div>
            )}
          </div>
          <p className="logoName">My Center</p>
          <div className="form">
            <input
              placeholder="Enter your Email"
              value={inputValue}
              onChange={handleInputChange}
            />

            <div className="password">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordInputChange}
              />
              {!passwordFieldEmpty && (
                <button className="showPass" onClick={handleShowPassword}>
                  {showPassword ? <p>Hide</p> : <p>Show</p>}
                </button>
              )}
            </div>

            <button onClick={handleLogin}>Logn in</button>
          </div>
        </div>
        <div className="registerPart">
          <p>
            Don't have an account?
            <Link to="/register">
              <span> Sign up</span>
            </Link>
          </p>
        </div>
      </Container>
      {contextHolder}
    </div>
  );
};

export default LoginScreen;
