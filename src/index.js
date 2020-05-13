import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';

// Components
import Home from "./components/home";
import Auth from "./components/auth";
import App from "./components/app";
import Error from "./components/error";

import './index.css'

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'Spotify Songs'
        };
    }

    render() {
        return (
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route path="/app" component={App}/>
                <Route path="/" component={Home} exact />
                <Route component={Error}/>
            </Switch>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Main/>
    </BrowserRouter>,
    document.getElementById('root')
);