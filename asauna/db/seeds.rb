# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



ActiveRecord::Base.transaction do

    User.destroy_all
    user1 = User.create!(name: "Demo User", email: "demo@asauna.com", password: "demouser")
    user2 = User.create!(name: "Rose Byrne", email: "rbyrne@asauna.com", password: "password")
    user3 = User.create!(name: "John Williams", email: "jwilliams@asauna.com", password: "password")
    user4 = User.create!(name: "Kobe Bryant", email: "kbryant@asauna.com", password: "password")

    Workspace.destroy_all
    workspace1 = Workspace.create!(name: "Engineering", description: "Frontend Team")
    workspace2 = Workspace.create!(name: "Marketing", description: "San Francisco Team")
    workspace3 = Workspace.create!(name: "Human Resources", description: "Human Resources")
    workspace4 = Workspace.create!(name: "Business Development", description: "Business Development")
    workspace5 = Workspace.create!(name: "Customer Service", description: "Customer Service")

    Project.destroy_all
    project1 = Project.create!(name: "Feature 1", workspace_id: workspace1.id)
    project2 = Project.create!(name: "Feature 2", workspace_id: workspace1.id)
    project3 = Project.create!(name: "Feature 3", workspace_id: workspace1.id)

    Task.destroy_all
    task1 = Task.create!(name: "Build routes", description: "react", due_date: "2019-07-18", workspace_id: workspace1.id)
    task2 = Task.create!(name: "Build db", description: "mongo", due_date: "2019-07-19", workspace_id: workspace1.id)
    task3 = Task.create!(name: "Write css", description: "design", due_date: "2019-07-20", workspace_id: workspace1.id)

    WorkspaceUser.destroy_all
    join1 = WorkspaceUser.create!(user_id: user1.id, workspace_id: workspace1.id)
    join2 = WorkspaceUser.create!(user_id: user2.id, workspace_id: workspace2.id)
    join3 = WorkspaceUser.create!(user_id: user2.id, workspace_id: workspace3.id)
    join4 = WorkspaceUser.create!(user_id: user3.id, workspace_id: workspace4.id)
    join5 = WorkspaceUser.create!(user_id: user3.id, workspace_id: workspace5.id)
    join6 = WorkspaceUser.create!(user_id: user4.id, workspace_id: workspace5.id)

end

