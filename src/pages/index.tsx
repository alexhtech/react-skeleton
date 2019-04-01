import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

function Root(props: RouteConfigComponentProps) {
    return <>{renderRoutes(props.route!.routes)}</>
}

export default Root
