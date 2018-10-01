import * as React from 'react'
import { render } from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { defaults } from 'data-fetcher'
import App from './components/App'
import RootStore from './stores'
import config from '../config/'

const history = createBrowserHistory()
const store = RootStore.create({}, { history })

// setup fetcher
defaults.baseUrl = config.APP_API_BASE_URL

if (process.env.NODE_ENV !== 'production') {
    require('mst-middlewares').connectReduxDevtools(require('remotedev'), store)
}

render(<App history={history} store={store} />, document.getElementById('react-root'))
