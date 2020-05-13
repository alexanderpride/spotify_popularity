import React from "react";
import {Redirect, Switch} from 'react-router-dom';

class Auth extends React.Component{

    constructor() {

        super();

        const urlFragments = new URLSearchParams(window.location.hash);
        const errorQuery = new URLSearchParams(window.location.search);

        const access_token = urlFragments.get("#access_token");
        const token_type = urlFragments.get("token_type");
        const expires_in = urlFragments.get("expires_in");
        const server_state = urlFragments.get("state");

        const error_message = errorQuery.get("error");

        let _state = {}

        //https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
        let client_state = document.cookie.replace(/(?:(?:^|.*;\s*)SPOTIFY_CLIENT_STATE\s*=\s*([^;]*).*$)|^.*$/, "$1")

        if (client_state === server_state && access_token){

            _state = {
                access_token: access_token,
                token_type: token_type,
                expires_in: expires_in
            }

        } else {

            _state = {
                access_token: false,
                error_message: error_message + ": The user chose not to grant access"
            }

        }

        this.state = _state
    }

    render() {

        const action = this.state.access_token ? <Redirect to={{pathname: "/app", state: this.state}}/> : <Redirect to={{path: "/", state: this.state}}/>

        return (
            <Switch>
                {action}
            </Switch>
        )
    }

}

export default Auth