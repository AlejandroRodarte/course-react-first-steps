import React from 'react';
import styled from 'styled-components';

import './Person.css';

// styled-component generates components
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
        color: red;
    }
`;

const Person = ({ name, age, children, click, changed }) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px',
            color: 'red'
        }
    };

    return (
        <StyledDiv>

            <p onClick={ click }>
                I'm { name } and I am { age } years old!
            </p>
    
            <p>
                { children }
            </p>
    
            <input 
                type="text"
                onChange={ changed }
                value={ name }
            />
    
        </StyledDiv>
    );

}

export default Person;