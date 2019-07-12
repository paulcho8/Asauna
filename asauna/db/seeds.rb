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
    workspace1 = Workspace.create!(name: "Engineering", description: "San Francisco Team")
    workspace2 = Workspace.create!(name: "Marketing", description: "San Francisco Team")
    workspace3 = Workspace.create!(name: "Human Resources", description: "Human Resources")
    workspace4 = Workspace.create!(name: "Business Development", description: "Business Development")
    workspace5 = Workspace.create!(name: "Customer Service", description: "Customer Service")

    Project.destroy_all
    project1 = Project.create!(name: "Backend Route Project", workspace_id: workspace1.id)
    project2 = Project.create!(name: "Refactor Frontend Project", workspace_id: workspace1.id)
    project3 = Project.create!(name: "Redesign Project", workspace_id: workspace1.id)

    Task.destroy_all
    task1 = Task.create!(name: "Meeting with John at 9:00AM", description: "react", workspace_id: workspace1.id)
    task2 = Task.create!(name: "Submit progress report at 3:00PM", description: "mongo", workspace_id: workspace1.id)
    task3 = Task.create!(name: "Interview at 3:30PM", description: "design", workspace_id: workspace1.id)
    task4 = Task.create!(name: "Write a custom route", description: "backend", workspace_id: workspace1.id, project_id: project1.id)
    task5 = Task.create!(name: "Have columns remember order", description: "refactor", workspace_id: workspace1.id, project_id: project1.id)
    task5 = Task.create!(name: "Implement AWS", description: "refactor", workspace_id: workspace1.id, project_id: project1.id)
    task5 = Task.create!(name: "Implement Modal library", description: "refactor", workspace_id: workspace1.id, project_id: project2.id)
    task5 = Task.create!(name: "Refactor routes and redirects", description: "refactor", workspace_id: workspace1.id, project_id: project2.id)
    task5 = Task.create!(name: "Redo splash page", description: "refactor", workspace_id: workspace1.id, project_id: project3.id)

    WorkspaceUser.destroy_all
    join1 = WorkspaceUser.create!(user_id: user1.id, workspace_id: workspace1.id)
    join2 = WorkspaceUser.create!(user_id: user2.id, workspace_id: workspace2.id)
    join3 = WorkspaceUser.create!(user_id: user2.id, workspace_id: workspace3.id)
    join4 = WorkspaceUser.create!(user_id: user3.id, workspace_id: workspace4.id)
    join5 = WorkspaceUser.create!(user_id: user3.id, workspace_id: workspace5.id)
    join6 = WorkspaceUser.create!(user_id: user4.id, workspace_id: workspace5.id)

end

