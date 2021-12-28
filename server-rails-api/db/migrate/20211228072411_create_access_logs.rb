class CreateAccessLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :access_logs do |t|
      t.string :operationName
      t.datetime :beginTime
      t.datetime :endTime
      t.string :query
      t.string :result

      t.timestamps
    end
  end
end
