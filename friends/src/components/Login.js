import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
export class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    handleChanges = e => {
        this.setState({
           credentials: {
           ...this.state.credentials, [e.target.name]: e.target.value
        }
        })
    }
    login = e => {
        e.preventDefault()
        this.props.login(this.state.credentials).then(()=> {
            this.props.history.push('/api/friends')
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                    onChange="this.handleChanges"
                    name="username"
                    value="this.state.credentials.username"
                    type="text"
                    placeholder="Username" />
                    <input
                    onChange="this.handleChanges" name="password" value="this.state.credentials.password" type="password" placeholder="Password" />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { login })(Login)
