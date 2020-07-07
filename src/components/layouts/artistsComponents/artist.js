import React from "react";

function Artist(props) {

    return(

        <div>
            <div className={"item"}>
                <img src={props.artist.images[2].url} alt={props.artist.name}/>
                <div className={"item-details"}>
                    <h4>{props.artist.name}</h4>
                    <h2>{props.artist.popularity}</h2>
                </div>
            </div>
        </div>
    )

}

export default Artist;