import axios from "axios";

const userAxios = axios.create({
  // baseURL: "http://10.1.203.3:8080/api/v1",
  baseURL: "http://localhost:3003/user",
});

export default userAxios;
