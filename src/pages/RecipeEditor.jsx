import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MoreHorizontal } from "lucide-react";
import Button from "../components/UI/Buttons";
import IngredientInput from "../components/ingredients/IngredientInput";
import IngredientItem from "../components/ingredients/IngredientItem";

import { useCollections } from "../context/CollectionContext";

export default function RecipeEditor() {
  const { collectionId, fileId } = useParams();
  const navigate = useNavigate();

  const {
    getRecipeFile,
    getCollection,
    addIngredient,
    deleteIngredient,
    updateRecipeNotes,
  } = useCollections();

  const file = getRecipeFile(collectionId, fileId);
  const collection = getCollection(collectionId);

  const [newIngredient, setNewIngredient] = useState("");
  const [activeTab, setActiveTab] = useState("ingredients");
  const [notesText, setNotesText] = useState(file ? file.notes : "");

  if (!file) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#23352A] font-medium">Recipe file not found.</p>
      </div>
    );
  }

  const handleAddIngredient = () => {
    addIngredient(collectionId, fileId, newIngredient);
    setNewIngredient("");
  };

  const handleSave = () => {
    updateRecipeNotes(collectionId, fileId, notesText);
    navigate(`/collections/${collectionId}`);
  };

  const handleGenerate = () => {
    updateRecipeNotes(
      collectionId,
      fileId,
      notesText
    );

    navigate(
      `/generating-recipe/${collectionId}/${fileId}`
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <div className="max-w-sm mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4">

          <button onClick={() => navigate(`/collections/${collectionId}`)} className="cursor-pointer">
            <ArrowLeft size={18} />
          </button>

          <h1 className="font-playfair text-lg text-[#23352A]">
            {file.title}
          </h1>

          <MoreHorizontal size={18} />

        </div>

        {/* Tabs */}
        <div className="mt-5 border-b border-[#DCD6CB]">
          <div className="flex">

            <button
              onClick={() => setActiveTab("ingredients")}
              className={`
                px-4
                pb-3
                text-sm
                font-medium
                border-b-2
                transition-all
                ${activeTab === "ingredients"
                  ? "text-[#5C7C5D] border-[#5C7C5D]"
                  : "text-gray-500 border-transparent"
                }
              `}
            >
              Ingredients
            </button>

            <button
              onClick={() => setActiveTab("notes")}
              className={`
                px-4
                pb-3
                text-sm
                font-medium
                border-b-2
                transition-all
                ${activeTab === "notes"
                  ? "text-[#5C7C5D] border-[#5C7C5D]"
                  : "text-gray-500 border-transparent"
                }
              `}
            >
              Notes
            </button>

          </div>
        </div>

        <div className="px-4 pt-4">

          {activeTab === "ingredients" ? (
            <>
              {/* Add Ingredient */}
              <h3 className="text-xs italic font-medium text-[#23352A] mb-2">
                Add Ingredients: Be as detailed as possible <br /> e.g. 1 cup of all purpose flour
              </h3>


              <IngredientInput
                value={newIngredient}
                onChange={(e) =>
                  setNewIngredient(e.target.value)
                }
                onAdd={handleAddIngredient}
              />

              {/* Ingredient List */}
              <div className="mt-5">

                <h3 className="text-xs font-medium text-[#23352A] mb-2">
                  Your Ingredients
                </h3>

                <div className="space-y-2">

                  {file.ingredients.length === 0 ? (
                    <p className="text-sm text-gray-400 italic">No ingredients added yet.</p>
                  ) : (
                    file.ingredients.map(
                      (ingredient, index) => (
                        <IngredientItem
                          key={index}
                          name={ingredient}
                          onDelete={() =>
                            deleteIngredient(
                              collectionId,
                              fileId,
                              index
                            )
                          }
                        />
                      )
                    )
                  )}

                </div>

              </div>
            </>
          ) : (
            <div>
              {/* Notes Panel */}
              <h3 className="text-xs font-medium text-[#23352A] mb-2">
                Recipe Notes
              </h3>
              <textarea
                value={notesText}
                onChange={(e) => setNotesText(e.target.value)}
                placeholder="Write down cooking steps, preferences, or notes..."
                className="
                  w-full
                  h-64
                  p-4
                  rounded-xl
                  border
                  border-[#E7E2D8]
                  bg-white
                  outline-none
                  focus:ring-2
                  focus:ring-[#4F6F52]
                  text-sm
                  text-[#23352A]
                  resize-none
                "
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 mt-6">

            {/* <Button
              variant="outline"
              onClick={handleSave}
              className="
                flex-1
                border-[#5C7C5D]
                text-[#5C7C5D]
              "
            >
              Save
            </Button> */}

            <Button
              onClick={handleGenerate}
            >
              Generate Recipe
            </Button>

          </div>

        </div>

      </div>
    </div>
  );
}