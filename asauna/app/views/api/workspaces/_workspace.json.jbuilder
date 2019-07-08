# current_user.workspaces.each do |workspace|
    json.extract! workspace, :id, :name, :description
# end