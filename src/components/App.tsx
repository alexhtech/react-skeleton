import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { renderRoutes } from 'react-router-config'
import { Router } from 'react-router'
import { History } from 'history'
import { StoreContext } from '@store'
import { RootStoreType } from '@store/root.store'
import { ThemeProvider } from '@styled-components'
import { defaultTheme } from '@styled-components/theme'

import routes from '../routes'

interface IProps {
    history: History
    store: RootStoreType
}

function App({ history, store }: IProps) {
    return (
        <StoreContext.Provider value={store}>
            <ThemeProvider theme={defaultTheme}>
                <Router history={history}>{renderRoutes(routes)}</Router>
            </ThemeProvider>
        </StoreContext.Provider>
    )
}

export default hot(App)
