import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../axiosAuth';
import Friend from './Friend';
import {Route} from 'react-router-dom';
import EditFriend from './EditFriend';

function Friends() {
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then( res => {
                setFriends(res.data)
            })
            .catch( err => {
                console.log(err)
            })
    },[])
    return (
        <div>
            <p>My Friends List</p>
            <div className="friends-container">
            {!friends[0] ? <p>Loading...</p> : friends.map( friend => <Friend key={friend.id} data={friend} />)}
            </div>
            <Route exact path='/friend/editfriend' render={(props)=>  <EditFriend {...props}  /> }/>
        </div>
    )
}

export default Friends
