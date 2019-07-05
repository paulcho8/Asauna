# == Schema Information
#
# Table name: workspaces
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Workspace < ApplicationRecord
    validates :name, presence: true

    # has_many :workspaceusers,
    #     primary_key: :id,
    #     foreign_key: :user_id,
    #     class_name: :WorkspaceUser

    # has_many :users,
    #     through: :workspaceusers,
    #     source: :user
end
