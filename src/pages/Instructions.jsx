import {
  ArrowLeft,
  Heart,
  MoreHorizontal,
  Clock3,
  BarChart3,
} from "lucide-react";

import Button from "../components/UI/Buttons";
import RecipeInstructions from "../components/Recipe/RecipeInstructions";
import recipeImage from "../assets/images/onboarding.png";

export default function Instructions() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <div className="max-w-sm mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4">
          <ArrowLeft size={18} />

          <h1 className="font-playfair text-lg text-[#23352A]">
            Classic French Toast
          </h1>

          <div className="flex items-center gap-3">
            <Heart size={18} />
            <MoreHorizontal size={18} />
          </div>
        </div>

        {/* Recipe Card */}
        <div className="mx-4 mt-4 bg-[#F7F3EB] rounded-xl p-3">

          <div className="flex gap-3">

            <img
              src={recipeImage}
              alt="French Toast"
              className="w-28 h-20 object-cover rounded-lg"
            />

            <div className="flex-1">

              <div className="flex gap-4 text-xs text-[#5C7C5D]">
                <div className="flex items-center gap-1">
                  <Clock3 size={12} />
                  <span>15 mins</span>
                </div>

                <div className="flex items-center gap-1">
                  <BarChart3 size={12} />
                  <span>Easy</span>
                </div>
              </div>

              <p className="text-xs text-[#23352A] mt-3 leading-5">
                A quick and delicious breakfast
                you'll love.
              </p>

              <p className="text-xs font-medium text-[#23352A] mt-3">
                Serves 1–2
              </p>

            </div>

          </div>

        </div>

        {/* Tabs */}
        <div className="mt-5 border-b border-[#DCD6CB]">
          <div className="flex justify-around">

            <button className="pb-3 text-gray-500 text-sm">
              Ingredients
            </button>

            <button
              className="
                pb-3
                text-sm
                font-medium
                text-[#23352A]
                border-b-2
                border-[#5C7C5D]
              "
            >
              Instructions
            </button>

          </div>
        </div>

        {/* Instructions */}
        <div className="px-4">
          <RecipeInstructions />
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-3 px-4 mt-6 pb-6">

          <Button
            variant="outline"
            className="
              flex-1
              border-[#5C7C5D]
              text-[#5C7C5D]
            "
          >
            Edit Ingredients
          </Button>

          <Button
            className="
              flex-1
              bg-[#5C7C5D]
            "
          >
            Save Recipe
          </Button>

        </div>

      </div>
    </div>
  );
}