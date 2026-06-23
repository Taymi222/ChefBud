// components/ui/Button.jsx

export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        w-full
        py-4
        rounded-xl
        bg-[#4F6F52]
        text-white
        font-medium
        flex
        items-center
        justify-center
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}