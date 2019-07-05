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
