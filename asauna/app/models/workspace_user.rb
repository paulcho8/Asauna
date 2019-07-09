# == Schema Information
#
# Table name: workspace_users
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :integer          not null
#  workspace_id :integer          not null
#

class WorkspaceUser < ApplicationRecord
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :workspace,
        primary_key: :id,
        foreign_key: :workspace_id,
        class_name: :Workspace
end
