import "./updateUsers.css";
import { useAppStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { message } from "antd";
import Swal from "sweetalert2";
import Container from "../Container/container";
import Header from "../Header/header";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

export const UpdateUsers = () => {
  const [passwordFieldEmpty, setPasswordFieldEmpty] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { inf } = useAppStore();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    user_id: "",
  });

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo);
    }
    if (inf.length > 0) {
      const user = inf[0];
      setUserInfo({
        name: user.name,
        email: user.email,
        phone: user.phone,
        user_id: user.user_id,
      });
      localStorage.setItem("userInfo", JSON.stringify(user));
    }
  }, [inf]);

  const handleUpdate = async () => {
    if (!name || !phone || !email || !password) {
      messageApi.open({
        type: "warning",
        content: "Please fill in all fields",
      });
      return;
    }
    const result = await Swal.fire({
      title: "هل متأكد من الحفظ",
      text: "!تحتاج الى تسجيل الدخول من جديد ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!",
    });
    if (result.isConfirmed) {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          name,
          phone,
          email,
          password,
        });

        const requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
        };

        const response = await fetch(
          `https://my-center-api.onrender.com/api/v1/user/update/${userInfo.user_id}`,
          requestOptions
        );

        const data = await response.json();

        if (data.success) {
          // success
          messageApi.open({
            type: "success",
            content: "تم الحفظ بنجاح",
          });
          console.log("success: ", data);
          navigate("/login");
          localStorage.removeItem("Token");
          localStorage.removeItem("userInfo");
        } else {
          // warning
          messageApi.open({
            type: "warning",
            content: "يرجى تغيير البريد الإلكتروني أو رقم الهاتف",
          });
          console.log("warning");
        }
      } catch (error) {
        // error
        messageApi.open({
          type: "error",
          content: "يرجى المحاولة مرة أخرى",
        });
        console.log("error: ", error);
      }
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordInputChange = (e) => {
    setPasswordFieldEmpty(e.target.value === "");
    setPassword(e.target.value);
  };

  return (
    <div>
      <Header />
      <Container>
        <div className="updateUsers">
          <div className="update">
            <div className="end">
              <p>الاسم كامل</p>
              <input
                placeholder={userInfo.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="end">
              <p> البريد الالكتروني</p>
              <input
                placeholder={userInfo.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="end">
              <p> رقم الهاتف</p>
              <input
                placeholder={userInfo.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="end">
              <p> كلمة المرور</p>
              <input
                placeholder="********"
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

            <div className="buttSave">
              <button onClick={handleUpdate}>حفظ</button>
            </div>
          </div>

          {contextHolder}
        </div>
      </Container>
    </div>
  );
};
