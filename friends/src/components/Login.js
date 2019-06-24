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
        if(this.props.isLoggingIn){
            return <p>Logging In...</p>
        }
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                    onChange={this.handleChanges}
                    name="username"
                    value={this.state.credentials.username}
                    type="text"
                    placeholder="Username" />
                    <input
                    onChange={this.handleChanges} name="password" value={this.state.credentials.password} placeholder="password" />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
isLoggingIn: state.isLoggingIn
})

export default connect(mapStateToProps, { login })(Login)
