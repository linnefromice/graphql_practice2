# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins 'example.com'
#
#     resource '*',
#       headers: :any,
#       methods: [:get, :post, :put, :patch, :delete, :options, :head]
#   end
# end

cors_origins =
  if Rails.env.development? || Rails.env.test?
    [
      'localhost:3000',
      '127.0.0.1:3000',
      %r{\Ahttp://192\.168\.0\.\d{1,3}(:\d+)?\z}
    ]
  else
    Rails.configuration.x.env.cors_origins.split(',')
  end

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins(*cors_origins)

    resource '/graphql', headers: :any, methods: [:post], credentials: true
  end
end