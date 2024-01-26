import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/loginScreen";
import RegisterScreen from "./screens/RegisterScreen/registerScreen";
import { HomeScreen } from "./screens/HomeScreen/homeScreen";
import { Page } from "./page/page";
import { useAppStore } from "./store";
import { useEffect, useState } from "react";
import { Detiles } from "./Components/Detiles/detiles";
import { UpdateUsers } from "./Components/UpdateUsers/updateUsers";

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
      <Routes>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<ProtectedRoute comp={<HomeScreen />} />} />
        <Route path="/page/:id" element={<ProtectedRoute comp={<Page />} />} />
        <Route path="/detiles/:id" element={<ProtectedRoute comp={<Detiles />} />} />
        <Route path="/updateUsers" element={<ProtectedRoute comp={<UpdateUsers />} />} />
      </Routes>
    </div>
  );
}

export default App;
