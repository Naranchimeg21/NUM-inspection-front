import axios from "axios";

const userAxios = axios.create({
  baseURL: "http://192.168.137.143:8080/api/v1/",
});

export default userAxios;
