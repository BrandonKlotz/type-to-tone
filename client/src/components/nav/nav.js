import React, { Component } from "react";
import { goToHome } from "../../actions";
import { connect } from "react-redux";
import Logo from '../logo/logo.js';
import "font-awesome/css/font-awesome.css";
import './nav.css'

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="logo" onClick={this.props.goToHome}>
                    <Logo />
                    <span>Type To Tone</span>
                </div>
                <div>
                  <i className="fa fa-github"
                     style={{
                       fontSize: '2em',
                       color: 'black'
                     }}
                  ></i>
                </div>
            </nav>
        );
    }
}

const mapActionsToProps = {
  goToHome
};

export default connect(null, mapActionsToProps)(Nav);