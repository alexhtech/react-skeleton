import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '@routes';
import { Router } from 'react-router';
import { History } from 'history';
import { hot } from 'react-hot-loader/root';

interface IProps {
  history: History;
}

function App(props: IProps) {
  return (
    <div>
      <Router history={props.history}>{renderRoutes(routes)}</Router>
    </div>
  );
}

export default hot(App);
