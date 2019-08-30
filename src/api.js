import axios from 'axios'
require('dotenv');


let TWITCHAPI = process.env.REACT_APP_TWITCH_KEY;
let api = axios.create({
    headers: {
        //get api from dev.Twitch.tv
        "Client-ID": TWITCHAPI
    }
});

export default api;