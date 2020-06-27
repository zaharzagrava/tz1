import React, { useState, setState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import Slider from "react-slick"

import tick1 from './tick1.png';
import cross1 from './cross1.png';

import styles from './TODOsSlider.module.scss';
import {TodosAC} from '../../redux/Todos'

class CustomSlide extends React.Component {
    render() {
      return (
        <div className={styles.todo}>
            <p>{this.props.userId}</p>
            <p>{this.props.title}</p>
            <p>{(this.props.completed) ? <img width='20px' src={tick1}/> : <img width='20px' src={cross1}/>}</p>
        </div>
      );
    }
  }

class TODOsSlider extends React.Component
{
    constructor () {
        super();


        
        this.classes = [styles.TODOsSlider];
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    componentWillMount() {
        this.props.loadTodos();
    }

    render() {

        const settings = {
            className: styles.todo_list,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 1,
            arrows: false,
            vertical: true
          };

        return (
        <div className={styles.TODOsSlider}>
            <button className={styles.button_slide} onClick={this.previous.bind(this)}>
                &nbsp;&nbsp;&nbsp;UP&nbsp;&nbsp;&nbsp;
            </button>
            <Slider ref={c => (this.slider = c)} {...settings}>
                {this.props.todosInfo.todos.map((todo, index) => {
                    return (
                        <CustomSlide
                            key={index}
                            userId={todo.userId}
                            title={todo.title}
                            completed={todo.completed} />
                    );
            })}
            </Slider>
            <button className={styles.button_slide} onClick={this.next.bind(this)}>
                DOWN
            </button>
          </div>
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


// <>
// {(this.props.todosInfo.todos) && 
// <div>
//     <Slider {...settings}>
        // {this.props.todosInfo.todos.map((todo, index) => {
        //         return (
        //             <div key={index}>
        //                 <p>{todo.userId}</p>
        //                 <p>{todo.Id}</p>
        //                 <p>{todo.title}</p>
        //                 <p>{todo.completed.toString()}</p>
        //                 <hr></hr>
        //             </div>
        //         );
        // })}
//     </Slider>
// </div>}
// </>