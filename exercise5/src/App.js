import './App.css';
import React from 'react';
import Text from './components/utils/text/Text';
import Calculator from './components/calculator/Calculator';

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <h1>Hello World!</h1>
        <Text value="text" />
        <Calculator />
      </div>
    )
  }
}

export default App;