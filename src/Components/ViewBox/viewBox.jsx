import "./viewBox.css";
import { Drawer } from "antd";
import { useAppStore } from "../../store";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ViewBox = () => {
  const { isOpen, setOpen } = useAppStore();

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
      </Drawer>
    </div>
  );
};
