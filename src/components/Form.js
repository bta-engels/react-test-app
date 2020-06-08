import React, {Component} from 'react';

class Form extends Component {
    msg="Mein Text";

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form>
                    <label>Message: </label>
                    <input type="text" name="msg" value={this.msg} />
                </form>
            </div>
        );
    }
}
export default Form;
