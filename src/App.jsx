import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginScreen from "./screens/LoginScreen/loginScreen";
import RegisterScreen from "./screens/RegisterScreen/registerScreen";
import { HomeScreen } from "./screens/HomeScreen/homeScreen";
import Detiles from "./screens/Detiles/detiles"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/Register" element={<RegisterScreen />} />
        <Route path="/Detiles" element={<Detiles/>} />
      </Routes>
    </div>
  );
}

export default App;
