import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./components/TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from "./components/Login.js"
import {TodoApp} from "./components/TodoApp.js"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn : localStorage.getItem('isLoggedIn')===null?false : localStorage.getItem('isLoggedIn')};
    }
    render() {
        const LoginView = () => (
            <Login/>
        );
        const TodoAppView = () => (
            <TodoApp/>
        );
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                   {localStorage.getItem('IsLoggedIn')==="true"
                      ?<li>
                            <Link to="/todo">Todo</Link>
                            <Route path="/todo" component={TodoAppView}/>
                       </li>
                      :<li>
                            <Link to="/">Login</Link>
                            <Route exact path="/" component={LoginView}/>
                       </li>
                   }
                </div>
            </Router>
        );
    }
}

export default App;
