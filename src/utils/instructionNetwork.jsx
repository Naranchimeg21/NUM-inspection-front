import axios from "axios";

const instructionAxios = axios.create({
  baseURL: "http://localhost:4004/insruction",
});

export default instructionAxios;
