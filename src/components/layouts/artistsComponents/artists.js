import React from "react";

import Artist from "./artist";
import ArtistsHero from "./artistsHero";
import SortButton from "../sortButton";
import LoadMoreButton from "../loadButton";
import Loading from "../loading"
import Footer from "../footer";

class Artists extends React.Component {

    constructor(props) {
        super(props);

        let step = 27;
        let sortedHL = true

        if (this.props.data.length === 0) {

            this.props.getData();

        }

        this.state = {

            step: step,
            sortedHL: sortedHL

        }

        this.loadMore = this.loadMore.bind(this);
        this.sortData = this.sortData.bind(this);

    }

    sortData(){

        this.setState({

            sortedHL: !this.state.sortedHL

        });

    }

    loadMore(){

        this.setState({

            step: this.state.step + 27

        });

    }

    render() {

        if (this.props.data.length > 0) {

            // Sort depending on high to low variable
            let artists = this.state.sortedHL ? this.props.data.sort((a, b) => {return (a.popularity < b.popularity) ? 1 : -1}) : this.props.data.sort((a, b) => {return (a.popularity >= b.popularity) ? 1 : -1});

            // Trim to number of step
            artists = artists.slice(0, this.state.step);

            // Make an artist card for each artist
            artists = artists.map((artist) => <Artist key={artist.id} artist={artist}/>)

            const loadMoreButton = (this.props.data.length >= this.state.step) && <LoadMoreButton loadMore={this.loadMore}/>;

            return <div className={"container"}>

                    <ArtistsHero artists={this.props.data}/>

                    <SortButton sort={this.sortData}/>

                    <div className={"items-list"}> {artists} {loadMoreButton} </div>

                    <Footer/>

                </div>

        } else {

            return <Loading/>

        }

    }

}

export default Artists