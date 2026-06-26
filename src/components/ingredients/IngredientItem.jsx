import { GripVertical, X } from "lucide-react";

export default function IngredientItem({
  name,
  onDelete,
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        h-11
        px-3
        bg-white
        border
        border-[#DCD6CB]
        rounded-lg
      "
    >
      <div className="flex items-center gap-2">
        <GripVertical
          size={16}
          className="text-gray-400"
        />

        <span className="text-sm text-[#23352A] font-medium">
          {name}
        </span>
      </div>

      <X
        onClick={onDelete}
        size={16}
        className="text-gray-500 cursor-pointer"
      />
    </div>
  );
}