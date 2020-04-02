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
    otherState: 'someOtherValue'
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

  render() {

    return (

      <div className="App">

        <button onClick={ () => this.switchNameHandler('Maximilian') }>
          Switch name
        </button>

        <Person 
          name={ this.state.persons[0].name }
          age={ this.state.persons[0].age }
        />

        <Person 
          name={ this.state.persons[1].name }
          age={ this.state.persons[1].age }
          click={ this.switchNameHandler.bind(this, 'Maxy!') }
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

}

export default App;
