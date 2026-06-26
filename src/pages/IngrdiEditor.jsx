import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  ArrowLeft,
  MoreHorizontal,
} from "lucide-react";

import Button from "../components/UI/Buttons";
import IngredientInput from "../components/ingredients/IngredientInput";
import IngredientItem from "../components/ingredients/IngredientItem";

import { useCollections } from "../context/CollectionContext";

export default function IngredientEditor() {
  const { collectionId } = useParams();

  const {
    getCollection,
    addIngredient,
    deleteIngredient,
  } = useCollections();

  const collection = getCollection(collectionId);

  const [newIngredient, setNewIngredient] = useState("");

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Collection not found.</p>
      </div>
    );
  }

  const handleAddIngredient = () => {
    addIngredient(collectionId, newIngredient);
    setNewIngredient("");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <div className="max-w-sm mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4">

          <ArrowLeft size={18} />

          <h1 className="font-playfair text-lg text-[#23352A]">
            {collection.name}
          </h1>

          <MoreHorizontal size={18} />

        </div>

        {/* Tabs */}
        <div className="mt-5 border-b border-[#DCD6CB]">
          <div className="flex">

            <button
              className="
                px-4
                pb-3
                text-sm
                font-medium
                text-[#5C7C5D]
                border-b-2
                border-[#5C7C5D]
              "
            >
              Ingredients
            </button>

            <button
              className="
                px-4
                pb-3
                text-sm
                text-gray-500
              "
            >
              Notes
            </button>

          </div>
        </div>

        <div className="px-4 pt-4">

          {/* Add Ingredient */}
          <h3 className="text-xs font-medium text-[#23352A] mb-2">
            Add Ingredients
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

              {collection.ingredients.map(
                (ingredient, index) => (
                  <IngredientItem
                    key={index}
                    name={ingredient}
                    onDelete={() =>
                      deleteIngredient(
                        collectionId,
                        index
                      )
                    }
                  />
                )
              )}

            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">

            <Button
              variant="outline"
              className="
                flex-1
                border-[#5C7C5D]
                text-[#5C7C5D]
              "
            >
              Save
            </Button>

            <Button
              className="
                flex-1
                bg-[#D89B29]
                border-[#D89B29]
              "
            >
              Generate Recipe
            </Button>

          </div>

        </div>

      </div>
    </div>
  );
}