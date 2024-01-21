import "./user.css";
import { Drawer } from "antd";
import { FcBusinesswoman } from "react-icons/fc";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useAppStore } from "../../store";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const { isOpenD, setOpenD } = useAppStore();
  const navigate = useNavigate();













  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("Token");
    setOpenD(false);
  };
  const onClose = () => {
    setOpenD(false);
  };
  return (
    <div>
      <Drawer placement="left" onClose={onClose} open={isOpenD}>
        <div className="user">
          <div className="content-user">
            <FcBusinesswoman className="icon" />
            <p>Full Name </p>
          </div>
          <div className="content-user">
            <MdMarkEmailRead className="icon" />
            <span>new@gmail.com </span>
          </div>
          <div className="content-user">
            <FaPhoneAlt className="iconPhone" />
            <span style={{ marginLeft: "12px" }}>07800000000 </span>
          </div>
        </div>
        <div className="Logout" onClick={handleLogout}>
          <p>تسجيل خروج</p>
          <LuLogOut className="LuLogOut" />
        </div>
      </Drawer>
    </div>
  );
};
