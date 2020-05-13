import React from "react";
import {Switch, Redirect, useRouteMatch, Route, NavLink} from "react-router-dom";

import "../styles/nav.css";

import Sections from "./sections";
import {getAllContent} from "./logic/api";



class App extends React.Component{

    constructor(props) {
        super(props);

        let _state = {
            access_token: '',
            artist_data: [],
            album_data: [],
            playlist_data: []
        };

        if (this.props.location.state){

            _state.access_token = this.props.location.state.token_type + " " + this.props.location.state.access_token;

        }

        this.getArtistData = this.getArtistData.bind(this);

        this.state = _state;

    }

    getArtistData(){

        console.log("Get artist content called")

        const config = {
            uri: "/me/following?type=artist",
            getItems: (response) => response.data.artists.items,
            getNext: (response) => response.data.artists.next,
        }

        const goto = process.env.REACT_APP_SPOTIFY_API_URL + config.uri;

        getAllContent(goto, this.state.access_token, config, [], (data) => {

            console.log("Callback called")
            this.setState({artist_data: data})

        })

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

            const sections_config = {
                artists: {
                    data: this.state.artist_data,
                    getData: this.getArtistData
                }
            }

            return <Sections config={sections_config}/>

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