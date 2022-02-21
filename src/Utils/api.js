import axios from "axios";
export default axios.create({
  baseURL: "https://cms-film.adnenfarhani.tech/wp-json/bf-api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
