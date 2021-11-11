import { graphql } from 'react-relay'

/**
 * Not working...
 * relay-compiler --src ./src/graphql --schema ./server_rails_api_schema.graphql --extensions ts
 * 
 * Writing js
 * ERROR:
 * Invalid AST Node: { kind: "Root", operation: "query", loc: { kind: "Source", start: 3, end: 351, source: [Source] }, metadata: null, name: "GetTasksQuery", argumentDefinitions: [[Object]], directives: [], selections: [[Object]], type: Query }.
 * 
 * refs
 * https://github.com/relay-tools/relay-compiler-language-typescript/issues/151
 * https://github.com/facebook/relay/issues/2904
 * https://stackoverflow.com/questions/69876036/relay-compiler-12-graphql-16-invalid-ast-node
 */

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