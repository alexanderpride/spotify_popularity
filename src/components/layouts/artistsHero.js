import React from "react";

import statistics from "../logic/statistics";

function ArtistsHero(props){

        const stats = statistics(props.artists)

        console.log(stats.max.images);

        return(

        <div>

            <section style={{backgroundColor: "var(--artists)"}}>

                <div className={"medallion"}>

                    <img src={stats.max.images[1].url} alt={"Image of " + stats.min.name}/>
                    <h2>{stats.max.name}</h2>
                    <h1>{stats.max.popularity}</h1>

                </div>



                <div className={"medallion"}>

                    <img src={stats.min.images[1].url} alt={"Image of " + stats.min.name}/>
                    <h2>{stats.min.name}</h2>
                    <h1>{stats.min.popularity}</h1>

                </div>

            </section>

        </div>)


}

export default ArtistsHero;