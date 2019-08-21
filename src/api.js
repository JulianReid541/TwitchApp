import axios from 'axios'

let api = axios.create({
    headers: {
        //get api from dev.Twitch.tv
        'Client-ID': ""
    }
})

export default api;