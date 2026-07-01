import { useState } from "react";
import { X } from "lucide-react";

export default function RecipeFileModal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title.trim());
    setTitle("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-[100] p-4">
      <div className="bg-[#FAF8F4] w-full max-w-xs rounded-2xl border border-[#E8E4DC] p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <h2 className="font-playfair text-xl font-bold text-[#23352A] mb-4">
          New Recipe File
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Recipe Name
            </label>
            <input
              type="text"
              required
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Fluffy Pancakes"
              className="w-full h-12 px-4 rounded-xl border border-[#E7E2D8] bg-white outline-none focus:ring-2 focus:ring-[#4F6F52] text-sm text-[#23352A]"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-12 rounded-xl border border-[#E8E4DC] text-[#23352A] font-medium text-sm hover:bg-[#F4EFE4] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-12 rounded-xl bg-[#4F6F52] text-white font-medium text-sm hover:bg-[#3D5A3F] transition-colors flex items-center justify-center"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
