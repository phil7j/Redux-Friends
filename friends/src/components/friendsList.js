import React from 'react'
import Friend from './Friend'

export default function FriendsList(props) {
    return (
        <div className="list">
            {props.friends.map( friend => {
                return <Friend key={friend.id} friend={friend} />
            })}
        </div>
    )
}
