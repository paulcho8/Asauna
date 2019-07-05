class DeleteWorkspaceForeignKey < ActiveRecord::Migration[5.2]
  def change
    remove_column :workspaces, :user_id, :integer
  end
end
