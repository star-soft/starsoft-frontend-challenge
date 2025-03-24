import axios from "axios";

const httpService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptores para tratar erros ou adicionar headers
httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("HTTP Error: ", error);
    return Promise.reject(error);
  },
);

export default httpService;
