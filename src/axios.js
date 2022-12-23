import axios from "axios";
import { baseUrl } from "./constand";

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
