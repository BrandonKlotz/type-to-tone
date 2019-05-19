import React, { Component } from "react";
import Nav from "./nav/nav.js";
import Footer from "./footer/footer.js";
import Analyzer from "./analyzer.js";


class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Analyzer />
                <Footer />
            </div>
        );
    }
}

export default App;
