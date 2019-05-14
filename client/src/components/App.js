import React, { Component } from "react";
import Nav from "./nav/nav.js";
import TextAnalyzer from "./TextAnalyzer.js";

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <TextAnalyzer />
            </div>
        );
    }
}

export default App;
