// import {
//   Bell,
//   Menu,
//   Plus,
// } from "lucide-react";

// import CollectionCard from "../components/collections/CollectionCard";
// import { collections } from "../data/mockCollections";

// export default function Collections() {
//   return (
//     <div className="min-h-screen bg-[#FAF8F4] px-6 py-8">

//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <Menu size={22} />
//         <Bell size={22} />
//       </div>

//       {/* Greeting */}
//       <div className="mt-6">
//         <p className="text-gray-500">
//           Hello, Temi 👋
//         </p>

//         <h1 className="font-playfair text-[36px] text-[#23352A]">
//           My Collections
//         </h1>

//         <p className="text-gray-500 text-sm">
//           Organize your ingredients by meals.
//         </p>
//       </div>

//       {/* Collections */}
//       <div className="mt-6 space-y-3">
//         {collections.map((collection) => (
//           <CollectionCard
//             key={collection.id}
//             {...collection}
//           />
//         ))}
//       </div>

//       {/* Floating Button */}
//       <button
//         className="
//           fixed
//           bottom-24
//           right-6
//           w-14
//           h-14
//           rounded-full
//           bg-[#D89B29]
//           text-white
//           flex
//           items-center
//           justify-center
//           shadow-lg
//         "
//       >
//         <Plus />
//       </button>

//     </div>
//   );
// }
