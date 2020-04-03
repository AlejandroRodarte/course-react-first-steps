import React from 'react';

import Person from './Person/Person';

console.log('[Persons.js] render');

const Persons = ({ persons, click, changed }) => {

    console.log('[Persons.js] render');

    return persons.map( 
        ({ name, age, id }) => 
            <Person
                key={ id }
                name={ name }
                age={ age }
                click={ () => click(name) }
                changed={ (e) => changed(e, id) }
            />
    );

}

export default Persons;
