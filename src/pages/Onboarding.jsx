import { useNavigate } from "react-router-dom";
import logo from "../assets/images/clogo.png";
import foodImage from "../assets/images/onboarding.png";
import Button from "../components/UI/Buttons";

export default function Onboarding() {
  const navigate = useNavigate();
  return ( <div className="min-h-screen bg-[#FAF8F4] px-6 py-8">

<div className="max-w-sm mx-auto min-h-screen flex flex-col">

    {/* Logo */}
    <div className="flex justify-center">
      <img
        src={logo}
        alt="Chef Assistant"
        className="w-30"
      />
    </div>

    <div className="text-center mt-0">
      <h1 className="font-playfair text-[27px] text-[#23352A] leading-none">
        Chef Assistant
      </h1>
    </div>

    {/* Illustration */}
    <div className="flex justify-center mt-2">
      <img
        src={foodImage}
        alt="Cooking ingredients"
        className="w-[275px]"
      />
    </div>

    {/* Heading */}
    <div className="text-center mt-2">
      <h1 className="font-playfair text-[30px] text-[#23352A] leading-none">
        Cook Smarter,
      </h1>

      <h2 className="font-playfair italic text-[30px] text-[#5D7C61] leading-none mt-1">
        Not Harder
      </h2>
    </div>

    {/* Description */}
    <p className="text-center text-[#5F6470] text-base px-4 mt-5">
      Turn the ingredients you already have into delicious meal ideas.
    </p>

    {/* Push button to bottom */}
    <div className="mt-5 pb-4">
      <Button className="w-full" 
      onClick={() => navigate("/login")}>
        Get Started
      </Button>
    </div>

  </div>
</div>

);
}
