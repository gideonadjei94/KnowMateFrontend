import FlashcardCard from "../../components/FlashcardCard";
import HomeRecentsCard from "../../components/HomeRecentsCard";
import PopularQuestionsCard from "../../components/PopularQuestionsCard";
import TopCreatorCard from "../../components/TopCreatorCard";

export default function HomeOutlet() {
  const recentsData = [
    {
      title: "Organic Chemistry",
      type: "Flashcard set",
      noOfItems: "15 terms",
      by: "MeekMill",
    },
    {
      title: "Linear Algebra",
      type: "Flashcard set",
      noOfItems: "60 terms",
      by: "NiiKpokpo3",
    },
  ];

  const topCreatorsData = [
    {
      username: "niiKpakpo34",
      noOfFlashCards: 20,
    },
    {
      username: "banku_One",
      noOfFlashCards: 60,
    },
    {
      username: "hi_EveryOne",
      noOfFlashCards: 53,
    },
  ];

  const popularQuestions = [
    {
      course: "Calculus I",
      question:
        "How do you find the derivative of a composite function using the chain rule?",
    },
    {
      course: "Economics",
      question:
        "What are the key differences between demand-pull and cost-push inflation?",
    },
    {
      course: "Systems Design",
      question:
        "How do you design a scalable URL shortening service like Bitly?",
    },
  ];
  return (
    <div className=" mb-14">
      <p className="text-slate-600 font-medium ml-4">Recents</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {recentsData.map((recent, index) => (
          <HomeRecentsCard key={index} recent={recent} />
        ))}
      </div>

      <div className="mt-16 mx-2">
        <p className="text-slate-600 font-medium ">Popular flashcard sets</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <FlashcardCard />
          <FlashcardCard />
          <FlashcardCard />
        </div>
      </div>

      <div className="mt-16 mx-2">
        <p className="text-slate-600 font-medium ">Popular textbooks</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <FlashcardCard />
          <FlashcardCard />
          <FlashcardCard />
        </div>
      </div>

      <div className="mt-16 mx-2">
        <p className="text-slate-600 font-medium ">Popular questions</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {popularQuestions.map((q, index) => (
            <PopularQuestionsCard key={index} question={q} />
          ))}
        </div>
      </div>

      <div className="mt-16 mx-2">
        <p className="text-slate-600 font-medium ">Top creators</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {topCreatorsData.map((creator, index) => (
            <TopCreatorCard key={index} creator={creator} />
          ))}
        </div>
      </div>
    </div>
  );
}
