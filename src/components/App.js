import GlobalStyle from "../assets/GlobalStyle.js";
import LoginPage from "./LoginPage.js";
import UserContext from "../contexts/UserContext.js";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./RegisterPage.js";

export default function App() {

  const [userData, setUserData] = useState([]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}