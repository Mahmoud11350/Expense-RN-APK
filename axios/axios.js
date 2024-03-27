import axios from "axios";

const http = axios.create({
  baseURL: "https://expenses-tracker-rn-bad0e-default-rtdb.firebaseio.com",
});

export default http;
