import { RouteConfig } from 'react-router-resolver'
import RootComponent from '../components/RootComponent'
import Test from '../components/Test'

const routes: RouteConfig[] = [
    {
        path: '/',
        component: RootComponent,
        routes: [
            {
                path: '/',
                component: Test
            }
        ]
    }
]

export default routes
