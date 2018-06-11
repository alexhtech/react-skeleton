import { RouteConfig } from 'react-router-config'
import RootComponent from '../components/RootComponent'
import Counter from '../components/Counter'

interface IRouteConfig extends RouteConfig {
    preload?: () => any
    preloadOptions?: {
        alwaysReload?: boolean
        reloadOnQueryChange?: boolean
        reloadOnParamsChange?: boolean
    }
    onEnter?: () => any
    routes?: IRouteConfig[]
}

const routes: IRouteConfig[] = [
    {
        path: '/',
        component: RootComponent,
        routes: [
            {
                path: '/counter',
                component: Counter
            }
        ]
    }
]

export default routes
