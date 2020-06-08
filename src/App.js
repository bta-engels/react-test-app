import React, {Component} from 'react';
import './App.css';
import About from "./components/About";
import Form from "./components/Form";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Meine Todos Page</h1>
                <About title="Über uns" text="das ist der Text" />
                <Form title="My Form" val="mein From Value" />
            </div>
        );
    }
}
export default App;
