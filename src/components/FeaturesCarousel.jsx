import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Arrow Component
function SampleArrow({ style, onClick, direction }) {
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-5 rounded-full shadow-md flex items-center justify-center ${
        direction === "next"
          ? "right-6 border border-gray-300"
          : "left-6 border border-gray-300"
      }`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      {direction === "next" ? (
        <ChevronRight size={20} />
      ) : (
        <ChevronLeft size={20} />
      )}
    </div>
  );
}

// Features Carousel Component
function FeaturesCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleArrow direction="next" />,
    prevArrow: <SampleArrow direction="prev" />,
    autoplay: false,
    // autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
      },
    ],
  };

  return (
    <div className="w-full px-10 py-12">
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl shadow-md text-center mx-10 h-[395px] flex flex-col justify-between ${
              index === 0
                ? "bg-[#98E3FF] text-black"
                : index === 1
                ? "bg-[#EEAAFF] text-black"
                : index === 2
                ? "bg-[#423ED8] text-white"
                : index === 3
                ? "bg-[#FFC38C] text-black"
                : index === 4
                ? "bg-[#98F1D1] text-black"
                : ""
            }`}
          >
            <h2 className="text-xl font-semibold">{feature.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Feature data
const features = [
  {
    title: "Learn",
    description:
      "Explore new topics and expand your knowledge with curated learning paths.",
  },
  {
    title: "Study Guides",
    description:
      "Use well-structured study guides to understand core concepts efficiently.",
  },
  {
    title: "Flashcards",
    description:
      "Memorize key points with interactive flashcards designed for active recall.",
  },
  {
    title: "Practice Tests",
    description:
      "Test your understanding with quizzes and mock exams that simulate real scenarios.",
  },
  {
    title: "Expert Solution",
    description:
      "Get step-by-step solutions and explanations from experts to tough questions.",
  },
];

export default FeaturesCarousel;
