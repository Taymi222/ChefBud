import { NavLink } from "react-router-dom";
import {
  Folder,
  Bookmark,
  User,
} from "lucide-react";

export default function BottomNavigation() {
  const activeClass =
    "text-[#4F6F52]";

  const inactiveClass =
    "text-gray-500";

  return (
            <nav
        className="
            fixed
            bottom-0
            left-1/2
            -translate-x-1/2
            w-full
            max-w-sm
            h-20
            bg-[#FAF8F4]
            border-t
            border-[#E8E4DC]
            flex
            justify-around
            items-center
            z-50
        "
        >
      <NavLink
        to="/collections"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive
              ? activeClass
              : inactiveClass
          }`
        }
      >
        <Folder size={20} />
        <span className="mt-1">
          Collections
        </span>
      </NavLink>

      <NavLink
        to="/saved-recipes"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive
              ? activeClass
              : inactiveClass
          }`
        }
      >
        <Bookmark size={20} />
        <span className="mt-1">
          Saved Recipes
        </span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive
              ? activeClass
              : inactiveClass
          }`
        }
      >
        <User size={20} />
        <span className="mt-1">
          Profile
        </span>
      </NavLink>
    </nav>
  );
}