class RemoveTaskProjectIdForeignKey < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :project_id
    # add_column :tasks, :project_id
  end
end
