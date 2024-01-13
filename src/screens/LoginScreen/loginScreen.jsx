import { useState } from "react";
import Container from "../../Components/Container/container";
import "./loginScreen.css";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFieldEmpty, setPasswordFieldEmpty] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordInputChange = (e) => {
    setPasswordFieldEmpty(e.target.value === "");
  };
  return (
    <div className="loginScreen">
      <Container>
        <div className="loginPart">
          <p className="logoName">My Center</p>
          <div className="form">
            <input placeholder="Email or Full Name" />
            <div className="password">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                onChange={handlePasswordInputChange}
              />
              {!passwordFieldEmpty && (
                <button className="showPass" onClick={handleShowPassword}>
                  {showPassword ? <p>Show</p> : <p>Hide</p>}
                </button>
              )}
            </div>
            <button>Logn in</button>
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
