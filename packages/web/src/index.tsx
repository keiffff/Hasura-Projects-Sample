import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { StyleProvider } from 'providers/Style';
import { App } from 'App';

ReactDOM.render(
  <StrictMode>
    <StyleProvider>
      <App />
    </StyleProvider>
  </StrictMode>,
  document.getElementById('root'),
);
