import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function RecipeFileCard({
  collectionId,
  file,
}) {
  return (
    <Link
      to={`/recipe-editor/${collectionId}/${file.id}`}
    >
      <div className="bg-white rounded-2xl border border-[#E8E4DC] p-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-[#F4EFE4] flex items-center justify-center">

            <FileText
              size={20}
              className="text-[#4F6F52]"
            />

          </div>

          <div>

            <h3 className="font-medium text-[#23352A]">
              {file.title}
            </h3>

            <p className="text-xs text-gray-500">
              Updated just now
            </p>

          </div>

        </div>

      </div>
    </Link>
  );
}