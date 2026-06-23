import { Routes, Route } from "react-router-dom";
import Onboarding from "../../pages/Onboarding";
import Login from "../../pages/LogIn";
import ForgotPassword from "../../pages/ForgotPassword";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}