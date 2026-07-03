import { useEffect, useState } from "react";
import {
  ChefHat,
  Check,
  AlertCircle,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { useCollections } from "../context/CollectionContext";
import { generateRecipes } from "../service/aiService";

export default function GeneratingRecipe() {
  const navigate = useNavigate();

  const { collectionId, fileId } = useParams();

  const { getRecipeFile } = useCollections();

  const file = getRecipeFile(
    collectionId,
    fileId
  );

  const [step, setStep] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {

    if (!file) {
      navigate("/collections");
      return;
    }

    if (file.ingredients.length === 0) {
      navigate(
        `/recipe-editor/${collectionId}/${fileId}`
      );
      return;
    }

    // Loading animation timeline (6 seconds)

    const timer1 = setTimeout(
      () => setStep(1),
      3000
    );

    const timer2 = setTimeout(
      () => setStep(2),
      6000
    );

    const timer3 = setTimeout(
      () => setStep(3),
      9000
    );

    // Never leave before 6 seconds

    const minimumDelay = new Promise((resolve) =>
      setTimeout(resolve, 10000)
    );

    async function generate() {

      try {

        const apiCall = generateRecipes(
          file.ingredients
        );

        const [recipes] = await Promise.all([
          apiCall,
          minimumDelay,
        ]);

        navigate(
          `/recipe-suggestions/${collectionId}/${fileId}`,
          {
            state: { recipes },
          }
        );

      } catch (error) {

        console.error(error);

        setError(
          "Couldn't generate recipes. Please try again."
        );

      }

    }

    generate();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };

  }, [
    file,
    collectionId,
    fileId,
    navigate,
  ]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center px-6 text-center">

        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">

          <AlertCircle
            size={28}
            className="text-red-500"
          />

        </div>

        <h2 className="font-playfair text-2xl text-[#23352A]">
          Something went wrong
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {error}
        </p>

        <button
          onClick={() =>
            navigate(
              `/recipe-editor/${collectionId}/${fileId}`
            )
          }
          className="mt-8 h-11 px-8 rounded-xl bg-[#4F6F52] text-white"
        >
          Try Again
        </button>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center px-6">

      <div className="max-w-sm w-full text-center">

        <div className="w-20 h-20 rounded-full bg-[#4F6F52] flex items-center justify-center mx-auto animate-pulse">

          <ChefHat
            size={36}
            className="text-white"
          />

        </div>

        <h1 className="mt-8 font-playfair text-3xl text-[#23352A]">
          Cooking up some ideas...
        </h1>

        <p className="mt-3 text-sm text-gray-500 leading-6">
          We're creating delicious recipes
          from your available ingredients.
        </p>

        <div className="mt-10 space-y-5 text-left">

          <ProgressItem
            complete={step >= 1}
            text="Checking your ingredients..."
          />

          <ProgressItem
            complete={step >= 2}
            text="Matching recipes..."
          />

          <ProgressItem
            complete={step >= 3}
            text="Finalizing your recipes..."
          />

        </div>

      </div>

    </div>
  );
}

function ProgressItem({
  complete,
  text,
}) {
  return (
    <div className="flex items-center gap-3">

      <div
        className={`
          w-7
          h-7
          rounded-full
          flex
          items-center
          justify-center
          transition-all
          duration-300
          ${
            complete
              ? "bg-[#4F6F52]"
              : "bg-[#E5E1D8] animate-pulse"
          }
        `}
      >

        {complete && (
          <Check
            size={15}
            className="text-white"
          />
        )}

      </div>

      <p
        className={`
          text-sm
          transition-colors
          duration-300
          ${
            complete
              ? "text-[#23352A]"
              : "text-gray-400"
          }
        `}
      >
        {text}
      </p>

    </div>
  );
}