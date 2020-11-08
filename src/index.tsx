import * as React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'

import App from './App'
import { apolloClient } from '@graphql'

const history = createBrowserHistory()

function renderApp() {
  render(<App history={history} apolloClient={apolloClient} />, document.getElementById('react-root'))
}

renderApp()
