import { ApolloClient, ApolloProvider } from '@apollo/client'
import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { renderRoutes } from 'react-router-config'
import { Router } from 'react-router'
import { History } from 'history'

import routes from './routes'
import GlobalStyle from './globalStyle'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

interface Props {
  history: History
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apolloClient: ApolloClient<any>
}

function App({ history, apolloClient }: Props) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router history={history}>{renderRoutes(routes)}</Router>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default hot(App)
