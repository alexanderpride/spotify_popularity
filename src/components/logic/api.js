import axios from "axios";

export async function getAllContent(url, access_token, config){
    // Spotify uses cursors to send out fragments of data at a time
    // Recurses until there is no longer a cursor to get (variable name cursor)
    // Adds the data from response data from the call to the list that is passed each time and on the final call it adds it all to state

    async function getAllContentCore(url, access_token, config, current) {

        return axios.get(url, {

            headers: {
                'Authorization': access_token
            }

        }).then((response) => {

            const items = config.getItems(response);
            const next = config.getNext(response);

            if (next){

                return getAllContentCore(next, access_token, config, [...current, ...items])

            } else{

                return [...current, ...items]


            }

        }).catch((error) => {

            return error.response ? error.response.data + " " + error.response.status + " " + error.response.headers : error.message

        });

    }

    let current = await getAllContentCore(url, access_token, config, []);
    return current

}



