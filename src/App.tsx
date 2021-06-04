import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import { SearchContext } from './context/SearchContext';
import Error404Page from './pages/Error404Page';

function App():JSX.Element{
  return (
  <SearchContext> 
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ SearchPage } />
        <Route path='/user/:user' component={ ProfilePage } />
        <Route path='*' component={ Error404Page } /> 
      </Switch>
    </BrowserRouter>
  </SearchContext> 
  );
}

export default App;
