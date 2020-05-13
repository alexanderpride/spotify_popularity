import React from "react";
import {Switch, Redirect} from "react-router-dom";

import "../styles/nav.css";

import Sections from "./sections";

class App extends React.Component{

    constructor(props) {
        super(props);

        let _state = {access_token: ''};

        if (this.props.location.state){

            _state = {
                access_token: this.props.location.state.token_type + " " + this.props.location.state.access_token
            };

        }

        this.state = _state;

    }


    componentDidMount() {

        if (this.props.location.state) {

            // Spotify gives the time remaining in seconds for some weird reason
            const time = 1000 * parseInt(this.props.location.state.expires_in);

            setTimeout(() => this.setState({access_token: "expired"}), time);
        }
    }

    render() {


        if (this.state.access_token === "expired"){

            // Checks if the timeout has expired so that the user doesn't send requests to the server with an expired token
            return <Switch><Redirect to={{
                path: "/",
                state: {error_message: "The token Spotify gave us has expired, reconnect to get another one"}
            }}/></Switch>

        } else if (this.state.access_token) {

            return <Sections access_token={this.state.access_token}/>

        } else if (!this.state.access_token) {

            // Checks if props have been passed so that the user hasn't follow the URI without authenticating
            // Could add a cookie which stores the token for the expires in time but that would be extra work
            // Redirects them if they have entered app incorrectly

            return <Switch><Redirect to={{
                path: "/",
                state: {error_message: "You tried to access the app directly, you need to authorise through Spotify first"}
            }}/></Switch>

        }

    }

};



export default App;

// Putting this here for when I eventually write the code to sort it by ascending and descending
// const _content = this.state.content.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
//
// this.setState({
//     content: _content
// })