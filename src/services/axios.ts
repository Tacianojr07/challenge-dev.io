import axios from "axios";

// Envia uma requisição post
export const api = axios.create({
  baseURL: "http://localhost:3000",
});
