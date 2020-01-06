import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import GlobalStyles from '../global-styles';

function Root(props: RouteConfigComponentProps) {
  return (
    <>
      <GlobalStyles />
      {renderRoutes(props.route?.routes)}
    </>
  );
}

export default Root;
