import {
  BookMinus,
  BrainCircuit,
  ClipboardList,
  GalleryVerticalEnd,
  ListChecks,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import React, { useState } from "react";

export default function MenuSheet() {
  const [isOpen, setIsOpen] = useState(false);

  const tools = [
    "Learn",
    "Study Guides",
    "Flashcards",
    "Test",
    "Expert Solution",
  ];
  const toolIcon = {
    Flashcards: (
      <GalleryVerticalEnd className="size-5 text-[#98E3FF] rotate-90 " />
    ),
    Learn: <BrainCircuit className="size-5 text-[#EEAAFF]" />,
    "Study Guides": <ClipboardList className="size-5 text-[#423ED8] " />,
    Test: <ListChecks className="size-5 text-[#FFC38C] " />,
    "Expert Solution": <BookMinus className="size-5 text-[#98F1D1] " />,
  };

  return (
    <>
      {/* Menu Icon */}
      <div
        className="size-8 flex md:hidden items-center justify-center border border-gray-300 rounded-lg p-2 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="size-5" />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sheet */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="size-6" />
          </button>
        </div>

        {/* Sheet Content */}
        <div className="px-6 py-4">
          <h2 className="text-sm text-gray-400 font-medium mb-4">
            Study tools
          </h2>
          <ul className="space-y-3 border-b pb-7 border-gray-400">
            {tools.map((tool, index) => (
              <li
                className="flex items-center  gap-x-3 text-gray-500 p-3 hover:bg-gray-200 font-medium text-sm"
                key={index}
              >
                {toolIcon[tool]}
                {tool}
              </li>
            ))}
          </ul>

          <button className="px-3 py-2 mt-3 flex items-center gap-x-4 font-semibold text-indigo-600 hover:bg-gray-100">
            <LogIn />
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
