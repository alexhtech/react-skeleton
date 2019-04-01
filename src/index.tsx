import * as React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'
import { defaults } from 'data-fetcher'

import config from '../config'

import App from './components/App'
import { createStore } from './store'

const history = createBrowserHistory()
const store = createStore({}, { history })

// setup fetcher
defaults.baseUrl = config.APP_API_BASE_URL

function renderApp() {
    render(<App history={history} store={store} />, document.getElementById('react-root'))
}

renderApp()
