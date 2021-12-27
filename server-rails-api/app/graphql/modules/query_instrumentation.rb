module Modules
  module QueryInstrumentation
    module_function

    def before_query(query)
      @begin_time = Time.now.iso8601(3)
      sleep 3.0
    end

    def after_query(query)
      Rails.logger.info("begin_time: #{@begin_time}")
      Rails.logger.info("end_time: #{Time.now.iso8601(3)}")
      Rails.logger.info("operation_name: #{query.operation_name}")
      Rails.logger.info("query: #{query.query_string}")
      Rails.logger.info("result: #{query.result.to_json}")
      # binding.pry
    end
  end
end