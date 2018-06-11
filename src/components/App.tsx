import * as React from 'react'
import { hot } from 'react-hot-loader'
import { renderRoutes } from 'react-router-config'
import { Router } from 'react-router'
import { Provider } from 'mobx-react'
import { History } from 'history'
import { IRootStore } from '../stores'
import routes from '../routes'

interface IApp {
    history: History
    store: IRootStore
}

class App extends React.Component<IApp> {
    render() {
        const { history, store } = this.props

        return (
            <Provider {...store}>
                <Router history={history}>{renderRoutes(routes)}</Router>
            </Provider>
        )
    }
}

export default hot(module)(App)
