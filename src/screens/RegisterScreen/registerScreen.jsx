import { useState } from "react";
import "./registerScreen.css";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Container from "../../Components/Container/container";

const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFieldEmpty, setPasswordFieldEmpty] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordInputChange = (e) => {
    setPasswordFieldEmpty(e.target.value === "");
  };

  return (
    <div className="registerScreen">
      <Container>
        <div className="registerPart">
          <p className="logoName">My Center</p>
          <p className="title">
            Sign up to see all the discounts and new offers
          </p>
          <div className="form">
            <input placeholder="Full Name" />
            <input placeholder="Mobile Number" />
            <input placeholder="Email" />
            <div className="password">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                onChange={handlePasswordInputChange}
              />
              {!passwordFieldEmpty && (
                <button className="showPass" onClick={handleShowPassword}>
                  {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                </button>
              )}
            </div>
            <button>Sign up</button>
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
