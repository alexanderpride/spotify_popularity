import React from "react";
import RandomString from "randomstring";

import "../index.css";
import "../styles/home.css";
import spotify_logo from "../images/spotify_logo.png"

class Home extends React.Component{

    constructor(props) {
        super(props);
    }

    connectToSpotify(){

        const _state = RandomString.generate(16);
        document.cookie = "SPOTIFY_CLIENT_STATE=" + _state;

        const url = process.env.REACT_APP_SPOTIFY_AUTH_URL;
        const client_id = "?client_id=" + process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        const response_type = "&response_type=token";
        const redirect_uri = "&redirect_uri=" + process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
        const state = "&state=" + _state;
        const scope = "&scope=" + process.env.REACT_APP_SPOTIFY_SCOPE;

        const redirect_url = url + client_id + response_type + redirect_uri + state + scope;

        window.location.href = redirect_url;
    }

    render() {

        return (
            <section>
                <h1>Spotify Popularity</h1>
                <h3>Are you down with the main-stream or a music hipster?</h3>
                <h3>See the spotify popularity ratings of your favourite <span>albums</span>, <span>artists</span>, <span>songs</span> and <span>playlists</span></h3>
                <button onClick={this.connectToSpotify}>Connect to Spotify<img src={spotify_logo} alt={"Spotify "}/></button>
                {this.props.location.state && this.props.location.state.error_message && <p>{this.props.location.state.error_message}</p>}
                <div id={'red'}/>
                <div id={'blue'}/>
                <div id={'green'}/>
            </section>
        )
    }
}

export default Home