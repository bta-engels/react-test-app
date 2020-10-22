import React, {Component} from 'react';
import Axios from "axios";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

class Todos extends Component {
    apiURL = 'http://videostore.loc/api/todo';

    state = {
        todos: [],
    }

    componentDidMount() {
        Axios.get(this.apiURL)
            .then(response => {
                this.setState({todos: response.data})
            })
            .catch(err => console.error(err) );
    }
    done = (todo) => {
       console.info(todo);
        Axios.put(this.apiURL + "/" + todo.id, todo)
            .then(response => {
                this.setState({todos: this.state.todos.filter(t => t === todo ? todo : t)})
                console.info(response.data.result);
            })
            .catch(err => console.error(err) );

    }
    delete = (todo) => {
        Axios.delete(this.apiURL + "/" + todo.id)
            .then(response => {
                this.setState({todos: this.state.todos.filter(t => t !== todo)})
            })
            .catch(err => console.error(err) );
    }
    add = (title) => {
        let params = {
            title: title,
            done: false,
        }
        Axios.post(this.apiURL, params)
            .then(response => {
                this.setState({todos: [...this.state.todos, response.data.result]})
            })
            .catch(err => console.error(err) );
    }

    render() {
        let rows = [];
        this.state.todos.map(todo => (
            rows.push(<Todo 
                key={todo.id} 
                todo={todo}
                handleDelete={this.delete}
                handleDone={this.done}
            />)
        ))
        return (
            <div>
                <AddTodo title="Add Todo" add={this.add}/>
                <h3>{this.props.title}</h3>
                <ul>
                    {rows}
                </ul>
            </div>
        );
    }
}
export default Todos;
