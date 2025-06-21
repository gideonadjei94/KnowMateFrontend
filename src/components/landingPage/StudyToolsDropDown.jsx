import {
  BookMinus,
  BrainCircuit,
  ChevronDown,
  ClipboardList,
  GalleryVerticalEnd,
  ListChecks,
} from "lucide-react";
import React, { useState } from "react";

export default function StudyToolsDropDown() {
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
    <div className="relative">
      <div
        className="hidden items-center gap-2 md:flex cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-sm font-medium">Study Tools</p>
        <ChevronDown
          className={`size-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <ul className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg  z-10 py-5">
          <div className="flex flex-col gap-y-4">
            <p className="pl-4 text-xs text-gray-400">Students</p>
            {tools.map((tool, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer text-gray-500 font-medium flex items-center gap-x-4"
              >
                {toolIcon[tool]}
                {tool}
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
}
