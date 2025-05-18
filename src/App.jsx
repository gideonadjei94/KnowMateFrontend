import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard/_layout";

function App() {
  const location = useLocation();
  const routeTitles = {
    "/": "KnowMate",
    "/signup": "Sign Up | KnowMate",
    "/dashboard": "Dashboard",
  };

  useEffect(() => {
    const path = location.pathname;
    document.title = routeTitles[path] || "KnowMate";
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
