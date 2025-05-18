import { Lock, Mail, X } from "lucide-react";
import booksImg from "../assets/books.png";
import googleLogo from "../assets/google.png";
import { useState } from "react";
import LoginModal from "../components/LoginModal";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const showLogin = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const signUp = () => {
    navigate("/dashboard");
  };
  return (
    <div className="w-full flex relative">
      <div className="basis-[50%] bg-purple-300 h-screen pl-10 pt-10 flex flex-col gap-y-8">
        <div className="text-4xl font-semibold">
          <p>The best way to study.</p>
          <p>Sign Up for free.</p>
        </div>

        <div className="w-[80%] h-[70%]  ml-[16%]">
          <img src={booksImg} alt="books" className="object-cover h-[90%]" />
        </div>

        <p className="text-gray-50 font-semibold text-4xl">KnowMate.</p>
      </div>

      <div className="basis-[50%] flex items-center justify-center">
        <div className="max-w-md w-md">
          <div className="flex flex-col items-center gap-y-1 mt-4">
            <p className="">Hi There!</p>
            <p className="text-xl font-semibold">Sign Up to Get Started</p>
          </div>

          <div className="mt-8 ">
            <button className="flex items-center justify-center gap-x-4 border border-gray-300 mb-4 w-full rounded-xl py-3 hover:cursor-pointer">
              <img src={googleLogo} alt="g" className="size-4" />
              <p className="text-sm">Sign Up with Google</p>
            </button>

            <div className="flex items-center justify-evenly ">
              <div className="h-[1px] w-[45%] bg-gray-300" />
              <p className="text-sm text-gray-400">Or</p>
              <div className="h-[1px] w-[45%] bg-gray-300" />
            </div>

            <form className="mt-4">
              <div className="border border-gray-300 rounded-xl p-3 flex items-center gap-x-4">
                <Mail className="size-5 text-indigo-600" />
                <input
                  type="text"
                  className="w-full outline-none text-sm"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="border border-gray-300 rounded-xl p-3 flex items-center gap-x-4 mt-5">
                <Lock className="size-5 text-indigo-600" />
                <input
                  type="password"
                  className="w-full outline-none text-sm"
                  placeholder="Enter a Password"
                />
              </div>
              <div className="border border-gray-300 rounded-xl p-3 flex items-center gap-x-4 mt-5">
                <Lock className="size-5 text-indigo-600" />
                <input
                  type="password"
                  className="w-full outline-none text-sm"
                  placeholder="Confirm your Password"
                />
              </div>
              <div className="flex items-center gap-x-3 mt-3">
                <input type="checkbox" />
                <p className="text-xs font-medium">
                  I accept KnowMate's{" "}
                  <span className="text-gray-500">Terms of Service</span> and{" "}
                  <span className="text-gray-500">Privacy Policy</span>
                </p>
              </div>

              <button
                onClick={signUp}
                className="py-3 rounded-lg text-white text-sm bg-indigo-600 w-full mt-4 hover:cursor-pointer"
              >
                Sign Up
              </button>
            </form>
          </div>

          <p className="text-center mt-4 text-sm">
            Already have an Account?{" "}
            <span
              className="text-indigo-600 hover:text-indigo-500 hover:cursor-pointer"
              onClick={showLogin}
            >
              Log In
            </span>
          </p>
        </div>
      </div>

      {showLoginModal && <LoginModal onClose={closeLoginModal} />}
    </div>
  );
}
