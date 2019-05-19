import React, { Component } from "react";

class Background extends Component {
    render() {
        return (
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 1000 230"
          >
            <defs>
              <linearGradient id="e2c3aafc-4927-4307-8f12-910bd7d908ad"
                              x1="500.23"
                              y1="364.4"
                              x2="500.23"
                              y2="-4.24"
                              gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.3" stopColor="#ffe4ea"/>
                <stop offset="0.83" stopColor="#ffcad4"/>
              </linearGradient>
            </defs>
            <g id="bf0815d6-a292-4f2e-be1b-d82cdd2d7ce4">
              <g id="f56fa84b-9354-46ec-b208-266c7137af8c">
                <path style={{
                        fill: 'url(#e2c3aafc-4927-4307-8f12-910bd7d908ad)'
                      }}
                      d="M.23, 228.87v-152s157, 102, 477-35c272-116.46, 523, 47, 523, 47v140Z"
                />
                <path style={{
                        fill: 'none',
                        stroke: '#f70b38',
                        strokeMiterlimit: '10',
                        strokeWidth: '2px',
                      }}
                      d="M.23, 110.49C92, 124.66, 229.47, 119.34, 416.15, 44.11c271-109.23, 512.3, 27.51, 584.08, 75.25"
                />
              </g>
            </g>
          </svg>
        );
    }
}

export default Background;