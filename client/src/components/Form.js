import React, { Component } from "react";
import { connect } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "./button/button.js";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            text: this.props.value,
            isTextAnalyzed: this.props.isTextAnalyzed,
            buttonDisabled: this.props.buttonDisabled
        };
    }

    render() {
        if (!this.props.stillNegative) {
            return (
                <div className="container form">
                    <form
                      onSubmit={this.handleSubmit}
                      className="form"
                    >
                        <textarea
                            onChange={this.handleText}
                            value={this.state.value}
                            placeholder="Enter a few sentences here to analyze."
                        />
                        <Button
                          color={this.state.isButtonDisabled ? "#acacac" : "#40AF4A"}
                          gradientLightColor={this.state.isButtonDisabled ? "#dedede" : "#E7FCE9"}
                          gradientColor="#CAF7CE"
                          click={this.handleSubmit}
                          text={this.state.isTextAnalyzed ? "Re-analyze" : "Analyze"}
                        >
                        </Button>
                    </form>

                    <div>
                        {this.state.isTextAnalyzed ? (
                            <CopyToClipboard
                                text={this.state.value}
                                onCopy={() => this.setState({ copied: true })}
                            >
                                <div className="Button clipboard">
                                    Copy to Clipboard
                                </div>
                            </CopyToClipboard>
                        ) : null}
                        {this.state.copied ? (
                            <div className="copyMessage">
                                <span>Copied.</span>
                            </div>
                        ) : null}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container form">
                    <form onSubmit={this.handleSubmit} className="form">
                        <textarea
                            onChange={this.handleText}
                            value={this.state.value}
                            placeholder="Enter a few sentences here to analyze."
                        />
                    </form>
                    <div style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        color="#40AF4A"
                        gradientLightColor="#E7FCE9"
                        gradientColor="#CAF7CE"
                        click={this.handleSampleText}
                        text="Sample"
                      >
                      </Button>
                      <Button
                        color="#40AF4A"
                        gradientLightColor="#E7FCE9"
                        gradientColor="#CAF7CE"
                        click={this.handleSubmit}
                        text={this.state.isTextAnalyzed ? "Re-analyze": "Analyze"}
                      >
                      </Button>
                  </div>
                </div>
            );
        }
    }

    handleSampleText = event => {
        this.setState({
            value:
                "Times are hard ! Our numbers have been disappointing for the past three quarters. We are in a competitive industry but we do offer excellent services at reasonable rates. Unfortunately we are not doing a good job of selling our services, and this is really frustrating.We cannot blame the economy for our lack of execution. Our clients need our development and design services to change their current business outcomes. It is disheartening to see that we are failing at closing deals, in such a hungry market. I am confident that with concerted effort, we can improve our numbers next quarter.",
            text:
                "Times are hard! Our numbers have been disappointing for the past three quarters. We are in a competitive industry but we do offer excellent services at reasonable rates. Unfortunately we are not doing a good job of selling our services, and this is really frustrating.We cannot blame the economy for our lack of execution. Our clients need our development and design services to change their current business outcomes. It is disheartening to see that we are failing at closing deals, in such a hungry market. I am confident that with concerted effort, we can improve our numbers next quarter."
        });
    };


    handleNumberOfSentences = (stringToSplit, separator) => {
        var arrayOfStrings = stringToSplit.split(separator);
        return arrayOfStrings.length-1;

    }


    handleText = event => {
        this.setState({
            value: event.target.value,
            text: event.target.value,
            copied: false
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        let period = this.handleNumberOfSentences(this.state.value, ".");
        let exclamation = this.handleNumberOfSentences(this.state.value, "!");
        let question = this.handleNumberOfSentences(this.state.value, "?");

        console.log(period);
        console.log(exclamation);
        console.log(question);

        if (period+exclamation+question < 2) {
            // this.props.disabledButton = true;
            return;
        }

        this.props.onSubmit({
            text: this.state.value,
            value: this.state.value
        });
    };
}

const mapStateToProps = state => {
    return {
        value: state.value,
        text: state.value,
        isTextAnalyzed: state.isTextAnalyzed,
        stillNegative: state.stillNegative
    };
};

export default connect(mapStateToProps, null)(Form);
