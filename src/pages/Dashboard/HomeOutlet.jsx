import FlashcardCard from "../../components/FlashcardCard";
import HomeRecentsCard from "../../components/HomeRecentsCard";

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
  return (
    <div className=" mb-14">
      <p className="text-gray-600 font-medium ml-4">Recents</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {recentsData.map((recent, index) => (
          <HomeRecentsCard key={index} recent={recent} />
        ))}
      </div>

      <div className="mt-16 mx-2">
        <p className="text-gray-600 font-medium ">Popular flashcard sets</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <FlashcardCard />
          <FlashcardCard />
          <FlashcardCard />
        </div>
      </div>

      <div className="mt-16 mx-2">
        <p className="text-gray-600 font-medium ">Popular textbooks</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <FlashcardCard />
          <FlashcardCard />
          <FlashcardCard />
        </div>
      </div>

      <div className="mt-16 mx-2">
        <p className="text-gray-600 font-medium ">Popular questions</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <FlashcardCard />
          <FlashcardCard />
          <FlashcardCard />
        </div>
      </div>

      <div className="mt-16 mx-2">
        <p className="text-gray-600 font-medium ">Top creators</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <FlashcardCard />
          <FlashcardCard />
          <FlashcardCard />
        </div>
      </div>
    </div>
  );
}
