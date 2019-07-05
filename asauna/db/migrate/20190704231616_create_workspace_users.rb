class CreateWorkspaceUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :workspace_users do |t|

      t.timestamps
    end
  end
end
