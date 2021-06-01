import React from 'react';
import SearchPage from './components/SearchPage';
import { SearchContext } from './context/SearchContext';

function App():JSX.Element{
  return (
  <SearchContext> 
    <SearchPage />
  </SearchContext> 
  );
}

export default App;
