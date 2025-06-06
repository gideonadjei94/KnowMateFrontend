import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="py-12 px-[10%] mt-[10%] bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-b-2 pb-20 border-gray-300">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">About KnowMate</h3>
          <p className="leading-loose">
            An interactive quiz platform designed to make learning engaging and
            effective. Enjoy category-based quizzes, real-time feedback, and
            track your progress as you grow your knowledge.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-4 ">
            <li>
              <a href="#" className="hover:cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:cursor-pointer">
                Start Quiz
              </a>
            </li>
            <li>
              <a href="#" className="hover:cursor-pointer">
                Leaderboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:cursor-pointer">
                Login / Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="hover:cursor-pointer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Contact & Social</h3>
          <p className=" ">Email: support@knowmate.app</p>
          <p className=" ">Phone: +233 20 544 615</p>
          <div>
            <p className=" mb-2">Follow Us</p>
            <ul className="flex gap-4 ">
              <li>
                <a href="#" className="hover:cursor-pointer">
                  <Twitter className="size-5 hover:text-red-500" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:cursor-pointer">
                  <Linkedin className="size-5 hover:text-red-500" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:cursor-pointer">
                  <Instagram className="size-5 hover:text-red-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-2 text-gray-400 flex items-center justify-between">
        <p className="">&copy; 2025 KnowMate. All rights reserved</p>
        <p className="hover:cursor-pointer">Privacy Policy</p>
      </div>
    </div>
  );
}
