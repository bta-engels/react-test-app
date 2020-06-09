import React, {Component} from 'react';

class AddTodo extends Component {

    state = {
        title: '',
    }

    handleTitle = (e) => {
        let value = e.target.value
        this.setState({title: value})
    }

    submit = (e) => {
        e.preventDefault()
        this.props.add(this.state.title)
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.submit}>
                    <label>Neuer Eintrag: </label>
                    <input name="title" type="text" onChange={this.handleTitle} />
                    <button className="btn btn-sm btn-primary">Add Todo</button>
                </form>
            </div>
        );
    }
}
export default AddTodo;
