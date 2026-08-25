import { useState, useEffect } from "react";
import {
  ArrowLeft, Heart, Share2,
  Clock3, ChefHat, Users,
} from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCollections } from "../context/CollectionContext";
import Button from "../components/UI/Buttons";
import InstructionsSkeleton from "../components/Recipe/InsSkel";

export default function Instructions() {
  const navigate = useNavigate();
  const { collectionId, fileId } = useParams();
  const { state } = useLocation();
  const { getRecipeFile, saveRecipe } = useCollections();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const file = getRecipeFile(collectionId, fileId);
  const recipe = state?.recipe || file?.recipe;

  if (!recipe || !recipe.title) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center">
        <p className="text-gray-500">Recipe not found.</p>
      </div>
    );
  }

  const handleSave = () => {
    saveRecipe(collectionId, fileId, recipe);
    navigate("/saved-recipes");
  };

  const handleShare = async () => {
    try {
      // encode the full recipe object as a base64 string
      // this embeds the recipe data directly in the URL
      // so no backend or database is needed
      const encoded = btoa(
        encodeURIComponent(JSON.stringify(recipe))
      );

      const shareUrl = `https://chef-bud.vercel.app/shared/${encoded}`;

      if (navigator.share) {
        // native share sheet on mobile
        await navigator.share({
          title: recipe.title,
          text: `Check out this recipe: ${recipe.title}`,
          url: shareUrl,
        });
      } else {
        // fallback for desktop — copy to clipboard
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF8F4]">
        <InstructionsSkeleton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <div className="max-w-sm mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4">
          <ArrowLeft
            size={18}
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h1 className="font-playfair text-lg text-[#23352A]">
            {recipe.title}
          </h1>
          <div className="flex items-center gap-3">
            <Heart size={18} />
            <Share2
              size={18}
              className="cursor-pointer text-[#5C7C5D]"
              onClick={handleShare}
            />
          </div>
        </div>

        {/* everything below stays exactly as you had it */}
        <div className="mx-4 mt-4 bg-[#F7F3EB] rounded-xl p-3">
          <div className="flex gap-3">
            <div className="flex-1">
              <div className="flex gap-4 text-xs text-[#5C7C5D]">
                <div className="flex items-center gap-1"><Clock3 size={12} />{recipe.cookTime}</div>
                <div className="flex items-center gap-1"><ChefHat size={12} />{recipe.difficulty}</div>
                <div className="flex items-center gap-1"><Users size={12} />{recipe.servings}</div>
              </div>
              <p className="text-xs text-[#23352A] mt-3 leading-5">{recipe.description}</p>
            </div>
          </div>
        </div>

        <div className="px-4 mt-6">
          <h2 className="font-semibold text-[#23352A] mb-3">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-sm text-gray-600">• {ingredient}</li>
            ))}
          </ul>
        </div>

        {recipe.optionalIngredients?.length > 0 && (
          <div className="px-4 mt-6">
            <h2 className="font-semibold text-[#23352A] mb-3">Optional Ingredients</h2>
            <ul className="space-y-2">
              {recipe.optionalIngredients.map((ingredient, index) => (
                <li key={index} className="text-sm text-gray-600">• {ingredient}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="px-4 mt-6">
          <h2 className="font-semibold text-[#23352A] mb-3">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="font-semibold text-[#5C7C5D]">{index + 1}.</span>
                <p className="text-sm leading-6 text-gray-600">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="px-4 mt-8">
          <h2 className="font-semibold text-[#23352A] mb-3">Tips</h2>
          <ul className="space-y-2">
            {recipe.tips.map((tip, index) => (
              <li key={index} className="text-sm text-gray-600">💡 {tip}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 px-4 mt-8 pb-8">
          <Button
            variant="outline"
            className="flex-1 border-[#5C7C5D] text-[#5C7C5D]"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button onClick={handleSave} className="flex-1 bg-[#5C7C5D]">
            Save Recipe
          </Button>
        </div>

      </div>
    </div>
  );
}


// import { useState, useEffect } from "react";
// import {
//   ArrowLeft, Heart, MoreHorizontal,
//   Clock3, ChefHat, Users,
// } from "lucide-react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { useCollections } from "../context/CollectionContext";
// import Button from "../components/UI/Buttons";
// import InstructionsSkeleton from "../components/Recipe/InsSkel";

// export default function Instructions() {
// const navigate = useNavigate();
//   const { collectionId, fileId } = useParams();
//   const { state } = useLocation();
//   const { getRecipeFile, saveRecipe } = useCollections();

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 800);
//     return () => clearTimeout(timer);
//   }, []);

//   const file = getRecipeFile(collectionId, fileId);
//   const recipe = state?.recipe || file?.recipe;

//   if (!recipe || !recipe.title) {
//     return (
//       <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center">
//         <p className="text-gray-500">Recipe not found.</p>
//       </div>
//     );
//   }

//   const handleSave = () => {
//     saveRecipe(collectionId, fileId, recipe);
//     navigate("/saved-recipes");
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-[#FAF8F4]">
//         <InstructionsSkeleton />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#FAF8F4]">
//       <div className="max-w-sm mx-auto">

//         {/* your existing JSX stays exactly as you wrote it */}
//         <div className="flex items-center justify-between px-4 pt-4">
//           <ArrowLeft size={18} className="cursor-pointer" onClick={() => navigate(-1)} />
//           <h1 className="font-playfair text-lg text-[#23352A]">{recipe.title}</h1>
//           <div className="flex items-center gap-3">
//             <Heart size={18} />
//             <MoreHorizontal size={18} />
//           </div>
//         </div>

//         <div className="mx-4 mt-4 bg-[#F7F3EB] rounded-xl p-3">
//           <div className="flex gap-3">
//             <div className="flex-1">
//               <div className="flex gap-4 text-xs text-[#5C7C5D]">
//                 <div className="flex items-center gap-1"><Clock3 size={12} />{recipe.cookTime}</div>
//                 <div className="flex items-center gap-1"><ChefHat size={12} />{recipe.difficulty}</div>
//                 <div className="flex items-center gap-1"><Users size={12} />{recipe.servings}</div>
//               </div>
//               <p className="text-xs text-[#23352A] mt-3 leading-5">{recipe.description}</p>
//             </div>
//           </div>
//         </div>

//         <div className="px-4 mt-6">
//           <h2 className="font-semibold text-[#23352A] mb-3">Ingredients</h2>
//           <ul className="space-y-2">
//             {recipe.ingredients.map((ingredient, index) => (
//               <li key={index} className="text-sm text-gray-600">• {ingredient}</li>
//             ))}
//           </ul>
//         </div>

//         {recipe.optionalIngredients?.length > 0 && (
//           <div className="px-4 mt-6">
//             <h2 className="font-semibold text-[#23352A] mb-3">Optional Ingredients</h2>
//             <ul className="space-y-2">
//               {recipe.optionalIngredients.map((ingredient, index) => (
//                 <li key={index} className="text-sm text-gray-600">• {ingredient}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <div className="px-4 mt-6">
//           <h2 className="font-semibold text-[#23352A] mb-3">Instructions</h2>
//           <ol className="space-y-4">
//             {recipe.instructions.map((step, index) => (
//               <li key={index} className="flex gap-3">
//                 <span className="font-semibold text-[#5C7C5D]">{index + 1}.</span>
//                 <p className="text-sm leading-6 text-gray-600">{step}</p>
//               </li>
//             ))}
//           </ol>
//         </div>

//         <div className="px-4 mt-8">
//           <h2 className="font-semibold text-[#23352A] mb-3">Tips</h2>
//           <ul className="space-y-2">
//             {recipe.tips.map((tip, index) => (
//               <li key={index} className="text-sm text-gray-600">💡 {tip}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="flex gap-3 px-4 mt-8 pb-8">
//           <Button variant="outline" className="flex-1 border-[#5C7C5D] text-[#5C7C5D]" onClick={() => navigate(-1)}>
//             Back
//           </Button>
//           <Button onClick={handleSave} className="flex-1 bg-[#5C7C5D]">
//             Save Recipe
//           </Button>
//         </div>

//       </div>
//     </div>
//   );
// }