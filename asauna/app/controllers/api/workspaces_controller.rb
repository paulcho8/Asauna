class Api::WorkspacesController < ApplicationController
    before_action :require_logged_in

    def show
        @workspace = current_user.workspaces.find(params[:id])
    end

    def index
        @workspaces = current_user.workspaces
    end

    def create
        @workspace = Workspace.new(workspace_params)
        if @workspace.save
            WorkspaceUser.create!(user_id: current_user.id, workspace_id: @workspace.id)
            render "api/workspaces/show"
        else
            render json: @workspace.errors.full_messages, status: 422
        end
    end

    def update
        @workspace = Workspace.find(params[:id])
        if @workspace.update_attributes(workspace_params)
            render "api/workspaces/show"
        else
            render json: @workspace.errors.full_messages, status: 422
        end
    end

    private

    def workspace_params
        params.require(:workspace).permit(:name, :description)
    end
end
