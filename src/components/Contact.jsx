import React from "react";
import { useTheme } from "../ThemeContext"; // Import the theme context
// import PropTypes from "prop-types";

const Contact = () => {
  const { theme } = useTheme(); // Get the current theme from context

  return (
    <div className={`flex justify-center items-center min-h-screen ${theme === "dark" ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}`}>
      <div className={`bg-white p-4 md:p-6 rounded-md shadow-md w-[62%] h-[89%] flex flex-col md:flex-row ${theme === "dark" ? 'dark:bg-gray-700 dark:text-white' : ''}`}>
        <div className="md:w-1/2 p-4 md:p-6">
          <h2 className={`text-2xl font-semibold mb-4 md:mb-8 ${theme === "dark" ? 'dark:text-gray-200' : ''}`}>
            Contact Information
          </h2>
          <p className={`mb-2 ${theme === "dark" ? 'dark:text-gray-300' : ''}`}>
            <i className="fas fa-phone-alt mr-2"></i>+977-9843041090
          </p>
          <p className={`mb-2 ${theme === "dark" ? 'dark:text-gray-300' : ''}`}>
            <i className="fas fa-envelope mr-2"></i>queries4kothakunj@gmail.com
          </p>
          <p className={`mb-4 ${theme === "dark" ? 'dark:text-gray-300' : ''}`}>
            <i className="fas fa-map-marker-alt mr-2"></i>Thapathali, Kathmandu
          </p>
          <h2 className={`text-2xl font-semibold mb-4 md:mb-8 ${theme === "dark" ? 'dark:text-gray-200' : ''}`}>Contact Us</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-3 py-3 border border-gray-300 rounded ${theme === "dark" ? 'dark:bg-gray-600 dark:text-white' : ''}`}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className={`w-full px-3 py-3 border border-gray-300 rounded ${theme === "dark" ? 'dark:bg-gray-600 dark:text-white' : ''}`}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className={`w-full px-3 py-3 border border-gray-300 rounded ${theme === "dark" ? 'dark:bg-gray-600 dark:text-white' : ''}`}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-40 px-3 py-3 ${theme === "dark" ? 'bg-gray-600 hover:bg-gray-700' : 'bg-orange-500 hover:bg-orange-900'} text-white rounded`}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="md:w-1/2 p-4 md:p-6 flex items-center justify-center">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.443975867269!2d85.31234375530498!3d27.69069086907041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b0f6aafa13%3A0x778967dbd03da6e0!2z4KSl4KS-4KSq4KS-4KSl4KSy4KWALCDgpJXgpL7gpKDgpK7gpL7gpKHgpYzgpIEgNDQ2MDA!5e0!3m2!1sne!2snp!4v1718048091535!5m2!1sne!2snp"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
