import axios from "axios";

export const api = axios.create({
  baseURL: 'localhost:7275/api',
});