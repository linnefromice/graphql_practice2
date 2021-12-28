module Modules
  module QueryInstrumentation
    module_function

    def before_query(query)
      @current_access_log = AccessLog.create(
        operationName: query.operation_name,
        beginTime: Time.now.iso8601(3),
        query: query.query_string
      )
    end

    def after_query(query)
      @current_access_log.update(
        endTime: Time.now.iso8601(3),
        result: query.result.to_json
      )
    end
  end
end