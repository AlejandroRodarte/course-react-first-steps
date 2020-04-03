import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    word: ''
  };

  onChange = (e) => {

    const word = e.target.value;

    this.setState(() => ({
      word
    }));

  };

  deleteChar = (index) => this.setState((prevState, props) => {

    const wordArr = prevState.word.split('');
    wordArr.splice(index, 1);

    const word = wordArr.join('');

    return { word };

  });

  render() {

    return (

      <div>

        <input 
          type="text"
          onChange={ this.onChange }
          value={ this.state.word }
        />

        <ValidationComponent length={ this.state.word.length } />

        {
          [...this.state.word].map((char, index) => <CharComponent key={ index } char={ char } onClick={ () => this.deleteChar(index) } />)
        }

      </div>

    );

  }

}

export default App;
