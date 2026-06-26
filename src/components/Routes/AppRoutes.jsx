import { Routes, Route } from "react-router-dom";
import Onboarding from "../../pages/Onboarding";
import Login from "../../pages/LogIn";
import ForgotPassword from "../../pages/ForgotPassword";
import Collections from "../../pages/Collections";
import IngredientEditor from "../../pages/IngrdiEditor";
import Instructions from "../../pages/Instructions";
import MainLayout from "../../layouts/MainLayout";
import Recipe from "../../pages/Recipe";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route element={<MainLayout />}>
       <Route path="/collections" element={<Collections />} />
       <Route path="/ingredient-editor/:collectionId" element={<IngredientEditor />} />
       <Route path="/instructions" element={<Instructions />} />
      </Route>
    </Routes>
  );
}
