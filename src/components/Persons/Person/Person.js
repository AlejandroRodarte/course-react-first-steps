import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';

import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus(); 
        this.inputElementRef.current.focus();
    }

    render() {

        console.log('[Person.js] render');

        return (

            <Fragment>

                <AuthContext.Consumer>
                    {
                        ({ authenticated }) => authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>
                    }
                </AuthContext.Consumer>

                <p onClick={ this.props.click } key="1">
                    I'm { this.props.name } and I am { this.props.age } years old!
                </p>
        
                <p key="2">
                    { this.props.children }
                </p>
        
                <input
                    key="3"
                    // ref={ (inputElement) => { this.inputElement = inputElement  } }
                    ref={ this.inputElementRef }
                    type="text"
                    onChange={ this.props.changed }
                    value={ this.props.name }
                />

            </Fragment>

        );

    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);