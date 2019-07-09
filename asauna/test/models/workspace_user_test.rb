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

require 'test_helper'

class WorkspaceUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
