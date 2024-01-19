import "./loginScreen.css";
import { useState } from "react";
import Container from "../../Components/Container/container";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFieldEmpty, setPasswordFieldEmpty] = useState(true);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();
  const [password, setPassword] = useState("");
  const { setIsLogin } = useAppStore();

  const handleLogin = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name:inputValue,
      email:inputValue,
      password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://my-center-api.onrender.com/api/v1/user/login",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setIsLogin(true);
          localStorage.setItem("Token", result.token);
          navigate("/");
        } else {
          alert(result.msg);
        }
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
          <p className="logoName">My Center</p>
          <div className="form">
            <input
              placeholder="Email or Full Name"
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
            <a href="Register">
              <span> Sign up</span>
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LoginScreen;
