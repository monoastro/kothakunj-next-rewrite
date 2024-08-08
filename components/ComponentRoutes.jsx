"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";
import Contact from "./Contact";
import Featured from "./Featured";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import ProfileCard from "./ProfileCard";
import PropertyForm from "./PropertyForm";
import Register from "./Register";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import Team from "./Team";
import WhyUs from "./WhyUs";

function ComponentRoutes() {
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

export default ComponentRoutes;
