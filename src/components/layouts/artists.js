import React from "react";

import Artist from "./artist"
import ArtistsHero from "./artistsHero"
import Loading from "./loading"

class Artists extends React.Component {

    constructor(props) {
        super(props);

        let rendered = [];

        if (this.props.data.length > 0){

            rendered = this.props.data;//.slice(0, 32);

        } else {

            this.props.getData();

        }

        this.state = {
            rendered: rendered
        }
    }


    render() {

        if (this.state.rendered.length > 0) {

            const _artists = this.state.rendered.map(artist => <Artist key={artist.id} artist={artist}/>)

            return (
                <div className={"container"}>
                    <ArtistsHero artists={this.props.data}/>
                    <div className={"items-list"}> {_artists} </div>
                </div>
            )

        } else {
            return <Loading/>
        }

    }

}

export default Artists