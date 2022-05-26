import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios'

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';


function App() {

    return (
        <Router>
            <div className="App">
                <header>
                    <h2>The One Where They Become Friends Database</h2>
                    <Link className='link' to="/login">Login</Link>

                    <Link className='link' to="/friends">Friends List</Link>

                    <Link className='link' to="/friends/add">Add Friend</Link>

                    <Link className='link'  to="/logout">Logout</Link>
                </header>
             

                <Switch>
                    <Route path="/friends/add" component={AddFriend} />
                    <PrivateRoute exact path="/friends" component={FriendsList} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Login} />


                </Switch>











            </div>
        </Router>


    );
}



export default App;
