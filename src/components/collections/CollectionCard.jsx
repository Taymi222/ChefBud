import { MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

export default function CollectionCard({
  id,
  name,
  icon,
  files,
  updatedAt,
}) {
  const formattedDate = updatedAt
  ? new Date(updatedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  : "Never";

  return (
    <Link
      to={`/collections/${id}`}
      className="block"
    >
      <div className="bg-white border border-[#E8E4DC] rounded-2xl p-4 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-[#4F6F52] flex items-center justify-center text-xl">
            {icon}
          </div>

          <div>

            <h3 className="font-semibold text-[#23352A]">
              {name}
            </h3>

            <p className="text-xs text-gray-500">
              {(files ?? []).length} recipe
              {(files ?? []).length !== 1 && "s"}
            </p>

            <p className="text-xs text-gray-500">
              Updated: {formattedDate}
          </p>

          </div>

        </div>

        <MoreVertical
          size={18}
          className="text-gray-400"
        />

      </div>
    </Link>
  );
}