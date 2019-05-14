import React, { Component } from "react";
import './logo.css';

class Logo extends Component {
    render() {
        return (
            <svg width="40px" height="40px" viewBox="0 0 40 40">
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                        <stop stopColor="#FFE7EC" offset="0%"></stop>
                        <stop stopColor="#FFCAD4" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
                        <stop stopColor="#FC1A69" offset="0%"></stop>
                        <stop stopColor="#F70B38" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Mobile-Portrait" transform="translate(-22.000000, -19.000000)">
                        <g id="Group" transform="translate(22.000000, 19.000000)">
                            <circle id="Oval" fill="url(#linearGradient-1)" cx="17" cy="21" r="17"></circle>
                            <circle id="Oval-Copy" stroke="url(#linearGradient-2)" cx="20" cy="18" r="17"></circle>
                            <path d="M12.5,21.5 L12.5,15.5" id="Path" stroke="#F91252" strokeLinecap="round"></path>
                            <path d="M20.5,25.5 L20.5,11.5" id="Path-Copy" stroke="#F91252" strokeLinecap="round"></path>
                            <path d="M28.5,23.5 L28.5,13.5" id="Path-Copy-2" stroke="#F91252" strokeLinecap="round"></path>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
}

export default Logo;