import "./viewBox.css";
import { Drawer } from "antd";
import { useAppStore } from "../../store";
import { FaUserCircle } from "react-icons/fa";
import { BiLayer } from "react-icons/bi";
import { useState } from "react";

export const ViewBox = () => {
  const { isOpen, setOpen } = useAppStore();
  const [showCategories, setShowCategories] = useState(false);

  const onClose = () => {
    setOpen(false);
    setShowCategories(false);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
  return (
    <div>
      <Drawer placement="right" open={isOpen} onClose={onClose}>
        <div className="content-categ">
          <ul>
            <li>
              <a href="Register">
                <div className="contentIn">
                  <p>تسجيل الدخول أو انشاء حساب</p>
                  <FaUserCircle />
                </div>
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleCategories}>
                <div className="contentIn">
                  <p>الاقسام</p>
                  <BiLayer />
                </div>
              </a>
              {showCategories && (
                <ul className="sub-categories">
                  <div className="categories">
                    <li>
                      <a href="">عيادة الجراحة التجميلية</a>
                    </li>
                    <li>
                      <a href="">عيادة الجلدية والتجميل</a>
                    </li>
                    <li>
                      <a href="">عيادة طب الاسنان</a>
                    </li>
                    <li>
                      <a href="">زراعة الشعر</a>
                    </li>
                    <li>
                      <a href="">صالون</a>
                    </li>
                    <li>
                      <a href=""> تداخلات التجميل</a>
                    </li>
                  </div>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
