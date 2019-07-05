class WorkspacesUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :workspaces_users do |t|
      t.integer :user_id, null: false
      t.integer :workspace_id, null: false
      t.timestamps
    end
    add_index :workspaces_users, :user_id
    add_index :workspaces_users, :workspace_id
  end
end
