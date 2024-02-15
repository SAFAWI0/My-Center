import "./viewBox.css";
import { Drawer } from "antd";
import { useAppStore } from "../../store";
import { FaUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const ViewBox = () => {
  const { isOpen, setOpen, inf } = useAppStore();
  const navigate = useNavigate();

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

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("Token");
    localStorage.removeItem("userInfo");
    setOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };
  const handelClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer placement="right" open={isOpen} onClose={onClose}>
        <div className="contentUser">
          <div className="user">
            <div className="title">
              <p> {userInfo.name} </p>
              <FaUserCircle className="icon" />
            </div>
            <Link to={"/updateUsers"}>
              <button onClick={handelClose}>تعديل معلومات المستخدم</button>
            </Link>
          </div>
        </div>
        <div className="line" />
        <div className="Logout" onClick={handleLogout}>
          <p>تسجيل خروج</p>
          <LuLogOut className="LuLogOut" />
        </div>
      </Drawer>
    </div>
  );
};
