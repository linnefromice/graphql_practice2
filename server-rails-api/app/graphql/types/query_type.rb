module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :tasks, Types::TaskType.connection_type,
      null: false,
      description: "Find tasks"
    def tasks
      Task.all
    end

    field :last_task, Types::TaskType, null: true, description: "Find last task"
    def last_task
      Task.last
    end

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end
  end
end
