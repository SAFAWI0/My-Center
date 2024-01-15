import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/loginScreen";
import RegisterScreen from "./screens/RegisterScreen/registerScreen";
import { HomeScreen } from "./screens/HomeScreen/homeScreen";
import { Page } from "./page/page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path=":id" element={<Page />} />
        <Route path="/Register" element={<RegisterScreen />} />
      </Routes>
    </div>
  );
}

export default App;
