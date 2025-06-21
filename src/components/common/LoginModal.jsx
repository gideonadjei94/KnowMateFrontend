import { Loader2, Lock, Mail, X } from "lucide-react";
import googleLogo from "../../assets/google.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import clsx from "clsx";
import CustomToast from "./CustomToast";
import { useUser } from "../../context/UserContext";

export default function LoginModal({ onClose }) {
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState(null);

  const navigate = useNavigate();

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  const BaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const loginData = {
    email,
    password,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      const res = await axios.post(`${BaseUrl}/auth/authenticate`, loginData);

      if (res.status !== 200 && res.status !== 201) {
        const backendMsg =
          res.data?.msg || "An error occurred. Please try again.";
        showToast("error", backendMsg);
        return;
      }
      showToast("success", res.data.msg);
      const token = res.data.data?.token;
      const userId = res.data.data?.userId;
      setUser({ userId, token }, rememberMe);
      setEmail("");
      setPassword("");
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 4000);
    } catch (error) {
      const backendMsg =
        error?.response?.data?.msg ||
        error?.message ||
        "Network error. Please try again.";

      setError(backendMsg);
      showToast("error", backendMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-40 flex justify-center items-center z-[1000]">
      {toast && (
        <CustomToast
          type={toast.type}
          message={toast.message}
          duration={4000}
          onClose={() => setToast(null)}
        />
      )}
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

        {error && (
          <p className="text-xs text-red-500 mt-2 text-center">{error}</p>
        )}

        <div className="mt-5">
          <button className="flex items-center justify-center gap-x-4 border border-gray-300 mb-4 w-full rounded-xl py-3 hover:cursor-pointer">
            <img src={googleLogo} alt="g" className="size-4" />
            <p className="text-sm">Log in with Google</p>
          </button>

          <div className="flex items-center justify-evenly ">
            <div className="h-[0.5px] w-[45%] bg-gray-300" />
            <p className="text-sm text-gray-400">Or</p>
            <div className="h-[0.5px] w-[45%] bg-gray-300" />
          </div>

          <form className="mt-4" onSubmit={handleLogin}>
            <div className="border border-gray-300 rounded-xl p-3 flex items-center gap-x-4">
              <Mail className="size-5 text-indigo-600" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none text-sm"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="border border-gray-300 rounded-xl p-3 flex items-center gap-x-4 mt-5">
              <Lock className="size-5 text-indigo-600" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none text-sm"
                placeholder="Enter your Password"
                required
              />
            </div>

            <div className=" flex items-center justify-between mt-2">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  value={rememberMe}
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <p className=" text-sm ">Remember me</p>
              </div>

              <p className="text-sm flex justify-end mt-2 text-indigo-600">
                Forgot Password?
              </p>
            </div>

            <button
              type="submit"
              className={clsx(
                "py-3 rounded-lg text-white text-sm w-full mt-4 flex items-center justify-center",
                isSubmitting
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-indigo-600 cursor-pointer"
              )}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-x-3">
                  <p className="">Please Wait</p>
                  <Loader2 className="animate-spin size-5" />
                </div>
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <span
            className="text-indigo-600 hover:text-indigo-500 hover:cursor-pointer"
            onClick={onClose}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
