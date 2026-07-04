import { useState } from "react";
import { MoreVertical } from "lucide-react";

export default function ActionMenu({ actions }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
        }}
        className="p-1"
      >
        <MoreVertical
          size={18}
          className="text-gray-500 relative rounded-full hover:bg-slate-400/20 transition-colors duration-150 overflow-hidden"
        />
      </button>

      {isOpen && (
        <div
          className="
            absolute
            right-0
            top-8
            w-40
            bg-white
            rounded-xl
            border
            border-[#E8E4DC]
            shadow-lg
            overflow-visible
            z-[9999]
          "
        >
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                action.onClick();
                setIsOpen(false);
              }}
              className={`
                w-full
                px-4
                py-3
                text-left
                text-sm
                hover:bg-[#F8F8F8]
                ${
                  action.danger
                    ? "text-red-500"
                    : "text-[#23352A]"
                }
              `}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}

    </div>
  );
}