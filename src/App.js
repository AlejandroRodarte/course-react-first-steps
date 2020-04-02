import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
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
    ],
    otherState: 'someOtherValue',
    showPersons: true
  };

  switchNameHandler = (newName) => this.setState((prevState, props) => (
    {
      persons: [
        {
          name: newName,
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
    }
  ));

  namedChangedHandler = (e) => {

    const newName = e.target.value;

    this.setState((prevState, props) => (
      {
        persons: [
          {
            name: 'Max',
            age: 27
          },
          {
            name: newName,
            age: 31
          },
          {
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

          <Person 
            name={ this.state.persons[0].name }
            age={ this.state.persons[0].age }
          />

          <Person 
            name={ this.state.persons[1].name }
            age={ this.state.persons[1].age }
            click={ this.switchNameHandler.bind(this, 'Maxy!') }
            changed={ this.namedChangedHandler }
          />

          <Person 
            name={ this.state.persons[2].name }
            age={ this.state.persons[2].age }
          >
            My hobby is swimming
          </Person>

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
