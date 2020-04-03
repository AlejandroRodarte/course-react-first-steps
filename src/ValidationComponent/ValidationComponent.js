import React from 'react';

const ValidationComponent = ({ length }) => (
    <p>
        { length >= 5 ? 'Text long enough' : 'Text too short' }
    </p>
);

export default ValidationComponent;
