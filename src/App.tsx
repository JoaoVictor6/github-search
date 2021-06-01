import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import SearchPage from './components/SearchPage';
import { SearchContext } from './context/SearchContext';

function App():JSX.Element{
  return (
  <SearchContext> 
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ SearchPage } />
        <Route path='/user/:username' component={ ProfilePage } />
      </Switch>
    </BrowserRouter>
  </SearchContext> 
  );
}

export default App;
