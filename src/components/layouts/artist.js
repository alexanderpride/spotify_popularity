import React from "react";

function Artist(props) {

    return(<div><img src={props.artist.images[2].url} alt={props.artist.name}/> {props.artist.popularity}: {props.artist.name}</div>)

}

export default Artist;