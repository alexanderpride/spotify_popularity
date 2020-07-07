import React from "react";
import {Switch, Route, NavLink, useRouteMatch} from "react-router-dom";
import Styled from "styled-components";

import Artists from "./layouts/artistsComponents/artists";
import Albums from "./layouts/albums";
import Playlists from "./layouts/playlists";
import Songs from "./layouts/songs";

import home_png from "../images/home.png";
import artist_png from   "../images/artists.png";
import playlist_png from "../images/playlists.png";
import song_png from "../images/songs2.png";
import album_png from "../images/albums.png";


const StyledNavLink = Styled(NavLink)`
    &:hover {
        background: ${props => props.colour};
        box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
    }
`;



function Sections(props) {
    // Sections is extracted from app partly for neatness and partly because useRouteMatch() is a hook which can only be
    // called in functions

    let {path, url} = useRouteMatch();


    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <StyledNavLink exact colour={"#FFD131"} to={`${url}`} className={"nav"} activeStyle={{backgroundColor: "var(--home)", boxShadow: "inset 0px 0px 5px 5px rgba(0, 0, 0, 0.2)"}}>
                            <img src={home_png} alt={"Home"}/>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink colour={"#6D5F93"} to={`${url}/songs`} className={"nav"} activeStyle={{backgroundColor: "var(--songs)", boxShadow: "inset 0px 0px 5px 5px rgba(0, 0, 0, 0.2)"}}>
                            <img src={song_png} alt={"Songs"}/>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink colour={"#b6c649ff"} to={`${url}/albums`} className={"nav"} activeStyle={{backgroundColor: "var(--albums)", boxShadow: "inset 0px 0px 5px 5px rgba(0, 0, 0, 0.2)"}}>
                            <img src={album_png} alt={"Albums"}/>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink colour={"#d16666ff"} to={`${url}/artists`} className={"nav"} activeStyle={{backgroundColor: "var(--artists)", boxShadow: "inset 0px 0px 5px 5px rgba(0, 0, 0, 0.2)"}}>
                            <img src={artist_png} alt={"Artists"}/>
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink colour={"#58a4b0"} to={`${url}/playlists`} className={"nav"} activeStyle={{backgroundColor: "var(--playlists)", boxShadow: "inset 0px 0px 5px 5px rgba(0, 0, 0, 0.2)"}}>
                            <img src={playlist_png} alt={"Playlists"}/>
                        </StyledNavLink>
                    </li>


                </ul>
            </nav>

            <Switch>
                <Route path={`${path}/albums`} render={() => <Albums/>}/>
                <Route path={`${path}/playlists`} render={() => <Playlists/>}/>
                <Route key={props.config.artists.data} path={`${path}/artists`} render={() => <Artists data={props.config.artists.data} getData={props.config.artists.getData} sort={props.config.artists.sort}/>}/>
                <Route path={`${path}/songs`} render={() => <Songs/>}/>
                <Route path={`${path}/`} render={() => <div>
                    <h1>h1 Test</h1>
                    <h2>h2 Test</h2>
                    <h3>h3 Test</h3>
                    <h4>h4 Test</h4>
                    <h5>h5 Test</h5>
                </div>}/>
            </Switch>
        </main>
    )

}

export default Sections;