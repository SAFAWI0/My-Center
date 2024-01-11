import "./viewBox.css";
import { Drawer } from "antd";
import { useAppStore } from "../../store";
import { FaUserCircle } from "react-icons/fa";
import { BiLayer } from "react-icons/bi";

export const ViewBox = () => {
  const { isOpen, setOpen } = useAppStore();

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        placement="right"
        open={isOpen}
        onClose={onClose}
      >
        <div className="content-categ">
          <ul>
            <li>
              <a href="">
                <div className="contentIn">
                  <p>تسجيل الدخول أو انشاء حساب</p>
                  <FaUserCircle />
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="contentIn">
                  <p>الاقسام</p>
                  <BiLayer />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
