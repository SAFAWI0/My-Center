import "./viewBox.css";
import { Drawer } from "antd";
import { useAppStore } from "../../store";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcBusinesswoman } from "react-icons/fc";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const ViewBox = () => {
  const { isOpen, setOpen, inf } = useAppStore();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // تحقق من المعلومات المخزنة في localStorage
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo);
    }

    // عندما تحدث أي تغيير في inf، قم بتحديث المعلومات في localStorage
    if (inf.length > 0) {
      const user = inf[0];
      setUserInfo({
        name: user.name,
        email: user.email,
        phone: user.phone,
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

  return (
    <div>
      <Drawer placement="right" open={isOpen} onClose={onClose}>
        <div className="content-categ">
          <Link to="Register">
            <div className="contentIn">
              <p>تسجيل الدخول أو انشاء حساب</p>
              <FaUserCircle />
            </div>
          </Link>
        </div>
        <hr style={{ marginTop: "20px" }} />
        <div className="user">
          {userInfo.name && (
            <div className="content-user">
              <p>{userInfo.name} </p>
              <FcBusinesswoman className="icon" />
            </div>
          )}
          {userInfo.email && (
            <div className="content-user">
              <span>{userInfo.email} </span>
              <MdMarkEmailRead className="icon" />
            </div>
          )}
          {userInfo.phone && (
            <div className="content-user">
              <span style={{ marginLeft: "12px" }}>{userInfo.phone} </span>
              <FaPhoneAlt className="iconPhone" />
            </div>
          )}
        </div>
        <div className="Logout" onClick={handleLogout}>
          <p>تسجيل خروج</p>
          <LuLogOut className="LuLogOut" />
        </div>
      </Drawer>
    </div>
  );
};
