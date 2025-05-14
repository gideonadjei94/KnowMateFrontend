import { Plus } from "lucide-react";
import React from "react";
import FeaturesCarousel from "../components/FeaturesCarousel";

export default function LandingPage() {
  return (
    <div className="w-dvw relative min-h-screen flex flex-col bg-gray-100 pb-10">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white  z-50 flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-[#4255ff]">KnowMate</div>
        <div className="flex gap-x-8">
          <button className="text-sm flex items-center text-[#4255ff] gap-x-1 font-medium hover:cursor-pointer">
            <Plus className="size-4" />
            Create
          </button>
          <button className="px-3 py-2 rounded-full bg-[#4255ff] text-white font-medium text-sm hover:cursor-pointer">
            Log in
          </button>
        </div>
      </nav>

      {/* Main */}
      <div className="w-full  h-full flex flex-col">
        <div className="flex flex-col gap-y-3 w-full text-center items-center pt-32">
          <h1 className="text-[38px] font-bold">How do you want to study?</h1>
          <p className="text-lg ">
            Master whatever you’re learning with KnowMate's interactive
            flashcards, practice tests,
            <br /> and study activities.
          </p>

          <button className="px-4 py-2.5 rounded-3xl bg-[#4255ff] text-white w-auto font-medium text-[14px] hover:cursor-pointer mt-2">
            Sign up for free
          </button>

          <button className="text-[14px] text-[#4255ff] font-medium hover:cursor-pointer mt-2">
            I am a teacher
          </button>
        </div>
      </div>

      <FeaturesCarousel />
    </div>
  );
}
