import React, { Component } from "react";
import { connect } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "../button/button.js";
import './form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            text: this.props.value,
            isTextAnalyzed: this.props.isTextAnalyzed,
            buttonDisabled: this.props.isTextAnalyzed ? false : true,
            sampleButtonDisabled: false
        };
    }
    render() {
        return (
            <div className="container form">
                <form onSubmit={this.handleSubmit} className="form">
                    <textarea
                        data-enable-grammarly="false."
                        onKeyUp={this.handleDisabledButton}
                        onChange={this.handleText}
                        value={this.state.value}
                        placeholder="Enter a few sentences here to analyze."
                    />
                </form>
                <div style={{
                  height: '1px',
                  width: '90%',
                  borderTop: '1px solid rgb(226, 230, 231)',
                  margin: '1.5em'
                }}></div>
                <div style={{
                    display: "flex",
                    width: "90%",
                    justifyContent: "space-between",
                    display: 'flex',
                    paddingRight: '4em',
                    paddingLeft: '4em'
                  }}
                >
                  {this.state.isTextAnalyzed ?
                  null :
                  (
                    <Button
                      color={this.state.sampleButtonDisabled ? "#acacac" : "#40AF4A"}
                      gradientLightColor={this.state.sampleButtonDisabled ? "#dedede" : "#E7FCE9"}
                      gradientColor={this.state.sampleButtonDisabled ? "#cecece" : "#CAF7CE"}
                      click={this.handleSampleText}
                      text="Sample"
                    />
                  )}
                  <Button
                      color={this.state.buttonDisabled ? "#acacac" : "#40AF4A"}
                      gradientLightColor={this.state.buttonDisabled ? "#dedede" : "#E7FCE9"}
                      gradientColor={this.state.buttonDisabled ? "#cecece" : "#CAF7CE"}
                      click={this.handleSubmit}
                      text={this.state.isTextAnalyzed ? "Re-analyze" : "Analyze"}
                  />
                  {this.state.isTextAnalyzed ? (
                    this.state.copied ? (
                      <div className="button-bg"
                           id='copy-button'
                           style={{
                            background: 'linear-gradient(#E7EFFC, #CADBF7)'
                           }}
                      >
                        <div className="button"
                             style={{
                              color: '#4064AF',
                              border: '2px solid #4064AF'
                            }}
                        >
                          <i className="fa fa-check"
                            style={{
                              fontSize: '1.25em',
                              color: '#4064AF'
                            }}>
                        </i>
                        </div>
                      </div>
                      ) : (
                      <CopyToClipboard text={this.state.value}
                                       onCopy={() => this.setState({ copied: true })}
                                       id='copy-button'
                      >
                        <div className="button-bg" style={{
                          background: 'linear-gradient(#E7EFFC, #CADBF7)'
                        }}
                        >
                          <div className="button copy"
                               style={{
                                 color: '#4064AF',
                                 border: '2px solid #4064AF'
                               }}
                          >
                              <i className="fa fa-clone"
                                 style={{
                                   fontSize: '1.25em',
                                   color: '#4064AF'
                                 }}>
                              </i>
                          </div>
                        </div>
                      </CopyToClipboard>
                      )
                  ) : null }
              </div>
            </div>
        );
    }

    handleHover() {
      this.setState(state => ({
        hover: !state.hover
      }));
    }

    handleDisabledButton = event => {
      let period = this.handleNumberOfSentences(this.state.value, ".");
      let exclamation = this.handleNumberOfSentences(this.state.value, "!");
      let question = this.handleNumberOfSentences(this.state.value, "?");

      if (event) {
        if (period + exclamation + question > 2) {
          this.setState({
            buttonDisabled: false,
            sampleButtonDisabled: false
          });
        } else {
          this.setState({
            buttonDisabled: true,
            sampleButtonDisabled: false
          });
        }
      }
    }

    handleSampleText = () => {
        if (this.state.sampleButtonDisabled) {
          return;
        }

        this.setState({
            value:
                "Times are hard ! Our numbers have been disappointing for the past three quarters. We are in a competitive industry but we do offer excellent services at reasonable rates. Unfortunately we are not doing a good job of selling our services, and this is really frustrating.We cannot blame the economy for our lack of execution. Our clients need our development and design services to change their current business outcomes. It is disheartening to see that we are failing at closing deals, in such a hungry market. I am confident that with concerted effort, we can improve our numbers next quarter.",
            text:
                "Times are hard! Our numbers have been disappointing for the past three quarters. We are in a competitive industry but we do offer excellent services at reasonable rates. Unfortunately we are not doing a good job of selling our services, and this is really frustrating.We cannot blame the economy for our lack of execution. Our clients need our development and design services to change their current business outcomes. It is disheartening to see that we are failing at closing deals, in such a hungry market. I am confident that with concerted effort, we can improve our numbers next quarter.",
            buttonDisabled: false,
            sampleButtonDisabled: true
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
        if (this.state.buttonDisabled) {
          return;
        }
        event.preventDefault();
        let period = this.handleNumberOfSentences(this.state.value, ".");
        let exclamation = this.handleNumberOfSentences(this.state.value, "!");
        let question = this.handleNumberOfSentences(this.state.value, "?");

        if (period + exclamation + question < 2) {
            return false;
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
        isTextAnalyzed: state.isTextAnalyzed
    };
};

export default connect(mapStateToProps, null)(Form);
