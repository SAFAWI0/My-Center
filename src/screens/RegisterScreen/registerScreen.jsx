import { useState } from "react";
import "./registerScreen.css";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Container from "../../Components/Container/container";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFieldEmpty, setPasswordFieldEmpty] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name,
      phone,
      email,
      password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://my-center-api.onrender.com/api/v1/user/regster",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          result.success;
          alert("success");
          navigate("/Login");
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

  return (
    <div className="registerScreen">
      <Container>
        <div
          className="registerPart"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSignup();
            }
          }}
        >
          <p className="logoName">My Center</p>
          <p className="title">
            Sign up to see all the discounts and new offers
          </p>
          <div className="form">
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password">
              <input
                placeholder="Password"
                value={password}
                type={showPassword ? "text" : "password"}
                onChange={handlePasswordInputChange}
              />

              {!passwordFieldEmpty && (
                <button className="showPass" onClick={handleShowPassword}>
                  {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                </button>
              )}
            </div>
            <button onClick={handleSignup}>Sign up</button>
          </div>
        </div>
        <div className="loginPart">
          <p>
            Have an account ?
            <a href="login">
              <span> Log in</span>
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default RegisterScreen;
