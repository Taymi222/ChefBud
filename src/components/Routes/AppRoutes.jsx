import { Routes, Route } from "react-router-dom";
import Onboarding from "../../pages/Onboarding";
import Login from "../../pages/LogIn";
import ForgotPassword from "../../pages/ForgotPassword";
import Collections from "../../pages/Collections";
import CollectionDetails from "../../pages/CollectionDetails";
import RecipeEditor from "../../pages/RecipeEditor";
import Recipe from "../../pages/Recipe";
import SavedRecipe from "../../pages/SavedRecipe";
import Instructions from "../../pages/Instructions";
import MainLayout from "../../layouts/MainLayout";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route element={<MainLayout />}>
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:collectionId" element={<CollectionDetails />} />
        <Route path="/recipe-editor/:collectionId/:fileId" element={<RecipeEditor />} />
        <Route path="/recipe/:collectionId/:fileId" element={<Recipe />} />
        <Route path="/saved-recipes" element={<SavedRecipe />} />
        <Route path="/instructions" element={<Instructions />} />
      </Route>
    </Routes>
  );
}
