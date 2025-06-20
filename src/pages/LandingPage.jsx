import { Plus } from "lucide-react";
import FeaturesCarousel from "../components/landingPage/FeaturesCarousel";
import Footer from "../components/landingPage/Footer";
import { useEffect, useState } from "react";
import LoginModal from "../components/common/LoginModal";
import { useNavigate } from "react-router-dom";
import StudyToolsDropDown from "../components/landingPage/StudyToolsDropDown";
import MenuSheet from "../components/common/MenuSheet";

export default function LandingPage() {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showLoginModal ? "hidden" : "auto";
  }, [showLoginModal]);

  const signUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="w-dvw relative min-h-screen flex flex-col bg-gray-100 pb-10 ">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-white  z-50 flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-8">
            <p className="text-2xl font-bold text-[#4255ff]">KnowMate</p>

            <StudyToolsDropDown />
          </div>
          <div className="hidden md:flex gap-x-8">
            <button
              className="text-sm flex items-center text-[#4255ff] gap-x-1 font-medium hover:cursor-pointer"
              onClick={() => setShowLoginModal(true)}
            >
              <Plus className="size-4" />
              Create
            </button>
            <button
              className="py-2 px-3 rounded-full bg-[#4255ff] text-white font-medium text-sm hover:cursor-pointer"
              onClick={() => setShowLoginModal(true)}
            >
              Log in
            </button>
          </div>
          <MenuSheet />
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

            <button
              className="p-4 text-[14px] rounded-full bg-[#4255ff] text-white w-auto font-medium  hover:cursor-pointer mt-2"
              onClick={signUp}
            >
              Sign up for free
            </button>

            <button className="text-[14px] text-[#4255ff] font-medium hover:cursor-pointer mt-2">
              I'm a teacher
            </button>
          </div>
        </div>

        <FeaturesCarousel />
      </div>

      <div className="flex flex-row md:mx-[12%]  mt-16">
        <div className="basis-0 md:basis-[40%] bg-[#EEAAFF]">
          <img
            src="https://images.prismic.io/quizlet-web/ZpWfEh5LeNNTxK_T_study-guides-image.png?auto=format,compress"
            alt="img"
            className="object-cover pt-[12%]"
          />
        </div>

        <div className="basis-[100%] w-full  md:basis-[55%] py-7 px-4">
          <div className="flex flex-col gap-y-10 p-10">
            <p className="text-3xl font-semibold">
              Make class material instantly studiable
            </p>
            <p className="text-lg">
              Turn your slides, videos, and notes into flashcard sets, practice
              tests, and study guides.
            </p>
            <button
              className="p-5 bg-[#4255ff] rounded-full text-white font-medium w-[50%] md:w-[22%] hover:cursor-pointer"
              onClick={signUp}
            >
              Try it out
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row md:mx-[12%]  mt-16">
        <div className="basis-[100%] md:basis-[55%] py-7 px-4">
          <div className="flex flex-col gap-y-10 p-10">
            <p className="text-3xl font-semibold">Test prep for any subject</p>
            <p className="text-lg">
              Memorize anything with personalized practice tests and study
              sessions in Learn. 98% of students say Quizlet has improved their
              understanding.
            </p>
            <button
              className="p-5 bg-[#4255ff] rounded-full text-white font-medium w-[50%] md:w-[26%] hover:cursor-pointer"
              onClick={signUp}
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="basis-0 md:basis-[40%] bg-[#98E3FF]">
          <img
            src="https://images.prismic.io/quizlet-web/ZpWfEx5LeNNTxK_U_learn-image.png?auto=format,compress"
            alt="img"
            className="object-cover pt-[12%]"
          />
        </div>
      </div>
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(!showLoginModal)} />
      )}
      <Footer />
    </>
  );
}
