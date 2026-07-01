import { Link } from "react-router-dom";

export default function SavedRecipe() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-playfair text-2xl text-[#23352A] mb-2">Saved Recipes</h1>
      <p className="text-gray-500 text-sm mb-6">You haven't saved any recipes yet.</p>
      <Link
        to="/collections"
        className="px-6 py-3 rounded-xl bg-[#4F6F52] text-white font-medium text-sm hover:bg-[#3D5A3F] transition-colors"
      >
        Go to Collections
      </Link>
    </div>
  );
}
