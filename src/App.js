import React, { Component } from 'react';
import logo from './logo.svg';
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
    ]
  };

  render() {

    return (

      <div className="App">

        <button>
          Switch name
        </button>

        <Person 
          name={ this.state.persons[0].name }
          age={ this.state.persons[0].age }
        />

        <Person 
          name={ this.state.persons[1].name }
          age={ this.state.persons[1].age }
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
