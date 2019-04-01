import { RouteConfig } from 'react-router-config'
import Root from '@pages'
import Layout from '@pages/Layout'
import MainPage from '@pages/Layout/Main'

const routes: RouteConfig[] = [
    {
        path: '/',
        component: Root,
        routes: [
            {
                path: '/',
                component: Layout,
                routes: [
                    {
                        path: '/',
                        component: MainPage
                    }
                ]
            }
        ]
    }
]

export default routes
