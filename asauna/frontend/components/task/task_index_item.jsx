import React from 'react'
import { debounce } from 'lodash';
import { withRouter} from 'react-router-dom';

class TaskIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.task

        this.handleRemove = this.handleRemove.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            }, () => {
                this.props.updateTask(this.state);
            })
        }
    }

    handleRemove(e) {
        if (e.target.classList[1] === "fa-check-circle") {
            e.target.classList.add("done--check-fade")
            let target = e.currentTarget;
            target.classList.add("complete--task");

            setTimeout(() => {
                target.classList.add("complete--task-fade");
            }, 750);



            setTimeout(() => {
                this.props.deleteTask(this.props.task.id)
                .then(() => {
                    this.props.fetchTasks(this.props.match.params.workspaceId)
                })
            }, 1500);
        }

    }

    handleCompleteTask () {
        document.getElementById("task")
    }


    render() {
        // debugger
        return(
            <div className="tasks--index--row" data-task-id={this.props.task.id} onClick={(e) => this.handleRemove(e)}>
                <div className="tasks--index--row--main">
                    <form className='task--form'>
                        <div className="done--check" >
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <input id="task" type="text" className="task--input" value={this.state.name} onChange={this.update("name")} autocomplete="off"/>
                    </form>
                </div>
                <div className="tasks--index--row--dueDate">
                    {this.state.due_date}
                </div>
            </div>
        )
    }
}


export default withRouter(TaskIndexItem)