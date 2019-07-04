# == Schema Information
#
# Table name: workspaces
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#

class Workspace < ApplicationRecord
    validates :name, presence: true

    belongs_to :user
end
