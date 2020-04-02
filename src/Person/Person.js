import React from 'react';

const Person = ({ name, age, children, click, changed }) => (
    <div>

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

export default Person;