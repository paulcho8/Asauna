class AddForeignKeyToWorkspaces < ActiveRecord::Migration[5.2]
  def change
    add_column :workspaces, :user_id, :integer, null: false
    add_index :workspaces, :user_id
  end
end
