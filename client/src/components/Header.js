import React, { Component } from "react";
import { goToHome } from "../actions";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.css";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo" onClick={this.props.goToHome}>
                    <h1>Type to Tone</h1>
                </div>
            </header>
        );
    }
}

const mapActionsToProps = {
  goToHome
};

export default connect(null, mapActionsToProps)(Header);
