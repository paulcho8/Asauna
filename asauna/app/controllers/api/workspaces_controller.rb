class Api::WorkspacesController < ApplicationController
    before_action :require_logged_in

    def show
        @workspace = Workspace.find(params[:id])
    end

    def create
        @workspace = Workspace.new(workspace_params)
        if @workspace.save
            render "api/workspaces/show"
        else
            render json: @workspace.errors.full_messages, status: 422
        end
    end

    def update
        @workspace = current_user.workspaces.find(params[:id])
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
