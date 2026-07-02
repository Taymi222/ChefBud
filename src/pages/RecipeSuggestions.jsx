import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { useCollections } from "../context/CollectionContext";
import RecipeSuggestionCard from "../components/Recipe/RecipeSuggestionCard";

export default function RecipeSuggestions() {
  const navigate = useNavigate();

  const { collectionId, fileId } = useParams();

  const {
    getRecipeFile,
    setSelectedRecipe,
  } = useCollections();

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

  const recipes = file.suggestions ?? [];

  const handleSelectRecipe = (recipe) => {

    setSelectedRecipe(
      collectionId,
      fileId,
      recipe
    );

    navigate(
      `/instructions/${collectionId}/${fileId}`
    );

  };

  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <div className="max-w-sm mx-auto px-4 py-6">

        {/* Header */}

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
        </p>

        {recipes.length === 0 ? (

          <div className="text-center mt-24">

            <p className="text-gray-500">
              No recipes generated yet.
            </p>

          </div>

        ) : (

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

        )}

      </div>

    </div>
  );
}