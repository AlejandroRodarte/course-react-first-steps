import React from 'react';

import './UserOutput.css';

const UserOutput = ({ firstText, secondText }) => (
    <div className="card">
        <p className="card-title">
            { firstText }
        </p>
        <p className="card-subtitle">
             { secondText }
        </p>
    </div>
);

export default UserOutput;