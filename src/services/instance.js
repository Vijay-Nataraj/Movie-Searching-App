import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const baseURL = `https://www.omdbapi.com`;

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "Application/json",
  },
  timeout: 3000,
});

instance.defaults.params = {
  apikey: API_KEY,
};

export default instance;
