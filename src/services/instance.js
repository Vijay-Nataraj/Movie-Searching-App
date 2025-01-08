import axios from "axios";

const baseURL = `https://www.omdbapi.com`;

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "Application/json",
  },
  timeout: 3000,
});

instance.defaults.params = {
  apikey: "bb935ba3",
};

export default instance;
