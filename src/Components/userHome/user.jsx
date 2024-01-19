import "./user.css";
import { Drawer } from "antd";
import { FcBusinesswoman } from "react-icons/fc";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useAppStore } from "../../store";

export const User = () => {
  const { isOpenD, setOpenD } = useAppStore();









  
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
      </Drawer>
    </div>
  );
};
