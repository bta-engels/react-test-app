import React, { Component } from 'react';
import Axios from "axios"
import Todo from "./Todo";
import AddTodo from "./AddTodo";

class Todos extends Component {
    apiURL = 'http://127.0.0.01:8000/api/todos';
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            auth: null,
        }
    }
    componentDidMount() {
        let auth = this.props.auth()
        if(auth) {
            this.setState({
                ...this.state,
                auth: auth
            })
            Axios.defaults.headers.common['Authorization'] = "Bearer " + auth.token;
        }
        Axios.get(this.apiURL)
            .then(response => {
                this.setState({todos: response.data})
            })
            .catch(err => console.error(err) );
    }
    onError = (err) => {
        alert(err)
    }
    done = (todo) => {
        console.info(todo);
        if(!this.state.auth) {
            this.onError('please Login')
            return false;
        }
        Axios.defaults.headers.common['Authorization'] = "Bearer " + this.state.auth.token;
        Axios.put(this.apiURL + "/" + todo.id, todo)
            .then(response => {
                this.setState({todos: this.state.todos.filter(t => t === todo ? todo : t)})
                console.info(response.data);
            })
            .catch(err => console.info("error", err) );
    }
    delete = (todo) => {
        if(!this.state.auth) {
            this.onError('please Login')
            return false;
        }
        Axios.defaults.headers.common['Authorization'] = "Bearer " + this.state.auth.token;
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
        if(!this.state.auth) {
            this.onError('please Login')
            return false;
        }
        Axios.defaults.headers.common['Authorization'] = "Bearer " + this.state.auth.token;
        Axios.post(this.apiURL, params)
            .then(response => {
                this.setState({todos: [...this.state.todos, response.data]})
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
