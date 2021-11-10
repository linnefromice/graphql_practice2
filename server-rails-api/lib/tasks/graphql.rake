require "graphql/rake_task"

GraphQL::RakeTask.new(
  schema_name: 'ServerRailsApiSchema',
  idl_outfile: 'server_rails_api_schema.graphql',
)
