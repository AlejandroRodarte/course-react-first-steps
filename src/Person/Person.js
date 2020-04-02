import React from 'react';

const Person = ({ name, age, children, click }) => (
    <div>
        <p onClick={ click }>
            I'm { name } and I am { age } years old!
        </p>
        <p>
            { children }
        </p>
    </div>
);

export default Person;