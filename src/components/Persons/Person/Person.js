import React, { Component, Fragment } from 'react';

import classes from './Person.module.css';

class Person extends Component {

    render() {

        console.log('[Person.js] render');

        return (

            <Fragment>

                <p onClick={ this.props.click } key="1">
                    I'm { this.props.name } and I am { this.props.age } years old!
                </p>,
        
                <p key="2">
                    { this.props.children }
                </p>,
        
                <input
                    key="3"
                    type="text"
                    onChange={ this.props.changed }
                    value={ this.props.name }
                />

            </Fragment>

        );

    }

}

export default Person;