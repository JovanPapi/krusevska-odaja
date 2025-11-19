import axios, { type AxiosResponse } from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:8080";
type MethodType = "GET" | "POST" | "DELETE" | "UPDATE";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const axiosApi = async <T>(url: string, method: MethodType = "GET", data: unknown = null): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance({
      baseURL: `${BASE_URL + url}`,
      method,
      data,
    });
    return response.data;
  } catch (error) {
    toast.error("An error occurred while processing your request.");
    throw error;
  }
};

export default axiosApi;
