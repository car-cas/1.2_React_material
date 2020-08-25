import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from "./components/Login.js"
import {TodoApp} from "./components/TodoApp.js"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props);
        const LoginView = () => (
            <Login />
        );

        const TodoAppView = () => (
            <TodoApp />
        );

        localStorage.setItem('email', "admin");
        localStorage.setItem('password', "admin");
    }
    render() {
        if (!localStorage.getItem("isLoggedIn")) {
            return (
                <Router>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">TODO React App</h1>
                        </header>
                        <Login />
                    </div>
                </Router>
            );
        }
        else {
            return (
                <Router>
                    <div className="App">
                        <TodoApp />
                    </div>
                </Router>
            );
        }
    }
}

export default App;
