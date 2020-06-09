import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import About from "./components/About";
import Form from "./components/Form";
import Todos from "./components/Todos";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Meine Todos Page</h1>
                <BrowserRouter>
                    <div className="m-2 card-header">
                        <NavLink to="/">Home</NavLink> |
                        <NavLink to="/form">Form</NavLink> |
                        <NavLink to="/about">About</NavLink>
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <Todos title="Todos" />
                        </Route>
                        <Route path="/form">
                            <Form title="My Form Page" placeholder="Tippe was ein" />
                        </Route>
                        <Route path="/about">
                            <About title="My About Page" text="Meine Todos" />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
