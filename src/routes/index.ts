import { RouteConfig } from 'react-router-config'
import Root from '@pages'
import Entry from '@pages/Entry'
import Login from '@pages/Entry/Login'
import Layout from '@pages/Layout'
import Home from '@pages/Layout/Home'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Root,
    routes: [
      {
        path: '/login',
        component: Entry,
        routes: [
          {
            path: '/login',
            component: Login,
          },
        ],
      },
      {
        path: '/',
        component: Layout,
        routes: [
          {
            path: '/',
            component: Home,
          },
        ],
      },
    ],
  },
]

export default routes
