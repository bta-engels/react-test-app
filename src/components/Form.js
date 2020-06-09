import React, {Component} from 'react';

class Form extends Component {

    state = {
        msg: 'mein Wert',
    }

    onChange = (event) => {
        var value = event.target.value
        this.setState({msg: value})
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.state.msg}</p>
                <hr/>
                <form>
                    <label>Message: </label>
                    <input type="text" name="msg"
                           value={this.state.msg}
                           placeholder={this.props.placeholder}
                           onChange={this.onChange}
                    />
                </form>
            </div>
        );
    }
}
export default Form;
