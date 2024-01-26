import "./viewBox.css";
import { Drawer } from "antd";
import { useAppStore } from "../../store";
import { FaUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { message } from "antd";
import Swal from "sweetalert2";

export const ViewBox = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { isOpen, setOpen, inf } = useAppStore();
  const navigate = useNavigate();
  const [isUpdateVisible, setUpdateVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    user_id: ""
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
    setUpdateVisible(false);
  };

  const onClose = () => {
    setOpen(false);
  };
  const handleUpdateClick = () => {
    setUpdateVisible(!isUpdateVisible);
  };



  const handleUpdate =()=>{

  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      name,
      phone,
      email,
      password
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
    };
  
    fetch(`https://my-center-api.onrender.com/api/v1/user/update/${userInfo.user_id}`, requestOptions)
    .then(response => response.json())
    Swal.fire({
      title: "هل متأكد من الحفظ",
      text: "!تحتاج الى تسجيل الدخول من جديد ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!",
    }) .then(result => console.log(result))
      .catch(error =>{ 
          //error
          messageApi.open({
            type: "error",
            content: "يرجع ادخال المعلومات",
          });
        console.log('error', error)});
        navigate("/login");
        localStorage.removeItem("Token");
        localStorage.removeItem("userInfo");
        setOpen(false);
        setUpdateVisible(false);
     
  }


  return (
    <div>
      <Drawer placement="right" open={isOpen} onClose={onClose}>
        <div className="contentUser">
          <div className="user">
            <div className="title">
              <p> {userInfo.name} </p>
              <FaUserCircle className="icon" />
            </div>
            <button onClick={handleUpdateClick}>تعديل معلومات المستخدم</button>
            {isUpdateVisible && (
              <div className="update">
                <div className="end">
                  <p>الاسم كامل</p>
                  <input 
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="end">
                  <p> البريد الالكتروني</p>
                  <input 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="end">
                  <p> رقم الهاتف</p>
                  <input 
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="end">
                  <p> كلمة المرور</p>
                  <input 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="buttSave">
                  <button onClick={handleUpdate}>حفظ</button>
                  <button className="buttCa" onClick={handleUpdateClick}>الغاء</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="line" />
        <div className="Logout" onClick={handleLogout}>
          <p>تسجيل خروج</p>
          <LuLogOut className="LuLogOut" />
        </div>
        {contextHolder}
      </Drawer>
    </div>
  );
};
