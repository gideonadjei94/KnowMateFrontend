import { Lock, Mail, X } from "lucide-react";

export default function LoginModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-opacity-40 flex justify-center items-center z-[1000]"
      onClick={onClose}
    >
      <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg py-6 px-8 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 size-8 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-100"
        >
          <X className="size-5" />
        </button>

        <div className="flex flex-col items-center gap-y-1 mt-4">
          <p className="">Welcome Back!</p>
          <p className="text-xl font-semibold">Log In to Continue</p>
        </div>

        <form className="mt-8 ">
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
              placeholder="Enter your Password"
            />
          </div>
          <p className="text-sm flex justify-end mt-2 text-indigo-600">
            Forgot Password?
          </p>

          <button
            type="submit"
            className="py-3 rounded-lg text-white text-sm bg-indigo-600 w-full mt-4 hover:cursor-pointer"
          >
            Log In
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <span className="text-indigo-600 hover:text-indigo-500 hover:cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
