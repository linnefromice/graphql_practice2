module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

# for test
=begin
    field :success_query, String, null: true
    def success_query
      "success success_query"
    end

    field :success_second_query, String, null: true
    def success_second_query
      "success success_second_query"
    end

    field :first_query, String, null: true
    def first_query
      raise GraphQL::ExecutionError, 'error first_query'
    end

    field :second_query, String, null: true # raise error (not GraphQL::ExecutionError)
    def second_query
      raise ArgumentError, 'error second_query'
    end

    field :third_query, String, null: true
    def third_query
      raise GraphQL::ExecutionError, 'error third_query'
    end

    field :fourth_query, String, null: false # null false
    def fourth_query
      raise GraphQL::ExecutionError, 'error third_query'
    end
=end

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
