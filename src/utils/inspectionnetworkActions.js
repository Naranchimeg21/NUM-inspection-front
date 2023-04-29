import axios from "axios";

const inspectionAxios = axios.create({
  baseURL: "http://localhost:3003/inspection",
});

export default inspectionAxios;
