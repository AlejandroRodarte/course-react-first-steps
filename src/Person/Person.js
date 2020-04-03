import React from 'react';

import classes from './Person.module.css';

const Person = ({ name, age, children, click, changed }) => {

    const random = Math.random();

    if (random > 0.7) {
        throw new Error('Error pops up');
    }

    return (
        <div className={ classes.Person }>

            <p onClick={ click }>
                I'm { name } and I am { age } years old!
            </p>
    
            <p>
                { children }
            </p>
    
            <input 
                type="text"
                onChange={ changed }
                value={ name }
            />
    
        </div>
    );

}

export default Person;