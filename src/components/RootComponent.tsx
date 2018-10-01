import * as React from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'

export default ({ route }: RouteConfigComponentProps<{}>) => (
    <div>
        Hello world!
        {renderRoutes(route && route.routes)}
    </div>
)
