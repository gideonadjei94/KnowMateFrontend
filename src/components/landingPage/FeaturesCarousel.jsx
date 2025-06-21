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
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const cardBgs = {
    0: "bg-[#98E3FF] text-black",
    1: "bg-[#EEAAFF] text-black",
    2: "bg-[#423ED8] text-white",
    3: "bg-[#FFC38C] text-black",
    4: "bg-[#98F1D1] text-black",
  };

  const cardImages = {
    0: "https://images.prismic.io/quizlet-web/ZpFubx5LeNNTxHxg_4Learn%402x.png?auto=format,compress",
    1: "https://images.prismic.io/quizlet-web/ZpFuOB5LeNNTxHxU_1SG%402x.png?auto=format,compress",
    2: "https://images.prismic.io/quizlet-web/ZpFuUR5LeNNTxHxc_2Flashcards%402x.png?auto=format,compress",
    3: "https://images.prismic.io/quizlet-web/ZpFuYB5LeNNTxHxd_3PracticeTests%402x.png?auto=format,compress",
    4: "https://plus.unsplash.com/premium_photo-1661685751617-d51f9025f164?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvbHV0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
  };

  return (
    <div className="w-full px-2 md:px-10 py-12">
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl shadow-md text-center mx-2 md:mx-10 h-[395px] flex flex-col justify-between ${cardBgs[index]}`}
          >
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <div className="w-68 h-72 mt-14 ml-[22px] rounded-tl-2xl rounded-br-2xl">
              <img
                src={cardImages[index]}
                alt="card image"
                className="object-cover w-full h-full rounded-tl-2xl rounded-br-2xl"
              />
            </div>
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
