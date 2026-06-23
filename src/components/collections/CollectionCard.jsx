import { MoreVertical } from "lucide-react";

export default function CollectionCard({
  name,
  items,
  updated,
  icon: Icon,
}) {
  return (
    <div className="bg-white border border-[#E8E4DC] rounded-2xl p-4 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-[#4F6F52] flex items-center justify-center">
          <Icon size={18} color="white" />
        </div>

        <div>
          <h3 className="font-semibold text-[#23352A]">
            {name}
          </h3>

          <p className="text-xs text-gray-500">
            {items} items
          </p>

          <p className="text-xs text-gray-500">
            {updated}
          </p>
        </div>

      </div>

      <MoreVertical
        size={18}
        className="text-gray-400"
      />
    </div>
  );
}