import axios from "axios";

const KEY = "AIzaSyAvNp48HFEq0iq_5-YOVijj1q8qoEO_-Ac";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }

});