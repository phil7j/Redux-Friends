import React, { Component } from 'react'
import FriendsList from './FriendsList'
import { getFriends } from '../actions'
import { connect } from 'react-redux'

export class FriendsListView extends Component {

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        if (this.props.isFething) {
            return <p>Loading....</p>
        }
        return (
            <div>
                <FriendsList friends={this.props.friends}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    error: state.error,
    friends: state.friends
})

export default connect(mapStateToProps, {getFriends})(FriendsListView)
