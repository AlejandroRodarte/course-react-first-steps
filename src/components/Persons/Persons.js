import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'snapshotMessage' };
    }

    componentDidUpdate(prevState, prevProps, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {

        console.log('[Persons.js] render');
    
        return this.props.persons.map( 
            ({ name, age, id }) => 
                <Person
                    key={ id }
                    name={ name }
                    age={ age }
                    click={ () => this.props.click(name) }
                    changed={ (e) => this.props.changed(e, id) }
                />
        );

    }

}

export default Persons;
