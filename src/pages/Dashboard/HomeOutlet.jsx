import HomeRecentsCard from "../../components/HomeRecentsCard";

export default function HomeOutlet() {
  const recentsData = [
    {
      title: "Organic Chemistry",
      type: "Flashcard set",
      noOfItems: "15 items",
      by: "MeekMill",
    },
    {
      title: "Linear Algebra",
      type: "Flashcard set",
      noOfItems: "60 items",
      by: "NiiKpokpo3",
    },
  ];
  return (
    <div className="">
      <p className="text-gray-600 font-medium ml-4">Recents</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {recentsData.map((recent, index) => (
          <HomeRecentsCard key={index} recent={recent} />
        ))}
      </div>

      <div className="mt-16">
        <p className="text-gray-600 font-medium ml-4">Popular flashcard sets</p>
        <div></div>
      </div>
    </div>
  );
}
