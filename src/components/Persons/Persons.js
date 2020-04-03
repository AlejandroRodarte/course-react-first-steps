import React from 'react';

import Person from './Person/Person';

const Persons = ({ persons, click, changed }) => persons.map( 
    ({ name, age, id }) => 
        <Person
            key={ id }
            name={ name }
            age={ age }
            click={ () => click(name) }
            changed={ (e) => changed(e, id) }
        />
);

export default Persons;
