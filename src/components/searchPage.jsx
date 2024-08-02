
import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { useTheme } from '../ThemeContext'; 

const SearchPage = () => {
  const { theme } = useTheme(); 

  return (
    <div className={`bg-${theme === 'dark' ? 'gray-700 text-white' : 'white text-gray-900'} min-h-screen flex flex-col items-center`}>
      <SearchForm />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
