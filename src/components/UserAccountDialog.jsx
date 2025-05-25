import clsx from "clsx";
import { getAvatarDetails } from "../utils/AvatarDetails";
import { LogOut, Moon, Settings, Trophy } from "lucide-react";

export default function UserAccountDialog({ toggleUserDialog }) {
  const { initial, bgColor } = getAvatarDetails("adams_scanty");
  return (
    <div
      className="fixed right-10 top-[68px] z-50 bg-white shadow-lg border border-gray-200 rounded-lg w-80 max-h-[420px]  p-5"
      onClick={toggleUserDialog}
    >
      <div className="flex items-center gap-x-3 border-b pb-5 border-gray-200">
        <div
          className={clsx(
            "rounded-full size-16 flex items-center justify-center text-white text-xl font-semibold",
            bgColor
          )}
        >
          {initial}
        </div>

        <div>
          <p className="font-semibold text-sm text-slate-700">Adams_scanty</p>
          <p className="font-medium text-sm text-slate-500">
            adamsscanty@gmail.com
          </p>
        </div>
      </div>

      <div className="py-2 border-b border-gray-200">
        <a
          href=""
          className="flex items-center text-sm gap-x-4 text-slate-500 hover:bg-slate-100 py-2 px-2 font-medium"
        >
          <Trophy className="size-5" />
          Achievements
        </a>
        <a
          href=""
          className="flex items-center text-sm gap-x-4 text-slate-500 hover:bg-slate-100 py-2 px-2 font-medium"
        >
          <Settings className="size-5" />
          Settings
        </a>
        <a
          href=""
          className="flex items-center text-sm gap-x-4 text-slate-500 hover:bg-slate-100 py-2 px-2 font-medium"
        >
          <Moon className="size-5" />
          Dark Mode
        </a>
      </div>

      <div className="text-slate-500 py-2 border-b border-gray-200">
        <div className="flex items-center cursor-pointer py-2 px-2 hover:bg-slate-100 gap-x-3">
          <LogOut className="size-5" />
          <p className="text-sm font-medium">Log out</p>
        </div>
      </div>

      <div className="py-2 flex flex-col text-sm text-slate-500 font-medium">
        <p className="hover:bg-slate-100 cursor-pointer p-2">Privacy policy</p>
        <p className="hover:bg-slate-100 cursor-pointer p-2">
          Help and Feedback
        </p>
        <p className="hover:bg-slate-100 cursor-pointer p-2">Upgrade</p>
      </div>
    </div>
  );
}
