import { useState } from "react";
import "./registerScreen.css";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Container from "../../Components/Container/container";
import coverImage from '../../assets/logo.png';

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
    <div className="RegisterScreen">
      <div className="loginScreen">
        <Container>
          <p className="nameLogo">My Center</p>
          <p className="title">
            {" "}
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
            <button className="signUp">Sign up</button>
          </div>
        </Container>
      </div>

      <div className="login">
        <p>
          Have an account ?{" "}
          <a href="/">
            <span>Log in</span>
          </a>{" "}
        </p>
      </div>
      <div className="logo">
        <img src={coverImage}></img>
        
      </div>
    </div>
  );
};

export default RegisterScreen;
