export default function RecipeTags({ ingredients }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {ingredients.map((ingredient) => (
        <span
          key={ingredient}
          className="
            px-3
            py-1
            rounded-full
            bg-[#F3EFE6]
            text-[#5C7C5D]
            text-xs
          "
        >
          {ingredient}
        </span>
      ))}
    </div>
  );
}