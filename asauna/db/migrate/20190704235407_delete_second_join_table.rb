class DeleteSecondJoinTable < ActiveRecord::Migration[5.2]
  def change
    add_column :workspace_users, :user_id, :integer, null: false
    add_column :workspace_users, :workspace_id, :integer, null: false
    add_index :workspace_users, :user_id
    add_index :workspace_users, :workspace_id
    drop_table :workspaces_users
  end
end
