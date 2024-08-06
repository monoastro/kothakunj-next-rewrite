
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Images/logo.png";
import ProfileCard from "./ProfileCard";
import Rajesh_image from "../Images/Profile/RajeshHamal.jpeg";
import { useTheme } from "../ThemeContext";
import { useAuth } from "../context/AuthContext";
import Contact from "./Contact";
import Featured from "./Featured";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import SearchPage from "./searchPage";
import PropertyForm from "./PropertyForm";
import LoginPage from "./LoginPage";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { authData, logout } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const featuredRef = useRef(null);
  const searchFormRef = useRef(null);
  const addRef = useRef(null);
  const whyUsRef = useRef(null);

  const handleShowProfile = (e) => {
    e.preventDefault();
    setShowProfile(true);
    setShowSettingsDropdown(false); // Close settings dropdown when showing profile
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.className.includes("fixed")) {
      handleCloseProfile();
    }
  };

  const toggleDarkMode = () => {
    toggleTheme(theme === "light" ? "dark" : "light");
    setShowSettingsDropdown(false);
  };

  const handleClickHome = (e) => {
    e.preventDefault();
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowSettingsDropdown(false);
  };

  const handleClickFeatured = (e) => {
    e.preventDefault();
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowSettingsDropdown(false);
  };

  const handleClickContact = (e) => {
    e.preventDefault();
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowSettingsDropdown(false);
  };

  const handleClickSearchForm = (e) => {
    e.preventDefault();
    if (searchFormRef.current) {
      searchFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowSettingsDropdown(false);
  };

  const handleClickAdd = (e) => {
    e.preventDefault();
    if (addRef.current) {
      addRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowSettingsDropdown(false); // Close settings dropdown when navigating
  };

  const handleClickWhyUs = (e) => {
    e.preventDefault();
    if (whyUsRef.current) {
      whyUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowSettingsDropdown(false); // Close settings dropdown when navigating
  };

  const toggleSettingsDropdown = () => {
    setShowSettingsDropdown(!showSettingsDropdown); // Toggle settings dropdown visibility
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLoginPage(true);
    setShowSettingsDropdown(false); // Close settings dropdown when logging in
  };

  const handleCloseLoginPage = () => {
    setShowLoginPage(false);
  };

  const handleLoginSubmit = (token) => {
    setShowLoginPage(false);
  };

  return (
    <>
      <header
        className={`p-4 flex justify-between items-center ${
          theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        <img className="w-20 h-20" src={Logo} alt="Logo" />
        <nav className="space-x-6 flex items-center">
          <a
            href="#home"
            className="hover:text-orange-500 transition duration-300 ease-in-out pl-10 text-xl"
            onClick={handleClickHome}
          >
            Home
          </a>
          <a
            href="#featured"
            className="hover:text-orange-500 transition duration-300 ease-in-out pl-14 text-xl"
            onClick={handleClickFeatured}
          >
            Featured
          </a>
          <a
            href="#contact"
            className="hover:text-orange-500 transition duration-300 ease-in-out pl-14 text-xl"
            onClick={handleClickContact}
          >
            Contact Us
          </a>
          <a
            href="#search"
            className="hover:text-orange-500 transition duration-300 ease-in-out pl-14 text-xl"
            onClick={handleClickSearchForm}
          >
            Search
          </a>
          <a
            href="#add"
            className="hover:text-orange-500 transition duration-300 ease-in-out pl-10 text-xl"
            onClick={handleClickAdd}
          >
            Add
          </a>
          <a
            href="#why-us"
            className="hover:text-orange-500 transition duration-300 ease-in-out pl-14 text-xl"
            onClick={handleClickWhyUs}
          >
            Why Us
          </a>
          <div className="relative">
            <button
              onClick={toggleSettingsDropdown}
              className="hover:text-orange-500 transition duration-300 ease-in-out pl-14 pr-14 text-xl flex items-center"
            >
              <FontAwesomeIcon icon={faCog} className="mr-2" />
              Settings
            </button>
            {showSettingsDropdown && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                {authData ? (
                  <>
                    <a
                      href="#profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={handleShowProfile}
                    >
                      Profile
                    </a>
                    <a
                      href="#logout"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={logout}
                    >
                      Logout
                    </a>
                  </>
                ) : (
                  <a
                    href="#login"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleLogin}
                  >
                    Login
                  </a>
                )}
                <button
                  onClick={toggleDarkMode}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                >
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>

      <div ref={heroRef}>
        <Hero />
      </div>

      <div ref={featuredRef}>
        <Featured />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <div ref={searchFormRef}>
        <SearchPage />
      </div>

      <div ref={addRef}>
        <PropertyForm />
      </div>

      <div ref={whyUsRef}>
        <WhyUs />
      </div>

      {showProfile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <ProfileCard
              name="Rajesh Hamal"
              category="Landlord"
              photo={Rajesh_image}
              description="I am an Actor in Nepali Cinema (Mahanayak)."
              reviewAuthor="Abhishek Verma"
              reviews="Rajesh dai ko ghar ma basna paunu ta bhagya ho..."
              rating={5}
              onClose={handleCloseProfile}
            />
          </div>
        </div>
      )}

      {showLoginPage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <LoginPage onClose={handleCloseLoginPage} onLogin={handleLoginSubmit} />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
