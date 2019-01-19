import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import {Home} from "./views/home/Home";
import {AddStore} from "./views/addStore/AddStore";
import {SearchStore} from "./views/searchStore/SearchStore";
import {Navigation} from "./components/Navigation";
import {Header} from "./components/Header";
import {AddStoreOffer} from "./views/addStoreOffer/AddStoreOffer";

export class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <div id="navigation">
                        <Navigation/>
                    </div>

                    <div id="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/add-store" component={AddStore}/>
                        <Route path="/add-store-offer" component={AddStoreOffer}/>
                        <Route path="/search-store" component={SearchStore}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
