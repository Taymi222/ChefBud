import Shimmer from "../UI/shimmer";

export default function InstructionsSkeleton() {
  return (
    <div className="max-w-sm mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4">
        <Shimmer className="h-5 w-5 rounded-full" />
        <Shimmer className="h-5 w-40" />
        <Shimmer className="h-5 w-10" />
      </div>

      {/* Summary card */}
      <div className="mx-4 mt-4 bg-[#F7F3EB] rounded-xl p-3">
        <div className="flex gap-3 mb-2">
          <Shimmer className="h-3 w-20" />
          <Shimmer className="h-3 w-16" />
          <Shimmer className="h-3 w-12" />
        </div>
        <Shimmer className="h-3 w-full mt-2" />
        <Shimmer className="h-3 w-4/5 mt-2" />
      </div>

      {/* Ingredients section */}
      <div className="px-4 mt-6">
        <Shimmer className="h-5 w-28 mb-3" />
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <Shimmer key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>

      {/* Instructions section */}
      <div className="px-4 mt-6">
        <Shimmer className="h-5 w-28 mb-3" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-3">
              <Shimmer className="h-4 w-4 rounded-full shrink-0" />
              <div className="flex-1 space-y-2">
                <Shimmer className="h-3 w-full" />
                <Shimmer className="h-3 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips section */}
      <div className="px-4 mt-8">
        <Shimmer className="h-5 w-16 mb-3" />
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <Shimmer key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 px-4 mt-8 pb-8">
        <Shimmer className="h-11 flex-1 rounded-xl" />
        <Shimmer className="h-11 flex-1 rounded-xl" />
      </div>

    </div>
  );
}