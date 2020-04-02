import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = (props) => {

  const [personsState, setPersonsState] = useState(() => (
    {
      persons: [
        {
          name: 'Max',
          age: 28
        },
        {
          name: 'Manu',
          age: 29
        },
        {
          name: 'Stephanie',
          age: 26
        }
      ]
    }
  ));

  const [someOtherState, setSomeOtherState] = useState(() => 'someOtherValue');

  const switchNameHandler = () => setPersonsState({
    persons: [
      {
        name: 'Maximilian',
        age: 27
      },
      {
        name: 'Maru',
        age: 31
      },
      {
        name: 'Steph',
        age: 30
      }
    ]
  });

  return (
    <div className="App">

      <button onClick={ switchNameHandler }>
        Switch name
      </button>

      <Person 
        name={ personsState.persons[0].name }
        age={ personsState.persons[0].age }
      />

      <Person 
        name={ personsState.persons[1].name }
        age={ personsState.persons[1].age }
      />

      <Person 
        name={ personsState.persons[2].name }
        age={ personsState.persons[2].age }
      >
        My hobby is swimming
      </Person>

    </div>
  );

}

export default App;
