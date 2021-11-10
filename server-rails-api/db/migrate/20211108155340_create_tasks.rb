class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.boolean :isFinished
      t.boolean :isDeleted
      t.integer :version

      t.timestamps
    end
  end
end
