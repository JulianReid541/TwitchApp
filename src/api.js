import axios from 'axios'


let apiKey = process.env.REACT_APP_TWITCH_API_KEY
let api = axios.create({
    headers: {
        //get api from dev.Twitch.tv
        "Client-ID": apiKey
    }
})

export default api;