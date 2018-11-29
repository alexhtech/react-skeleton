import { RouteConfig } from 'react-router-resolver'
import RootComponent from '../components/RootComponent'
import Home from '../components/Home'

const routes: RouteConfig[] = [
    {
        path: '/',
        component: RootComponent,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            }
        ]
    }
]

export default routes
