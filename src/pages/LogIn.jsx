import logo from "../assets/images/chef-logo.png";
import Input from "../components/UI/Inputs";
import Button from "../components/UI/Buttons";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FAF8F4] px-6 py-8">
      <div className="max-w-sm mx-auto">

        {/* Logo */}
        <div className="flex justify-center">
            <img
            src={logo}
            alt="Chef Assistant"
            className="w-20"
            />
        </div>

        {/* Heading */}
        <div className="text-center mt-0 mb-6">
          <h1 className="font-playfair text-[38px] text-[#23352A]">
            Welcome Back
          </h1>

          <p className="text-[#6B7280] text-sm mt-1">
            Log in to continue
          </p>
        </div>

        {/* Inputs */}
        <form>
        <div className="space-y-4">
          <Input
            type="username"
            placeholder="your username"
          />

          <Input
            type="password"
            placeholder="Password"
          />

        </div>
        </form>

        {/* Remember Me */}
        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center gap-2 text-sm text-[#374151]">
            <input type="checkbox" />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-[#D89B29] text-sm hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <div className="mt-5">
          <Button onClick={() => navigate("/collections")}>
            Log In
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-[#E5E7EB]" />
          <span className="px-2 text-sm text-gray-500">
            or
          </span>
          <div className="flex-1 border-t border-[#E5E7EB]" />
        </div>

        {/* Create Account */}
        <Button
          variant="outline"
        >
          Create Account
        </Button>

        {/* Sign Up */}
        <p className="text-center text-sm mt-6">
          Don't have an account?{" "}
          <span className="text-[#D89B29]">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}