import React, {Component} from 'react';

class Todo extends Component {

    state = {
        todo: {}
    }

    onChange = (e) => {
        let todo = {
            id: this.props.todo.id,
            title: this.props.todo.title,
            done: e.target.checked,
        }
        this.setState({todo: todo})
        this.props.handleDone(todo);
    }

    render() {
        let todo = this.props.todo;
        return (
            <li>
                <input type="checkbox" className="ml-3" 
                    defaultChecked={this.props.todo.done}
                    onChange={this.onChange} />
                <span className={this.state.todo.done ? "done ml-3" : "ml-3"}>{todo.title}</span>
                <button className="btn-sm btn-danger float-right m-auto py-0"
                    onClick={this.props.handleDelete.bind(this, todo)}
                >löschen</button>
            </li>
        );
    }
}
export default Todo;
