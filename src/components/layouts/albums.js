import React from "react";
import {getAllContent} from "../logic/api";

class Albums extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            config: {
                uri: "/me/albums",
                getItems: (response) => response.data.items,
                getNext: (response) => response.data.next
            },
            data: []
        }

        this.sort = this.sort.bind(this);

    }

    componentDidMount() {

        const goto = process.env.REACT_APP_SPOTIFY_API_URL + this.state.config.uri;



        getAllContent(goto, this.props.access_token, this.state.config).then((data) => {

            this.setState({data: data});

        }).catch((error) => {
            console.log(error);
        });

    }

    sort(){

        this.setState({data: this.state.data.sort((a, b) => (a.album.popularity > b.album.popularity) ? -1 : 1)})

    }


    render() {


        let formatted_albums = <li>loading</li>;

        if (this.state.data.length > 0) {


            const albums = this.state.data;

            console.log(albums)


             formatted_albums = albums.map((album) => {

                const _album = album.album;

                return <li key={_album.id}><img
                    src={_album.images[2].url} alt={_album.name}/> {_album.popularity}: {_album.name}, {_album.artists[0].name}</li>
            });

        }

        return (
            <div>
                <button onClick={this.sort}>Sort</button>
                {formatted_albums}
            </div>
            )

    }

}

export default Albums;
