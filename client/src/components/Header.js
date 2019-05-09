import React, { Component } from "react";
import { goToHome } from "../actions";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.css";
import Logo from './logo/logo.js';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo" onClick={this.props.goToHome}>
                    <Logo />
                    <h1>Type To Tone</h1>
                </div>
            </header>
        );
    }
}

const mapActionsToProps = {
  goToHome
};

export default connect(null, mapActionsToProps)(Header);
