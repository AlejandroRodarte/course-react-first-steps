import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = ({ length, showPersons, click, title }) => {

    useEffect(() => {
        
        console.log('[Cockpit.js] useEffect');

        setTimeout(() => {
            alert('Saved data to the cloud');
        }, 1000);

    }, [length]);

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
                className={ buttonClass } 
                onClick={ click }
            >
                Toggle view
            </button>
        </div>
    );

}

export default Cockpit;