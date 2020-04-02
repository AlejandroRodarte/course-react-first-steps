import React from 'react';

import './UserInput.css';

const UserInput = ({ value, onChange }) => (
    <input 
        className="form-control"
        type="text"
        value={ value }
        onChange={ onChange }
    />
);

export default UserInput;