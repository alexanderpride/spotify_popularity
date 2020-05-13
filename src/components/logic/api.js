import axios from "axios";

export function getAllContent(url, access_token, config, current, callback){
    // Spotify uses cursors to send out fragments of data at a time
    // Recurses until there is no longer a cursor to get (variable name cursor)
    // Adds the data from response data from the call to the list that is passed each time and on the final call it adds it all to state

    console.log("Get all content called")

    axios.get(url, {

        headers: {
            'Authorization': access_token
        }

    }).then((response) => {

        const items = config.getItems(response);
        const next = config.getNext(response);

        if (next){

            getAllContent(next, access_token, config, [...current, ...items], callback)

        } else{

            // TODO Add error handling for when the api fails

            callback([...current, ...items])


        }

    }).catch((error) => {

        callback(error.response ? error.response.data + " " + error.response.status + " " + error.response.headers : error.message)

    });


}



