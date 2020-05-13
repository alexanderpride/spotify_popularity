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

    let {path, url} = useRouteMatch();

    const access_token = props.access_token;


    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <StyledNavLink exact colour={"#F3F3F3"} to={`${url}/`} className={"nav"} activeStyle={{backgroundColor: "var(--background-colour)"}}>Home</StyledNavLink>
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
                <Route path={`${path}/artists`} render={() => <Artists access_token={access_token}/>}/>
                <Route path={`${path}/albums`} render={() => <Albums access_token={access_token}/>}/>
                <Route path={`${path}/playlists`} render={() => <p>playlists</p>}/>
                <Route path={`${path}/`} render={() => <p>home</p>}/>
            </Switch>
        </main>
    )
};

export default Sections;