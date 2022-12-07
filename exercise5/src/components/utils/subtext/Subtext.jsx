import React from 'react';
import './subtext.style.css'

class Subtext extends React.Component {
  render() {
    return <p className='stxt'> {this.props.value} </p>
  }
}

export default Subtext;