import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID cqu9_V_3XN5BiHUMx2TKzJnzFFJYrkp0O4ZXpLeAlLc",
  },
});
