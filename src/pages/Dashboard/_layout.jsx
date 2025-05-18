import { Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen grid-cols-1 w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* SIDENAV */}
        <div className="hidden md:block  sticky top-0 h-screen z-10">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex  items-center  px-4 lg:h-[80px] lg:px-6"></div>

            {/* SIDENAV LINKS */}
            <div className="flex-1 mt-4">
              <nav className="grid items-start px-2 lg:px-4">
                {/* <DashboardLinks /> */}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {/* HEADER */}
          <div className="h-20  flex items-center justify-between  px-10 sticky top-0 z-10 backdrop-blur-lg">
            <div className="flex items-center"></div>
          </div>

          {/* MAIN OUTLET */}
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto bg-gray-100">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
