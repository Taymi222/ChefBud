import ActionMenu from "../UI/ActionMenu";
import { Link } from "react-router-dom";

export default function CollectionCard({
  id,
  name,
  icon,
  files,
  updatedAt,
  onRename,
  onDelete,
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
      <div className="relative bg-white border border-[#E8E4DC] rounded-2xl p-4 flex items-center justify-between overflow-visible">

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

        <ActionMenu
          actions={[
            {
              label: "Rename Collection",
              onClick: onRename,
            },
            {
              label: "Delete Collection",
              danger: true,
              onClick: onDelete,
            },
          ]}
        />

      </div>
    </Link>
  );
}