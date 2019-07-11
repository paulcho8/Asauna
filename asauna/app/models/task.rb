# == Schema Information
#
# Table name: tasks
#
#  id           :bigint           not null, primary key
#  name         :string
#  description  :string
#  due_date     :date
#  workspace_id :integer          not null
#  project_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Task < ApplicationRecord

    validates :workspace_id, presence: true

    belongs_to :workspace
    # belongs_to :project

end
