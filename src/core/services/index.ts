import axios from "axios";
import { fetchUrl, sendUrl } from "../configs/endpoints";

export const fetchApi = axios.create({
  baseURL: fetchUrl,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export const sendApi = axios.create({
  baseURL: sendUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
