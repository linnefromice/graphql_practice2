module Modules
  module QueryInstrumentation
    module_function

    def before_query(query)
      Rails.logger.info("Query begin: #{Time.now.to_i}")
      @request_log = query
    end

    def after_query(query)
      Rails.logger.info("Query end: #{Time.now.to_i}")
      Rails.logger.info("request_log: #{@request_log}")
      # binding.pry
    end
  end
end