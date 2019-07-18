import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from '../axiosAuth';
import Friend from './Friend';

function Friends() {
    const [friends, setFriends] = useState({})
    useEffect(()=>{
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then( res => {
                setFriends(res.data)
                console.log(res)
            })
            .catch( err => {
                console.log(err)
            })
    },[])
    return (
        <div>
            <p>My Friends List</p>
            <div className="friends-container">
            {!friends[0] ? <p>Loading...</p> : friends.map( friend => <Friend data={friend} />)}
            </div>
        </div>
    )
}

export default Friends
