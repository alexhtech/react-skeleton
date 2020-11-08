import { OperationVariables, useQuery } from '@apollo/client'
import { DocumentNode } from 'graphql'

const useImperativeQuery = (query: DocumentNode) => {
  const { refetch } = useQuery(query, { skip: true })

  const imperativelyCallQuery = (variables: OperationVariables) => {
    return refetch(variables)
  }

  return imperativelyCallQuery
}
export default useImperativeQuery
