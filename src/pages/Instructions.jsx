import {
  ArrowLeft,
  Heart,
  MoreHorizontal,
  Clock3,
  ChefHat,
  Users,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

import Button from "../components/UI/Buttons";

import recipeImage from "../assets/images/onboarding.png";

export default function Instructions() {
  const navigate = useNavigate();

  const { state } = useLocation();
  

  const recipe = state?.recipe;
  console.log(recipe)

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F4]">
        <p className="text-gray-500">
          No recipe selected.
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
            onClick={() => navigate(-1)}
          />

          <h1 className="font-playfair text-lg text-[#23352A]">
            {recipe.title}
          </h1>

          <div className="flex items-center gap-3">

            <Heart size={18} />

            <MoreHorizontal size={18} />

          </div>

        </div>

        {/* Recipe Summary */}

        <div className="mx-4 mt-4 bg-[#F7F3EB] rounded-xl p-3">

          <div className="flex gap-3">

            <img
              src={recipeImage}
              alt={recipe.title}
              className="w-28 h-20 object-cover rounded-lg"
            />

            <div className="flex-1">

              <div className="flex gap-4 text-xs text-[#5C7C5D]">

                <div className="flex items-center gap-1">

                  <Clock3 size={12} />

                  {recipe.cookTime}

                </div>

                <div className="flex items-center gap-1">

                  <ChefHat size={12} />

                  {recipe.difficulty}

                </div>

                <div className="flex items-center gap-1">

                  <Users size={12} />

                  {recipe.servings}

                </div>

              </div>

              <p className="text-xs text-[#23352A] mt-3 leading-5">
                {recipe.description}
              </p>

            </div>

          </div>

        </div>

        {/* Ingredients */}

        <div className="px-4 mt-6">

          <h2 className="font-semibold text-[#23352A] mb-3">
            Ingredients
          </h2>

          <ul className="space-y-2">

            {recipe.ingredients.map((ingredient, index) => (

              <li
                key={index}
                className="text-sm text-gray-600"
              >
                • {ingredient}
              </li>

            ))}

          </ul>

        </div>

        {/* Optional */}

        {recipe.optionalIngredients.length > 0 && (

          <div className="px-4 mt-6">

            <h2 className="font-semibold text-[#23352A] mb-3">
              Optional Ingredients
            </h2>

            <ul className="space-y-2">

              {recipe.optionalIngredients.map((ingredient, index) => (

                <li
                  key={index}
                  className="text-sm text-gray-600"
                >
                  • {ingredient}
                </li>

              ))}

            </ul>

          </div>

        )}

        {/* Instructions */}

        <div className="px-4 mt-6">

          <h2 className="font-semibold text-[#23352A] mb-3">
            Instructions
          </h2>

          <ol className="space-y-4">

            {recipe.instructions.map((step, index) => (

              <li
                key={index}
                className="flex gap-3"
              >

                <span className="font-semibold text-[#5C7C5D]">
                  {index + 1}.
                </span>

                <p className="text-sm leading-6 text-gray-600">
                  {step}
                </p>

              </li>

            ))}

          </ol>

        </div>

        {/* Tips */}

        <div className="px-4 mt-8">

          <h2 className="font-semibold text-[#23352A] mb-3">
            Tips
          </h2>

          <ul className="space-y-2">

            {recipe.tips.map((tip, index) => (

              <li
                key={index}
                className="text-sm text-gray-600"
              >
                💡 {tip}
              </li>

            ))}

          </ul>

        </div>

        {/* Buttons */}

        <div className="flex gap-3 px-4 mt-8 pb-8">

          <Button
            variant="outline"
            className="flex-1 border-[#5C7C5D] text-[#5C7C5D]"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>

          <Button
            className="flex-1 bg-[#5C7C5D]"
          >
            Save Recipe
          </Button>

        </div>

      </div>

    </div>
  );
}