// src/components/SearchForm.jsx
import React from 'react';
import { useTheme } from '../ThemeContext';

const SearchForm = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full h-1/2 p-2">
      <form className={`bg-${theme === 'dark' ? 'gray-700 text-white' : 'white text-gray-900'} p-6 rounded-lg shadow-lg w-full h-full mx-auto max-w-2xl`}>
        <h2 className="text-2xl font-semibold mb-6 text-center">Find Your Perfect Rental Space</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter your preferred location"
            className={`border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none ${theme === 'dark' ? 'text-white bg-gray-600' : ''}`}
          />
          <select className={`border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none ${theme === 'dark' ? 'text-white bg-gray-600' : ''}`}>
            <option>Price Range</option>
            <option>Below 10000</option>
            <option>10000-20000</option>
            <option>20000-30000</option>
            <option>Above 30000</option>
          </select>
          <select className={`border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none ${theme === 'dark' ? 'text-white bg-gray-600' : ''}`}>
            <option>Res/Office</option>
            <option>Residence</option>
            <option>Office</option>
            <option>Others</option>
          </select>
          <select className={`border border-gray-300 p-4 rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none ${theme === 'dark' ? 'text-white bg-gray-600' : ''}`}>
            <option>-Room BHK-</option>
            <option>1 Room</option>
            <option>2 Rooms</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>3+ BHK</option>
          </select>
        </div>
        <button
              type="submit"
              className={`w-40 px-3 py-3 ${theme === "dark" ? 'bg-gray-600 hover:bg-gray-700' : 'bg-orange-500 hover:bg-orange-900'} text-white rounded`}
            >
              Search
            </button>
      </form>
    </div>
  );
};

export default SearchForm;
