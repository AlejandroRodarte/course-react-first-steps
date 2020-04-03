import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.module.css';

import AuthContext from '../../context/auth-context';

const Cockpit = ({ length, showPersons, click, title, login }) => {

    const toggleButtonRef = useRef(null);

    useEffect(() => {
        
        console.log('[Cockpit.js] useEffect');

        const timeout = setTimeout(() => {
            alert('Saved data to the cloud');
        }, 1000);

        toggleButtonRef.current.click();

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
            clearTimeout(timeout);
        };

    }, []);

    useEffect(() => {
        
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };

    });

    const paragraphCssClasses = [];

    if (length <= 2) {
        paragraphCssClasses.push(classes.red);
    }

    if (length <= 1) {
        paragraphCssClasses.push(classes.bold);
    }

    let buttonClass = '';

    if (showPersons) {
        buttonClass = classes.Red;
    }

    return (
        <div className={ classes.Cockpit }>
            <h1>
                { title }
            </h1>
    
            <p className={ paragraphCssClasses.join(' ') }>
                This is really working
            </p>
    
            <button
                ref={ toggleButtonRef }
                className={ buttonClass } 
                onClick={ click }
            >
                Toggle view
            </button>

            <AuthContext.Consumer>
                {
                    ({ login }) => 
                        <button onClick={ login }>
                            Log in
                        </button>
                }
            </AuthContext.Consumer>
        </div>
    );

}

export default React.memo(Cockpit);