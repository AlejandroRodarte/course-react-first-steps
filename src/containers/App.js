import React, { Component } from 'react';

import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

  namedChangedHandler = (e, id) => {

    const newName = e.target.value;

    const personIndex = this.state.persons.findIndex((person) => person.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = newName;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => ({ persons }));
    
  };

  togglePersonsHandler = () => this.setState((prevState, props) => ({ showPersons: !prevState.showPersons }))

  render() {

    let persons = null;
    
    if (this.state.showPersons) {

      persons = (
        <div>
          <Persons 
            persons={ this.state.persons }
            click={ this.deletePersonHandler }
            changed={ this.namedChangedHandler }
          />
        </div>
      );

    }

    return (

      <div className={ classes.App }>

        <Cockpit
          title={ this.props.title }
          showPersons={ this.state.showPersons }
          length={ this.state.persons.length }
          click={ this.togglePersonsHandler }
        />

        { persons }

      </div>

    );

  }

}

export default App;
