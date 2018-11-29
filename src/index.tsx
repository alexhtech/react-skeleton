import * as React from 'react'
import { render } from 'react-dom'
import { destroy, getSnapshot } from 'mobx-state-tree'
import createBrowserHistory from 'history/createBrowserHistory'
import { defaults } from 'data-fetcher'
import App from './components/App'
import RootStore, { RootStoreType } from './models/root.store'
import config from '../config/'

const history = createBrowserHistory()
let store: RootStoreType

function createStore(snapshot: object = {}) {
    if (store) destroy(store)

    store = RootStore.create(snapshot, { history })
    if (process.env.NODE_ENV !== 'production') {
        require('mst-middlewares').connectReduxDevtools(require('remotedev'), store, {
            logArgsNearName: false,
            logChildActions: false,
            logIdempotentActionSteps: false
        })
    }
}

createStore()

// setup fetcher
defaults.baseUrl = config.APP_API_BASE_URL

function renderApp() {
    render(<App history={history} store={store} />, document.getElementById('react-root'))
}

if (module.hot) {
    module.hot.accept(['./models/root.store.ts'], () => {
        createStore(getSnapshot(store))
        renderApp()
    })
}

renderApp()

export function getStore(): RootStoreType {
    return store
}
