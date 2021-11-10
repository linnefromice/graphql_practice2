# server-rails-api

- Sample GraphQL Server
  - provide [Relay's Cursor Connections Specification](https://relay.dev/graphql/connections.htm) by [graphql-ruby](https://graphql-ruby.org/pagination/connection_concepts.html)

## use GraphQL

```bash
bundle exec rails s
# access to http://localhost:3000/graphiql
```

```graphql
query {
  tasks(last: 3) {
    nodes {
      id
      title
      description
    }
    edges {
      cursor
      node {
        id
        title
        description
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
```
```json
{
  "data": {
    "tasks": {
      "nodes": [
        {
          "id": "8",
          "title": "title 2 finished",
          "description": "description 1 finished"
        },
        {
          "id": "9",
          "title": "title 1 deleted",
          "description": "description 2 deleted"
        },
        {
          "id": "10",
          "title": "title 2 deleted",
          "description": "description 2 deleted"
        }
      ],
      "edges": [
        {
          "cursor": "OA",
          "node": {
            "id": "8",
            "title": "title 2 finished",
            "description": "description 1 finished"
          }
        },
        {
          "cursor": "OQ",
          "node": {
            "id": "9",
            "title": "title 1 deleted",
            "description": "description 2 deleted"
          }
        },
        {
          "cursor": "MTA",
          "node": {
            "id": "10",
            "title": "title 2 deleted",
            "description": "description 2 deleted"
          }
        }
      ],
      "pageInfo": {
        "startCursor": "OA",
        "endCursor": "MTA",
        "hasPreviousPage": true,
        "hasNextPage": false
      }
    }
  }
}
```

## Other Specifications

* Ruby version

3.0.2

* Database creation

```bash
bundle exec rails db:setup
# if recreate database
bundle exec rails db:reset
```

* Database initialization

use sqlite3

* How to run the test suite

No test now...
