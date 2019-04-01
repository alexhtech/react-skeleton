import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

import Header from './Header'
import Footer from './Footer'

function Layout(props: RouteConfigComponentProps) {
    return (
        <>
            <Header />
            {renderRoutes(props.route!.routes)}
            <Footer />
        </>
    )
}

export default Layout
