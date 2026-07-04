import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function CollectionModal({
  isOpen,
  onClose,
  onSubmit,
  title = "New Collection",
  buttonText = "Create",
  initialValue = "",
}) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName(initialValue);
    }
  }, [isOpen, initialValue]);
git 
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    onSubmit(name.trim());

    setName("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-[100] p-4">

      <div className="bg-[#FAF8F4] w-full max-w-xs rounded-2xl border border-[#E8E4DC] p-6 shadow-xl relative">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400"
        >
          <X size={18} />
        </button>

        <h2 className="font-playfair text-xl font-bold text-[#23352A] mb-4">
          {title}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>

            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Collection Name
            </label>

            <input
              type="text"
              autoFocus
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-[#E7E2D8] bg-white outline-none focus:ring-2 focus:ring-[#4F6F52]"
            />

          </div>

          <div className="flex gap-3">

            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-12 rounded-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 h-12 rounded-xl bg-[#4F6F52] text-white"
            >
              {buttonText}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}