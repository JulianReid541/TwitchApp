import axios from 'axios'


let API_KEY = process.env.REACT_APP_TWITCHKEY
let api = axios.create({
    headers: {
        //get api from dev.Twitch.tv
        "Client-ID": API_KEY
    }
});

export default api;