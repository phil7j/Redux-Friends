import React from 'react'

export default function Friend(props) {
    return (
        <div className="friend">
            <h2>{props.friend.name}</h2>
            <p>Age:{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
    )
}
