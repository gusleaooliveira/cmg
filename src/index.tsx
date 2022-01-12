import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { Store } from './store';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyles from './components/theme/GlobalStyles';
import colors from './components/theme/colors';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <Provider store={Store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
