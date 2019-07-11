class Api::TasksController < ApplicationController
    def show
        @task = Task.find(params[:id])
    end

    def index
        @tasks = Workspace.find(params[:workspace_id]).tasks
    end

    def create
        @task = Task.create(task_params)
        @task.workspace_id = params[:workspace_id]
        if @task.save
            render "api/tasks/show"
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    def update
        @task = Task.find(params[:id])
        if @task.update_attributes(task_params)
            render "api/tasks/show"
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    def destroy
        @task = Task.find(params[:id])
        @task.destroy
    end

    private
    def task_params
        params.require(:task).permit(:name, :description, :due_date, :workspace_id, :project_id)
    end
end
