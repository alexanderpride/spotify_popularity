import React from "react";

import statistics from "../logic/statistics";
import ArtistMedallion from "./artistMedallion";

function ArtistsHero(props){

        const stats = statistics(props.artists)

        return(

        <div>

            <section className={"artist-hero"}>

                <ArtistMedallion artist={stats.max}/>

                <div className={"title_container"}>

                    <h1>Artists</h1>
                    <h4>Average</h4>

                    <h1>{Math.round(stats.average)}</h1>

                </div>

                <ArtistMedallion artist={stats.min}/>


            </section>

        </div>)


}

export default ArtistsHero;