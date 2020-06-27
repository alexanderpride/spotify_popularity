import React from "react";

function LoadMoreButton(props) {

    return <div className={"load-more-container"}><button className={"circular-button"} onClick={props.loadMore}>+</button></div>

}

export default LoadMoreButton;