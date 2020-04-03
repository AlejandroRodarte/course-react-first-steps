import React, { Component, Fragment } from 'react';

import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

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
    showPersons: true,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidMount');
  }

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

    console.log('[App.js] render');

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

      <Fragment>

        <button onClick={ () => this.setState(() => ({ showCockpit: false })) }>
          Remove cockpit
        </button>

        {
          this.state.showCockpit && 
          <Cockpit
            title={ this.props.title }
            showPersons={ this.state.showPersons }
            length={ this.state.persons.length }
            click={ this.togglePersonsHandler }
          />
        }

        { persons }

      </Fragment>

    );

  }

}

export default withClass(App, classes.App);
