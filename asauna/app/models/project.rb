# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  user_id      :integer          not null
#  workspace_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Project < ApplicationRecord

    validates :name, presence: true
    validates :user_id, :workspace_id, presence: true, uniqueness: true

    belongs_to :user
    belongs_to :workspace
    
end
