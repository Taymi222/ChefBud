import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import resetImage from "../assets/images/password.png";
import Input from "../components/UI/Inputs";
import Button from "../components/UI/Buttons";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] px-6 py-8">
      <div className="max-w-sm mx-auto">

        {/* Back */}
        <Link
          to="/login"
          className="inline-flex "
        >
          <ArrowLeft
            size={22}
            className="text-[#23352A]"
          />
        </Link>

        {/* Illustration */}
        <div className="flex justify-center mt-8">
          <img
            src={resetImage}
            alt="Reset Password"
            className="w-[180px]"
          />
        </div>

        <div className="text-center mt-4">
          <h1 className="font-playfair text-[38px] text-[#23352A]">
            Reset Password
          </h1>

          <p className="text-[#6B7280] text-sm mt-2 px-4">
            Enter your email address and we'll send
            you a link to reset your password.
          </p>
        </div>

        {/* Input */}
        <div className="mt-8">
          <Input
            type="email"
            placeholder="Email address"
          />
        </div>

        {/* Button */}
        <div className="mt-4">
          <Button>
            Send Reset Link
          </Button>
        </div>

        <div className="text-center mt-10 hover:underline">
          <Link
            to="/login"
            className="text-[#D89B29] text-sm"
          >
            Back to login
          </Link>
        </div>

      </div>
    </div>
  );
}