import React, { useState, setState } from 'react';
import {connect} from 'react-redux';

import styles from './UserInfoShort.module.scss';
import {ActionCreators} from '../../redux/UserInfo'

class UserInfoShort extends React.Component
{
    constructor () {
        super();

        this.classes = [styles.UserInfoShort];
    }

    render() {
        return (
            <div className={this.classes.join(' ')}>
                <ul className={styles.user_info_list}>
                    <li> {this.props.userInfo.user.username} |&nbsp;</li>
                    <li> {this.props.userInfo.user.email} </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
    }
}

export default connect(mapStateToProps, null)(UserInfoShort);