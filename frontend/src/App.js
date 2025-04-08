import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ViewRecipe from "./pages/ViewRecipe"; // ✅ Import the ViewRecipe page
import Navbar from "./component/Navbar";

function App() {
  const location = useLocation();

  // Define routes where you want to show the Navbar
  const showDefaultNavbar = ["/", "/about", "/contact"].includes(location.pathname);

  return (
    <>
      {showDefaultNavbar && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dashboard (Private or Authenticated routes) */}
        <Route path="/dashboard/*" element={<Dashboard />} />

        {/* ✅ Fixed: View Recipe route */}
        <Route path="/viewrecipe/:id" element={<ViewRecipe />} />

        {/* Optional: 404 Page Not Found */}
        <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
