import axios from 'axios';

/* 
    USE THIS TO GET THE GAMES TO SHOW UP ON THE PAGE!
    RENAME TO api.js and everything will work
*/

let TWITCHAPI = process.env.REACT_APP_TWITCH_API; //TwitchAPIKEY;
let TWITCHAUTH = "Bearer " + process.env.REACT_APP_AUTH_KEY;
let api = axios.create({
    headers: {
        //get api from dev.Twitch.tv
        "Authorization": TWITCHAUTH,
        "Client-ID": TWITCHAPI
    }
});

export default api;