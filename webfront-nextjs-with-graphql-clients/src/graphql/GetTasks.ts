import { graphql } from 'react-relay'

const GetTasks = graphql`
  query GetTasksQuery($after: String) {
    tasks(first: 3, after: $after) {
      edges {
        node {
          id
          title
          description
          isFinished
          isDeleted
          version
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    }
  }
`

export default GetTasks