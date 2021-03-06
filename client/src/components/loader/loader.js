import React, { Component } from "react";
import './loader.css'

class Loader extends Component {
    render() {
        return (
            <div
              className="Loader"
            >
                <div
                  className="sequence"
                >
                    <div
                      className="loadingAnimation"
                    >
                      <div>
                          <h1 id="loadingTitle">Analyzing...</h1>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loader;
