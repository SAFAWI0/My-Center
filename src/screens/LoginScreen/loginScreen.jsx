import "./loginScreen.css";
import { useState } from "react";
import Container from "../../Components/Container/container";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFieldEmpty, setPasswordFieldEmpty] = useState(true);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [email, estEmail] = useState([]);

  const handleLogin = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      // name: inputValue && inputValue.includes('@') ? '' : inputValue,
      // email: inputValue && inputValue.includes('@') ? inputValue : '',
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
      "https://my-center-api.onrender.com/api/v1/user/login",
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








// const safaa =()=>{
  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  
  // var raw = JSON.stringify({
  //   email: inputValue && inputValue.includes('@') ? inputValue : '',
  // });
  
  // var requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: raw,
  // };
  
  // fetch("http://localhost:3000/api/v1/user/filter", requestOptions)
  //   .then(response => response.json())
  //   .then(result => setInf(result))
  //   .catch(error => console.log('error', error));

// }


  










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
              <p>{inputValue}</p>
          <p className="logoName">My Center</p>
          <div className="form">
            <input
              placeholder="Email or Full Name"
              value={inputValue}
              onChange={handleInputChange}
            />


          <input
              value={email}
              onChange={(e) => estEmail(e.target.value)}
            />


<button onClick={safaa}>saaa</button>






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
      {contextHolder}
    </div>
  );
};

export default LoginScreen;
