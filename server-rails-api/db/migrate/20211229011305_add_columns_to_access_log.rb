class AddColumnsToAccessLog < ActiveRecord::Migration[6.1]
  def change
    add_column :access_logs, :userAgent, :string
    add_column :access_logs, :remoteIp, :string
  end
end
