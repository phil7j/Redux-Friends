import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/">Login</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/addfriends">Add a Friend</Link>
        </div>
        <Route exact path="/" component={Login} />
        <Route path="/friends"   render={props => {
        const token = localStorage.getItem("token");
        if (!token) {
          return <Redirect to="/" />;
        }
           return <Friends {...props} />;
          }} />
        <Route path="/addfriends"   render={props => {
          const token = localStorage.getItem("token");
          if (!token) {
            return <Redirect to="/" />;
          }
          return <AddFriend {...props} />;
          }} />

    </div>
  );
}

export default App;
