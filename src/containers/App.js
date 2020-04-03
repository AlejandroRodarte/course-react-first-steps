import React, { Component } from 'react';

import classes from './App.module.css';

import Person from '../components/Persons/Person/Person';

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

    let buttonClass = '';

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
                changed={ (e) => this.namedChangedHandler(e, id) }
              />
            )
          }

        </div>
      );

      buttonClass = classes.Red;

    }

    const paragraphCssClasses = [];

    if (this.state.persons.length <= 2) {
      paragraphCssClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      paragraphCssClasses.push(classes.bold);
    }

    return (

      <div className={ classes.App }>

        <h1>
          Hi, I am a React App
        </h1>

        <p className={ paragraphCssClasses.join(' ') }>
          This is really working
        </p>

        <button
          className={ buttonClass } 
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
