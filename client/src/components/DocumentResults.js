import React, { Component } from 'react';
import { connect } from 'react-redux';
import "font-awesome/css/font-awesome.css";
import toneData from '../ToneData';

class DocumentResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
       open: ""
    };
  }
  render() {
    console.log(this.props.displayResults);
    const detectedDocThemes = this.props.displayResults.document_tone.tones.map(tone => {
      for(var i = 0; i < toneData.length; i++) {
        return (
          <div className={`toggleButton ${tone.tone_name}`}
               style={{
                 fontSize: '1.2em',
                 fontWeight: 'bold',
                 padding: '.25em',
                 margin: '.5em',

               }}>
            <span>{tone.tone_name}</span>
          </div>
        );
      }
    });

    return (
      <div className="DocumentResults">
        <div className="documentTones">
          {detectedDocThemes}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayResults: state.displayResults
  };
}

export default connect(mapStateToProps, null)(DocumentResults);
