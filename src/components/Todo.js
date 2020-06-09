import React, {Component} from 'react';

class Todo extends Component {

    render() {
        let todo = this.props.todo;
        return (
            <li>
                <span className="ml-5">{todo.title}</span>
                <button className="btn-sm btn-danger float-right m-auto py-0"
                        onClick={this.props.handleDelete.bind(this, todo)}
                >löschen</button>
            </li>
        );
    }
}
export default Todo;
