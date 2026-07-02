import {
  Clock3,
  ChefHat,
  Users,
  ChevronRight,
} from "lucide-react";

export default function RecipeSuggestionCard({
  recipe,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
        bg-white
        border
        border-[#E8E4DC]
        rounded-2xl
        p-5
        cursor-pointer
        transition-all
        duration-200
        hover:shadow-md
        hover:-translate-y-1
        active:scale-[0.98]
      "
    >
      <div className="flex justify-between gap-4">

        <div className="flex-1">

          {/* Title */}

          <h2 className="font-playfair text-xl text-[#23352A]">
            {recipe.title}
          </h2>

          {/* Description */}

          <p className="text-sm text-gray-500 leading-6 mt-2">
            {recipe.description}
          </p>

          {/* Why Suggested */}

          <div className="mt-4 rounded-xl bg-[#F4F1E8] px-3 py-2">

            <p className="text-xs text-[#5C7C5D] leading-5">
              💡 {recipe.whySuggested}
            </p>

          </div>

          {/* Stats */}

          <div className="flex items-center gap-5 mt-4 text-xs text-gray-500">

            <div className="flex items-center gap-1">

              <Clock3 size={14} />

              {recipe.cookTime}

            </div>

            <div className="flex items-center gap-1">

              <ChefHat size={14} />

              {recipe.difficulty}

            </div>

            <div className="flex items-center gap-1">

              <Users size={14} />

              {recipe.servings}

            </div>

          </div>

        </div>

        <ChevronRight
          size={20}
          className="text-[#D89B29] shrink-0 mt-1"
        />

      </div>
    </div>
  );
}