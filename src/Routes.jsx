import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import ProfileCard from "./components/ProfileCard";
import PropertyForm from "./components/PropertyForm";
import Register from "./components/Register";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";

function MyRoutes() {
  const { authData, onLogin } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/header" element={<Header />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/search-form" element={<SearchForm />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/property-form" element={<PropertyForm />} />
        {authData ? (
          <Route path="/profile-card" element={<ProfileCard />} />
        ) : (
          <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
        )}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
