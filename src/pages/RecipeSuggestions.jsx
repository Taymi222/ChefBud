import { ArrowLeft } from "lucide-react";
import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCollections } from "../context/CollectionContext";

import RecipeSuggestionCard from "../components/Recipe/RecipeSuggestionCard";

export default function RecipeSuggestions() {

  const navigate = useNavigate();

  const { state } = useLocation();

  const { collectionId, fileId } =
    useParams();

  const { getRecipeFile } =
    useCollections();

  const file = getRecipeFile(
    collectionId,
    fileId
  );

  if (!file) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F4]">
        <p className="text-gray-400">
          Recipe file not found.
        </p>
      </div>
    );
  }

  const recipes =
    state?.recipes ?? [];

  if (recipes.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F4]">

        <div className="text-center">

          <h2 className="font-playfair text-2xl text-[#23352A]">

            No recipes generated

          </h2>

          <p className="mt-2 text-gray-500">

            Please generate recipes again.

          </p>

        </div>

      </div>
    );
  }

  const handleSelectRecipe = (
    recipe
  ) => {

    navigate("/instructions", {
      state: { recipe },
    });

  };

  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <div className="max-w-sm mx-auto px-4 py-6">

        <div className="flex items-center gap-4">

          <ArrowLeft
            size={18}
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />

          <h1 className="font-playfair text-2xl text-[#23352A]">

            Recipe Ideas

          </h1>

        </div>

        <p className="text-sm text-gray-500 mt-2 mb-6">

          We found a few recipes based on
          your available ingredients.
          Pick the one you'd like to cook.

        </p>

        <div className="space-y-4">

          {recipes.map((recipe) => (

            <RecipeSuggestionCard
              key={recipe.id}
              recipe={recipe}
              onClick={() =>
                handleSelectRecipe(recipe)
              }
            />

          ))}

        </div>

      </div>

    </div>
  );
}