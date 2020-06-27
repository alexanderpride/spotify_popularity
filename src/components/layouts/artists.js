import React from "react";

import Artist from "./artist";
import ArtistsHero from "./artistsHero";
import SortButton from "./sortButton";
import LoadMoreButton from "./loadButton";
import Loading from "./loading"
import Footer from "./footer";

class Artists extends React.Component {

    constructor(props) {
        super(props);

        let step = 27;
        let index = step;
        let rendered = [];

        if (this.props.data.length > 0){

            rendered = this.props.data.slice(0, index);

        } else {

            this.props.getData();

        }

        this.state = {

            index: index,
            step: step,
            rendered: rendered,

        }

        this.loadMore = this.loadMore.bind(this)

    }

    loadMore(){

        const _index = this.state.index + this.state.step + 1;
        const _rendered = [...this.state.rendered, ...this.props.data.slice(this.state.index, _index)];

        this.setState({

            index: _index,
            rendered: _rendered

        })

    }

    render() {

        if (this.state.rendered.length > 0) {

            const _artists = this.state.rendered.map(artist => <Artist key={artist.id} artist={artist}/>)
            const loadMoreButton = (this.state.rendered.length !== this.props.data.length) && <LoadMoreButton loadMore={this.loadMore}/>;

            return <div className={"container"}>

                    <ArtistsHero artists={this.props.data}/>

                    <SortButton sort={this.props.sort}/>

                    <div className={"items-list"}>

                        {_artists}
                        {loadMoreButton}

                    </div>
                    <Footer/>
                </div>


        } else {
            return <Loading/>
        }

    }

}

export default Artists