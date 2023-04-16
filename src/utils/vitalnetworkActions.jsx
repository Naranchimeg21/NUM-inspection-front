import axios from "axios";

const vitalAxios = axios.create({
  baseURL: "http://localhost:4000/vital",
});

export default vitalAxios;
