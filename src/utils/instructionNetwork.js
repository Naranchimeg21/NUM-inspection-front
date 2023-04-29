import axios from "axios";

const instructionAxios = axios.create({
  baseURL: "http://localhost:3004/instruction",
});

export default instructionAxios;
