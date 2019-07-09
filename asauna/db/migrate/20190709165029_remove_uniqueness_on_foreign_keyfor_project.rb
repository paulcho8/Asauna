class RemoveUniquenessOnForeignKeyforProject < ActiveRecord::Migration[5.2]
  def change
    remove_index :projects, :user_id
    remove_index :projects, :workspace_id
    add_index :projects, :user_id
    add_index :projects, :workspace_id
  end
end
