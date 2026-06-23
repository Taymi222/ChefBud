export default function Input({
  type = "text",
  placeholder,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        h-14
        px-4
        rounded-xl
        border
        border-[#E7E2D8]
        bg-white
        outline-none
        focus:ring-2
        focus:ring-[#4F6F52]
      "
    />
  );
}