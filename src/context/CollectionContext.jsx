import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CollectionContext = createContext();

const STORAGE_KEY = "chef_collections";

const DEFAULT_COLLECTIONS = [
  {
    id: "breakfast",
    name: "Breakfast",
    icon: "🍳",
    ingredients: [],
    updated: null,
  },
  {
    id: "lunch",
    name: "Lunch",
    icon: "☀️",
    ingredients: [],
    updated: null,
  },
  {
    id: "dinner",
    name: "Dinner",
    icon: "🌙",
    ingredients: [],
    updated: null,
  },
  {
    id: "snacks",
    name: "Snacks",
    icon: "🍪",
    ingredients: [],
    updated: null,
  },
];

export function CollectionProvider({ children }) {
  const [collections, setCollections] = useState(() => {
    const savedCollections = localStorage.getItem(STORAGE_KEY);

    return savedCollections
      ? JSON.parse(savedCollections)
      : DEFAULT_COLLECTIONS;
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(collections)
    );
  }, [collections]);

  const addIngredient = (collectionId, ingredientName) => {
    const trimmedIngredient = ingredientName.trim();

    if (!trimmedIngredient) return;

    setCollections((prevCollections) =>
      prevCollections.map((collection) => {
        if (collection.id !== collectionId) {
          return collection;
        }

        const ingredientExists = collection.ingredients.some(
          (ingredient) =>
            ingredient.toLowerCase() ===
            trimmedIngredient.toLowerCase()
        );

        if (ingredientExists) {
          return collection;
        }

        return {
          ...collection,
          ingredients: [
            ...collection.ingredients,
            trimmedIngredient,
          ],
          updated: new Date().toISOString(),
        };
      })
    );
  };

  const deleteIngredient = (
    collectionId,
    ingredientIndex
  ) => {
    setCollections((prevCollections) =>
      prevCollections.map((collection) => {
        if (collection.id !== collectionId) {
          return collection;
        }

        return {
          ...collection,
          ingredients: collection.ingredients.filter(
            (_, index) => index !== ingredientIndex
          ),
          updated: new Date().toISOString(),
        };
      })
    );
  };

  const getCollection = (collectionId) => {
    return collections.find(
      (collection) => collection.id === collectionId
    );
  };

  return (
    <CollectionContext.Provider
      value={{
        collections,
        getCollection,
        addIngredient,
        deleteIngredient,
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