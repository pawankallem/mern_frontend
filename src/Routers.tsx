import { Routes, Route } from "react-router-dom";

import SignupPage from "./components/SignUp";
import LoginPage from "./components/SignIn";
import { HomePage } from "./components/Home";

export const Routers = () => {
  const token = localStorage.getItem("token");
  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
        </>
      )}
    </Routes>
  );
};
