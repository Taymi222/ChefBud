import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { useCollections } from "../context/CollectionContext";
import RecipeFileCard from "../components/files/RecipeFileCard";
import RecipeFileModal from "../components/files/RecipeFileModal";

export default function CollectionDetails() {
  const { collectionId } = useParams();
  const { getCollection, createRecipeFile } = useCollections();
  const [isModalOpen, setIsModalOpen] = useState(false);

 const collection = getCollection(collectionId);



  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Collection not found.
      </div>
    );
  }

  const handleCreateFile = (title) => {
    createRecipeFile(collectionId, title);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <div className="max-w-sm mx-auto px-4 py-5">

        {/* Header */}

        <div className="flex items-center justify-between">

          <Link to="/collections">
            <ArrowLeft size={22} />
          </Link>

          <h1 className="font-playfair text-2xl text-[#23352A]">
            {collection.name}
          </h1>

          <button onClick={() => setIsModalOpen(true)}>
            <Plus size={22} />
          </button>

        </div>

        {/* Files */}

        <div className="mt-8">
          

          {collection.files.length === 0 ? (

            <div className="text-center mt-24">

              <p className="text-lg text-[#23352A] font-medium">
                No recipe files yet.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Tap the + button to create your first recipe.
              </p>

            </div>

          ) : (

            <div className="space-y-3">

              {collection.files.map((file) => (
                <RecipeFileCard
                  key={file.id}
                  collectionId={collection.id}
                  file={file}
                />
              ))}

            </div>

          )}

        </div>

      </div>

      <RecipeFileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateFile}
      />
    </div>
  );
}