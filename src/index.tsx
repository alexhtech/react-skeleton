import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './App';

const history = createBrowserHistory();

function renderApp() {
  render(
    <App history={history} />,
    window.document.getElementById('react-root')
  );
}

renderApp();
