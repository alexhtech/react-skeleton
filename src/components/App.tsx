import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { renderRoutes } from 'react-router-config'
import { Router } from 'react-router'
import { History } from 'history'
import { StoreContext } from '@store'
import { RootStoreType } from '@store/root.store'

import routes from '../routes'

interface IProps {
    history: History
    store: RootStoreType
}

function App({ history, store }: IProps) {
    return (
        <StoreContext.Provider value={store}>
            <Router history={history}>{renderRoutes(routes)}</Router>
        </StoreContext.Provider>
    )
}

export default hot(App)
