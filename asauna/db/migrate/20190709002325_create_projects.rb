class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.integer :workspace_id, null: false
      t.timestamps
    end
    add_index :projects, :user_id, unique: true
    add_index :projects, :workspace_id, unique: true
  end
end
