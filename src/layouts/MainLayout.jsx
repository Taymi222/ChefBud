import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/navigation/BottomNavigation";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">

      <div className="max-w-md mx-auto min-h-screen relative pb-24">
        <Outlet />
      </div>

      <BottomNavigation />

    </div>
  );
}