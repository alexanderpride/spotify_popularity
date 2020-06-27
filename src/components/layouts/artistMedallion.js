import React from "react";

function ArtistMedallion(props) {

    return <div className={"medallion"}>

        <img src={props.artist.images[1].url} alt={"Image of " + props.artist.name}/>

        <div>

            <h3>{props.artist.name}</h3>
            <h1>{props.artist.popularity}</h1>

        </div>

    </div>

}

export default ArtistMedallion;