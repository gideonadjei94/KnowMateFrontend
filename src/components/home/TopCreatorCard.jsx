import clsx from "clsx";
import { GalleryVerticalEnd } from "lucide-react";
import { getAvatarDetails } from "../../utils/AvatarDetails";

export default function TopCreatorCard({ creator }) {
  const { initial, bgColor } = getAvatarDetails(creator.username);
  return (
    <div className="rounded-lg border border-gray-300 p-4 flex flex-col hover:shadow-md cursor-pointer">
      <div
        className={clsx(
          "size-20 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-medium text-white",
          bgColor
        )}
      >
        {initial}
      </div>

      <p className="font-medium mt-6">{creator.username}</p>

      <div className="flex py-1 px-2 rounded-full bg-indigo-50 items-center gap-x-2 w-fit mt-4">
        <GalleryVerticalEnd className="size-4 rotate-90" />
        <p className="text-xs font-semibold text-gray-600">
          {creator.noOfFlashCards} flashcards sets
        </p>
      </div>
    </div>
  );
}
