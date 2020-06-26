import axios from "axios";

const KEY = "AIzaSyDB-rqGE14PCqP_KSasvON8T_4tSe8lOtY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`,
  },
});
