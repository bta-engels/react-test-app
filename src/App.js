import './App.css';

import React, {Component} from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import About from "./components/About";
import Todos from "./components/Todos";
import Login from "./components/Login";
import Logout from "./components/Logout";

class App extends Component {
    state = {
        auth: null
    }
    setAuth = (a) => {
        this.setState(() => ({
            auth: a,
        }))
    }
    getAuth = () => {
        console.info(this.state)
        return this.state.auth
    }
    unsetAuth = () => {
        localStorage.clear();
        this.setState(() => ({
            auth: null,
        }))
    }
    render() {
        let auth = this.state.auth,
            authLink,
            authRoute;

        if (auth) {
            authLink = <NavLink to="/logout" className="float-end">{auth.name} Logout</NavLink>;
            authRoute = <Route path="/logout" element={<Logout auth={this.unsetAuth} />} />;
        } else {
            authLink = <NavLink to="/login" className="float-end">Login</NavLink>;
            authRoute = <Route path="/login" element={<Login title="Login" auth={this.setAuth} />} />
        }
        return (
            <div className="App">
                <h1>Meine Todos Page</h1>
                <BrowserRouter>
                    <div className="m-2 card-header">
                        <NavLink to="/">Todos</NavLink> |
                        <NavLink to="/about">About</NavLink>
                        { authLink }
                    </div>
                    <Routes>
                        <Route exact path="/" element={<Todos title="Todos" auth={this.getAuth} />} />
                        <Route path="/about" element={<About title="About" />} />
                        { authRoute }
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
