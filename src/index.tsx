import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style/GlobalStyle';
import Theme from './style/Theme';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root'),
);
