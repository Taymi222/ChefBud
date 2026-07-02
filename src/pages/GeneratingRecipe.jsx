import { useEffect, useState } from "react";
import { ChefHat, Check } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function GeneratingRecipe() {
  const navigate = useNavigate();

  const { collectionId, fileId } = useParams();

  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 800);

    const timer2 = setTimeout(() => setStep(2), 1800);

    const timer3 = setTimeout(() => setStep(3), 2800);

    const timer4 = setTimeout(() => {
      navigate(
        `/recipe-suggestions/${collectionId}/${fileId}`
      );
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [navigate, collectionId, fileId]);

  return (
    <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center px-6">

      <div className="max-w-sm w-full text-center">

        {/* Logo */}

        <div className="w-20 h-20 rounded-full bg-[#4F6F52] flex items-center justify-center mx-auto animate-pulse">

          <ChefHat
            size={36}
            className="text-white"
          />

        </div>

        {/* Heading */}

        <h1 className="mt-8 font-playfair text-3xl text-[#23352A]">
          Cooking up some ideas...
        </h1>

        <p className="mt-3 text-sm text-gray-500 leading-6">
          We're creating delicious recipes
          from your available ingredients.
        </p>

        {/* Progress */}

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
            text="Preparing recommendations..."
          />

        </div>

      </div>

    </div>
  );
}

function ProgressItem({ complete, text }) {
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