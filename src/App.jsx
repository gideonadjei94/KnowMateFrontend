import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard/_layout";
import HomeOutlet from "./pages/Dashboard/HomeOutlet";
import LibraryOutlet from "./pages/Dashboard/LibraryOutlet";
import NotificationsOutlet from "./pages/Dashboard/NotificationsOutlet";
import FlashCardsOutlet from "./pages/Dashboard/FlashCardsOutlet";
import SolutionsOutlet from "./pages/Dashboard/SolutionsOutlet";

function App() {
  const location = useLocation();
  const routeTitles = {
    "/": "KnowMate",
    "/signup": "Sign Up | KnowMate",
    "/dashboard": "Dashboard",
    "/dashboard/library": "Your library | KnowMate",
    "/dashboard/notifications": "Your Notifications | KnowMate",
    "/dashboard/flashcards": "Your sets | KnowMate",
    "/dashboard/solutions": "Expert Solutions | KnowMate",
  };

  useEffect(() => {
    const path = location.pathname;
    document.title = routeTitles[path] || "KnowMate";
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<HomeOutlet />} />
        <Route path="library" element={<LibraryOutlet />} />
        <Route path="notifications" element={<NotificationsOutlet />} />
        <Route path="flashcards" element={<FlashCardsOutlet />} />
        <Route path="solutions" element={<SolutionsOutlet />} />
      </Route>
    </Routes>
  );
}

export default App;
