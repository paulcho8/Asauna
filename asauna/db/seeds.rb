# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



ActiveRecord::Base.transaction do
    demo = User.create!(name: "Demo User", email: "demo@asauna.com", password: "demouser")
    rb = User.create!(name: "Rose Byrne", email: "rbyrne@asauna.com", password: "password")

    workspace1 = Workspace.create!(name: "Engineering", description: "Frontend Team")
    workspace2 = Workspace.create!(name: "Marketing", description: "San Francisco Team")

    
end

