import React, { Component } from "react";
import './button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover() {
    this.setState(state => ({
      hover: !state.hover
    }));
  }
  render() {
      var linkStyle;
      if (this.state.hover) {
        linkStyle = {
                      color: 'black',
                      border: '2px solid black'
                    }
      } else {
        linkStyle = {
                      color: this.props.color,
                      border: '2px solid' + this.props.color
                    }
      }
        return (
          <div onClick={this.props.click}
               onMouseEnter={this.handleHover}
               onMouseLeave={this.handleHover}
          >
            <div className="button-bg" style={{
              background: 'linear-gradient(' + this.props.gradientLightColor + ',' + this.props.gradientColor + ')'
            }}
            >
              <div
                  className="button"
                  style={linkStyle}
                >
                  {this.props.text}
              </div>
            </div>
          </div>
        );
    }
}

export default Button;
