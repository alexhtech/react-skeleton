import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

import { Wrap } from './styled'

function EntryPage(props: RouteConfigComponentProps) {
  return <Wrap>{renderRoutes(props.route!.routes)}</Wrap>
}

export default EntryPage
