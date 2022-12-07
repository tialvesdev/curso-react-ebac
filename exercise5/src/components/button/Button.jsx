import React from "react";
import './button.style.css'

class Button extends React.Component {
    render() {
      return (
        <button type={this.props.type} className={`btn ${this.props.classname}`}>
          {this.props.content}
        </button>
      )
    }
  }
  
  export default Button;