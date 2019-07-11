class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :description
      t.date :due_date
      t.integer :workspace_id, null: false
      t.integer :project_id, null: false
      t.timestamps
    end
    add_index :tasks, :workspace_id
    add_index :tasks, :project_id
  end
end
