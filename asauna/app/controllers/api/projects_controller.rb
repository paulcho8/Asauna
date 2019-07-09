class Api::ProjectsController < ApplicationController

    def show
        @project = Project.find(params[:id])
    end

    def index
        @projects = Workspace.find(params[:workspace_id]).projects
    end

    def create
        @project = Project.create(project_params)
        @project.user_id = current_user.id
        @project.workspace_id = params[:workspace_id] 
        if @project.save
            render "api/projects/show"
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def update
        @project = Project.find(params[:id])
        if @project.update_attributes(project_params)
            render "api/projects/show"
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def destroy
        @project = Project.find(params[:id])
        @project.destroy
        render "api/projects/index"
    end

    private 

    def project_params
        params.require(:project).permit(:name, :workspace_id, :user_id)
    end

end
