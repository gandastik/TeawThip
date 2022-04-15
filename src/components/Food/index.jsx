import React from 'react';
import './food.css';

const Food = () => {
    return (
        <div>
            <div className='food_head'>
                <div className='food_title'>อาหาร</div>
                <div className='food_describe_zone'>
                    <div className='food_describe_box'></div>
                </div>
            </div>
            <div className='food_2type'></div>
        </div>
    );
};

export default Food;