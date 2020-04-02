import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        id: 1,
        name: 'Max',
        age: 28
      },
      {
        id: 2,
        name: 'Manu',
        age: 29
      },
      {
        id: 3,
        name: 'Stephanie',
        age: 26
      }
    ],
    otherState: 'someOtherValue',
    showPersons: true
  };

  deletePersonHandler = (name) => this.setState((prevState, props) => ({
    persons: prevState.persons.filter((person) => person.name !== name)
  }));

  namedChangedHandler = (e) => {

    const newName = e.target.value;

    this.setState((prevState, props) => (
      {
        persons: [
          {
            id: 1,
            name: 'Max',
            age: 27
          },
          {
            id: 2,
            name: newName,
            age: 31
          },
          {
            id: 3,
            name: 'Steph',
            age: 30
          }
        ]
      }
    ));
    
  };

  togglePersonsHandler = () => this.setState((prevState, props) => ({ showPersons: !prevState.showPersons }))

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    
    if (this.state.showPersons) {

      persons = (
        <div>

          {
            this.state.persons.map(
              ({ name, age, id }) => 
                <Person
                  key={ id }
                  name={ name }
                  age={ age }
                  click={ () => this.deletePersonHandler(name) }
                />
            )
          }

        </div>
      );

    }

    return (

      <div className="App">

        <button 
          style={ style }
          onClick={ this.togglePersonsHandler }
        >
          Toggle view
        </button>

        { persons }

      </div>

    );

  }

}

export default App;
