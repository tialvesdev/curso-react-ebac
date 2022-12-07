import React from 'react';
import './text.style.css'

class Text extends React.Component {
  render() {
    return <p className='txt'> {this.props.value} </p>
  }
}

export default Text;