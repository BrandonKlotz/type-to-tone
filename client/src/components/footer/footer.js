import React, { Component } from "react";
import Background from "../background/background.js";
import { renderToStaticMarkup } from 'react-dom/server';


class Footer extends Component {
  render () {
    const svgString = encodeURIComponent(renderToStaticMarkup(<Background />));
    const dataUri = `url("data:image/svg+xml,${svgString}")`;
    return (
      <footer style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          width: '100%',
          marginTop: '8em',
          height: '400px',
          position: 'absolute',
          backgroundImage: dataUri,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom center',
          backgroundSize: 'cover'
        }}
      >
        <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '4em'
        }}
        >
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/BrandonKlotz/type-to-tone">
            <div>
              <i className="fa fa-github"
                  style={{
                    fontSize: '3em',
                    color: '#f70b38'
                  }}
              ></i>
            </div>
          </a>
          {/* <a target="_blank" href="https://www.brandonklotz.co/">
            <div style={{
                  fontWeight: 'bold',
                  fontSize: '1em',
                  color: '#f70b38'
            }}>
              Handmade by Brandon Klotz
            </div>
          </a> */}
        </div>
      </footer>
    );
  }
}

export default Footer;