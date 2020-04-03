import React from 'react'

// function that returns a function
// the returned function is the actual function that generates the component
const withClass = (WrappedComponent, className) => (props) => (
    <div className={ className }>
        <WrappedComponent />
    </div>
);

export default withClass;