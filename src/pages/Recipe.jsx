import {
  ArrowLeft,
  MoreHorizontal,
  CheckSquare,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Button from "../components/UI/Buttons";
import RecipeCard from "../components/Recipe/RecipeCard";
import RecipeTags from "../components/Recipe/RecipeTags";

export default function Recipe() {

  const navigate = useNavigate();

  // Temporary hardcoded recipe.
  // Later this comes from Claude.
  const recipe = {
    title: "Classic French Toast",
    time: "15 mins",
    difficulty: "Easy",
    description:
      "A quick and delicious breakfast you'll love.",
    ingredients: [
      "Eggs",
      "Bread",
      "Milk",
      "Butter",
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <div className="max-w-sm mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4">

          <ArrowLeft
            size={18}
            className="cursor-pointer"
          />

          <h1 className="font-playfair text-lg">
            Breakfast
          </h1>

          <MoreHorizontal size={18} />

        </div>

        {/* Success Banner */}
        <div className="mx-4 mt-4 bg-[#F7F5EC] border border-[#E8E4D8] rounded-lg p-3 flex gap-3">

          <div className="w-8 h-8 rounded-md bg-[#EAF2E8] flex items-center justify-center">
            <CheckSquare
              size={16}
              className="text-[#5C7C5D]"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-[#23352A]">
              Recipe generated!
            </h3>

            <p className="text-xs text-gray-500">
              Here's a recipe idea based on your ingredients.
            </p>

          </div>

        </div>

        {/* Recipe Card */}
        <div className="px-4 mt-4">

          <RecipeCard
            title={recipe.title}
            time={recipe.time}
            difficulty={recipe.difficulty}
            description={recipe.description}
          />

        </div>

        {/* Ingredients */}
        <div className="px-4 mt-5">

          <h3 className="text-sm font-medium text-[#23352A]">
            Ingredients Used
          </h3>

          <RecipeTags
            ingredients={recipe.ingredients}
          />

        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-2 px-4 mt-8">

          <Button
            variant="outline"
            className="text-xs"
          >
            Edit Ingredients
          </Button>

          <Button
            variant="outline"
            className="text-xs"
          >
            <RefreshCw
              size={14}
              className="mr-1"
            />
            Generate Again
          </Button>

          <Button
            className="bg-[#D89B29] text-xs"
            onClick={() => navigate("/instructions")}
          >
            View Instructions
            <ArrowRight
              size={14}
              className="ml-1"
            />
          </Button>

        </div>

      </div>

    </div>
  );
}