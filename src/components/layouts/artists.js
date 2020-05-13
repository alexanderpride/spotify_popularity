import React from "react";
import {getAllContent} from "../logic/api";

class Artists extends React.Component {

    constructor(props) {
        super(props);

        let rendered = [];
        console.log("Artists rendered with " + this.props.data)

        if (this.props.data.length > 0){

            rendered = this.props.data.slice(0, 20);

        } else {

            this.props.getData();

        }

        this.state = {
            rendered: rendered
        }
    }


    render() {

        let formatted_artists = <li>loading</li>

        if(this.state.rendered.length > 0) {

            const artists = this.state.rendered;

            formatted_artists = artists.map((artist) => {
                return <li key={artist.id}><img src={artist.images[2].url} alt={artist.name}/> {artist.popularity}: {artist.name}</li>
            })
        }

        return formatted_artists

    }

}

export default Artists