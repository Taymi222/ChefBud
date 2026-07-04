import { useState } from "react";
import { Bell, Menu, Plus, } from "lucide-react";
import CollectionCard from "../components/collections/CollectionCard";
import CollectionModal from "../components/collections/CollectionModal";
import { useCollections } from "../context/CollectionContext";

export default function Collections() {
  const {collections,createCollection,renameCollection, deleteCollection} = useCollections();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCollection, setEditingCollection] = useState(null);

  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <div className="max-w-sm mx-auto px-4 py-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <Menu size={22} />
          <Bell size={22} />
        </div>

        {/* Greeting */}
        <div className="mt-5">

          <p className="text-sm text-gray-500">
            Hello, Temi 👋
          </p>

          <h1 className="font-playfair text-[34px] text-[#23352A] leading-none mt-1">
            My Collections
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Organize your ingredients by meals.
          </p>

        </div>

        {/* Collections */}
        <div className="mt-6 space-y-3">

          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              {...collection}
              onDelete={() => deleteCollection(collection.id)}
              onRename={() => {
                setEditingCollection(collection);
                setIsModalOpen(true);
              }}
            />
          ))}

        </div>

      </div>
      <button
      onClick={() => setIsModalOpen(true)}
      className="
        fixed
        bottom-24
        right-6
        w-14
        h-14
        rounded-full
        bg-[#D89B29]
        text-white
        flex
        items-center
        justify-center
        shadow-lg
      "
      >
      <Plus size={24} />
      </button>
      <CollectionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingCollection(null);
        }}
        title={
          editingCollection
            ? "Rename Collection"
            : "New Collection"
        }
        buttonText={
          editingCollection
            ? "Save"
            : "Create"
        }
        initialValue={
          editingCollection?.name || ""
        }
        onSubmit={(name) => {
          if (editingCollection) {
            renameCollection(editingCollection.id, name);
          } else {
            createCollection(name);
          }

          setEditingCollection(null);
          setIsModalOpen(false);
        }}
        />

    </div>
  );
}