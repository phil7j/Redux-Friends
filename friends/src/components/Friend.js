import React from 'react'
import { Redirect} from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
import EditFriend from './EditFriend';

function Friend(props) {

    return (
        <div className="friend-card">
          <h2>{props.data.name}</h2>
            <p>Age: {props.data.age}</p>
            <p>Email: {props.data.email}</p>
            <button className="btn">Delete</button>
            <button className="btn" onClick={()=> <Redirect to="/friend/editfriend" /> }>Edit</button>



        </div>
    )
}

export default Friend;


