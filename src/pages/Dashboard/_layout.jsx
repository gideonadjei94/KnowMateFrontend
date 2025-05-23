import { Outlet } from "react-router-dom";
import { DashboardLinks } from "../../components/DashboardLinks";
import { useState } from "react";
import { getAvatarDetails } from "../../utils/AvatarDetails";
import clsx from "clsx";
import NotificationsDialog from "../../components/NotificationsDialog";
import UserAccountDialog from "../../components/UserAccountDialog";

export default function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserDialog, setShowUserDialog] = useState(false);
  const { initial, bgColor } = getAvatarDetails("Adam");

  return (
    <>
      <div className="min-h-screen grid-cols-1 w-full grid md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr]">
        {/* SIDENAV */}
        <div className="hidden md:block  sticky top-0 h-screen z-10 pr-5">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex  items-center  px-4 lg:h-[80px] lg:px-6">
              <p className="font-bold text-xl text-[#4255ff]">KnowMate.</p>
            </div>

            {/* SIDENAV LINKS */}
            <div className="flex-1 ">
              <nav className="grid items-start px-2 lg:px-4">
                <DashboardLinks
                  toggleNotifications={() =>
                    setShowNotifications(!showNotifications)
                  }
                  showNotifications={showNotifications}
                />
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {/* HEADER */}
          <div className="h-20 flex px-10 sticky top-0 z-10 backdrop-blur-lg items-center">
            <div
              className={clsx(
                "size-10 rounded-full flex items-center justify-center ml-auto text-white",
                bgColor
              )}
              onClick={() => setShowUserDialog(!showUserDialog)}
            >
              <p className="font-medium">{initial}</p>
            </div>
          </div>

          {showUserDialog && (
            <UserAccountDialog
              toggleUserDialog={() => setShowUserDialog(!showUserDialog)}
            />
          )}

          {showNotifications && <NotificationsDialog />}

          {/* MAIN OUTLET */}
          <main className="flex flex-1 flex-col gap-4 px-8  overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
