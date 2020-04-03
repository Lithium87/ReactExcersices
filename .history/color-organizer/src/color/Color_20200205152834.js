import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {StarRating} from '../star-rating/StarRating';


export class Color extends Component {
    /**
    * Warning: This lifecycle is currently deprecated, and will be removed in React version 17+
    More details here: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
    */
    componentWillMount() {
        this.style = { backgroundColor: "#CCC" };
    }
    render(){
        const { title, rating, color, onRate } = this.props 

        return (
        <section className="color" style={this.style}>
            <h1 ref="title">{title}</h1>
            <div className="color"
                style={{ backgroundColor: color }}>
            </div>
            <div>
                <StarRating starsSelected={rating} onRate={onRate}/> 
            </div>
        </section>
        );
    }
}

Color.propTypes = {  
    title: PropTypes.string,  
    rating: PropTypes.number,  
    color: PropTypes.string,  
    onRate: PropTypes.func 
}

Color.defaultProps = {
    title: undefined,  
    rating: 0,  
    color: "#000000",  
    onRate: f=>f
}
