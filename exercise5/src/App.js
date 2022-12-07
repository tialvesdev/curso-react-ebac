import './App.css';
import React from 'react';
import Text from './components/utils/text/Text';
import Calculator from './components/calculator/Calculator';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello World!</h1>
        <Text value="text" />
        <Calculator />
      </>
    )
  }
}

export default App;