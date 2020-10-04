import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Works from "./pages/works";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Navigation from "./components/Navigation";
import NotFound from "./pages/404";

import "./styles/common.css";

function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/works" component={Works} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;