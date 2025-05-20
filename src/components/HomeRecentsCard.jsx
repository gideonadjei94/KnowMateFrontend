import clsx from "clsx";
import { GalleryVerticalEnd } from "lucide-react";

export default function HomeRecentsCard({ recent }) {
  const recentTypeIcon = {
    "Flashcard set": (
      <GalleryVerticalEnd className="size-5 rotate-90 text-cyan-600" />
    ),
  };

  const recentTypeIconBgColors = {
    "Flashcard set": "bg-cyan-50",
  };

  return (
    <div className="p-4 rounded-lg hover:bg-gray-50 flex items-start gap-x-3 cursor-pointer">
      <div
        className={clsx(
          "size-10 rounded-lg flex items-center justify-center",
          recentTypeIconBgColors[recent.type]
        )}
      >
        {recentTypeIcon[recent.type]}
      </div>

      <div className="flex flex-col text-sm">
        <p className="font-semibold text-gray-700">{recent.title}</p>
        <div className="flex items-center font-medium text-gray-500 space-x-2">
          <p>{recent.type}</p>
          <span className="text-xl">•</span>
          <p>{recent.noOfItems}</p>
          <span className="text-xl">•</span>
          <p>by {recent.by}</p>
        </div>
      </div>
    </div>
  );
}
