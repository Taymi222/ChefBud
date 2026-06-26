import { Clock3, BarChart3, Image as ImageIcon } from "lucide-react";

export default function RecipeCard({
  title,
  time,
  difficulty,
  description,
}) {
  return (
    <div className="bg-white border border-[#E5DED2] rounded-xl p-3 flex gap-3">

      {/* Placeholder Image */}
      <div className="w-32 h-24 rounded-lg bg-[#F2EEE5] flex items-center justify-center shrink-0">
        <ImageIcon
          size={30}
          className="text-[#A5A5A5]"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">

        <div>
          <h2 className="font-playfair text-[24px] text-[#23352A] leading-tight">
            {title}
          </h2>

          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">

            <div className="flex items-center gap-1">
              <Clock3 size={13} />
              <span>{time}</span>
            </div>

            <div className="flex items-center gap-1">
              <BarChart3 size={13} />
              <span>{difficulty}</span>
            </div>

          </div>
        </div>

        <p className="text-sm text-gray-600 mt-3">
          {description}
        </p>

      </div>
    </div>
  );
}