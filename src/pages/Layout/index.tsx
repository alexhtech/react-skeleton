import React from // , {  useLayoutEffect}
'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'
// import { useHistory } from 'react-router'
// import localStorageService from '@utils/localStorage'
// import { Redirect } from 'react-router'
// import { CURRENT_USER } from '@graphql/users/currentUser'
// import { CurrentUser } from '@graphql/users/__generated__/CurrentUser'
// import { useApolloClient, useQuery } from '@apollo/client'

function Layout(props: RouteConfigComponentProps) {
  // todo: current user check
  // let currentUser: CurrentUser | null = null
  // const token = localStorageService.token

  // const history = useHistory()
  // const { readQuery } = useApolloClient()

  // try {
  //   const result = readQuery<CurrentUser>({ query: CURRENT_USER })
  //   if (result) {
  //     currentUser = result
  //   }
  // } catch (e) {
  //   //
  // }

  // const { loading, error } = useQuery<CurrentUser>(CURRENT_USER, {
  //   skip: !!currentUser || !token,
  // })

  // useLayoutEffect(() => {
  //   if (!token) {
  //     history.replace('/login')
  //   }
  // })

  // if (loading) {
  //   return <p>loading</p>
  // }
  //
  // if (error) {
  //   return <Redirect to="/login" />
  // }

  return <>{renderRoutes(props.route!.routes)}</>
}

export default Layout
