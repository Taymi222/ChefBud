import Shimmer from "../UI/shimmer";

export default function RecipeSuggestionSkeleton() {
  return (
    <div className="bg-white border border-[#E8E4DC] rounded-2xl p-4">

      {/* Title */}
      <Shimmer className="h-6 w-3/4 mb-3" />

      {/* Meta — time and difficulty */}
      <div className="flex gap-3 mb-3">
        <Shimmer className="h-3 w-20" />
        <Shimmer className="h-3 w-16" />
      </div>

      {/* Description */}
      <Shimmer className="h-3 w-full mb-2" />
      <Shimmer className="h-3 w-5/6 mb-4" />

      {/* Why suggested pill */}
      <Shimmer className="h-8 w-full rounded-xl mb-4" />

      {/* Ingredient tags */}
      <div className="flex gap-2">
        <Shimmer className="h-6 w-16 rounded-full" />
        <Shimmer className="h-6 w-20 rounded-full" />
        <Shimmer className="h-6 w-14 rounded-full" />
      </div>

    </div>
  );
}