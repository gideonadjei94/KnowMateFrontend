import React, { useEffect, useState } from "react";
import { CheckCircle, AlertTriangle, XCircle, X } from "lucide-react";

const icons = {
  success: <CheckCircle className="w-5 h-5 text-white" />,
  error: <XCircle className="w-5 h-5 text-white" />,
  warning: <AlertTriangle className="w-5 h-5 text-white" />,
};

const bgColors = {
  success: "bg-green-600",
  error: "bg-red-600",
  warning: "bg-yellow-500",
};

const CustomToast = ({
  type = "success",
  message = "",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate in
    setVisible(true);

    const timeout = setTimeout(() => {
      // Animate out
      setVisible(false);

      // Fully remove after animation
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-transform duration-300 ease-in-out transform ${
        visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      } flex items-center max-w-xs px-4 py-3 rounded-lg shadow-lg text-white gap-4 ${
        bgColors[type]
      }`}
    >
      {icons[type]}
      <span className="text-sm font-medium flex-1">{message}</span>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => onClose?.(), 300);
        }}
      >
        <X className="size-3 ml-2 text-white  hover:text-gray-200" />
      </button>
    </div>
  );
};

export default CustomToast;
