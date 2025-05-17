import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  const location = useLocation();
  const routeTitles = {
    "/": "KnowMate",
    "/signup": "Sign Up | KnowMate",
  };

  useEffect(() => {
    const path = location.pathname;
    document.title = routeTitles[path] || "KnowMate";
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
