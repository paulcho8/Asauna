class CreateWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :workspaces do |t|
      t.string :name, null: false
      t.string :description
      t.timestamps
    end
  end
end
