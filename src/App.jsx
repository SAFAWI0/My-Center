import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/loginScreen";
import RegisterScreen from "./screens/RegisterScreen/registerScreen";
import { HomeScreen } from "./screens/HomeScreen/homeScreen";
import { Page } from "./page/page";
import { useAppStore } from "./store";
import { useEffect, useState } from "react";
import { User } from "./Components/userHome/user";

const ProtectedRoute = ({ comp }) => {
  const { isLogin, setIsLogin } = useAppStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let token = localStorage.getItem("Token");
    if (token) setIsLogin(true);
    else setIsLogin(false);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading . . .</div>;

  return isLogin ? comp : <Navigate to={"/login"} />;
};


function App() {
  return (
    <div>
      {/* <User/> */}
      <Routes>
        <Route path="/" element={<ProtectedRoute comp={<HomeScreen />} />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path=":id" element={<ProtectedRoute comp={<Page />} />} />
        <Route path="/Register" element={<RegisterScreen />} />
      </Routes>
    </div>
  );
}

export default App;
