import {createContext, useContext, useEffect, useState,  } from "react";

const CollectionContext = createContext();

const STORAGE_KEY = "chef_collections";

const DEFAULT_COLLECTIONS = [
  {
    id: "breakfast",
    name: "Breakfast",
    icon: "🍳",
    files: [],
    updatedAt: null,
  },
  {
    id: "lunch",
    name: "Lunch",
    icon: "☀️",
    files: [],
    updatedAt: null,
  },
  {
    id: "dinner",
    name: "Dinner",
    icon: "🌙",
    files: [],
    updatedAt: null,
  },
  {
    id: "snacks",
    name: "Snacks",
    icon: "🍪",
    files: [],
    updatedAt: null,
  },
];

export function CollectionProvider({ children }) {
  const [collections, setCollections] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    return saved
      ? JSON.parse(saved)
      : DEFAULT_COLLECTIONS;
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(collections)
    );
  }, [collections]);

  // COLLECTIONS

  const getCollection = (collectionId) => {
    return collections.find(
      (collection) => collection.id === collectionId
    );
  };

  const createCollection = (name) => {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    const newCollection = {
      id: crypto.randomUUID(),
      name: trimmedName,
      icon: "📁",
      files: [],
      updatedAt: new Date().toISOString(),
    };

    setCollections((prev) => [
      ...prev,
      newCollection,
    ]);
  };

  const deleteCollection = (collectionId) => {
    setCollections((prev) =>
      prev.filter(
        (collection) =>
          collection.id !== collectionId
      )
    );
  };

  const renameCollection = (
    collectionId,
    newName
  ) => {
    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id !== collectionId)
          return collection;

        return {
          ...collection,
          name: newName,
          updatedAt: new Date().toISOString(),
        };
      })
    );
  };


  // RECIPE FILES

  const createRecipeFile = (
    collectionId,
    title
  ) => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id !== collectionId)
          return collection;

        const newFile = {
          id: crypto.randomUUID(),

          title: trimmedTitle,

          ingredients: [],

          notes: "",

          recipe: {
            title: "",
            description: "",
            instructions: [],
            cookingTime: "",
            difficulty: "",
            servings: "",
          },

          saved: false,

          updatedAt: new Date().toISOString(),
        };

        return {
          ...collection,
          files: [
            ...collection.files,
            newFile,
          ],
          updatedAt: new Date().toISOString(),
        };
      })
    );
  };

  const deleteRecipeFile = (
    collectionId,
    fileId
  ) => {
    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id !== collectionId)
          return collection;

        return {
          ...collection,
          files: collection.files.filter(
            (file) => file.id !== fileId
          ),
          updatedAt: new Date().toISOString(),
        };
      })
    );
  };

  const renameRecipeFile = (
    collectionId,
    fileId,
    newTitle
  ) => {
    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id !== collectionId)
          return collection;

        return {
          ...collection,
          files: collection.files.map((file) => {
            if (file.id !== fileId)
              return file;

            return {
              ...file,
              title: newTitle,
              updatedAt:
                new Date().toISOString(),
            };
          }),
        };
      })
    );
  };

  const getRecipeFile = (
    collectionId,
    fileId
  ) => {
    const collection = getCollection(
      collectionId
    );

    if (!collection) return null;

    return collection.files.find(
      (file) => file.id === fileId
    );
  };

  const addIngredient = (collectionId, fileId, ingredient) => {
    const trimmed = ingredient.trim();
    if (!trimmed) return;

    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id !== collectionId) return collection;

        return {
          ...collection,
          files: collection.files.map((file) => {
            if (file.id !== fileId) return file;
            return {
              ...file,
              ingredients: [...file.ingredients, trimmed],
              updatedAt: new Date().toISOString(),
            };
          }),
        };
      })
    );
  };

  const deleteIngredient = (collectionId, fileId, index) => {
    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id !== collectionId) return collection;

        return {
          ...collection,
          files: collection.files.map((file) => {
            if (file.id !== fileId) return file;
            return {
              ...file,
              ingredients: file.ingredients.filter((_, i) => i !== index),
              updatedAt: new Date().toISOString(),
            };
          }),
        };
      })
    );
  };

  const updateRecipeNotes = (collectionId, fileId, notes) => {
    setCollections((prev) =>
      prev.map((collection) => {
        if (collection.id !== collectionId) return collection;

        return {
          ...collection,
          files: collection.files.map((file) => {
            if (file.id !== fileId) return file;
            return {
              ...file,
              notes,
              updatedAt: new Date().toISOString(),
            };
          }),
        };
      })
    );
  };

  const saveRecipe = (
  collectionId,
  fileId,
  recipe
) => {

  setCollections((prev) =>
    prev.map((collection) => {

      if (collection.id !== collectionId)
        return collection;

      return {

        ...collection,

        files: collection.files.map((file) => {

          if (file.id !== fileId)
            return file;

          return {

            ...file,

            title: recipe.title,

            recipe,

            saved: true,

            updatedAt:
              new Date().toISOString(),

          };

        }),

        updatedAt:
          new Date().toISOString(),

      };

    })
  );

};

  return (
    <CollectionContext.Provider
      value={{
        collections,

        getCollection,
        createCollection,
        renameCollection,
        deleteCollection,

        createRecipeFile,
        deleteRecipeFile,
        renameRecipeFile,
        getRecipeFile,
        addIngredient,
        deleteIngredient,
        updateRecipeNotes,
        saveRecipe
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollections() {
  const context = useContext(CollectionContext);

  if (!context) {
    throw new Error(
      "useCollections must be used inside CollectionProvider"
    );
  }

  return context;
}