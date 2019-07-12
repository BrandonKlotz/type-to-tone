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
    const docTones = this.props.displayResults.document_tone.tones,
          anyTones = docTones.size > 0;
   var detectedDocThemes = () => {
      if (anyTones) {
        docTones.map(tone => {
          for(var i = 0; i < toneData.length; i++) {
            return (
              <div className={`docTones ${tone.tone_name}`}>
                <span className="docTonesText">{tone.tone_name}</span>
              </div>
            )
          }
        }
      )}
    };

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

export default connect(mapStateToProps, null) (DocumentResults);
