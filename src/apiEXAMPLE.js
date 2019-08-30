import axios from 'axios';

/* 
    USE THIS TO GET THE GAMES TO SHOW UP ON THE PAGE!
    RENAME TO api.js and everything will work
*/

let TWITCHAPI = ""//TwitchAPIKEY;
let api = axios.create({
    headers: {
        //get api from dev.Twitch.tv
        "Client-ID": TWITCHAPI
    }
});

export default api;