import React from "react";
import {Switch, Route, NavLink, useRouteMatch} from "react-router-dom";
import Styled from "styled-components";

import Artists from "./layouts/artists";
import Albums from "./layouts/albums";


const StyledNavLink = Styled(NavLink)`
    &:hover {
        background: ${props => props.colour}
    }
`;



function Sections(props) {
    // Sections is extracted from app partly for neatness and partly because useRouteMatch() is a hook which can only be
    // called in functions

    let {path, url} = useRouteMatch();

    console.log("Data at sections ")
    console.log(props.config.artists.data[0]);


    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <StyledNavLink exact colour={"#F3F3F3"} to={`${url}`} className={"nav"} activeStyle={{backgroundColor: "var(--background-colour)"}}>Home</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink colour={"#d16666ff"} to={`${url}/artists`} className={"nav"} activeStyle={{backgroundColor: "var(--detail-1)"}}>Artists</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink colour={"#b6c649ff"} to={`${url}/albums`} className={"nav"} activeStyle={{backgroundColor: "var(--detail-2)"}}>Albums</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink colour={"#58a4b0"} to={`${url}/playlists`} className={"nav"} activeStyle={{backgroundColor: "var(--detail-3)"}}>Playlists</StyledNavLink>
                    </li>

                </ul>
            </nav>

            <Switch>
                <Route key={props.config.artists.data} path={`${path}/artists`} render={() => <Artists data={props.config.artists.data} getData={props.config.artists.getData}/>}/>
                <Route path={`${path}/albums`} render={() => <Albums/>}/>
                <Route path={`${path}/playlists`} render={() => <p>playlists</p>}/>
                <Route path={`${path}/`} render={() => <p>home</p>}/>
            </Switch>
        </main>
    )


};

export default Sections;