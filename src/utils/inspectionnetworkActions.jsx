import axios from "axios";

const inspectionAxios = axios.create({
  baseURL: "http://localhost:4001/inspection",
});

export default inspectionAxios;
