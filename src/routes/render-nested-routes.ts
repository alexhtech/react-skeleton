import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

function RenderNestedRoutes(props: RouteConfigComponentProps) {
  return renderRoutes(props.route?.routes)
}

export default RenderNestedRoutes
