import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'mike'
  };

  changeState = (key) => (e) => {

    if (this.state.hasOwnProperty(key)) {

      const value = e.target.value;

      this.setState((prevState, props) => ({
        [key]: value
      }));

    }

  };

  render() {

    const inputStyles = {
      marginTop: '3rem',
      alignText: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (

      <div>
      
        <div className="outputs">
        
          <UserOutput
            firstText="This is"
            secondText="my wiener"
          />

          <UserOutput
            firstText="Username"
            secondText="alejandro"
          />

          <UserOutput
            firstText="Username 2"
            secondText={ this.state.username }
          />

        </div>

        <div style={ inputStyles }>
        
          <UserInput
            value={ this.state.username }
            onChange={ this.changeState('username') }
          />

        </div>
        
      </div>

    );

  }

}

export default App;
