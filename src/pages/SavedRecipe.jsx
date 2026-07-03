import {
  BookHeart,
  Menu,
  Bell,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import { useCollections } from "../context/CollectionContext";

import ActionMenu from "../components/UI/ActionMenu";

export default function SavedRecipe() {

  const navigate = useNavigate();

  const {
    collections,
    deleteRecipeFile,
  } = useCollections();

  const savedRecipes = collections.flatMap(
    (collection) =>
      collection.files
        .filter((file) => file.saved)
        .map((file) => ({
          ...file,
          collectionId: collection.id,
          collectionName: collection.name,
          icon: collection.icon,
        }))
  );

  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <div className="max-w-sm mx-auto px-4 py-6">

        {/* Header */}

        <div className="flex items-center justify-between">

          <Menu size={22} />

          <Bell size={22} />

        </div>

        {/* Heading */}

        <div className="mt-5">

          <p className="text-sm text-gray-500">
            Your favourites
          </p>

          <h1 className="font-playfair text-[34px] leading-none text-[#23352A] mt-1">

            Saved Recipes

          </h1>

          <p className="text-sm text-gray-500 mt-1">

            Recipes you've decided to keep.

          </p>

        </div>

        {/* Empty State */}

        {savedRecipes.length === 0 ? (

          <div className="mt-24 flex flex-col items-center text-center">

            <BookHeart
              size={54}
              className="text-[#5C7C5D]"
            />

            <h2 className="mt-6 font-playfair text-2xl text-[#23352A]">

              No saved recipes

            </h2>

            <p className="mt-2 text-sm text-gray-500 leading-6">

              Generate and save a recipe.
              It'll appear here for quick access.

            </p>

            <Link
              to="/collections"
              className="
                mt-8
                h-11
                px-6
                rounded-xl
                bg-[#4F6F52]
                text-white
                flex
                items-center
                justify-center
                text-sm
                font-medium
              "
            >

              Go to Collections

            </Link>

          </div>

        ) : (

          <div className="mt-6 space-y-3">

            {savedRecipes.map((recipe) => {

              const formattedDate =
                recipe.updatedAt
                  ? new Date(
                      recipe.updatedAt
                    ).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                      }
                    )
                  : "Today";

              return (

                <div
                  key={recipe.id}
                  className="
                    relative
                    bg-white
                    border
                    border-[#E8E4DC]
                    rounded-2xl
                    p-4
                    flex
                    justify-between
                    items-center
                  "
                >

                  <div
                    onClick={() =>
                      navigate(
                        `/instructions/${recipe.collectionId}/${recipe.id}`
                      )
                    }
                    className="
                      flex
                      gap-4
                      items-center
                      flex-1
                      cursor-pointer
                    "
                  >

                    <div
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-[#4F6F52]
                        flex
                        items-center
                        justify-center
                        text-xl
                      "
                    >

                      {recipe.icon}

                    </div>

                    <div>

                      <h3 className="font-semibold text-[#23352A]">

                        {recipe.title}

                      </h3>

                      <p className="text-xs text-gray-500">

                        {recipe.collectionName}

                      </p>

                      <p className="text-xs text-gray-500">

                        Updated {formattedDate}

                      </p>

                    </div>

                  </div>

                  <ActionMenu
                    actions={[
                      {
                        label:
                          "Delete Recipe",
                        danger: true,
                        onClick: () =>
                          deleteRecipeFile(
                            recipe.collectionId,
                            recipe.id
                          ),
                      },
                    ]}
                  />

                </div>

              );

            })}

          </div>

        )}

      </div>

    </div>
  );
}