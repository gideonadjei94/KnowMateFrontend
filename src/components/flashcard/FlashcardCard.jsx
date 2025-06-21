import clsx from "clsx";
import { getAvatarDetails } from "../../utils/AvatarDetails";

export default function () {
  const { initial, bgColor } = getAvatarDetails("solidNegga23");

  return (
    <div className="rounded-lg border border-gray-300 p-4 flex flex-col hover:shadow-md cursor-pointer">
      <div>
        <p className="text-gray-700 font-medium">Computer Science</p>
      </div>

      <div className="p-1 rounded-full bg-indigo-50 flex items-center justify-center w-[20%] mt-4">
        <p className="text-xs font-medium">30 terms</p>
      </div>

      <div className="flex items-center gap-x-3 mt-10">
        <div
          className={clsx(
            "size-8 rounded-full flex items-center justify-center text-white text-xs",
            bgColor
          )}
        >
          {initial}
        </div>

        <p className="text-sm font-medium text-gray-700">MeekMill</p>

        <div className="bg-indigo-50 rounded-full py-1 px-2 text-[10px] font-medium">
          student
        </div>
      </div>
    </div>
  );
}
