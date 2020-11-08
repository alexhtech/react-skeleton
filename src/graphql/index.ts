import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import localStorageService from '@utils/localStorage'
import config from '@config'

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Authorization: ${localStorageService.token}`,
    },
  }
})
const httpLink = createHttpLink({
  uri: `${config.APP_API_URL}/graphql`,
})

export const apolloClient = new ApolloClient({
  uri: `${config.APP_API_URL}/graphql`,
  cache: new InMemoryCache({
    addTypename: true,
  }),
  link: authLink.concat(httpLink),
})

// apolloClient.defaultOptions.query = {
//   fetchPolicy: 'network-only'
// }
//
// apolloClient.defaultOptions.mutate = {
//   fetchPolicy: 'no-cache'
// }
//
// apolloClient.defaultOptions.watchQuery = {
//   fetchPolicy: 'network-only'
// }

// apolloClient.queryDeduplication = false
