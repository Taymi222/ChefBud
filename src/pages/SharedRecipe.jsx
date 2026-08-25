import { useParams, useNavigate } from "react-router-dom";
import { Clock3, ChefHat, Users, ArrowLeft } from "lucide-react";

export default function SharedRecipe() {
  const { encoded } = useParams();
  const navigate = useNavigate();

  let recipe = null;

  try {
    // decode the base64 string back into a recipe object
    recipe = JSON.parse(
      decodeURIComponent(atob(encoded))
    );
  } catch {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center">
        <p className="text-gray-500 text-sm">
          This recipe link is invalid or has expired.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <div className="max-w-sm mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4">
          <ArrowLeft
            size={18}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
          <h1 className="font-playfair text-lg text-[#23352A]">
            {recipe.title}
          </h1>
          <div className="w-5" />
        </div>

        {/* Shared badge */}
        <div className="mx-4 mt-3">
          <span className="text-xs bg-[#EAF2E8] text-[#5C7C5D] px-3 py-1 rounded-full font-medium">
            📤 Shared recipe — view only
          </span>
        </div>

        {/* Summary */}
        <div className="mx-4 mt-4 bg-[#F7F3EB] rounded-xl p-3">
          <div className="flex gap-4 text-xs text-[#5C7C5D]">
            <div className="flex items-center gap-1"><Clock3 size={12} />{recipe.cookTime}</div>
            <div className="flex items-center gap-1"><ChefHat size={12} />{recipe.difficulty}</div>
            <div className="flex items-center gap-1"><Users size={12} />{recipe.servings}</div>
          </div>
          <p className="text-xs text-[#23352A] mt-3 leading-5">
            {recipe.description}
          </p>
        </div>

        {/* Ingredients */}
        <div className="px-4 mt-6">
          <h2 className="font-semibold text-[#23352A] mb-3">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-sm text-gray-600">• {ingredient}</li>
            ))}
          </ul>
        </div>

        {recipe.optionalIngredients?.length > 0 && (
          <div className="px-4 mt-6">
            <h2 className="font-semibold text-[#23352A] mb-3">Optional Ingredients</h2>
            <ul className="space-y-2">
              {recipe.optionalIngredients.map((ingredient, index) => (
                <li key={index} className="text-sm text-gray-600">• {ingredient}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Instructions */}
        <div className="px-4 mt-6">
          <h2 className="font-semibold text-[#23352A] mb-3">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="font-semibold text-[#5C7C5D]">{index + 1}.</span>
                <p className="text-sm leading-6 text-gray-600">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Tips */}
        <div className="px-4 mt-8">
          <h2 className="font-semibold text-[#23352A] mb-3">Tips</h2>
          <ul className="space-y-2">
            {recipe.tips.map((tip, index) => (
              <li key={index} className="text-sm text-gray-600">💡 {tip}</li>
            ))}
          </ul>
        </div>

        {/* CTA — no save button, just invite to try the app */}
        <div className="mx-4 mt-8 mb-8 p-4 bg-[#F0EDE6] rounded-2xl text-center">
          <p className="text-sm text-[#23352A] font-medium mb-1">
            Want to cook with your own ingredients?
          </p>
          <p className="text-xs text-gray-500 mb-3">
            Chef Bud turns what you have into recipes.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-[#5C7C5D] text-white text-sm rounded-xl font-medium"
          >
            Try Chef Bud
          </button>
        </div>

      </div>
    </div>
  );
}