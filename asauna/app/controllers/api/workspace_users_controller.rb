class Api::WorkspaceUsersController < ApplicationController

    def create
        @workspaceuser.user_id = current_user.id
        @workspaceuser = WorkspaceUser.new(joins_params)
        if @workspaceuser.save
            render "api/workspaces/show"
        else
            render json: @workspace.errors.full_messages, status: 422
        end
    end

    private

    def joins_params
        params.require(:workspaceuser).permit(:user_id, :workspace_id)
    end

end
