import { Plus } from "lucide-react";

export default function IngredientInput({
  value,
  onChange,
  onAdd,
}) {
  return (
    <div className="flex items-center gap-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAdd();
        }}
        className="flex items-center gap-2"
      >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Add an ingredient..."
        className="
          flex-1
          h-10
          px-3
          text-sm
          rounded-lg
          border
          border-[#DCD6CB]
          bg-white
          outline-none
        "
       
      />

      <button
        type="button"
        onClick={onAdd}
        className="
          w-10
          h-10
          rounded-full
          bg-[#5C7C5D]
          text-white
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        <Plus size={18} />
      </button>
      </form>
    </div>
  );
}