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

    handleRemove() {
        this.props.deleteTask(this.props.task.id)
        .then(() => {
            this.props.fetchTasks(this.props.match.params.workspaceId)
        })
    }


    render() {
        // debugger
        return(
            <div className="tasks--index--row">
                <div className="tasks--index--row--main">
                    <form className='task--form'>
                        <div className="done--check" onClick={this.handleRemove}>
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <input type="text" className="task--input" value={this.state.name} onChange={this.update("name")} />
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