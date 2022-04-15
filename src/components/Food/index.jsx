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
            <div className='food_type_zone'>
                <div className='food_type food_type1'></div>
                <div className='food_type food_type2'></div>
            </div>
        </div>
    );
};

export default Food;