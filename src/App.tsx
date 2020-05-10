import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { renderRoutes } from 'react-router-config'
import { Router } from 'react-router'
import { History } from 'history'

import routes from './routes'
import GlobalStyle from './globalStyle'

interface Props {
  history: History
}

function App({ history }: Props) {
  return (
    <>
      <GlobalStyle />
      <Router history={history}>{renderRoutes(routes)}</Router>
    </>
  )
}

export default hot(App)
