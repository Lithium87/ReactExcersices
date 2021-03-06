import React from 'react';
import {StarRating} from '../star-rating/StarRating';

export const Color = ({ title, color, rating=0 }) =>
    <section className="color">
        <h1>{title}</h1>
        <div className="color"
            style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating starsSelected={rating} /> 
        </div>
    </section>