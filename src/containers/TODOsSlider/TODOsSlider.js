import React, { useState, setState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import styles from './TODOsSlider.module.scss';
import {TodosAC} from '../../redux/Todos'

class TODOsSlider extends React.Component
{
    constructor () {
        super();

        this.classes = [styles.TODOsSlider];
    }

    componentWillMount() {
        this.props.loadTodos();
    }

    render() {
        
        return (
            <>
                {(this.props.todosInfo.todos) && 
                <div className={this.classes.join(' ')}>
                    {this.props.todosInfo.todos.map((todo, index) => {
                            return (
                                <div key={index}>
                                    <p>{todo.userId}</p>
                                    <p>{todo.Id}</p>
                                    <p>{todo.title}</p>
                                    <p>{todo.completed.toString()}</p>
                                    <hr></hr>
                                </div>
                            );
                    })}
                </div>}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        todosInfo: state.todosInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadTodos: () => dispatch(TodosAC.loadTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOsSlider);