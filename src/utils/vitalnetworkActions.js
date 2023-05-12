import axios from "axios";

const vitalAxios = axios.create({
  baseURL: "http://localhost:3001/vital",
});

export default vitalAxios;
