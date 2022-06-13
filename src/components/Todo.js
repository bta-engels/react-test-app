import React, {Component} from 'react';

class Todo extends Component {

    state = {
        todo: {}
    }
    componentDidMount() {
        let todo = {
            id: this.props.todo.id,
            title: this.props.todo.title,
            done: this.props.todo,
        }
        this.setState({todo: todo})
    }
    onChange = (e) => {
        this.setState({
            todo: {
                ...this.state.todo,
                done: e.target.checked ? 1 : 0
            }
        }, () => this.props.handleDone(this.state.todo))
    }

    render() {
        let todo = this.state.todo,
            classDone = todo.done ? "done ms-3": "ms-3";
        console.info("classDone", classDone)
        return (
            <li className="todo p-1">
                <input type="checkbox"
                    checked={todo.done}
                    onChange={this.onChange}
                    value={todo.done}
                />
                <span className={classDone}>{todo.title}</span>
                <button className="btn-sm btn-danger m-auto py-0 float-end"
                    onClick={this.props.handleDelete.bind(this, todo)}
                >löschen</button>
            </li>
        );
    }
}
export default Todo;
