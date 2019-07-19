import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/">Login</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/addfriends">Add a Friend</Link>
        </div>

        {/* Login Route */}
        <Route exact path="/" component={Login} />

        {/* Friends Route */}
        <PrivateRoute path='/Friends' component={Friends} />

        {/* AddFriends Route */}
        <PrivateRoute path='/addfriends' component={AddFriend} />

    </div>
  );
}

export default App;
