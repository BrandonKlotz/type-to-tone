import React, { Component } from "react";
import { connect } from "react-redux";
import { addResults } from "../actions";
import { isEmpty } from "lodash";

import Form from "./form/form.js";
import Loader from "./loader/loader.js";
import DocumentResults from "./DocumentResults.js";
import SentenceResults from "./SentenceResults.js";

class Analyzer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {
        if (this.props.loading !== true && isEmpty(this.props.displayResults)) {
            return (
                <div className="App">
                    <div className="container">
                      <h1>
                        Discover the color of your message.
                      </h1>
                    </div>
                    <Form onSubmit={this.props.addResults} />
                </div>
            );
        } else if (this.props.loading === true) {
            return (
                <div className="App">
                    <Loader />
                </div>
            );
        } else {
            return (
                <div className="App">
                  <div style={{
                    border: '1px solid #E9E9E9',
                    borderRadius: '20px',
                    boxShadow: '0px 6px 24px #D1D1D150',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#FDFDFD'
                  }}>
                    <DocumentResults />
                    <SentenceResults />
                    <Form onSubmit={this.props.addResults} />
                  </div>
                </div>
            );
        }
    }
}

const mapActionsToProps = {
    addResults
};

const mapStateToProps = state => {
    return {
        loading: state.loading,
        displayResults: state.displayResults,
        isModalOpen: state.isModalOpen
    };
};

export default connect(mapStateToProps, mapActionsToProps)(Analyzer);
