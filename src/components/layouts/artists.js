import React from "react";
import {getAllContent} from "../logic/api";

class Artists extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            config: {
                uri: "/me/following?type=artist",
                getItems: (response) => response.data.artists.items,
                getNext: (response) => response.data.artists.next,
            },
            data: []
        }
    }

    componentDidMount() {

        const goto = process.env.REACT_APP_SPOTIFY_API_URL + this.state.config.uri;

        getAllContent(goto, this.props.access_token, this.state.config).then((data) => {
            console.log(data);
            this.setState({data: data});
        });


    }


    render() {

        let formatted_artists = <li>loading</li>

        if(this.state.data.length > 0) {

            const artists = this.state.data;

            formatted_artists = artists.map((artist) => {
                return <li key={artist.id}><img src={artist.images[2].url} alt={artist.name}/> {artist.popularity}: {artist.name}</li>
            })
        }

        return formatted_artists

    }

}

export default Artists