import React, { useState, setState } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import styles from './Login.module.scss';
import {ActionCreators} from '../../redux/UserInfo'

class Login extends React.Component
{
    constructor () {
        super();

        this.state = {
            username: "Enter Username",
            email: "Enter Email",
            shouldRedirect: false
        };

        this.classes = [styles.Login];
    }

    handleChange(event) {
        const { name, value } = event.target;

        if(name === "username") {
            this.setState({
                username: value,
                email: this.state.email
            })
        }
        if(name === "email") {
            this.setState({
                username: this.state.username,
                email: value
            })
        }
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.userInfo.isUserLoggedIn);
        if (this.props.userInfo.isUserLoggedIn) {

            this.setState({
                username: this.state.username,
                email: this.state.email,
                shouldRedirect: true
            })
        }
      }

    render() {
        return (
            <div className={this.classes.join(' ')}>
                <div className="mx-auto main-form">
                    <label>Username:</label> <br/>
                    <input type="text" name="username" onChange={this.handleChange.bind(this)} value={this.state.username} /> <br/>
                    <label>Email:</label> <br/>
                    <input type="text" name="email" onChange={this.handleChange.bind(this)} value={this.state.email} /> <br/>
                    <button onClick={() => this.props.logInUser(this.state.username, this.state.email)}>Submit</button>
                </div>

                {(this.state.shouldRedirect) &&
                <Redirect to={'/main'} />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logInUser: (username, email) => dispatch(ActionCreators.logInUser(username, email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);