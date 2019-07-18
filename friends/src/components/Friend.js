import React from 'react'

function Friend(props) {
    return (
        <div className="friend-card">
            <h2>{props.data.name}</h2>
            <p>Age: {props.data.age}</p>
            <p>Email: {props.data.email}</p>
        </div>
    )
}

export default Friend
