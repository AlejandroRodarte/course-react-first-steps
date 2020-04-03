import React from 'react';

import classes from './Cockpit.module.css';

const Cockpit = ({ length, showPersons, click, title }) => {

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