import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/loginScreen";
import RegisterScreen from "./screens/RegisterScreen/registerScreen";
import { HomeScreen } from "./screens/HomeScreen/homeScreen";
import { useAppStore } from "./store";
import { useEffect, useState } from "react";
import { Detiles } from "./Components/Detiles/detiles";
import { UpdateUsers } from "./Components/UpdateUsers/updateUsers";
import { Centers } from "./Components/Centers/centers";
import { CenterPage } from "./Components/CenterPage/centerPage";
import { CategoriesPage } from "./Components/CategoriesPage/categoriesPage";

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
        <Route path="/page/:id" element={<ProtectedRoute comp={<CenterPage />} />}/>
        <Route path="/detiles/:id" element={<ProtectedRoute comp={<Detiles />} />}/>
        <Route path="/categoriesPage/:id" element={<ProtectedRoute comp={<CategoriesPage />} />}/>
        <Route path="/updateUsers" element={<ProtectedRoute comp={<UpdateUsers />} />}/>
        <Route   path="/centers" element={<ProtectedRoute comp={<Centers />} />}   />
      </Routes>
    </div>
  );
}

export default App;
